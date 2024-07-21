import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { publicationGet, publicationUpdate } from '../redux/actions/property';
import { Input } from '../components/Input';
import { UploadImageList } from '../components/CreatePublication/UpdateImageList';
import { useNavigate} from 'react-router-dom';

const UpdatePublication = () => {
  const navegar = useNavigate()  
  const dispatch = useDispatch()
  const { id } = useParams()
  const { user } = useSelector((state) => state.auth)
  const { list } = useSelector((state) => state.listing)
  const [formData, setFormData] = useState({
    imageUrls: [],
    name: '',
    address:'',
    description:'',
    propertyType:'',
    type:'',
    bedrooms:0,
    bathrooms:0,
    regularPrice:0,
    discountPrice:0,
    offer: false,
    parking: false,
    furnished: false,
    userRef: ''
  })

  useEffect(() => {
    dispatch(publicationGet(id))
  },[dispatch, id])
  
  useEffect(() => {
    if(list){
      setFormData({
        ...formData,
        name: list.name || '',
        address: list.address || '',
        description: list.description || '',
        propertyType: list.propertyType || '',
        type: list.type || '',
        bedrooms: list.bedrooms || 0,
        bathrooms: list.bathrooms || 0,
        regularPrice:list.regularPrice || 0,
        discountPrice:list.discountPrice || 0,
        offer: list.offer || false,
        parking: list.parking || false,
        furnished: list.furnished ||  false,
        imageUrls: list.imageUrls || [],
        userRef: user?._id || ''
      })
    }
  },[list, user?._id ])
  
  const handleImageChange = (updatedImageUrls) =>{
    setFormData({...formData, imageUrls: updatedImageUrls})
  }

  const handleChange = (e) =>{
    if(
      e.target.name === 'sale' ||
      e.target.name === 'rent'
    )
    setFormData({
      ...formData,
      type: e.target.name
    })
    
    if(
      e.target.name === 'house' ||
      e.target.name === 'apartment'
    )
    setFormData({
      ...formData,
      propertyType: e.target.name
    })
    
    if(
      e.target.name === 'parking' ||
      e.target.name === 'furnished' ||
      e.target.name === 'offer'
    ){
      setFormData({
        ...formData,
        [e.target.name]: e.target.checked
      })
    }

    if(
      e.target.type === 'text' ||
      e.target.type === 'number' ||
      e.target.type === 'textarea'
    ){
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      dispatch(publicationUpdate(formData, id))
      navegar(`/publicacion/${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <main className='mt-[8rem] w-[85vw] mx-auto flex flex-col'>
      <h1 className='text-center font-nunito text-3xl'>Editar Publicacion</h1>
      <form className='mt-6 w-[27rem] flex gap-3' onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <Input placeholder='Nombre de la propiedad' name='name' value={formData.name} onChange={handleChange}/>
          <Input placeholder='Direccion de la propiedad' name='address' value={formData.address} onChange={handleChange}/>
          <textarea placeholder='Descripcion de la propiedad'name='description' value={formData.description} onChange={handleChange} className='outline-none p-3 text-color-azul bg-transparent placeholder:text-color-azul font-nunito text-lg border border-color-azul rounded-md w-[27rem] resize-none'/>
          <Input type='number' placeholder='Baños' name='bathrooms' value={formData.bathrooms} onChange={handleChange}/>
          <Input type='number' placeholder='Habitaciones' name='bedrooms' value={formData.bedrooms} onChange={handleChange}/>
          <Input type='number' placeholder='Precio Regular' name='regularPrice' value={formData.regularPrice} onChange={handleChange}/>
          {formData.offer && 
          <Input type='number' placeholder='Precio de Oferta' name='discountPrice' value={formData.discountPrice} onChange={handleChange}/>}
          <div className=" flex items-center flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <label className='font-nunito text-color-azul text-xl'>Amueblado</label>
              <Input type='checkbox' name='furnished' onChange={handleChange} checked={formData.furnished}/>
            </div>
            <div className="flex items-center gap-2">
              <label className='font-nunito text-color-azul text-xl'>Estacionamiento</label>
              <Input type='checkbox' name='parking' onChange={handleChange} checked={formData.parking}/>
            </div>
            <div className="flex items-center gap-2">
              <label className='font-nunito text-color-azul text-xl'>Oferta</label>
              <Input type='checkbox' name='offer' onChange={handleChange} checked={formData.offer}/>
            </div>
            <div className="flex items-center gap-2">
              <label className='font-nunito text-color-azul text-xl'>Vender</label>
              <Input type='checkbox' name='sale' onChange={handleChange} checked={formData.type === 'sale'}/>
            </div>
            <div className="flex items-center gap-2">
              <label className='font-nunito text-color-azul text-xl'>Alquilar</label>
              <Input type='checkbox' name='rent' onChange={handleChange} checked={formData.type === 'rent'}/>
            </div>
            <div className="flex items-center gap-2">
              <label className='font-nunito text-color-azul text-xl'>Casa</label>
              <Input type='checkbox' name='house' onChange={handleChange} checked={formData.propertyType === 'house'}/>
            </div>
            <div className="flex items-center gap-2">
              <label className='font-nunito text-color-azul text-xl'>Departamento</label>
              <Input type='checkbox' name='apartment' onChange={handleChange} checked={formData.propertyType === 'apartment'}/>
            </div>
          </div>
          <button type='submit' className='bg-green-700 text-white font-nunito uppercase p-3 w-fit mx-auto rounded-md hover:opacity-90'>Actualizar la  Propiedad</button>
        </div>
        <div className="flex flex-col">
          <h2 className='font-nutito text-xl'>Subi las imagenes de tu propiedad</h2>
          <UploadImageList onImageChange={handleImageChange} imageUrl={formData.imageUrls}  />
        </div>
      </form>
    </main>
  )
}

export { UpdatePublication }