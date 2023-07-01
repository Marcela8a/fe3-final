import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppContext } from '../Components/utils/global.context';

const Navbar = () => {
  const { state, changeTheme } = useContext(AppContext);

  const handleThemeChange = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    changeTheme(newTheme);
  };

  return (
    <nav>
     <div className="wrapper">
     <Outlet />
      <p className="alumno">Marcela Ochoa</p>
        <div className="links">
          <Link to="/">Inicio</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/favoritos">Favoritos</Link>
          <button onClick={handleThemeChange}>Cambiar tema</button>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;