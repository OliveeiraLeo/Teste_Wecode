import React from 'react';
import {
  Header, CepModal, Carousel, Categorias, Banners,
  ShoesMenu, CartModal, CartSidebar, BlogPosts,
  NewsLetter, Footer
} from './js';

function Layout({
  cartItems,
  isSidebarOpen,
  modalOpen,
  selectedItem,
  onCartClick,
  onCloseSidebar,
  onOpenModal,
  onCloseModal,
  onAddToCart,
  onQuantityChange,
  onRemoveItem
}) {
  return (
    <>
      <Header
        cartCount={cartItems.reduce((sum, i) => sum + i.quantity, 0)}
        onCartClick={onCartClick}
      />
      <CepModal />
      <Carousel />
      <Categorias />
      <Banners />

      <ShoesMenu onAddToCart={onAddToCart} onOpenModal={onOpenModal} />

      <CartModal
        item={selectedItem}
        isOpen={modalOpen}
        onClose={onCloseModal}
        onAddToCart={onAddToCart}
      />

      <CartSidebar
        isOpen={isSidebarOpen}
        onClose={onCloseSidebar}
        cartItems={cartItems}
        onQuantityChange={onQuantityChange}
        onRemoveItem={onRemoveItem}
      />

      <BlogPosts />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Layout;
