import { useState } from "react";

const RippleButton = ({ children, className = "", onClick, ...props }) => {
  const [ripples, setRipples] = useState([]);

  const addRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = { x, y, size, key: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.slice(1));
    }, 600);
  };

  const handleClick = (e) => {
    addRipple(e);
    if (onClick) onClick(e);
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      className={`relative overflow-hidden w-fit self-center border border-gray-300 bg-black rounded-full 
                  text-white px-6 py-2 font-medium transition-all duration-300 
                   hover:bg-gray-800 hover:shadow-lg hover:scale-105 ${className}`}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.key}
          className="absolute bg-gray-300 opacity-50 rounded-full animate-ripple"
          style={{
            width: ripple.size,
            height: ripple.size,
            top: ripple.y,
            left: ripple.x,
          }}
        />
      ))}
      {children}
    </button>
  );
};

export default RippleButton;
