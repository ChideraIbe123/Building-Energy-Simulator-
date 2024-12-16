import React from 'react';
import { LayoutDashboard, Activity, Lightbulb, Settings, HelpCircle, LineChart } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const sidebarItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/' },
    { icon: <Activity size={20} />, label: 'Scenarios', path: '/scenarios' },
    { icon: <LineChart size={20} />, label: 'Analysis', path: '/analysis' },
    { icon: <Lightbulb size={20} />, label: 'Recommendations', path: '/recommendations' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
    { icon: <HelpCircle size={20} />, label: 'Help', path: '/help' },
  ];

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar items={sidebarItems} />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Other routes will be added as we build them */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;