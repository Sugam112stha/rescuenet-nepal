import React from 'react';
import { Link } from 'react-router-dom';
import { FiShield, FiPhoneCall, FiHeart, FiMapPin } from 'react-icons/fi';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold">
                <FiShield className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                RescueNet <span className="text-red-500">Nepal</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              A community-driven disaster incident reporting and emergency response coordination system built to serve communities across Nepal’s 77 districts and 7 provinces.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <FiMapPin className="text-red-500 shrink-0" />
              <span>Dharan | Itahari | Biratnagar | Kathmandu | Pokhara</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-slate-800 pb-2">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-red-400 transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-400 transition-colors">About RescueNet Nepal</Link>
              </li>
              <li>
                <Link to="/incidents" className="hover:text-red-400 transition-colors">Active Disaster Incidents</Link>
              </li>
              <li>
                <Link to="/emergency-info" className="hover:text-red-400 transition-colors">Emergency Information & Contacts</Link>
              </li>
              <li>
                <Link to="/report" className="hover:text-red-400 transition-colors font-semibold text-red-400">Report an Incident</Link>
              </li>
            </ul>
          </div>

          {/* Key Emergency Numbers */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-slate-800 pb-2">
              Emergency Hotlines
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center justify-between bg-slate-800/60 px-3 py-2 rounded border border-slate-800">
                <span className="text-slate-300">Nepal Police Control:</span>
                <a href="tel:100" className="font-bold text-red-400 hover:underline">100</a>
              </li>
              <li className="flex items-center justify-between bg-slate-800/60 px-3 py-2 rounded border border-slate-800">
                <span className="text-slate-300">Fire Brigade Dispatch:</span>
                <a href="tel:101" className="font-bold text-red-400 hover:underline">101</a>
              </li>
              <li className="flex items-center justify-between bg-slate-800/60 px-3 py-2 rounded border border-slate-800">
                <span className="text-slate-300">Red Cross Ambulance:</span>
                <a href="tel:102" className="font-bold text-red-400 hover:underline">102</a>
              </li>
              <li className="flex items-center justify-between bg-slate-800/60 px-3 py-2 rounded border border-slate-800">
                <span className="text-slate-300">National Emergency (NEOC):</span>
                <a href="tel:1155" className="font-bold text-red-400 hover:underline">1155</a>
              </li>
            </ul>
          </div>

          {/* Important Notice */}
          <div className="bg-red-950/40 border border-red-900/50 rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
              <FiPhoneCall /> Critical Emergency Notice
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              In life-threatening situations, always dial official emergency numbers (100 / 101 / 102 / 1155) immediately in addition to submitting web reports.
            </p>
            <div className="pt-2 text-xs text-slate-400 border-t border-red-900/40">
              Verified reports are dispatched to local authorities and verified volunteers.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} RescueNet Nepal. Final Year Project (FYP). All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with</span>
            <FiHeart className="text-red-500 fill-red-500" />
            <span>for community disaster resilience in Nepal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
