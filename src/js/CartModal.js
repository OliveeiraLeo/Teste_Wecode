import React, { useState } from 'react';
import '../styles/CartModal.scss';

export default function CartModal({
  item,
  isOpen,
  onClose,
  selectedSize,
  onSelectSize,
  onAddToCart
}) {
  if (!isOpen || !item) return null;  

  const sizes = [34,35,36,37,38,39,40,41];
  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={e=>e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>×</button>

        <div className="image-container">
          <img src={item.img} alt={item.name}/>
        </div>

        <div className="info-container">
          <h3 className="name">{item.name}</h3>

          <div className="size-selection">
            <p>Escolha o tamanho:</p>
            <div className="size-buttons">
              {sizes.map(size => (
                <button key={size}
                  className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => onSelectSize(size)}  
                >{size}</button>
              ))}
            </div>
          </div>

          <button 
            className="add-to-cart-btn"
            disabled={!selectedSize}
            onClick={() => onAddToCart(item, selectedSize)}  
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
