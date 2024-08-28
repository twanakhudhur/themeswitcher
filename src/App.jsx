import React from 'react';
import ThemeProvider from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import Content from './components/Content';

const App = () => {
  return (
    <ThemeProvider>
      <div className="bg-background min-h-screen">
        <Header />
        <ThemeToggle />
        <Content />
      </div>
    </ThemeProvider>
  );
};

export default App;
