import React, { useState } from 'react';
import { LayoutDashboard, UserCircle } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './components/Dashboard';
import { NewScenario, ScenarioDetails } from './components/scenarios';
import LoginPage from './components/auth/LoginPage';
import AccountSettings from './components/account/AccountSettings';

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const AppContent: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { isAuthenticated } = useAuth();

  const sidebarItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/' },
    { icon: <UserCircle size={20} />, label: 'Account', path: '/account' },
  ];

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <div className="flex h-screen bg-gray-950">
      <Sidebar
        items={sidebarItems}
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/account" element={<PrivateRoute element={<AccountSettings />} />} />
          <Route
            path="/scenarios/new"
            element={<PrivateRoute element={<NewScenario />} />}
          />
          <Route
            path="/scenarios/:id"
            element={<PrivateRoute element={<ScenarioDetails />} />}
          />
        </Routes>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

export default App;