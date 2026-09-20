import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiClock, FiUsers, FiArrowRight } from 'react-icons/fi';
import type { Incident } from '../../types';

interface IncidentCardProps {
  incident: Incident;
}

export const IncidentCard: React.FC<IncidentCardProps> = ({ incident }) => {
  const getSeverityBadge = (severity: Incident['severity']) => {
    switch (severity) {
      case 'Critical':
        return 'bg-red-100 text-red-800 border-red-300 font-extrabold animate-pulse';
      case 'High':
        return 'bg-orange-100 text-orange-800 border-orange-300 font-bold';
      case 'Medium':
        return 'bg-amber-100 text-amber-800 border-amber-300 font-bold';
      case 'Low':
        return 'bg-blue-100 text-blue-800 border-blue-300 font-medium';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  const getStatusBadge = (status: Incident['status']) => {
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
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden">
      <div className="p-5">
        {/* Badges Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className={`text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${getSeverityBadge(incident.severity)}`}>
            {incident.severity} Severity
          </span>
          <span className={`text-xs font-bold px-2.5 py-0.5 rounded-md ${getStatusBadge(incident.status)}`}>
            {incident.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 hover:text-red-600 transition-colors mb-2 line-clamp-2 leading-snug">
          <Link to={`/incidents/${incident.id}`}>{incident.title}</Link>
        </h3>

        {/* Location & Time */}
        <div className="space-y-1.5 text-xs text-slate-600 mb-3">
          <div className="flex items-center gap-1.5 font-semibold text-slate-800">
            <FiMapPin className="text-red-600 shrink-0" />
            <span>{incident.location} ({incident.district})</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            <FiClock className="text-slate-400 shrink-0" />
            <span>Reported {incident.reportedAt}</span>
          </div>
        </div>

        {/* Description Snippet */}
        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
          {incident.description}
        </p>

        {/* Affected & Verification */}
        <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-100 text-slate-500">
          <span className="flex items-center gap-1 font-medium">
            <FiUsers className="text-slate-400" /> ~{incident.affectedPeopleEstimate} affected
          </span>
          <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono text-[11px]">
            {incident.category}
          </span>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="bg-slate-50 px-5 py-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] font-mono text-slate-500">{incident.id}</span>
        <Link
          to={`/incidents/${incident.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 hover:underline"
        >
          View Details <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};
