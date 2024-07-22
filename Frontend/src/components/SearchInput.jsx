import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchGet } from '../redux/actions/property';


const SearchInput = ({ styleInput, styleButton, styleIcon }) => {
  const [search, setSearch] = useState('');
  const navegar = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('search', search);
    const searchQuery = urlParams.toString()
    dispatch(searchGet(searchQuery))
    navegar(`/search?${searchQuery}`)
  }
  
  useEffect(() =>{
    const urlParams = new URLSearchParams(location.search)
    const searchTerms = urlParams.get('search')
    if(searchTerms){
      setSearch(searchTerms)
    }
  },[location.search])

  const inputStyle = 'bg-slate-200 outline-none w-[75vw] py-3 px-10 rounded-full placeholder:text-color-negro placeholder:text-[0.9rem] xl:w-[40vw] md:px-14 md:py-6 md:placeholder:text-base sm:w-[70vw]'
  const buttonStyle = 'absolute top-1 -right-3 transition-all duration-300 font-semibold bg-color-azul border border-color-azul text-white font-nunito py-2 px-4 rounded-full hover:bg-transparent hover:text-color-azul md:px-12 md:py-4 md:top-2 sm:px-6 sm:right-4'
  const iconStyle = 'absolute top-4 left-4 md:top-7 md:top-6'
  return(
    <form className='relative w-[70vw] xl:w-[40vw]' onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='Buscar propiedad...' 
        className={styleInput || inputStyle} 
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        />
      <FaSearch className={styleIcon||iconStyle} />
      <button className={styleButton||buttonStyle} type='submit'>
        Buscar
      </button>
    </form>

  )
}

export { SearchInput }