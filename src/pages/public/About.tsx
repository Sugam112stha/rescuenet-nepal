import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiShield,
  FiTarget,
  FiUsers,
  FiCheckCircle,
  FiMapPin,
  FiPlusCircle,
  FiCpu,
  FiActivity,
  FiGlobe,
} from 'react-icons/fi';

export const About: React.FC = () => {
  const keyFeatures = [
    {
      icon: <FiActivity className="w-6 h-6 text-red-600" />,
      title: 'Real-Time Incident Reporting',
      description:
        'Citizens can rapidly submit disaster occurrences with geolocation, media evidence, and immediate critical needs.',
    },
    {
      icon: <FiMapPin className="w-6 h-6 text-red-600" />,
      title: 'Geographic Mapping & Alerting',
      description:
        'Interactive district-level mapping helps visualize hazard hot-spots across Koshi, Bagmati, Gandaki, and all 7 provinces.',
    },
    {
      icon: <FiUsers className="w-6 h-6 text-red-600" />,
      title: 'Responder Dispatch Coordination',
      description:
        'Direct link between municipal emergency operation centers, Nepal Police, Armed Police Force (APF), and local Red Cross units.',
    },
    {
      icon: <FiCpu className="w-6 h-6 text-red-600" />,
      title: 'Transparent Timeline Tracking',
      description:
        'Verification status and progress logs are publicly updated to build trust and prevent duplicate dispatch efforts.',
    },
  ];

  const coreValues = [
    {
      title: 'Community Empowerment',
      desc: 'Putting disaster reporting tools into the hands of local residents and ward leaders who are on the frontlines.',
    },
    {
      title: 'Rapid Action & Neutrality',
      desc: 'Prioritizing life-saving interventions based purely on objective severity and vulnerable population metrics.',
    },
    {
      title: 'Inter-Agency Synergy',
      desc: 'Bridging communication gaps between government security agencies, non-profits, and volunteer networks.',
    },
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 border-b-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-semibold">
              <FiShield /> Final Year Project (FYP) Concept
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              About <span className="text-red-500">RescueNet Nepal</span>
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Enhancing community resilience and disaster response coordination through real-time web technology in Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Background */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h2 className="text-xs font-bold text-red-600 uppercase tracking-widest">
              Background & Motivation
            </h2>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
              Addressing Monsoonal Hazards & Geographic Isolation in Nepal
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Nepal’s unique topography makes it highly vulnerable to natural disasters including monsoon flash floods in the Terai plains (such as Itahari and Biratnagar), slope instability and landslides along mountain highways (such as Dharan and Bhedetar), and seismic tremors.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              During emergencies, delayed information flow between affected citizens and response authorities often creates bottlenecks. <strong>RescueNet Nepal</strong> was designed to serve as a centralized, community-accessible digital platform that streamlines incident reporting and resource allocation.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-slate-800">
              <div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-lg">
                <FiCheckCircle className="text-emerald-600" /> 77 Districts Supported
              </div>
              <div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-lg">
                <FiCheckCircle className="text-emerald-600" /> Multi-Stakeholder Portal
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-600 text-white rounded-xl shrink-0">
                <FiTarget className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Our Mission</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To minimize disaster loss of life and property across Nepal by providing an accessible, transparent, and rapid incident response network that bridges local communities with emergency services.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-t border-slate-200 pt-6">
              <div className="p-3 bg-slate-900 text-white rounded-xl shrink-0">
                <FiGlobe className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Our Vision</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A disaster-resilient Nepal where every citizen can instantly report hazards and receive timely assistance through synchronized digital coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY SYSTEM FEATURES */}
      <section className="bg-slate-50 py-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">
              System Capabilities
            </h2>
            <p className="text-2xl font-black text-slate-900">
              Key Features of RescueNet Nepal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3"
              >
                <div className="p-2.5 rounded-lg bg-red-50 w-fit">{feature.icon}</div>
                <h3 className="font-bold text-slate-900 text-base">{feature.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE GUIDING VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">
            Our Guiding Principles
          </h2>
          <p className="text-2xl font-black text-slate-900">
            Core Values & Ethics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreValues.map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-slate-900 text-red-500 font-black text-sm flex items-center justify-center mx-auto mb-3">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-slate-900 text-base">{val.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Ready to Report a Live Incident?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Your report helps dispatch essential relief resources to affected communities in Nepal.
            </p>
          </div>
          <Link
            to="/report"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition"
          >
            <FiPlusCircle /> Submit Emergency Report
          </Link>
        </div>
      </section>
    </div>
  );
};
