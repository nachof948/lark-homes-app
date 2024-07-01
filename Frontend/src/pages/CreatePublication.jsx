import { Input } from '../components/Input'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { UploadImageList } from '../components/UpdateImageList'
import * as api from '../api/index'
import { useNavigate } from 'react-router-dom'

const CreatePublication = () => {
  const navegar = useNavigate()
  const { user } = useSelector((state) => state.auth)
  console.log(user._id)
  const [formData, setFormData] = useState({
    name:'',
    description:'',
    address:'',
    regularPrice:0,
    discountPrice:0,
    bathrooms:0,
    bedrooms:0,
    furnished: false,
    parking: false,
    offer: false,
    type: 'sale',
    imageUrls:[],
    userRef: user?._id
  })

  const handleImageChange = (imagesUrls) =>{
    setFormData({...formData, imageUrls: imagesUrls})
  }
  
  const handleChange = (e) =>{
    if(
      e.target.name === 'sale' || 
      e.target.name === 'rent'
    ){
      setFormData({
        ...formData,
        type: e.target.name
      })
    }
    if(
      e.target.name === 'furnished' ||
      e.target.name === 'parking' ||
      e.target.name === 'offer'
    ){
      setFormData({
        ...formData,
        [e.target.name]: e.target.checked,
      })
    }
    
    if(e.target.type === 'number' || e.target.type === 'text' || e.target.type === 'textarea')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const { data } = await api.createPublication({...formData, userRef: user?._id})
      console.log(data)
      navegar(`/publicacion/${data._id}`)
    } catch (error) {
      console.log(error)
    }
    
  }
  
  return(
    <section className='mt-[8rem] w-[85vw] mx-auto flex flex-col'>
      <h1 className='text-center font-nunito text-3xl'>Publicar una propiedad</h1>
      <form className='mt-6 w-[27rem] flex gap-3' onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <Input placeholder='Nombre de la propiedad' name='name' onChange={handleChange}/>
          <Input placeholder='Direccion de la propiedad' name='address' onChange={handleChange}/>
          <textarea placeholder='Descripcion de la propiedad'name='description' onChange={handleChange} className='outline-none p-3 text-color-azul bg-transparent placeholder:text-color-azul font-nunito text-lg border border-color-azul rounded-md w-[27rem] resize-none'/>
          <Input type='number' placeholder='Baños' name='bathrooms' onChange={handleChange}/>
          <Input type='number' placeholder='Habitaciones' name='bedrooms' onChange={handleChange}/>
          <Input type='number' placeholder='Precio Regular' name='regularPrice' onChange={handleChange}/>
          {formData.offer && 
          <Input type='number' placeholder='Precio de Oferta' name='discountPrice' onChange={handleChange}/>}
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
          </div>
          <button type='submit' className='bg-green-700 text-white font-nunito uppercase p-3 w-fit mx-auto rounded-md hover:opacity-90'>Publicar Propiedad</button>
        </div>
        <div className="flex flex-col">
          <h2 className='font-nutito text-xl'>Subi las imagenes de tu propiedad</h2>
          <UploadImageList onImageChange={handleImageChange} imageUrl={formData.imageUrls} />
        </div>
      </form>
    </section>
  )
}

export { CreatePublication }