import React from 'react';
import { FiAlertTriangle, FiCheckCircle, FiUsers, FiMapPin } from 'react-icons/fi';
import type { Stat } from '../../types';

interface StatCardProps {
  stat: Stat;
}

export const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'FiAlertTriangle':
        return <FiAlertTriangle className="w-6 h-6 text-red-600" />;
      case 'FiCheckCircle':
        return <FiCheckCircle className="w-6 h-6 text-emerald-600" />;
      case 'FiUsers':
        return <FiUsers className="w-6 h-6 text-blue-600" />;
      case 'FiMapPin':
        return <FiMapPin className="w-6 h-6 text-amber-600" />;
      default:
        return <FiAlertTriangle className="w-6 h-6 text-red-600" />;
    }
  };

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
          {stat.label}
        </span>
        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
          {getIcon(stat.iconName)}
        </div>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-black text-slate-900 tracking-tight">
          {stat.value}
        </span>
        {stat.change && (
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
            {stat.change}
          </span>
        )}
      </div>
      {stat.description && (
        <p className="mt-2 text-xs text-slate-500 leading-normal">
          {stat.description}
        </p>
      )}
    </div>
  );
};
