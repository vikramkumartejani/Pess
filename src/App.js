import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import routes from './routes';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  return (
    <>
      <Header 
        toggleSidebar={toggleSidebar} 
        toggleMobileSidebar={toggleMobileSidebar} 
      />
      
      <div className='layout'>
        {/* Desktop Sidebar */}
        {sidebarVisible && (
          <div className='sidebar-responsive'>
            <Sidebar isMobile={false} />
          </div>
        )}
        
        {/* Mobile Sidebar */}
        {mobileSidebarOpen && (
          <div className='mobile-sidebar-overlay'>
            <div className='mobile-sidebar-container'>
              <Sidebar isMobile={true} onClose={toggleMobileSidebar} />
            </div>
          </div>
        )}
        
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