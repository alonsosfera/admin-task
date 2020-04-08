import React from 'react';
import { HeaderContainer } from 'styles/components';
import { Link } from 'react-router-dom';

const Header = () => (
  <HeaderContainer>
    <h1><Link to="/">Jaxi Admin</Link></h1>
    <nav>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/tasks">Tareas</Link></li>
      <li><Link to="/projects">Proyectos</Link></li>
    </nav>
  </HeaderContainer>
);

export default Header;