import React from 'react';
import '../styles/Footer.scss';
import Logo from '../assets/images/Svg/Logo.svg';
import { FaInstagram, FaFacebookF, FaPinterestP, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="Logo Calçados Bebecê" />
        </div>

        <nav className="footer-social">
        <ul className="footer-social">
             <li><a href="https://www.instagram.com/bebece" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
             <li><a href="https://www.facebook.com/CalcadosBebece" target="_blank" rel="noreferrer"><FaFacebookF /></a></li>
             <li><a href="https://br.pinterest.com/bebececalcados/" target="_blank" rel="noreferrer"><FaPinterestP /></a></li>
            <li><a href="https://www.youtube.com/user/CalcadosBebece" target="_blank" rel="noreferrer"><FaYoutube /></a></li>
            <li><a href="https://www.tiktok.com/@bebece.br" target="_blank" rel="noreferrer"><FaTiktok /></a></li>
        </ul>
        </nav>

                <nav className="footer-about">
        <ul>
            <li><span className="footer-title">Sobre a Empresa</span></li>
            <li><a href="https://www.bebece.com.br/institucional">Quem Somos</a></li>
            <li><a href="https://www.bebece.com.br/fale-conosco">Fale Conosco</a></li>
        </ul>
        </nav>

        <nav className="footer-policies">
        <ul>
            <li><span className="footer-title">Políticas</span></li>
            <li><a href="https://www.bebece.com.br/politicas">Política de Privacidade</a></li>
            <li><a href="https://www.bebece.com.br/politicas">Termos de Uso</a></li>
            <li><a href="https://www.bebece.com.br/politicas">Política de Entrega</a></li>
            <li><a href="https://www.bebece.com.br/politicas">Política de Cupom e Descontos</a></li>
        </ul>
        </nav>

      </div>
    </footer>
  );
}
