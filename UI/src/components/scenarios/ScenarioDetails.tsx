import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Building2, MapPin, Calendar, Activity } from 'lucide-react';
import ChatPanel from '../chat/ChatPanel';

const ScenarioDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - this would typically come from an API
  const scenario = {
    id,
    name: 'HVAC Optimization Winter 2024',
    description: 'Optimize HVAC settings for winter conditions to reduce energy consumption while maintaining comfort levels.',
    status: 'completed',
    createdAt: '2024-02-20T10:00:00Z',
    buildingSpecs: {
      name: 'Main Office Building',
      location: 'New York, NY',
      squareFootage: 50000,
      buildingType: 'Office Building',
    },
    results: {
      energySavings: '25%',
      costReduction: '$12,000/year',
      carbonReduction: '30 tons CO2/year',
    },
  };

  return (
    <div className="flex h-full">
      <div className="flex-1 p-6 overflow-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{scenario.name}</h1>
                <p className="text-gray-500 mt-1">{scenario.description}</p>
              </div>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                {scenario.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="flex items-center gap-3">
                <Building2 className="text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Building</p>
                  <p className="font-medium">{scenario.buildingSpecs.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{scenario.buildingSpecs.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Created</p>
                  <p className="font-medium">
                    {new Date(scenario.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Activity className="text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Building Type</p>
                  <p className="font-medium">{scenario.buildingSpecs.buildingType}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Energy Savings</h3>
              <p className="text-3xl font-bold text-green-600">{scenario.results.energySavings}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost Reduction</h3>
              <p className="text-3xl font-bold text-blue-600">{scenario.results.costReduction}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Carbon Reduction</h3>
              <p className="text-3xl font-bold text-purple-600">{scenario.results.carbonReduction}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-96">
        <ChatPanel />
      </div>
    </div>
  );
};

export default ScenarioDetails;