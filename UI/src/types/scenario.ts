export interface Scenario {
  id: string;
  name: string;
  description: string;
  status: 'running' | 'completed' | 'failed';
  createdAt: string;
  updatedAt: string;
  systems: string[];
}