import Logo from '../assets/Logo-Header.png'
import { Link } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";
import { useState } from 'react';
import { useSelector } from 'react-redux';


const NavBar = () => {
  const { user } = useSelector((state) => state.auth)

  let Links =[
    {name:"Inicio",link:"/"},
    {name:"Sobre Nosotros",link:"/"},
    {name:"Servicios",link:"/"},
    {name:"Contacto",link:"/"},
  ];
  const [open,setOpen]=useState(false);

return (
  <header className=' w-full fixed top-0 left-0 z-10 mb-6  bg-white'>
    <div className='w-[85vw] mx-auto md:flex items-center justify-between py-4 '>
      <Link to={'/'} className='font-bold text-2xl cursor-pointer flex items-center font-nunito
    text-gray-800 gap-4'>
        <img className='w-16' src={Logo} alt="Lark Homes" />
        <p>Lark Homes</p>
      </Link>
    
      <div onClick={()=>setOpen(prevOpen => !prevOpen)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <CiMenuBurger name={open ? 'close':'menu'}></CiMenuBurger>
      </div>

    <nav className={`md:flex md:items-center gap-3 md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-linear ${open ? 'top-20 ':'top-[-490px]'}`}>
      {
        Links.map((link)=>(
          <div key={link.name} className="md:ml-8 text-xl md:my-0 my-7 font-nunito">
            <Link  to={link.link} className=' text-gray-800 hover:text-gray-400 duration-500 '>{link.name}</Link>
          </div>
        ))
      }
      {user?.username ? <Link to='/mi-perfil'><img src={user.imageProfile} className='w-[3rem] h-[3rem] object-cover rounded-full ml-3'/></Link>: 
            <Link to={'/registrarse'} className='bg-color-azul text-white transition-all duration-300 font-nunito py-2 px-6 rounded-2xl border border-color-azul md:ml-8 hover:bg-transparent hover:text-color-azul '>
            Registrate
          </Link>
      }
    </nav>
    </div>
  </header>
)
}

export { NavBar }