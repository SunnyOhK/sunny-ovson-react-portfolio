import React, { createContext, useState } from 'react';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState(1);

  const pageToggle = (event) => {
    const pageValue = event.target.value;
    if (pageValue === 1) {
      setPage(Navbar)
    } else if (pageValue === 2) {
      setPage(About)
    } else if (pageValue === 3) {
      setPage(Projects)
    } else if (pageValue === 4) {
      setPage(Resume)
    } else if (pageValue === 5) {
      setPage(Contact)
    }
  }
  return (
    <PageContext.Provider value={{ page, pageToggle }}>
      {children}
    </PageContext.Provider>
  );
};