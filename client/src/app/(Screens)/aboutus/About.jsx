"use client"; // This makes the component a client component
import React, { useState } from "react";
import "./aboutus.css";
import Image from "next/image";
import Footer from "@/components/Footer/Footersection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


const AboutUs = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  

  return (
    
    <>
      <div className="font-[Poppins] bg-gray-50 flex flex-col">
      <div className="font-[Poppins] bg-white flex flex-col">
  <header className="bg-white">
    <nav className="flex justify-between items-center w-[92%] mx-auto">
      <div>
        <Image
          className="w-16 cursor-pointer"
          src="/assets/Images/an_logo.jpg"
          alt="Logo"
          width={64}
          height={64}
        />
      </div>
      <div className="nav-links justify-center duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">

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
</ul>

      </div>
      <div className="flex items-center gap-6">
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Sign in
        </button>
        <FontAwesomeIcon
          icon={faBars}
          className="text-3xl cursor-pointer md:hidden"
          onClick={onToggleMenu}
        />
      </div>
    </nav>
  </header>
</div>

        <main className="about-us py-10 px-4 md:px-0" >
          <header className="about-us-header text-center mb-10 ">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Elevate Your Style with Anluxuries</h1>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              At Anluxuries, explore our premium selection of Bags, Watches, and Sunglasses that enhance your personality. Our collection includes only best-sellers that meet high standards of quality, sophistication, and universality. Whether you're looking for a stylish clutch, elegant wristwatch, or a pair of sunglasses, Anluxuries has you covered. Shop with us and embrace the essence of luxury.
            </p>
          </header>

          <section className="categories mx-auto max-w-4xl" >

            {[
              {
                title: "Bags",
                description:
                  "Our stunning bag collection teaches you how to be elegantly classy and sophisticated. We offer handbags, backpacks, clutches, and totes for different occasions and uses. Each bag is crafted with care, using fine materials to ensure durability and style. Explore our range, from plain and luxurious designs to bright and patterned options, perfect for every individual.",
              },
              {
                title: "Watches",
                description:
                  "Discover the perfect blend of utility and elegance with our exotic watches. Choose from traditional, sporty, and innovative designs. Whether you prefer leather straps, stainless steel, or digital styles, our collection caters to all tastes. Each watch is a style statement, offering timeless sophistication.",
              },
              {
                title: "Sunglasses",
                description:
                  "Protect your eyes and elevate your style with our versatile sunglasses. Offering maximum UV protection and fashionable designs, our collection includes classic wayfarers, bold shapes, and sporty styles. Made with quality materials, every pair is designed for comfort and durability.",
              },
            ].map((category) => (
              <div className="category bg-white p-6 rounded-lg shadow-md mb-6" key={category.title}>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};


export default AboutUs;