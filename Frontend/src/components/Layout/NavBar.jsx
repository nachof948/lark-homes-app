import Logo from '../../assets/Logo-Header.png'
import { Link } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";
import { useState } from 'react';
import { useSelector } from 'react-redux';


const NavBar = () => {
  const { user } = useSelector((state) => state.auth)

  let Links =[
    {name:"Inicio",link:"/"},
    {name:"Sobre Nosotros",link:"/sobre-nosotros"},
    {name:"Servicios",link:"/servicios"}
  ];
  const [open,setOpen]=useState(false);

return (
  <header className={`w-full fixed top-0 left-0 z-10 mb-6 bg-white`}> 
    <div className='w-[85vw] mx-auto md:flex items-center justify-between py-4 bg-white'>
      <Link to={'/'} className='font-bold text-xl lg:text-2xl cursor-pointer flex items-center font-nunito
    text-gray-800 gap-4'>
        <img className='w-14 h-14 object-contain lg:w-16 lg:h-16' src={Logo} alt="Lark Homes" />
        <p className='text-base md:text-xl'>NacFer Estate</p>
      </Link>
    
      <div onClick={()=>setOpen(prevOpen => !prevOpen)} className='text-3xl absolute right-8 top-8 cursor-pointer md:hidden'>
        <CiMenuBurger name={open ? 'close':'menu'}></CiMenuBurger>
      </div>

    <nav className={`md:flex md:items-center z-10  md:pb-0 pb-12 absolute lg:gap-3 md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-linear ${open ? 'top-20 ':'top-[-490px]'}`}>
      {
        Links.map((link)=>(
          <div key={link.name} className="md:ml-8 text-base md:my-0 my-7 lg:text-xl font-nunito">
            <Link  to={link.link} className=' text-gray-800 hover:text-gray-400 duration-500 '>{link.name}</Link>
          </div>
        ))
      }
      {user?.username ? <Link to='/mi-perfil'><img src={user.imageProfile} className='w-[3rem] h-[3rem] object-cover rounded-full ml-3'/></Link>: 
            <Link to={'/registrarse'} className='bg-color-azul text-white text-sm transition-all duration-300 font-nunito py-2 px-4 rounded-2xl border border-color-azul lg:px-6 lg:text-base md:ml-8 hover:bg-transparent hover:text-color-azul '>
            Registrate
          </Link>
      }
    </nav>
    </div>
  </header>
)
}

export { NavBar }