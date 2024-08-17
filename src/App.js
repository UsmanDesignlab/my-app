import React from 'react'
import Header from './components/common/heading/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './components/home/home';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <>
        <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
    
    </>
  )
}

export default App;