import React from 'react';
import { Clock, ArrowRight, Trash2 } from 'lucide-react';
import { Scenario } from '../../types/scenario';
import { formatDate } from '../../utils/date';

interface ScenarioCardProps {
  scenario: Scenario;
  onClick: (id: string) => void;
  onDelete: (id: string) => void;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario, onClick, onDelete }) => {
  const statusColors = {
    running: 'bg-blue-900 text-blue-300',
    completed: 'bg-green-900 text-green-300',
    failed: 'bg-red-900 text-red-300',
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(scenario.id);
  };

  return (
    <div 
      onClick={() => onClick(scenario.id)}
      className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors cursor-pointer group relative"
    >
      <button
        onClick={handleDelete}
        className="absolute top-4 right-4 p-2 text-gray-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Trash2 size={16} />
      </button>

      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-white">{scenario.name}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[scenario.status]}`}>
          {scenario.status}
        </span>
      </div>
      
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{scenario.description}</p>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Clock size={16} />
          <span>{formatDate(scenario.createdAt)}</span>
        </div>
        <ArrowRight size={16} className="text-gray-600" />
      </div>
    </div>
  );
};

export default ScenarioCard;