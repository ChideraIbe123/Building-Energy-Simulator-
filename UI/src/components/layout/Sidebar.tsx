import React from 'react';
import { NavLink } from 'react-router-dom';
import { Zap, ChevronLeft, ChevronRight, UserCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

interface SidebarProps {
  items: SidebarItem[];
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ items, isOpen, toggleSidebar }) => {
  const { user, logout } = useAuth();

  return (
    <div 
      className={`${
        isOpen ? 'w-64' : 'w-20'
      } bg-gray-900 border-r border-gray-800 transition-all duration-300 relative flex flex-col`}
    >
      <div className="p-4 flex items-center gap-2">
        <Zap className="h-8 w-8 text-blue-500 flex-shrink-0" />
        <span className={`text-xl font-bold text-white transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
        }`}>
          EnergyOptim
        </span>
      </div>

      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-8 bg-gray-900 rounded-full p-1 border border-gray-800 text-gray-400 hover:text-white"
      >
        {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>

      <nav className="flex-1 px-3 py-4">
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-gray-800 text-blue-500'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            {item.icon}
            <span className={`transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
            }`}>
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-3">
          <UserCircle className="text-gray-400 flex-shrink-0" />
          {isOpen && (
            <div className="flex-1">
              <p className="text-sm font-medium text-white">{user?.name}</p>
              <button
                onClick={logout}
                className="text-sm text-gray-400 hover:text-white"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;