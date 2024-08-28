import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <div className="flex space-x-4 p-4">
      <button onClick={() => toggleTheme('light')} className="bg-primary text-text px-4 py-2 rounded">
        Light Mode
      </button>
      <button onClick={() => toggleTheme('dark')} className="bg-primary text-text px-4 py-2 rounded">
        Dark Mode
      </button>
      <button onClick={() => toggleTheme('blue')} className="bg-primary text-text px-4 py-2 rounded">
        Blue Mode
      </button>
      <button onClick={() => toggleTheme('gray')} className="bg-primary text-text px-4 py-2 rounded">
        Gray Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
