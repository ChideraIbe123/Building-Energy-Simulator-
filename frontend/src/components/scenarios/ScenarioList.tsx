import React from 'react';
import { Plus } from 'lucide-react';
import { Scenario } from '../../types/scenario';
import ScenarioCard from './ScenarioCard';
import { useNavigate } from 'react-router-dom';

interface ScenarioListProps {
  scenarios: Scenario[];
}

const ScenarioList: React.FC<ScenarioListProps> = ({ scenarios }) => {
  const navigate = useNavigate();

  const handleScenarioClick = (id: string) => {
    navigate(`/scenarios/${id}`);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <button 
          onClick={() => navigate('/scenarios/new')}
          className="h-full min-h-[200px] border-2 border-dashed border-gray-300 rounded-lg 
            flex flex-col items-center justify-center gap-2 text-gray-500 
            hover:border-blue-500 hover:text-blue-500 transition-colors"
        >
          <Plus size={24} />
          <span>Create New Scenario</span>
        </button>
        
        {scenarios.map((scenario) => (
          <ScenarioCard
            key={scenario.id}
            scenario={scenario}
            onClick={handleScenarioClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ScenarioList;