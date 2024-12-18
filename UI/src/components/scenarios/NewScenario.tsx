import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BuildingSpecs, buildingTypes } from '../../types/building';

const NewScenario: React.FC = () => {
  const navigate = useNavigate();
  const [buildingSpecs, setBuildingSpecs] = useState<BuildingSpecs>({
    name: '',
    location: '',
    squareFootage: 0,
    floors: 1,
    buildingType: '',
    constructionYear: new Date().getFullYear(),
    hvacSystem: '',
    lightingSystem: '',
    occupancyHours: {
      start: '09:00',
      end: '17:00',
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Building specs:', buildingSpecs);
    // Navigate to the dashboard after submission
    navigate('/');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setBuildingSpecs(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof BuildingSpecs],
          [child]: value,
        },
      }));
    } else {
      setBuildingSpecs(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft size={20} />
        Back to Dashboard
      </button>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Create New Scenario</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Building Name
              </label>
              <input
                type="text"
                name="name"
                value={buildingSpecs.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={buildingSpecs.location}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Square Footage
              </label>
              <input
                type="number"
                name="squareFootage"
                value={buildingSpecs.squareFootage}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Floors
              </label>
              <input
                type="number"
                name="floors"
                value={buildingSpecs.floors}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Building Type
              </label>
              <select
                name="buildingType"
                value={buildingSpecs.buildingType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select building type</option>
                {buildingTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Construction Year
              </label>
              <input
                type="number"
                name="constructionYear"
                value={buildingSpecs.constructionYear}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                HVAC System Type
              </label>
              <input
                type="text"
                name="hvacSystem"
                value={buildingSpecs.hvacSystem}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Lighting System Type
              </label>
              <input
                type="text"
                name="lightingSystem"
                value={buildingSpecs.lightingSystem}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Occupancy Start Time
              </label>
              <input
                type="time"
                name="occupancyHours.start"
                value={buildingSpecs.occupancyHours.start}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Occupancy End Time
              </label>
              <input
                type="time"
                name="occupancyHours.end"
                value={buildingSpecs.occupancyHours.end}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-4 py-2 text-gray-700 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Create Scenario
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewScenario;