import {useEffect, useState} from 'react';
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

  const inputStyle = 'bg-slate-200 outline-none w-[45rem] py-6 px-14 rounded-full placeholder:text-color-negro'
  const buttonStyle = 'absolute top-2 right-2 transition-all duration-300 font-semibold bg-color-azul border border-color-azul text-white font-nunito py-4 px-12 rounded-full hover:bg-transparent hover:text-color-azul'
  const iconStyle = 'absolute top-7 left-6'
  return(
    <form className='relative' onSubmit={handleSubmit}>
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