export type IncidentSeverity = 'Critical' | 'High' | 'Medium' | 'Low';
export type IncidentStatus = 'Active' | 'Under Investigation' | 'Responded' | 'Resolved';

export interface IncidentTimelineUpdate {
  id: string;
  time: string;
  title: string;
  description: string;
  author: string;
  role: string;
}

export interface Incident {
  id: string;
  title: string;
  category: string;
  severity: IncidentSeverity;
  status: IncidentStatus;
  location: string;
  province: string;
  district: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  reportedAt: string;
  description: string;
  affectedPeopleEstimate: number;
  reporterName?: string;
  reporterContact?: string;
  verifiedBy?: string;
  imagePlaceholderUrl?: string;
  requiredResources: string[];
  responderTeamAssigned?: string;
  updates: IncidentTimelineUpdate[];
}

export interface DisasterCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  activeCount: number;
  colorClass: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  change?: string;
  iconName: string;
  description?: string;
}

export interface EmergencyContact {
  id: string;
  organization: string;
  category: 'National Hotline' | 'Police & Security' | 'Medical & Red Cross' | 'District Authorities';
  phoneDisplay: string;
  region: string;
  description: string;
  is24_7: boolean;
}

export interface SafetyGuide {
  id: string;
  title: string;
  category: string;
  iconName: string;
  summary: string;
  beforeSteps: string[];
  duringSteps: string[];
  afterSteps: string[];
}
