export const Button = ({ children, onClick, className, type = 'button' }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`px-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none ${className}`}
      >
        {children}
      </button>
    );
  };
  