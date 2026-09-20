import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiShield, FiAlertCircle, FiPhoneCall, FiMenu, FiX, FiPlusCircle } from 'react-icons/fi';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Active Incidents', path: '/incidents' },
    { name: 'Emergency Info', path: '/emergency-info' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
      {/* Top Urgent Alert Banner */}
      <div className="bg-red-700 text-white px-4 py-1.5 text-xs md:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="bg-red-900 text-red-100 text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded flex items-center gap-1 shrink-0 animate-pulse">
              <FiAlertCircle /> Live Alert
            </span>
            <span className="truncate">
              Monsoon Advisory: Moderate to heavy flood risk reported in Koshi & Gandaki Basins.
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 shrink-0 text-xs">
            <span className="flex items-center gap-1 font-semibold text-red-100">
              <FiPhoneCall className="text-white" /> Emergency Hotline:
            </span>
            <a href="tel:1155" className="bg-white text-red-700 font-bold px-2 py-0.5 rounded hover:bg-red-50 transition">
              1155 (NEOC)
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Platform Title */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center text-white shadow-md group-hover:bg-red-700 transition">
              <FiShield className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-black text-slate-900 tracking-tight block leading-tight">
                RescueNet <span className="text-red-600">Nepal</span>
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase block -mt-0.5">
                Disaster Coordination
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-red-600 bg-red-50 font-bold'
                      : 'text-slate-700 hover:text-red-600 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:100"
              className="text-xs font-bold text-slate-600 hover:text-red-600 flex items-center gap-1 px-3 py-2 border border-slate-200 rounded-lg hover:border-red-200 transition"
            >
              <FiPhoneCall className="text-red-600" /> Police: 100
            </a>
            <Link
              to="/report"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-95"
            >
              <FiPlusCircle className="text-lg" />
              Report Incident
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/report"
              className="inline-flex items-center gap-1 bg-red-600 text-white font-bold text-xs px-2.5 py-1.5 rounded-md shadow-sm"
            >
              <FiPlusCircle /> Report
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-red-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-md text-base font-semibold ${
                  isActive
                    ? 'text-red-600 bg-red-50 font-bold'
                    : 'text-slate-700 hover:text-red-600 hover:bg-slate-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs text-slate-600 px-3 py-1 bg-slate-50 rounded">
              <span>National Emergency Operations:</span>
              <span className="font-bold text-red-600">1155</span>
            </div>
            <Link
              to="/report"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-red-600 text-white font-bold py-2.5 rounded-lg shadow"
            >
              Report Emergency Incident
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
