import React, { createContext, useState } from 'react';

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState("Home");

  const togglePage = (newPage) => {
    if (newPage === page) {
      return
    }
    setPage(newPage)
  }

  return (
    <PageContext.Provider value={{ page, togglePage }}>
      {children}
    </PageContext.Provider>
  );
};