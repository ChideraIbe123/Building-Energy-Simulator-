import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Scenario } from '../../types/scenario';
import ScenarioCard from './ScenarioCard';
import { useNavigate } from 'react-router-dom';
import DeleteConfirmDialog from '../common/DeleteConfirmDialog';

interface ScenarioListProps {
  scenarios: Scenario[];
  onDelete: (id: string) => void;
}

const ScenarioList: React.FC<ScenarioListProps> = ({ scenarios, onDelete }) => {
  const navigate = useNavigate();
  const [deleteDialog, setDeleteDialog] = useState<{
    isOpen: boolean;
    scenarioId: string | null;
  }>({
    isOpen: false,
    scenarioId: null,
  });

  const handleScenarioClick = (id: string) => {
    navigate(`/scenarios/${id}`);
  };

  const handleDeleteClick = (id: string) => {
    setDeleteDialog({
      isOpen: true,
      scenarioId: id,
    });
  };

  const handleConfirmDelete = () => {
    if (deleteDialog.scenarioId) {
      onDelete(deleteDialog.scenarioId);
    }
  };

  return (
    <>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <button 
            onClick={() => navigate('/scenarios/new')}
            className="h-full min-h-[200px] border-2 border-dashed border-gray-700 rounded-lg 
              flex flex-col items-center justify-center gap-2 text-gray-400 
              hover:border-blue-500 hover:text-blue-500 transition-colors bg-gray-800 bg-opacity-50"
          >
            <Plus size={24} />
            <span>Create New Scenario</span>
          </button>
          
          {scenarios.map((scenario) => (
            <ScenarioCard
              key={scenario.id}
              scenario={scenario}
              onClick={handleScenarioClick}
              onDelete={() => handleDeleteClick(scenario.id)}
            />
          ))}
        </div>
      </div>

      <DeleteConfirmDialog
        isOpen={deleteDialog.isOpen}
        onClose={() => setDeleteDialog({ isOpen: false, scenarioId: null })}
        onConfirm={handleConfirmDelete}
        title="Delete Scenario"
        message="Are you sure you want to delete this scenario? This action cannot be undone."
      />
    </>
  );
};

export default ScenarioList;