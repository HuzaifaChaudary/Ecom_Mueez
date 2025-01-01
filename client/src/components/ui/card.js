import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`p-4 bg-white shadow-lg rounded-lg ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => {
  return <div className="text-xl font-bold mb-2">{children}</div>;
};

const CardContent = ({ children }) => {
  return <div className="text-gray-700">{children}</div>;
};

const CardTitle = ({ children }) => {
  return <h3 className="text-lg font-semibold">{children}</h3>;
};

const CardDescription = ({ children }) => {
  return <p className="text-sm text-gray-600">{children}</p>;
};

export { Card, CardHeader, CardContent, CardTitle, CardDescription };
