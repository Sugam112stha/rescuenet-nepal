import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockIncidents } from '../../data/mockData';
import {
  FiArrowLeft,
  FiMapPin,
  FiClock,
  FiUsers,
  FiShield,
  FiAlertCircle,
  FiPhoneCall,
  FiNavigation,
  FiUserCheck,
  FiLayers,
} from 'react-icons/fi';

export const IncidentDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const incident = mockIncidents.find((item) => item.id === id) || mockIncidents[0];

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'bg-red-100 text-red-800 border-red-300 font-extrabold animate-pulse';
      case 'High':
        return 'bg-orange-100 text-orange-800 border-orange-300 font-bold';
      case 'Medium':
        return 'bg-amber-100 text-amber-800 border-amber-300 font-bold';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-300 font-medium';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-red-600 text-white';
      case 'Under Investigation':
        return 'bg-amber-600 text-white';
      case 'Responded':
        return 'bg-blue-600 text-white';
      case 'Resolved':
        return 'bg-emerald-600 text-white';
      default:
        return 'bg-slate-600 text-white';
    }
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Top Navigation Bar */}
      <div className="bg-slate-900 text-white py-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3.5 py-2 rounded-lg border border-slate-700 transition"
            >
              <FiArrowLeft /> Back to Incidents Feed
            </button>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span>Incident ID:</span>
              <span className="text-white font-bold bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                {incident.id}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Details Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Title & Badges Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-xs px-3 py-1 rounded-full border ${getSeverityBadge(incident.severity)}`}>
                  {incident.severity} Severity
                </span>
                <span className={`text-xs font-bold px-3 py-1 rounded-md ${getStatusBadge(incident.status)}`}>
                  Status: {incident.status}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-md bg-slate-100 text-slate-700">
                  {incident.category}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                {incident.title}
              </h1>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-1.5 font-bold text-slate-800">
                  <FiMapPin className="text-red-600" />
                  <span>{incident.location}, {incident.district} ({incident.province})</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500">
                  <FiClock className="text-slate-400" />
                  <span>Reported {incident.reportedAt}</span>
                </div>
              </div>
            </div>

            {/* Description & Impact */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FiLayers className="text-red-600" /> Incident Description & Context
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
                {incident.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-slate-500 block mb-1 font-medium">Estimated Affected Population</span>
                  <span className="text-xl font-black text-slate-900 flex items-center gap-2">
                    <FiUsers className="text-red-600" /> ~{incident.affectedPeopleEstimate} Individuals
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-slate-500 block mb-1 font-medium">Verification Agency</span>
                  <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5 pt-1">
                    <FiUserCheck className="text-emerald-600" />
                    {incident.verifiedBy || 'Pending DEOC Verification'}
                  </span>
                </div>
              </div>
            </div>

            {/* Simulated Geographic Location Map Placeholder */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <FiNavigation className="text-red-600" /> Geographic Map Location
                </h2>
                <span className="text-xs font-mono text-slate-500">
                  GPS: {incident.coordinates.lat.toFixed(4)}° N, {incident.coordinates.lng.toFixed(4)}° E
                </span>
              </div>
              <div className="w-full h-64 bg-slate-100 rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-6 text-center text-slate-500 space-y-2 relative overflow-hidden">
                <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold animate-bounce">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <p className="font-bold text-slate-800 text-sm">
                  Interactive GIS Map Marker: {incident.location}
                </p>
                <p className="text-xs text-slate-500 max-w-sm">
                  Coordinates sent directly to District Operation Center and APF search team units.
                </p>
              </div>
            </div>

            {/* Timeline Updates Feed */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FiClock className="text-red-600" /> Response Progress Timeline
                </h2>
                <span className="text-xs bg-slate-100 font-bold px-2.5 py-1 rounded text-slate-600">
                  {incident.updates.length} Updates Logged
                </span>
              </div>

              {incident.updates.length === 0 ? (
                <p className="text-xs text-slate-500 italic">
                  No operational updates have been logged yet. Field units are evaluating the situation.
                </p>
              ) : (
                <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                  {incident.updates.map((update) => (
                    <div key={update.id} className="relative space-y-1">
                      <div className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-red-600 ring-4 ring-red-100" />
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-slate-900">{update.title}</span>
                        <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          {update.time}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{update.description}</p>
                      <div className="text-[11px] text-slate-400 pt-0.5">
                        Logged by: <span className="font-medium text-slate-700">{update.author}</span> ({update.role})
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Required Emergency Assistance */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2 border-b border-slate-100 pb-3">
                <FiAlertCircle className="text-red-600" /> Required Relief Assistance
              </h3>
              <ul className="space-y-2 text-xs">
                {incident.requiredResources.map((res, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-red-50/60 text-red-900 border border-red-100 font-semibold"
                  >
                    <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Responder Team Assigned */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-sm space-y-3">
              <h3 className="font-bold text-sm uppercase tracking-wider text-red-400 flex items-center gap-2">
                <FiShield /> Assigned Response Unit
              </h3>
              <p className="text-base font-black text-white">
                {incident.responderTeamAssigned || 'Assigning field response team...'}
              </p>
              <div className="pt-3 border-t border-slate-800 text-xs text-slate-400">
                Assigned teams coordinate via government radio bands & RescueNet responder mobile portal.
              </div>
            </div>

            {/* Emergency Hotline Quick Dispatch */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                Immediate Assistance Call
              </h3>
              <div className="space-y-2 text-xs">
                <a
                  href="tel:100"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-red-50 hover:text-red-700 border border-slate-200 transition font-bold"
                >
                  <span className="flex items-center gap-2">
                    <FiPhoneCall className="text-red-600" /> Police Control
                  </span>
                  <span className="text-sm">100</span>
                </a>
                <a
                  href="tel:1155"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-red-50 hover:text-red-700 border border-slate-200 transition font-bold"
                >
                  <span className="flex items-center gap-2">
                    <FiPhoneCall className="text-red-600" /> National Operations
                  </span>
                  <span className="text-sm">1155</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
