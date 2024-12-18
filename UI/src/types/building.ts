export interface BuildingSpecs {
  name: string;
  location: string;
  squareFootage: number;
  floors: number;
  buildingType: string;
  constructionYear: number;
  hvacSystem: string;
  lightingSystem: string;
  occupancyHours: {
    start: string;
    end: string;
  };
}

export const buildingTypes = [
  'Office Building',
  'Educational Facility',
  'Healthcare Facility',
  'Retail Space',
  'Industrial Facility',
  'Data Center',
  'Residential Complex',
  'Mixed Use',
] as const;