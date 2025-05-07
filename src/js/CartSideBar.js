import React from 'react';
import '../styles/CartSideBar.scss';

export default function CartSidebar({
  isOpen,
  onClose,
  cartItems,
  onQuantityChange,
  onRemoveItem,
}) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => {
    const basePrice = item.oldPrice && item.oldPrice > item.price ? item.oldPrice : item.price;
    return sum + basePrice * item.quantity;
  }, 0);
  
  const discount = cartItems.reduce((sum, item) => {
    if (item.oldPrice && item.oldPrice > item.price) {
      return sum + (item.oldPrice - item.price) * item.quantity;
    }
    return sum;
  }, 0);  
  
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );  

  return (
    <div className="cart-sidebar-overlay" onClick={onClose}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <header className="cart-sidebar-header">
          <h2 className="cart-title">Carrinho</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </header>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-msg">Seu Carrinho Está Vazio.</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id + item.size} className="cart-item">
                <div className="item-media">
                  <img src={item.img} alt={item.name} className="item-image" />
                  <div className="item-controls">
                    <div className="quantity-control">
                      <button
                        onClick={() => onQuantityChange(item.id, item.size, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onQuantityChange(item.id, item.size, item.quantity + 1)}>+</button>
                    </div>
                    <button className="remove-btn" onClick={() => onRemoveItem(item.id, item.size)}>
                      Remover
                    </button>
                  </div>
                </div>

                <div className="item-info">
                  <span className="name">{item.name}</span>
                  <span className="item-size">Tamanho: {item.size}</span>
                  <span className="item-price">R$ {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))
          )}
        </div>

        <footer className="cart-sidebar-footer">
          <div className="totals">
            <div><span>Subtotal</span><span>R$ {subtotal.toFixed(2)}</span></div>
            <div><span>Desconto</span><span className="discount-value">-R$ {discount.toFixed(2)}</span></div>
            <div className="total"><span>Total</span><span>R$ {total.toFixed(2)}</span></div>
          </div>
          <div className="actions">
            <button className="checkout-btn" onClick={() => {}}>
              Finalizar Pedido
            </button>
            <button className="continue-btn" onClick={onClose}>
              Continuar Comprando
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
