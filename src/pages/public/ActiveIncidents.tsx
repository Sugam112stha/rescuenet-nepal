import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mockIncidents, mockDisasterCategories } from '../../data/mockData';
import { IncidentCard } from '../../components/public/IncidentCard';
import {
  FiSearch,
  FiFilter,
  FiAlertTriangle,
  FiMapPin,
  FiX,
  FiGrid,
  FiList,
} from 'react-icons/fi';

export const ActiveIncidents: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedSeverity, setSelectedSeverity] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  // Filtering logic
  const filteredIncidents = useMemo(() => {
    return mockIncidents.filter((incident) => {
      // Category match
      if (selectedCategory !== 'All' && incident.category !== selectedCategory) {
        return false;
      }

      // Severity match
      if (selectedSeverity !== 'All' && incident.severity !== selectedSeverity) {
        return false;
      }

      // Status match
      if (selectedStatus !== 'All' && incident.status !== selectedStatus) {
        return false;
      }

      // Search query match (location, title, description, district)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = incident.title.toLowerCase().includes(query);
        const matchesLocation = incident.location.toLowerCase().includes(query);
        const matchesDistrict = incident.district.toLowerCase().includes(query);
        const matchesDesc = incident.description.toLowerCase().includes(query);

        if (!matchesTitle && !matchesLocation && !matchesDistrict && !matchesDesc) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedSeverity, selectedStatus, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedSeverity('All');
    setSelectedStatus('All');
    setSearchQuery('');
    setSearchParams({});
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-12 border-b-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-semibold">
              <FiAlertTriangle className="text-red-400" /> Live Disaster Feed
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Active Incident <span className="text-red-500">Monitor</span>
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Explore verified disaster reports across Dharan, Itahari, Biratnagar, Kathmandu, Pokhara, and nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH CONTROL BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
          {/* Top Search & Toggle */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
            {/* Location Search Bar */}
            <div className="relative flex-1">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by location (e.g. Dharan, Sunsari, Pokhara) or keyword..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <FiX className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center justify-end gap-2 shrink-0">
              <span className="text-xs font-semibold text-slate-500 mr-1 hidden sm:inline">
                View Layout:
              </span>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 rounded-lg border text-sm font-bold flex items-center gap-1.5 transition ${
                  viewMode === 'grid'
                    ? 'bg-red-600 text-white border-red-600'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
                title="Grid View"
              >
                <FiGrid /> <span className="text-xs hidden sm:inline">Grid</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 rounded-lg border text-sm font-bold flex items-center gap-1.5 transition ${
                  viewMode === 'list'
                    ? 'bg-red-600 text-white border-red-600'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
                title="List View"
              >
                <FiList /> <span className="text-xs hidden sm:inline">List</span>
              </button>
            </div>
          </div>

          {/* Filter Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-slate-100 text-sm">
            {/* Category Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Disaster Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-800 bg-white focus:ring-2 focus:ring-red-500 focus:outline-none"
              >
                <option value="All">All Categories</option>
                {mockDisasterCategories.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Severity Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Severity Level
              </label>
              <select
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-800 bg-white focus:ring-2 focus:ring-red-500 focus:outline-none"
              >
                <option value="All">All Severities</option>
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Response Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-800 bg-white focus:ring-2 focus:ring-red-500 focus:outline-none"
              >
                <option value="All">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Under Investigation">Under Investigation</option>
                <option value="Responded">Responded</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>
          </div>

          {/* Active Filter Pills Bar */}
          {(selectedCategory !== 'All' ||
            selectedSeverity !== 'All' ||
            selectedStatus !== 'All' ||
            searchQuery) && (
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-slate-500 flex items-center gap-1">
                  <FiFilter /> Active Filters:
                </span>
                {selectedCategory !== 'All' && (
                  <span className="bg-red-50 text-red-700 font-semibold px-2.5 py-1 rounded-full border border-red-200 flex items-center gap-1">
                    Category: {selectedCategory}
                    <button onClick={() => setSelectedCategory('All')}>
                      <FiX />
                    </button>
                  </span>
                )}
                {selectedSeverity !== 'All' && (
                  <span className="bg-red-50 text-red-700 font-semibold px-2.5 py-1 rounded-full border border-red-200 flex items-center gap-1">
                    Severity: {selectedSeverity}
                    <button onClick={() => setSelectedSeverity('All')}>
                      <FiX />
                    </button>
                  </span>
                )}
                {selectedStatus !== 'All' && (
                  <span className="bg-red-50 text-red-700 font-semibold px-2.5 py-1 rounded-full border border-red-200 flex items-center gap-1">
                    Status: {selectedStatus}
                    <button onClick={() => setSelectedStatus('All')}>
                      <FiX />
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="bg-red-50 text-red-700 font-semibold px-2.5 py-1 rounded-full border border-red-200 flex items-center gap-1">
                    Query: "{searchQuery}"
                    <button onClick={() => setSearchQuery('')}>
                      <FiX />
                    </button>
                  </span>
                )}
              </div>

              <button
                onClick={clearFilters}
                className="text-red-600 font-bold hover:underline"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* INCIDENTS RESULTS FEED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-bold text-slate-700">
            Showing <span className="text-red-600 font-extrabold">{filteredIncidents.length}</span> incident reports
          </p>
        </div>

        {filteredIncidents.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <FiSearch className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No matching incidents found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Try adjusting your filter options or search term to see other disaster reports in Nepal.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 bg-red-600 text-white font-bold text-xs px-4 py-2 rounded-lg"
            >
              Clear Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIncidents.map((incident) => (
              <IncidentCard key={incident.id} incident={incident} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredIncidents.map((incident) => (
              <div
                key={incident.id}
                className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400">{incident.id}</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-100 text-red-800">
                      {incident.severity}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {incident.status}
                    </span>
                    <span className="text-xs text-slate-500">• {incident.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    <a href={`/incidents/${incident.id}`} className="hover:text-red-600 transition">
                      {incident.title}
                    </a>
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <span className="flex items-center gap-1 font-medium text-slate-800">
                      <FiMapPin className="text-red-600" /> {incident.location} ({incident.district})
                    </span>
                    <span>• Reported {incident.reportedAt}</span>
                  </div>
                </div>

                <div className="shrink-0">
                  <a
                    href={`/incidents/${incident.id}`}
                    className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg shadow transition"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
