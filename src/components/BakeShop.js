import React, { useState } from 'react';
import Carousel from './Carousel';

const BakeShop = ({ sconeMenu, bobaMenu, otherProducts}) => {
  const [selectedMenu, setSelectedMenu] = useState('scones');
  const [selectedItem, setSelectedItem] = useState(0);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setSelectedItem(0);
  };

  return (
    <div className="BakeShop bake-shop min-h-screen max-h-screen py-24 h-full">
    <h1 className="bakeshop-title w-full px-12">Bake Shop</h1>
      <Carousel
        selectedMenu={selectedMenu}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        sconeMenu={sconeMenu}
        bobaMenu={bobaMenu}
        otherProducts={otherProducts}
        onMenuClick={handleMenuClick}
      />
    </div>
  );
};

export default BakeShop;