import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { PrivateRoute } from './components/PrivateRoute'
import { Profile } from './pages/Profile'
import { CreatePublication } from './pages/CreatePublication'
import { Publication } from './pages/Publication'
import { UpdatePublication } from './pages/UpdatePublication'
import { UserProfile } from './pages/UserProfile'
import { Search } from './pages/Search'
import { About } from './pages/About'
import { Footer } from './components/Footer'
import { Services } from './pages/Services'
import { ContactUs } from './pages/ContactUs'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/sobre-nosotros' element={<About />}></Route>
            <Route path='/servicios' element={<Services />}></Route>
            <Route path='/contacto' element={<ContactUs />}></Route>
            <Route path='/registrarse' element={<SignUp />}></Route>
            <Route path='/iniciar-sesion' element={<SignIn />}></Route>
            <Route path='/publicacion/:id' element={<Publication />}></Route>
            <Route path='/perfil/:id' element={<UserProfile />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route element={<PrivateRoute />}>
              <Route path='/mi-perfil' element={<Profile />}></Route>
              <Route path='/crear-publicacion' element={<CreatePublication />}></Route>
              <Route path='/editar-publicacion/:id' element={<UpdatePublication />}></Route>
            </Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
