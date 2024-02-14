import React from 'react';
import './App.css';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
// import Projects from './components/Projects/Projects';
// import Resume from './components/Resume/Resume';
import { PageProvider } from './providers/PageProvider';
import { ThemeProvider } from './providers/ThemeProvider';
import PageContainer from "./pages"
import Header from './components/Header/Header';

function App() {

  return (
    <ThemeProvider>
      <PageProvider>
        <Header />
        <Navbar />
        <PageContainer />
        <Footer />
      </PageProvider>
    </ThemeProvider>
  )
};

export default App;
