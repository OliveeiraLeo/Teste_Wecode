import React, { useState, useEffect } from 'react';
import '../styles/Header.scss';
import logo from '../assets/images/Svg/Logo.svg';
import lupaIcon from '../assets/images/Svg/Lupa.svg';
import perfilIcon from '../assets/images/Svg/Perfil.svg';
import cartIcon from '../assets/images/Svg/Cart.svg';

export default function Header({ cartCount, onCartClick }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'solid' : 'transparent'}`}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-icon" />
      </div>

      <nav className="nav">
        <ul className="nav-items">
          <li className="nav-item">
            <button className="nav-link" onClick={() => setDropdownOpen(o => !o)}>
              Produtos
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li className="sapatos-link">
                  <button className="dropdown-item">Sapatos</button>
                  <img src={require('../assets/images/Shoes/Sapatos.png')} alt="Sapatos" className="shoe-image" />
                </li>
                <li className="escarpins-link">
                  <button className="dropdown-item">Escarpins</button>
                  <img src={require('../assets/images/Shoes/Escarpins.png')} alt="Escarpins" className="escarpins-image" />
                </li>
                <li className="sandalias-link">
                  <button className="dropdown-item">Sandálias</button>
                  <img src={require('../assets/images/Shoes/Sandalias.png')} alt="Sandálias" className="sandalias-image" />
                </li>
                <li className="botas-link">
                  <button className="dropdown-item">Botas</button>
                  <img src={require('../assets/images/Shoes/Botas.png')} alt="Botas" className="botas-image" />
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item"><button className="nav-link">Lançamentos</button></li>
          <li className="nav-item"><button className="nav-link outlet">Outlet</button></li>
        </ul>
      </nav>

      <div className="header-right">
        <button className="header-btn lupa">
          <img src={lupaIcon} alt="Pesquisa" className="lupa-icon" />
        </button>
        <button className="header-btn perfil">
          <img src={perfilIcon} alt="Perfil" className="perfil-icon" />
        </button>
        <button className="header-btn carrinho" onClick={onCartClick} aria-label="Carrinho">
          <img src={cartIcon} alt="Carrinho" className="cart-icon" />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>
    </header>
  );
}
