import React from 'react';

const Badge = ({ children, className }) => {
  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-semibold text-white bg-gray-500 rounded-full ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
