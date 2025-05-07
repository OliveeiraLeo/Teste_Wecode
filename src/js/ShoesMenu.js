import React, { useState } from 'react';
import '../styles/ShoesMenu.scss';
import escarpin from '../assets/images/Shoes/Escarpin.png';
import sandalia from '../assets/images/Shoes/Sandalia.png';
import coturno from '../assets/images/Shoes/Coturno.png';
import escarpin2 from '../assets/images/Shoes/Escarpin2.png';
import slingback from '../assets/images/Shoes/Slingback.png';
import addCartIcon from '../assets/images/Svg/AddCart.svg';
import CartModal from './CartModal';

const items = [
  { id: 1, img: escarpin,  name: 'Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado', price: 179.90 },
  { id: 2, img: sandalia,  name: 'Sandália Branco Black Tratorada', price: 319.89, oldPrice: 459.90, discount: '15% OFF' },
  { id: 3, img: coturno,   name: 'Coturno Feminino Bebecê Tratorado Detalhe Tachas', price: 315.00, oldPrice: 349.90, discount: '10% OFF' },
  { id: 4, img: escarpin2, name: 'Scarpin Bebecê Salto Alto Taça Com Fivela', price: 159.90 },
  { id: 5, img: slingback, name: 'Slingback Branco Tiras Bico Fino Couro', price: 379.90 },
];

export default function CalcadosMenu({ onAddToCart }) {
  const [favorites, setFavorites]     = useState(items.reduce((a,i)=>({...a,[i.id]:false}),{}));
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen]   = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  const toggleFavorite = id => setFavorites(f=>({...f,[id]:!f[id]}));
  const openModal = item => { setSelectedItem(item); setSelectedSize(null); setIsModalOpen(true); };
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="calcados-section">
        <h2 className="calcados-title">Lançamentos</h2>
        <div className="calcados-menu">
          {items.map(item => (
            <div key={item.id} className="card">
              <img src={item.img} alt={item.name} className="card-img" />
              {item.discount && <div className="discount-badge">{item.discount}</div>}

              <button className={`btn-fav ${favorites[item.id] ? 'active':''}`}
                onClick={()=>toggleFavorite(item.id)}>
                <svg className="heart-icon" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                           C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                           C13.09 3.81 14.76 3 16.5 3
                           C19.58 3 22 5.42 22 8.5
                           c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="none" stroke="black" strokeWidth="2"/>
                </svg>
              </button>

              <button className="btn-cart" onClick={()=>openModal(item)}>
                <img src={addCartIcon} alt="Carrinho"/>
              </button>

              <div className="card-info">
                <span className="card-name">{item.name}</span>
                <div className="card-price">
                  {item.oldPrice ? (
                    <>
                      <span className="old-price">R$ {item.oldPrice.toFixed(2)}</span>
                      <span className="current-price">R$ {item.price.toFixed(2)}</span>
                    </>
                  ) : (
                    <span className="current-price">R$ {item.price.toFixed(2)}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <CartModal
          item={selectedItem}
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedSize={selectedSize}
          onSelectSize={setSelectedSize}
          onAddToCart={(item, size) => {
            onAddToCart(item, size);
            closeModal();
          }}
        />
      )}
    </>
  );
}
