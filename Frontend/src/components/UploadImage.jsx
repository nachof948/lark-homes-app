import { useRef, useState, useEffect } from "react"
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { app } from '../firebase'

const UploadImage = ({onImageChange, imageProfile, className}) => {
  const fileRef = useRef()
  const [file, setFile] = useState(undefined)
  const [carga, setCarga] = useState(0)
  const [error, setError] = useState(false)
  const [image, setImage] = useState({})
  const uploadImage = () =>{
    fileRef.current.click()
  }
  
  useEffect(() => {
    if(file){
      handleFileUpload(file)
    }
  },[file])
  
  const handleFileUpload = (file) =>{
    const storage = getStorage(app);
    const fileName = new Date().getTime + '_' + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on('state_changed',
      (snapshot) =>{
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setCarga(Math.round(progress))
      },
      (error) =>{
        setError(true)
        console.log(error)
      },
      () =>{
        getDownloadURL(uploadTask.snapshot.ref).then((image) =>{
          setImage({imageProfile: image})
          onImageChange(image)
        }).catch((error) =>{
          console.log(error)
        });
      }
    );
  }

  return(
    <div className="flex flex-col items-center">
      <input 
        type="file" 
        hidden 
        ref={fileRef} 
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        />
      <img 
        src={imageProfile || image.imageProfile || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} 
        alt='Imagen de perfil'
        className={className || "rounded-full h-28 w-28 object-cover cursor-pointer self-center mt-2"} 
        onClick={uploadImage}
      />
      <p className="text-center">
        {error ? (
          <span className="text-red-700">Error al cargar la imagen</span>
        ):
        carga > 0 && carga < 100 ? (
          <span className="text-slate-700">{`Cargando ${carga}%`}</span>
        ):
        carga === 100  ? (
          <span className="text-green-700">Imagen Cargada</span>
        ): ('')
        }
      </p>
    </div>
  )
}

export { UploadImage }