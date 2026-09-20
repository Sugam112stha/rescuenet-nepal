import React from 'react';
import { FiTrendingUp, FiDroplet, FiActivity, FiZap, FiCloudRain } from 'react-icons/fi';
import type { DisasterCategory } from '../../types';

interface DisasterCardProps {
  category: DisasterCategory;
  onClick?: () => void;
}

export const DisasterCard: React.FC<DisasterCardProps> = ({ category, onClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FiMountain':
        return <FiTrendingUp className="w-6 h-6" />;
      case 'FiDroplet':
        return <FiDroplet className="w-6 h-6" />;
      case 'FiActivity':
        return <FiActivity className="w-6 h-6" />;
      case 'FiFlame':
        return <FiZap className="w-6 h-6" />;
      case 'FiCloudRain':
        return <FiCloudRain className="w-6 h-6" />;
      default:
        return <FiTrendingUp className="w-6 h-6" />;
    }
  };

  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-red-300 transition-all cursor-pointer flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="p-3 rounded-lg bg-slate-100 text-slate-800 group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
            {getIcon(category.iconName)}
          </div>
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${category.colorClass}`}>
            {category.activeCount} Active
          </span>
        </div>
        <h3 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-1">
          {category.name}
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          {category.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-red-600 group-hover:translate-x-0.5 transition-transform">
        <span>View Incidents</span>
        <span>→</span>
      </div>
    </div>
  );
};
