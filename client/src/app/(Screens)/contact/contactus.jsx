"use client"; // This makes the component a client component
import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer/Footersection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted:", formData);
  };
  const onToggleMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('top-[9%]');
  };
  return (
    <>
      <div className="font-[Poppins] bg-gray-50 flex flex-col">
        <div className="font-[Poppins] bg-white flex flex-col">
              <header className="bg-white">
                <nav className="flex justify-between items-center w-[92%] mx-auto">
                  <div>
                    <Image className="w-16 cursor-pointer" src="/assets/Images/an_logo.jpg" alt="Logo" width={64} height={64} />
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

        <main className="contact py-10 px-4 md:px-0">
          <header className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h1>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We’d love to hear from you! Whether you have a question about our products, pricing, or anything else, our team is ready to help.
            </p>
          </header>

          <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows="6"
                />
              </div>
              <button
                type="submit"
                className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </section>

          <footer className="mt-10 text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Contact Information</h2>
            <p className="text-gray-600 mt-2">Email: support@anluxuries.com</p>
            <p className="text-gray-600">Phone: +1 (234) 567-890</p>
            <p className="text-gray-600">Address: 123 Luxury St, Elegance City, AN 12345</p>
          </footer>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;