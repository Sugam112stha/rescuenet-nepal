import React, { useState } from 'react';
import { mockEmergencyContacts, mockSafetyGuides } from '../../data/mockData';
import {
  FiPhoneCall,
  FiSearch,
  FiCheckCircle,
  FiDroplet,
  FiTrendingUp,
  FiActivity,
  FiAlertTriangle,
  FiPrinter,
} from 'react-icons/fi';

export const EmergencyInformation: React.FC = () => {
  const [contactSearch, setContactSearch] = useState<string>('');

  const filteredContacts = mockEmergencyContacts.filter((contact) => {
    if (!contactSearch.trim()) return true;
    const query = contactSearch.toLowerCase();
    return (
      contact.organization.toLowerCase().includes(query) ||
      contact.category.toLowerCase().includes(query) ||
      contact.region.toLowerCase().includes(query) ||
      contact.phoneDisplay.toLowerCase().includes(query)
    );
  });

  const getGuideIcon = (category: string) => {
    switch (category) {
      case 'Flash Flood':
        return <FiDroplet className="w-5 h-5 text-blue-600" />;
      case 'Landslide':
        return <FiTrendingUp className="w-5 h-5 text-amber-600" />;
      case 'Earthquake':
        return <FiActivity className="w-5 h-5 text-red-600" />;
      default:
        return <FiAlertTriangle className="w-5 h-5 text-red-600" />;
    }
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-12 border-b-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-semibold">
              <FiPhoneCall className="text-red-400" /> Nepal Directory & Safety Manuals
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Emergency <span className="text-red-500">Information Center</span>
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Official emergency contacts across Nepal's districts along with disaster safety protocols for monsoon floods, landslides, and earthquakes.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK HOTLINES QUICK ACCESS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div>
            <h2 className="text-xs font-bold text-red-600 uppercase tracking-widest">
              Nationwide Short Codes
            </h2>
            <p className="text-2xl font-black text-slate-900">
              Primary Nepal Emergency Numbers
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 text-xs font-bold bg-white text-slate-700 hover:text-red-600 px-4 py-2 rounded-xl border border-slate-200 shadow-sm transition"
          >
            <FiPrinter /> Print Reference Sheet
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href="tel:100"
            className="bg-red-600 hover:bg-red-700 text-white p-5 rounded-2xl shadow-md transition group block"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-extrabold tracking-wider text-red-100">
                Nepal Police
              </span>
              <FiPhoneCall className="w-5 h-5 text-red-200 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-3xl font-black tracking-tight">100</div>
            <div className="text-xs text-red-100 mt-1">Free 24/7 Police Dispatch</div>
          </a>

          <a
            href="tel:101"
            className="bg-slate-900 hover:bg-slate-800 text-white p-5 rounded-2xl shadow-md transition group block"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400">
                Fire Brigade
              </span>
              <FiPhoneCall className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-3xl font-black tracking-tight">101</div>
            <div className="text-xs text-slate-400 mt-1">Urban & Highway Fire Response</div>
          </a>

          <a
            href="tel:102"
            className="bg-slate-900 hover:bg-slate-800 text-white p-5 rounded-2xl shadow-md transition group block"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400">
                Red Cross Ambulance
              </span>
              <FiPhoneCall className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-3xl font-black tracking-tight">102</div>
            <div className="text-xs text-slate-400 mt-1">Medical Patient Transport</div>
          </a>

          <a
            href="tel:1155"
            className="bg-slate-900 hover:bg-slate-800 text-white p-5 rounded-2xl shadow-md transition group block"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400">
                National Disaster (NEOC)
              </span>
              <FiPhoneCall className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-3xl font-black tracking-tight">1155</div>
            <div className="text-xs text-slate-400 mt-1">Government Disaster Operations</div>
          </a>
        </div>
      </section>

      {/* FULL EMERGENCY CONTACTS DIRECTORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Regional & District Agency Directory
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Direct phone numbers for emergency operations centers in Koshi, Bagmati, and Gandaki provinces.
              </p>
            </div>

            {/* Search filter */}
            <div className="relative w-full md:w-72">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                value={contactSearch}
                onChange={(e) => setContactSearch(e.target.value)}
                placeholder="Search contact or region..."
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 text-slate-900 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Organization / Agency</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Region / District</th>
                  <th className="py-3 px-4">Phone Contact</th>
                  <th className="py-3 px-4">Availability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredContacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-slate-50/80 transition">
                    <td className="py-3.5 px-4 font-bold text-slate-900 max-w-xs">
                      {contact.organization}
                      <span className="block text-[11px] font-normal text-slate-500 mt-0.5">
                        {contact.description}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-600">{contact.category}</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">{contact.region}</td>
                    <td className="py-3.5 px-4">
                      <a
                        href={`tel:${contact.phoneDisplay.split('/')[0].trim()}`}
                        className="font-bold text-red-600 hover:underline flex items-center gap-1"
                      >
                        <FiPhoneCall className="text-red-500 shrink-0" />
                        {contact.phoneDisplay}
                      </a>
                    </td>
                    <td className="py-3.5 px-4">
                      {contact.is24_7 ? (
                        <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          <FiCheckCircle /> 24/7 Live
                        </span>
                      ) : (
                        <span className="text-slate-500">Standard Office Hours</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DISASTER PREPAREDNESS & SAFETY GUIDES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-xs font-bold text-red-600 uppercase tracking-widest">
            Preparedness Guidelines
          </h2>
          <p className="text-3xl font-black text-slate-900">
            Disaster Safety Protocols
          </p>
          <p className="text-xs text-slate-600">
            Actionable safety instructions approved by disaster management authorities for citizens in Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {mockSafetyGuides.map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-slate-100 rounded-xl">{getGuideIcon(guide.category)}</div>
                  <div>
                    <span className="text-[11px] uppercase font-extrabold text-red-600 tracking-wider">
                      {guide.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">{guide.title}</h3>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed border-b border-slate-100 pb-3">
                  {guide.summary}
                </p>

                {/* Steps Accordion / Breakdown */}
                <div className="space-y-4 text-xs">
                  {/* Before */}
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-2 text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded w-fit">
                      1. Before / Preparation
                    </h4>
                    <ul className="space-y-1.5 list-disc list-inside text-slate-600 pl-1">
                      {guide.beforeSteps.map((step, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* During */}
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-2 text-[11px] text-red-700 bg-red-50 px-2 py-0.5 rounded w-fit">
                      2. During Event
                    </h4>
                    <ul className="space-y-1.5 list-disc list-inside text-slate-600 pl-1">
                      {guide.duringSteps.map((step, idx) => (
                        <li key={idx} className="leading-relaxed font-medium text-slate-800">
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* After */}
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-2 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded w-fit">
                      3. After math / Recovery
                    </h4>
                    <ul className="space-y-1.5 list-disc list-inside text-slate-600 pl-1">
                      {guide.afterSteps.map((step, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
