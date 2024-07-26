import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import Logo from '../../assets/Logo-Header.png';

const NavBar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navegar = useNavigate()

  const Links = [
    { name: "Inicio", link: "/" },
    { name: "Sobre Nosotros", link: "/sobre-nosotros" },
    { name: "Servicios", link: "/servicios" },
  ];

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogOut = () => {
      dispatch(logout());
      navegar('/');
      setShowDropdown(false);
  }

  const navigateToCustomProfile = () => {
      navegar('/mi-perfil');
      setShowDropdown(false);
  }

  return (
    <header className="w-full fixed top-0 left-0 z-10 mb-6 bg-white">
      <div className="w-[85vw] mx-auto md:flex items-center justify-between py-4 bg-white">
        <Link to={'/'} className="font-bold text-xl lg:text-2xl cursor-pointer flex items-center font-nunito text-gray-800 gap-4">
          <img className="w-14 h-14 object-contain lg:w-16 lg:h-16" src={Logo} alt="NacFer Estate" />
          <p className="text-base md:text-xl">NacFer Estate</p>
        </Link>

        <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-8 cursor-pointer md:hidden">
          <CiMenuBurger name={open ? 'close' : 'menu'} />
        </div>

        <nav className={`md:flex md:items-center z-10 md:pb-0 pb-12 absolute lg:gap-3 md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-linear ${open ? 'top-20' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <div key={link.name} className="md:ml-8 text-base md:my-0 my-7 lg:text-xl font-nunito">
              <Link to={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</Link>
            </div>
          ))}
          {user?.username ? (
            <div className="relative">
              <img src={user.imageProfile} onClick={handleDropdown} className="w-[3rem] h-[3rem] object-cover rounded-full ml-3 cursor-pointer" alt="Perfil" />
              {showDropdown && (
                <div className="absolute left-0 md:right-0 md:-left-[8rem] mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
                  <button onClick={navigateToCustomProfile} className="block text-left w-full px-4 py-2 text-gray-800 hover:bg-color-azul hover:text-white">Ver mi perfil</button>
                  <button onClick={handleLogOut} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-color-azul hover:text-white">Cerrar sesión</button>
                </div>
              )}
            </div>
          ) : (
            <Link to={'/registrarse'} className="bg-color-azul text-white text-sm transition-all duration-300 font-nunito py-2 px-4 rounded-2xl border border-color-azul lg:px-6 lg:text-base md:ml-8 hover:bg-transparent hover:text-color-azul">
              Regístrate
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export { NavBar };
