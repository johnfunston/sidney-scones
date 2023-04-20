import React, { useState, useEffect, useRef } from 'react';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

const Carousel = ({ sconeMenu, bobaMenu, otherProducts, selectedMenu, selectedItem, setSelectedItem, onMenuClick }) => {
  const carouselRef = useRef(null);

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      if (selectedItem < menuItems.length - 1) {
        e.preventDefault();
        setSelectedItem((prevSelectedItem) => Math.min(prevSelectedItem + 1, menuItems.length - 1));
      }
    } else {
      if (selectedItem > 0) {
        e.preventDefault();
        setSelectedItem((prevSelectedItem) => Math.max(prevSelectedItem - 1, 0));
      }
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      carousel.addEventListener('wheel', handleScroll, { passive: false });
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('wheel', handleScroll);
      }
    };
  }, [selectedItem]);

  const getMenuItems = () => {
    switch (selectedMenu) {
      case 'scones':
        return sconeMenu;
      case 'boba':
        return bobaMenu;
      case 'other':
        return otherProducts;
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();
  const currentItem = menuItems[selectedItem];



  return (
    <>
    <div className="flex justify-center mb-4">
        <button onClick={() => onMenuClick('scones')} className="chip mr-2">
          Scones
        </button>
        <button onClick={() => onMenuClick('boba')} className="chip mr-2">
          Boba
        </button>
        <button onClick={() => onMenuClick('other')} className="chip">
          Other
        </button>
      </div>
      <div className="flex w-full">
        <div className="w-1/3 flex flex-col items-center p-4 space-between item-description">
          <h2 className="text-4xl font-semibold mb-2">{currentItem.name + " Scone"}</h2>
          <div className="text-lg font-semibold mb-4">Price: ${currentItem.price}</div>
          <p className="text-xl mb-4">{currentItem.description}</p>
          <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
        <div className="w-2/3 relative mx-auto carousel-track align-end" ref={carouselRef}>
          <div className="gradient-left"></div>
          <div className="gradient-right"></div>
          <div
            className="flex transition-transform duration-300 ease-in-out h-full"
            style={{ transform: `translateX(-${selectedItem * (60)}vh)` }}
          >
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`${
                  selectedItem === index ? 'selected-image' : 'image-container'
                } transition-transform duration-300 ease-in-out`}
              >
                <img src={item.image} alt={item.name} className={`carousel-image ${selectedItem === index ? 'selected' : ''}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom-4 right-4 flex w-full justify-end px-16">
        <button
          onClick={() => setSelectedItem((prevSelectedItem) => Math.max(prevSelectedItem - 1, 0))}
          className="carousel-button"
          disabled={selectedItem === 0}
        >
          <WestIcon />
        </button>
        <button
          onClick={() => setSelectedItem((prevSelectedItem) => Math.min(prevSelectedItem + 1, menuItems.length - 1))}
          className="carousel-button"
          disabled={selectedItem === menuItems.length -1}
          >
          <EastIcon/>
          </button>
          </div>
          <div className="bottom-4 left-4 text-lg font-semibold">
          {selectedItem + 1} / {menuItems.length}
          </div>
          </>
          );
          };
          
          export default Carousel;
