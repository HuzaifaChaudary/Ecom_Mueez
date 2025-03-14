import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { Button } from 'flowbite-react';

const Herosection = ({ onShopNowClick }) => {
  return (
    <div className="font-[Poppins] min-h-screen bg-white flex flex-col">
      <header className="bg-white">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div>
            <Image className="w-16 cursor-pointer" src="/assets/Images/an_logo.jpg" alt="Logo" width={64} height={64} />
          </div>
          <div className="nav-links justify-center duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 shadow-md md:shadow-none">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li className="flex justify-center">
                <Link href="/" className="hover:text-gray-500">
                  Home
                </Link>
              </li>
              <li className="flex justify-center">
                <Link href="/aboutus" className="hover:text-gray-500">
                  About Us
                </Link>
              </li>
              <li className="flex justify-center">
                <Link href="/contact" className="hover:text-gray-500">
                  Contact
                </Link>
              </li>
              {/* Shop Now Button for Mobile */}
              <li className="md:hidden">
                <button
                  className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                  onClick={onShopNowClick}
                >
                  Shop Now
                </button>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <button
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300 md:block hidden"
              onClick={onShopNowClick}
            >
              Shop Now
            </button>
            <FontAwesomeIcon
              icon={faBars}
              className="text-3xl cursor-pointer md:hidden"
              onClick={onToggleMenu}
            />
          </div>
        </nav>
      </header>

      <section className="flex flex-grow items-center justify-center px-6 py-12">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
              Elevate Your Style with Anluxuries’ Exquisite Bags, Watches, and Sunglasses
            </h1>
            <p className="mt-4 text-gray-600 text-lg sm:text-xl">
              Shop with us and embrace the essence of luxury.
            </p>
            <button
              className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300"
              onClick={onShopNowClick}
            >
              Shop Now
            </button>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <Image 
              src="/assets/Images/an_logo.jpg" 
              alt="Hero Image" 
              width={0} 
              height={0} 
              sizes="(max-width: 1024px) 100vw, 50vw" 
              className="w-full h-auto object-contain max-w-md lg:max-w-lg" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};
const onToggleMenu = () => {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('top-[9%]');
  navLinks.classList.toggle('shadow-lg'); // Add shadow when menu is open
};

export default Herosection;