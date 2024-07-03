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

export const searchProperties = async (req, res, next) =>{
    try {
/*         const limit = parseInt(req.query.limit) || 9
        const startIndex = parseInt(req.query.startIndex) || 0 */
        
        let offer = req.query.offer;
        if(offer === undefined || offer === 'false'){
            offer = { $in: [false, true]}
        }
        
        let furnished = req.query.furnished;
        if(furnished === undefined || furnished === 'false'){
            furnished = { $in: [false, true]}
        }
        
        let parking= req.query.furnished;
        if(parking=== undefined || parking=== 'false'){
            parking= { $in: [false, true]}
        }
        
        let type= req.query.furnished;
        if(type=== undefined || type === 'all'){
            type= { $in: ['sale', 'rent']}
        }
        
        const search = req.query.search || ''

        const sort = req.query.sort || 'createdAt'
        
        const order = req.query.order || 'desc'
        
        const property = await Property.find({
            name: {$regex: search, $options: 'i'},
            offer,
            furnished,
            parking,
            type
        }).sort(
            {[sort]: order}
        )/* .limit(limit).skip(startIndex) */
        return res.status(200).json(property)
    } catch (error) {
        next(error)
    }
}
