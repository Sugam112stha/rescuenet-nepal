import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockDisasterCategories } from '../../data/mockData';
import {
  FiPlusCircle,
  FiMapPin,
  FiUploadCloud,
  FiCheckCircle,
  FiShieldOff,
} from 'react-icons/fi';
import type { IncidentSeverity } from '../../types';

export const ReportIncident: React.FC = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState<string>('Flash Flood');
  const [severity, setSeverity] = useState<IncidentSeverity>('High');
  const [province, setProvince] = useState<string>('Koshi Province');
  const [district, setDistrict] = useState<string>('Sunsari');
  const [localAddress, setLocalAddress] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [affectedCount, setAffectedCount] = useState<string>('');
  const [requiredResources, setRequiredResources] = useState<string[]>(['Evacuation Boats', 'First Aid']);
  const [reporterName, setReporterName] = useState<string>('');
  const [reporterContact, setReporterContact] = useState<string>('');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [fileUploaded, setFileUploaded] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const availableResourceOptions = [
    'Evacuation Boats',
    'Tarpaulins & Tents',
    'Clean Drinking Water',
    'Dry Food Packets',
    'First Aid & Medicines',
    'Heavy Excavator / Loader',
    'Fire Fighting Units',
  ];

  const handleResourceToggle = (item: string) => {
    if (requiredResources.includes(item)) {
      setRequiredResources(requiredResources.filter((r) => r !== item));
    } else {
      setRequiredResources([...requiredResources, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-12 border-b-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-semibold">
              <FiPlusCircle className="text-red-400" /> Public Community Emergency Form
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Report a Disaster <span className="text-red-500">Incident</span>
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Submit verified information regarding floods, landslides, fires, or structural collapse in Dharan, Itahari, Biratnagar, Pokhara, Kathmandu, or any location in Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Area */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {isSubmitted ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-lg text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
              <FiCheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Incident Report Submitted Successfully!
              </h2>
              <p className="text-sm text-slate-600 max-w-lg mx-auto">
                Your report ID <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">INC-2025-009</span> has been transmitted to the local District Emergency Operation Center (DEOC).
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-left max-w-md mx-auto text-xs space-y-2">
              <div className="font-bold text-slate-900 text-sm border-b border-slate-200 pb-2 mb-2">
                Report Summary
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Incident Category:</span>
                <span className="font-semibold text-slate-800">{category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Assigned Severity:</span>
                <span className="font-extrabold text-red-600">{severity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Location:</span>
                <span className="font-semibold text-slate-800">{localAddress || district}, {district}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => navigate('/incidents')}
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow transition"
              >
                View Active Incidents Feed
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setTitle('');
                  setDescription('');
                  setLocalAddress('');
                }}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-6 py-3 rounded-xl transition"
              >
                Submit Another Incident
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
            {/* Urgent Hotline Callout */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3.5 text-xs text-red-900">
              <FiShieldOff className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-red-800 block text-sm">Life-Threatening Emergency?</span>
                If immediate life support or rescue is required right now, please dial <a href="tel:100" className="underline font-bold">100 (Police)</a> or <a href="tel:1155" className="underline font-bold">1155 (NEOC)</a> directly while filling this form.
              </div>
            </div>

            {/* STEP 1: Incident Type & Severity */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <span className="w-7 h-7 rounded-full bg-red-600 text-white font-black text-xs flex items-center justify-center">
                  1
                </span>
                <h2 className="text-lg font-bold text-slate-900">Incident Classification</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Disaster Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 bg-white text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                  >
                    {mockDisasterCategories.map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Estimated Urgency / Severity *
                  </label>
                  <select
                    value={severity}
                    onChange={(e) => setSeverity(e.target.value as IncidentSeverity)}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 bg-white text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                  >
                    <option value="Critical">Critical (Immediate Life Threat)</option>
                    <option value="High">High (Severe Damage / Risk)</option>
                    <option value="Medium">Medium (Moderate Disruption)</option>
                    <option value="Low">Low (Minor Incident)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* STEP 2: Location Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <span className="w-7 h-7 rounded-full bg-red-600 text-white font-black text-xs flex items-center justify-center">
                  2
                </span>
                <h2 className="text-lg font-bold text-slate-900">Incident Location in Nepal</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Province *
                  </label>
                  <select
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 bg-white text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                  >
                    <option value="Koshi Province">Koshi Province</option>
                    <option value="Madhesh Province">Madhesh Province</option>
                    <option value="Bagmati Province">Bagmati Province</option>
                    <option value="Gandaki Province">Gandaki Province</option>
                    <option value="Lumbini Province">Lumbini Province</option>
                    <option value="Karnali Province">Karnali Province</option>
                    <option value="Sudurpashchim Province">Sudurpashchim Province</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    District *
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 bg-white text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                  >
                    <option value="Sunsari">Sunsari (Dharan, Itahari)</option>
                    <option value="Morang">Morang (Biratnagar)</option>
                    <option value="Kathmandu">Kathmandu</option>
                    <option value="Kaski">Kaski (Pokhara)</option>
                    <option value="Lalitpur">Lalitpur</option>
                    <option value="Bhaktapur">Bhaktapur</option>
                    <option value="Chitwan">Chitwan</option>
                    <option value="Jhapa">Jhapa</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Specific Local Address / Ward No. / Landmark *
                </label>
                <input
                  type="text"
                  required
                  value={localAddress}
                  onChange={(e) => setLocalAddress(e.target.value)}
                  placeholder="e.g. Ward No. 4 near Budhi Khola Bridge, Itahari"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>

              {/* Map Location Pin Picker Placeholder */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-700">
                  <FiMapPin className="text-red-600" /> Map Coordinates Selection
                </div>
                <p className="text-[11px] text-slate-500">
                  GPS location automatically tagged: <span className="font-mono text-slate-800 font-bold">26.6646° N, 87.2718° E</span>
                </p>
              </div>
            </div>

            {/* STEP 3: Description & Immediate Needs */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <span className="w-7 h-7 rounded-full bg-red-600 text-white font-black text-xs flex items-center justify-center">
                  3
                </span>
                <h2 className="text-lg font-bold text-slate-900">Description & Immediate Relief Needs</h2>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Incident Headline / Title *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Heavy Flash Flooding Submerging Houses in Ward 4"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Detailed Situation Description *
                </label>
                <textarea
                  rows={4}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe what happened, current hazards, water levels, road blockages, trapped victims, etc."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Estimated Affected People
                  </label>
                  <input
                    type="number"
                    value={affectedCount}
                    onChange={(e) => setAffectedCount(e.target.value)}
                    placeholder="e.g. 50"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Resource checklist */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Required Emergency Assistance Items
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {availableResourceOptions.map((item) => {
                    const isSelected = requiredResources.includes(item);
                    return (
                      <button
                        type="button"
                        key={item}
                        onClick={() => handleResourceToggle(item)}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition ${
                          isSelected
                            ? 'bg-red-600 text-white border-red-600'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* STEP 4: Photo / Evidence Upload Placeholder */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <span className="w-7 h-7 rounded-full bg-red-600 text-white font-black text-xs flex items-center justify-center">
                  4
                </span>
                <h2 className="text-lg font-bold text-slate-900">Photo / Video Evidence</h2>
              </div>

              <div
                onClick={() => setFileUploaded(!fileUploaded)}
                className="cursor-pointer border-2 border-dashed border-slate-300 hover:border-red-500 rounded-2xl p-6 text-center space-y-2 bg-slate-50 hover:bg-red-50/40 transition"
              >
                <FiUploadCloud className="w-8 h-8 text-slate-400 mx-auto" />
                <p className="text-xs font-bold text-slate-700">
                  {fileUploaded ? '✓ Photo "flood_damage_ward4.jpg" Attached' : 'Click to attach photos or ground evidence'}
                </p>
                <p className="text-[11px] text-slate-500">
                  Supports JPG, PNG up to 10MB. Clear photos speed up government verification.
                </p>
              </div>
            </div>

            {/* STEP 5: Reporter Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-red-600 text-white font-black text-xs flex items-center justify-center">
                    5
                  </span>
                  <h2 className="text-lg font-bold text-slate-900">Reporter Contact Details</h2>
                </div>

                <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="rounded text-red-600 focus:ring-red-500"
                  />
                  <span>Report Anonymously</span>
                </label>
              </div>

              {!isAnonymous && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required={!isAnonymous}
                      value={reporterName}
                      onChange={(e) => setReporterName(e.target.value)}
                      placeholder="e.g. Ramesh Adhikari"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Contact Number *
                    </label>
                    <input
                      type="tel"
                      required={!isAnonymous}
                      value={reporterContact}
                      onChange={(e) => setReporterContact(e.target.value)}
                      placeholder="e.g. +977-980XXXXXXX"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                By submitting, you declare that information provided is truthful to the best of your knowledge.
              </p>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg transition transform active:scale-95"
              >
                <FiPlusCircle className="text-lg" /> Submit Emergency Incident Report
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
};
