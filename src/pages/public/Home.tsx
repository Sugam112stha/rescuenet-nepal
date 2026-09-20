import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { mockStats, mockDisasterCategories, mockIncidents } from '../../data/mockData';
import { StatCard } from '../../components/public/StatCard';
import { DisasterCard } from '../../components/public/DisasterCard';
import { IncidentCard } from '../../components/public/IncidentCard';
import {
  FiPlusCircle,
  FiAlertTriangle,
  FiSearch,
  FiPhoneCall,
  FiArrowRight,
  FiClock,
} from 'react-icons/fi';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  // Pick top 3 recent incidents
  const recentIncidents = mockIncidents.slice(0, 3);

  return (
    <div className="space-y-12 pb-16">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 text-white overflow-hidden py-16 md:py-24">
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Main Call to Action Area */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-xs md:text-sm font-semibold backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                Rapid Emergency Response Platform Nepal
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Community-Based <br className="hidden sm:inline" />
                <span className="text-red-500">Disaster Response</span> Coordination
              </h1>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
                RescueNet Nepal empowers local citizens, ward representatives, and emergency responders with real-time incident reporting, disaster mapping, and coordinated relief deployment across all 77 districts.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/report"
                  className="inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg hover:shadow-red-600/30 transition-all transform active:scale-95"
                >
                  <FiPlusCircle className="text-xl" />
                  Report Emergency Incident
                </Link>

                <Link
                  to="/incidents"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-white font-semibold text-base px-6 py-3.5 rounded-xl border border-slate-700 transition"
                >
                  <FiAlertTriangle className="text-amber-400" />
                  View Active Incidents
                </Link>
              </div>

              {/* Quick Regional Coverage Highlights */}
              <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Monitored Regions:</span>
                <span>• Dharan & Itahari (Sunsari)</span>
                <span>• Biratnagar (Morang)</span>
                <span>• Kathmandu</span>
                <span>• Pokhara</span>
              </div>
            </div>

            {/* Quick Hotline & Quick Search Card */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl text-white space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <FiPhoneCall className="text-red-400" /> Emergency Hotlines
                </h2>
                <span className="text-xs bg-red-600/80 text-red-100 font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                  24/7 Available
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <a
                  href="tel:100"
                  className="bg-slate-800/80 hover:bg-red-600 p-3 rounded-xl border border-slate-700 hover:border-red-500 transition group block"
                >
                  <div className="text-xs text-slate-400 group-hover:text-red-100">Police Emergency</div>
                  <div className="text-xl font-black text-white group-hover:text-white">100</div>
                </a>

                <a
                  href="tel:101"
                  className="bg-slate-800/80 hover:bg-red-600 p-3 rounded-xl border border-slate-700 hover:border-red-500 transition group block"
                >
                  <div className="text-xs text-slate-400 group-hover:text-red-100">Fire Brigade</div>
                  <div className="text-xl font-black text-white group-hover:text-white">101</div>
                </a>

                <a
                  href="tel:102"
                  className="bg-slate-800/80 hover:bg-red-600 p-3 rounded-xl border border-slate-700 hover:border-red-500 transition group block"
                >
                  <div className="text-xs text-slate-400 group-hover:text-red-100">Ambulance (Red Cross)</div>
                  <div className="text-xl font-black text-white group-hover:text-white">102</div>
                </a>

                <a
                  href="tel:1155"
                  className="bg-slate-800/80 hover:bg-red-600 p-3 rounded-xl border border-slate-700 hover:border-red-500 transition group block"
                >
                  <div className="text-xs text-slate-400 group-hover:text-red-100">National Disaster (NEOC)</div>
                  <div className="text-xl font-black text-white group-hover:text-white">1155</div>
                </a>
              </div>

              <div className="pt-2">
                <Link
                  to="/emergency-info"
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-red-300 hover:text-white bg-slate-900/60 hover:bg-slate-900 py-2.5 rounded-lg border border-slate-700 transition"
                >
                  <FiSearch /> Browse Full District Directory & Safety Guides
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS OVERVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-xs font-bold text-red-600 uppercase tracking-widest">
            Live Network Monitor
          </h2>
          <p className="text-2xl font-black text-slate-900">
            Real-time Disaster Response Metrics
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {mockStats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </section>

      {/* DISASTER CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-xs font-bold text-red-600 uppercase tracking-widest">
              Risk Categories
            </h2>
            <p className="text-2xl font-black text-slate-900">
              Disaster Types Monitored in Nepal
            </p>
          </div>
          <Link
            to="/incidents"
            className="inline-flex items-center gap-1 text-sm font-bold text-red-600 hover:text-red-700"
          >
            Explore All Incidents <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {mockDisasterCategories.map((cat) => (
            <DisasterCard
              key={cat.id}
              category={cat}
              onClick={() => navigate(`/incidents?category=${encodeURIComponent(cat.name)}`)}
            />
          ))}
        </div>
      </section>

      {/* RECENT ACTIVE INCIDENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 bg-red-100 px-2.5 py-0.5 rounded-full mb-2">
                <FiClock className="animate-spin" /> Live Feed
              </div>
              <h2 className="text-2xl font-black text-slate-900">
                Recent Reported Incidents
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Verified community reports requiring emergency response or alert monitoring.
              </p>
            </div>
            <Link
              to="/incidents"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm px-4 py-2.5 rounded-xl border border-slate-300 shadow-sm transition"
            >
              View All Active Incidents ({mockIncidents.length})
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentIncidents.map((incident) => (
              <IncidentCard key={incident.id} incident={incident} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW RESCUENET NEPAL WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">
            Coordination Framework
          </h2>
          <p className="text-3xl font-black text-slate-900 mb-3">
            How RescueNet Nepal Operates
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            A transparent 4-step workflow connecting affected communities directly with local government authorities, security forces, and Red Cross volunteers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 font-black text-lg flex items-center justify-center mx-auto">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-base">Community Incident Report</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Citizens or local ward members submit real-time reports with location, photos, and resource needs.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 font-black text-lg flex items-center justify-center mx-auto">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-base">Instant Verification</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              District Emergency Operation Centers verify legitimacy and assign priority severity levels.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 font-black text-lg flex items-center justify-center mx-auto">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-base">Responder Deployment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nearby APF, Nepal Police, Red Cross, and local volunteers receive auto-notifications with exact GPS details.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 font-black text-lg flex items-center justify-center mx-auto">
              4
            </div>
            <h3 className="font-bold text-slate-900 text-base">Public Status Tracking</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Live timeline updates keep affected citizens informed as relief and rescue efforts progress.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 text-center md:text-left max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Witnessed an Incident in Your Area?
            </h2>
            <p className="text-red-100 text-sm leading-relaxed">
              Report quickly to alert local authorities and nearby response teams. Early reports save lives in flood and landslide emergencies.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/report"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-700 hover:bg-red-50 font-black text-sm px-6 py-3.5 rounded-xl shadow-lg transition"
            >
              <FiPlusCircle className="text-lg" /> Report Incident Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
