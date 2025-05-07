import React from 'react';
import '../styles/Categorias.scss';
import sapatilhas from '../assets/images/Shoes/Sapatilhas.png';
import escarpins from '../assets/images/Shoes/Escarpins.png';
import sandalias from '../assets/images/Shoes/Sandalias.png';
import botas from '../assets/images/Shoes/Botas.png';

function Categorias() {
  return (
    <div className="categorias">
      <h2 className="categorias-title">Categorias</h2>
      <div className="categorias-container">
        <button className="categoria-btn"><img src={botas} alt="Botas" /></button>
        <button className="categoria-btn"><img src={escarpins} alt="Escarpins" /></button>
        <button className="categoria-btn"><img src={sapatilhas} alt="sapatilhas" /></button>
        <button className="categoria-btn"><img src={sandalias} alt="Sandálias" /></button>
      </div>
    </div>
  );
}

export default Categorias;
