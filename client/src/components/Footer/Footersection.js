import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faPinterest, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Logo and About */}
          <div className="flex flex-col gap-4">
            <Image
              src="/assets/Images/GFV.png"
              alt="Logo"
              width={64}
              height={64}
              className="w-16"
            />
            <p className="text-gray-400 text-sm">
              Your go-to destination for stylish bags, glasses, and watches.
              Quality products, unbeatable prices, and unmatched service.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-bold text-gray-100 mb-4">Quick Links</h3>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
  <li>
    <Link href="/" className="hover:text-gray-500">
      Home
    </Link>
  </li>
  <li>
    <Link href="/aboutus" className="hover:text-gray-500">
      About Us
    </Link>
  </li>
  <li>
    <Link href="/contact" className="hover:text-gray-500">
      Contact
    </Link>
  </li>
</ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="font-bold text-gray-100 mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm mb-4">
              We’re here to assist you! At Anluxuries, customer satisfaction is
              our top priority. If you have any questions or feedback, feel
              free to reach out.
            </p>
            <ul className="space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@anluxuries.com"
                  className="hover:text-white"
                >
                  info@anluxuries.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+123456789" className="hover:text-white">
                  +123456789
                </a>{" "}
                (Mon-Fri, 9:00 AM to 6:00 PM)
              </li>
              <li>Live Chat: Available during business hours</li>
              <li>
                Address: Anluxuries Customer Support, 2066 Crist Drive, Los
                Altos, California
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
        <h3 className="font-bold text-gray-100 mb-4">Connect With Us</h3>
        <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FontAwesomeIcon icon={faPinterest} className="text-2xl" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FontAwesomeIcon icon={faTiktok} className="text-2xl" />
            </a>
        </div>
    </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-700"></div>

        {/* Copyright */}
        <div className="text-center mt-4 text-gray-400 text-sm">
          © {new Date().getFullYear()} Your Brand Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
