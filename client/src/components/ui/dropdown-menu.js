import React, { useState } from 'react';

export const DropdownMenu = ({ children, className }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`relative ${className}`}>
        <button onClick={toggleMenu} className="px-4 py-2 bg-gray-200 rounded-md">
          Menu
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
            {children}
          </div>
        )}
      </div>
    );
  };
  
  export const DropdownMenuContent = ({ children }) => {
    return <div className="py-2">{children}</div>;
  };
  
  export const DropdownMenuItem = ({ children, onClick }) => {
    return (
      <div
        onClick={onClick}
        className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
      >
        {children}
      </div>
    );
  };
  
  export const DropdownMenuLabel = ({ children }) => {
    return <div className="px-4 py-2 text-sm font-semibold text-gray-700">{children}</div>;
  };
  
  export const DropdownMenuSeparator = () => {
    return <div className="border-t border-gray-200"></div>;
  };
  
  export const DropdownMenuTrigger = ({ children, asChild }) => {
    return <div>{children}</div>;
  };
  