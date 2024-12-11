import express from 'express';
import conexionDB from './db/conexion.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoute from './routes/auth.js';
import propertyRoute from './routes/property.js';
import userRoute from './routes/user.js';
import commentRoute from './routes/comment.js';
import 'dotenv/config';

const app = express();

const PUERTO = process.env.PUERTO;

app.use(cors());

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h1>Bienvenido</h1>');
});

/* RUTAS */
app.use('/auth', authRoute);
app.use('/properties', propertyRoute);
app.use('/user', userRoute);
app.use('/comment', commentRoute);

/* ERRORES */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Error interno del servidor';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

/* CONEXION A LA BASE DE DATOS */
const iniciar = async () => {
    try {
        await conexionDB(process.env.MONGO_URL);
        app.listen(PUERTO, () => {
            console.log(`Servidor corriendo en http://localhost:${PUERTO}/`);
        });
    } catch (error) {
        console.log(error);
    }
};
iniciar();
