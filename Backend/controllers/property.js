import Property from '../models/property.js'

export const createProperty = async(req, res, next) =>{
    const { formData } = req.body;
    try {
        const property = await Property.create(formData)
        return res.status(201).json(property)
    } catch (error) {
        next(error)
    }
}

export const deleteProperty = async (req, res, next) =>{
    const { id } = req.params
    try {
        await Property.findByIdAndDelete(id)
        res.status(200).json({ message: 'Se elimino correctamente'})
    } catch (error) {
        next(error)
    }
}

export const getProperty  = async (req, res, next) =>{
    const { id } = req.params;
    try {
        const property = await Property.findById(id)
        res.status(200).json(property)
    } catch (error) {
        next(error)
    }
}
export const getAllProperties  = async (req, res, next) =>{
    try {
        const properties = await Property.find({})
        res.status(200).json(properties)
    } catch (error) {
        next(error)
    }
}

export const updateProperty = async (req, res, next) =>{
    const { id } = req.params;
    const { formData } = req.body;
    try {
        const updateProperty = await Property.findByIdAndUpdate(id, formData, { new:true})
        res.status(200).json(updateProperty)
    } catch (error) {
        next(error)
    }
}

export const searchProperties = async (req, res, next) => {
    try {
        let offer = req.query.offer;
        if (offer === undefined || offer === 'false') {
            offer = { $in: [false, true] };
        } else {
            offer = true;
        }

        let furnished = req.query.furnished;
        if (furnished === undefined || furnished === 'false') {
            furnished = { $in: [false, true] };
        } else {
            furnished = true;
        }

        let parking = req.query.parking;
        if (parking === undefined || parking === 'false') {
            parking = { $in: [false, true] };
        } else {
            parking = true;
        }

        let type = req.query.type;
        if (type === undefined || type === 'all') {
            type = { $in: ['sale', 'rent'] };
        }

        const search = req.query.search || '';

        const sort = req.query.sort || 'createdAt';

        const order = req.query.order || 'desc';

        const property = await Property.find({
            name: { $regex: search, $options: 'i' },
            offer,
            furnished,
            parking,
            type
        }).sort(
            { [sort]: order }
        );
        return res.status(200).json(property);
    } catch (error) {
        next(error);
    }
};

export const likeProperty = async(req, res, next) =>{
    const { id } = req.params;
    try {
        const property = await Property.findById(id)
        if(!property){
            return res.status(404).json({message: 'No se encontro esa propiedad'})
        }
        const userIndex = property.likes.indexOf(req.user.id);
        if(userIndex === -1){
            property.likes.push(req.user.id)
        }else{
            property.likes.splice(userIndex, 1)
        }
        await property.save()
        res.status(200).json(property)
    } catch (error) {
        next(error)
    }
}

