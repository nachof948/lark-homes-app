import { getDownloadURL, getStorage, uploadBytesResumable, ref } from 'firebase/storage'
import { useState, useEffect } from 'react'
import { app } from '../firebase'
import { DELETE_IMAGE } from '../constants'
import { useDispatch } from 'react-redux'

const UploadImageList = ({onImageChange, imageUrl}) => {
  const dispatch = useDispatch()
  const [images, setImages] = useState([])
  const [imageUrls, setImageUrls] = useState(imageUrl || [])
  const [loading, setLoading] = useState(false)
  const [imageUploadError, setImageUploadError] = useState(false)

  useEffect(() => {
    setImageUrls(imageUrl || [])
  },[imageUrl])
  
  
  const handleSubmitImage = (e) =>{
    e.preventDefault();
    if(images.length > 0 && images.length < 7){
      setLoading(true);
      const promises = [];
      for(let i = 0; i < images.length; i++){
        promises.push(storeImage(images[i]))
      }
      Promise.all(promises)
      .then((urls) =>{
        setImageUrls([...imageUrls, ...urls]);
        onImageChange([...imageUrls, ...urls]);
        setImageUploadError(false);
        setLoading(false)
      })
      .catch(() =>{
        setImageUploadError('Fallo la carga de las imagenes')
      })
    } else{
        setImageUploadError('Solo puedes subir 6 imagenes')
    }
  }
  
  const storeImage = async (image) =>{
    return new Promise((resolve, reject) =>{
      const storage = getStorage(app);
      const imageName = new Date().getTime() + '_' + image.name;
      const storageRef = ref(storage, imageName);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        'state_change',
        (snapshot) =>{
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) =>{
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) =>{
            resolve(downloadURL)
          })
          .catch((error) =>{
            reject(error)
          });
        }
      );
    });
  };
  
  const handleRemoveImage = (imageUrl) =>{
    const updatedImageUrls = imageUrls.filter((url) => url !== imageUrl)
    setImageUrls(updatedImageUrls)
    dispatch({type: DELETE_IMAGE, payload: updatedImageUrls})
  }



  return(
    <div className='flex flex-col gap-3'>
    <div className='flex items-start gap-4'>
      <input 
        type="file" 
        className='p-3 border border-color-azul rounded-md h-fit'
        name='imageUrls'
        accept='image/*'
        multiple
        onChange={(e) => setImages(e.target.files)}
      />
      <button
        type='button'
        disabled={loading}
        onClick={handleSubmitImage}
        className='h-[3.5rem] w-[7rem] p-3 font-nunito text-white bg-color-azul border border-color-azul rounded-md uppercase transition-all duration-300 hover:bg-transparent hover:text-color-azul'
        >
        {loading ? 'Subiendo...' : 'Subir'}
      </button>
    </div>
    <p className='text-red-700'>{imageUploadError && imageUploadError}</p>
    <div className="flex flex-wrap gap-4">
    {imageUrls.length > 0 && 
      imageUrls.map((url, index) => (
        <div className="relative flex items-center rounded-lg" key={index}>
          <img src={url} alt="Imagen de la propiedad" className='w-[13rem] h-[10rem] object-cover rounded-lg' />
          <button
          type='button'
          onClick={() => handleRemoveImage(url)}
          className='p-3 absolute font-nunito text-red-700 text-2xl font-bold top-0 right-0 runded-lg uppercase hover:opacity-75'
          >
            X
          </button>
        </div>
      ))
    }
    </div>
    </div>
  )
}

export { UploadImageList }