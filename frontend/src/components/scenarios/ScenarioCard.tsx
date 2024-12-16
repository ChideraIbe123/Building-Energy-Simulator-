import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Scenario } from '../../types/scenario';
import { formatDate } from '../../utils/date';

interface ScenarioCardProps {
  scenario: Scenario;
  onClick: (id: string) => void;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario, onClick }) => {
  const statusColors = {
    running: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
    failed: 'bg-red-100 text-red-800',
  };

  return (
    <div 
      onClick={() => onClick(scenario.id)}
      className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-gray-900">{scenario.name}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[scenario.status]}`}>
          {scenario.status}
        </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{scenario.description}</p>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Clock size={16} />
          <span>{formatDate(scenario.createdAt)}</span>
        </div>
        <ArrowRight size={16} className="text-gray-400" />
      </div>
    </div>
  );
};

export default ScenarioCard;