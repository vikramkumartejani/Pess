import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import routes from './routes';

function App() {
  return (
    <>
      <Header />
      <div className='layout'>
        <div className='sidebar-responsive'>
          <Sidebar />
        </div>
        <main className='main-container' style={{ background: "#F5F7FF" }}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
