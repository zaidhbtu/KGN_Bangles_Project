import React, { useState } from 'react';
import Menu from '../Data/Menu';
import { Link } from 'react-router-dom';
import bannerImage from '../Data/bannerImage.jpg';
import bannerImage1 from '../Data/bannerImage1.jpg';
import bannerImage2 from '../Data/bannerImage2.jpg';
import bannerImage3 from '../Data/bannerImage3.jpg';

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(true); // Hide banners and show menu
  };

  return (
    <div className="p-4 bg-gray-100">
      {/* Banner Section */}
      {!showMenu && (
        <div className="relative w-full h-56 sm:h-72 md:h-96 lg:h-[500px] mb-8">
          <img
            src={bannerImage1}
            alt="Banner"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center space-y-4 p-4">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              Welcome to Our Bangles Collection
            </h1>
            <button
              className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
              onClick={handleMenuClick}
            >
              Explore Our Menu
            </button>
          </div>
        </div>
      )}

      {/* Banner 1 */}
      {!showMenu && (
        <div className="flex flex-col sm:flex-row items-center mb-8 sm:space-x-8">
          <div className="sm:w-1/2 px-4 text-center sm:text-left">
            <h1 className="text-gray-800 text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Elegant Bangles for Every Occasion
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Discover the beauty of tradition with our exclusive collection of handcrafted bangles.
            </p>
            <button
              className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow hover:bg-gray-700 transition"
              onClick={handleMenuClick}
            >
              Explore Our Products
            </button>
          </div>
          <div className="sm:w-1/2 mt-4 sm:mt-0">
            <img
              src={bannerImage}
              alt="Banner 1"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Banner 2 */}
      {!showMenu && (
        <div className="flex flex-col sm:flex-row-reverse items-center mb-8 sm:space-x-8">
          <div className="sm:w-1/2 px-4 text-center sm:text-right">
            <h1 className="text-gray-800 text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              A Perfect Blend of Style and Tradition
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Our bangles are designed to add a touch of elegance to your everyday look.
            </p>
          </div>
          <div className="sm:w-1/2 mt-4 sm:mt-0">
            <img
              src={bannerImage2}
              alt="Banner 2"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Banner 3 */}
      {!showMenu && (
        <div className="flex flex-col sm:flex-row items-center mb-8 sm:space-x-8">
          <div className="sm:w-1/2 px-4 text-center sm:text-left">
            <h1 className="text-gray-800 text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Celebrate Special Moments with Us
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              From bridal collections to casual wear, find the perfect bangles for every celebration.
            </p>
          </div>
          <div className="sm:w-1/2 mt-4 sm:mt-0">
            <img
              src={bannerImage3}
              alt="Banner 3"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Menu Items Section */}
      {showMenu && (
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
            {Menu.map((item, i) => {
              const { id, name, image, price } = item;
              return (
                <Link to={`/details/${id}`} key={i}>
                  <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-2xl transition duration-300">
                    <img
                      className="object-contain w-full h-56 rounded-lg mb-4"
                      src={image}
                      alt={name}
                    />
                    <h1 className="font-semibold font-mono text-xl text-gray-700 mb-2">{name}</h1>
                    <h3 className="text-lg font-medium text-gray-800">Price: {price}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
