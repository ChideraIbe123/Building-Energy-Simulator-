import React from 'react';
import { Scenario } from '../types/scenario';
import ScenarioList from './scenarios/ScenarioList';

const Dashboard: React.FC = () => {
  // Mock data - this would typically come from an API
  const scenarios: Scenario[] = [
    {
      id: '1',
      name: 'HVAC Optimization Winter 2024',
      description: 'Optimize HVAC settings for winter conditions to reduce energy consumption while maintaining comfort levels.',
      status: 'completed',
      createdAt: '2024-02-20T10:00:00Z',
      updatedAt: '2024-02-20T14:30:00Z',
      systems: ['HVAC', 'Temperature Control']
    },
    {
      id: '2',
      name: 'Lighting Schedule Analysis',
      description: 'Analyze and optimize lighting schedules based on occupancy patterns and natural light availability.',
      status: 'running',
      createdAt: '2024-02-21T09:00:00Z',
      updatedAt: '2024-02-21T09:00:00Z',
      systems: ['Lighting']
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">View and manage your energy optimization scenarios</p>
        </div>
      </div>

      <ScenarioList scenarios={scenarios} />
    </div>
  );
};

export default Dashboard;