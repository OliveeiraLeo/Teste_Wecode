import React, { useState } from 'react';
import Layout from './Layout';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  const handleAddToCart = (item, size) => {
    const newItem = { ...item, size, quantity: 1 };
    setCartItems(prev => {
      const exists = prev.find(i => i.id === newItem.id && i.size === size);
      if (exists) {
        return prev.map(i =>
          i.id === newItem.id && i.size === size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, newItem];
    });
  };

  const handleQuantityChange = (id, size, qty) => {
    if (qty < 1) return;
    setCartItems(prev =>
      prev.map(i =>
        i.id === id && i.size === size ? { ...i, quantity: qty } : i
      )
    );
  };

  const handleRemoveItem = (id, size) => {
    setCartItems(prev =>
      prev.filter(i => !(i.id === id && i.size === size))
    );
  };

  return (
    <div className="App">
      <Layout
        cartItems={cartItems}
        isSidebarOpen={isSidebarOpen}
        modalOpen={modalOpen}
        selectedItem={selectedItem}
        onCartClick={() => setIsSidebarOpen(true)}
        onCloseSidebar={() => setIsSidebarOpen(false)}
        onOpenModal={handleOpenModal}
        onCloseModal={handleCloseModal}
        onAddToCart={handleAddToCart}
        onQuantityChange={handleQuantityChange}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}

export default App;
