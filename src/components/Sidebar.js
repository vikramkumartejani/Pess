import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styling/Sidebar.css';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { IoClose } from "react-icons/io5";

const links = [
  { path: '/', label: 'Dashboard' },
  { path: '/admin', label: 'Admin' },
  { path: '/users', label: 'Users' },
  {
    path: '/multi-send',
    label: 'Multi-send',
    subLinks: [
      { path: '/send-token', label: 'Send Token' },
      { path: '/send-point', label: 'Send Point' }
    ]
  },
  {
    path: '/mining',
    label: 'Mining',
    subLinks: [
      { path: '/setting', label: 'Setting' },
      { path: '/history', label: 'History' }
    ]
  },
  {
    path: '/withdrawal',
    label: 'Withdrawal',
    subLinks: [
      { path: '/setting-two', label: 'Setting' },
      { path: '/history-two', label: 'History' },
      { path: '/waiting-for-approval', label: 'Waiting for approval' },
    ]
  },
  { path: '/airdrop', label: 'Airdrop' },
  { path: '/notice', label: 'Notice' }
];

function Sidebar({ isMobile, onClose }) {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    const currentPath = location.pathname;

    for (const link of links) {
      if (link.subLinks) {
        const matchingSublink = link.subLinks.find(subLink =>
          currentPath === subLink.path || currentPath.startsWith(`${subLink.path}/`)
        );

        if (matchingSublink) {
          setOpenMenu(link.label);
          return;
        }
      }
    }

    setOpenMenu(null);
  }, [location.pathname]);

  const toggleMenu = (label) => {
    setOpenMenu(prevOpen => prevOpen === label ? null : label);
  };

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const handleLinkClick = () => {
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <div className={`sidebar ${isMobile ? 'mobile-sidebar' : ''}`}>
      {isMobile && (
        <div className="mobile-sidebar-header">
          <button className="close-btn" onClick={onClose}>
            <IoClose size={24} color="#333" />
          </button>
        </div>
      )}

      {links.map((link) => (
        <div key={link.label} className="nav-item">
          {link.subLinks ? (
            <>
              <div
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => toggleMenu(link.label)}
              >
                {link.label}
                <span className="arrow">{openMenu === link.label ? <MdKeyboardArrowDown size={16} /> : < MdKeyboardArrowRight size={16} />}</span>
              </div>
              {openMenu === link.label && (
                <div className="sub-menu">
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.path}
                      to={subLink.path}
                      className={`sub-link ${isActive(subLink.path) ? 'active' : ''}`}
                      onClick={handleLinkClick}
                    >
                      <GoDotFill size={10} /> {subLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;