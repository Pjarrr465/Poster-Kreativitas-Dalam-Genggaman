import React from 'react';
import { Settings, Menu } from 'lucide-react';
import { SectionType } from '../types';

interface HeaderProps {
  onOpenSettings: () => void;
  onOpenSidebar: () => void;
  activeSection: SectionType;
}

const Header: React.FC<HeaderProps> = ({ onOpenSettings, onOpenSidebar, activeSection }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-deepBlue/30 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left: Settings */}
          <button 
            onClick={onOpenSettings}
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-white group"
            aria-label="Settings"
          >
            <Settings className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
          </button>

          {/* Center: Title (Visible on larger screens or simplified on mobile) */}
          <div className="text-center">
             <h1 className="text-lg font-bold tracking-wider text-white uppercase hidden sm:block">
               Kreativitas <span className="text-gold">Dalam Genggaman</span>
             </h1>
             <p className="text-xs text-blue-200 tracking-widest uppercase sm:hidden">
               {activeSection}
             </p>
          </div>

          {/* Right: Hamburger */}
          <button 
            onClick={onOpenSidebar}
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
            aria-label="Menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;