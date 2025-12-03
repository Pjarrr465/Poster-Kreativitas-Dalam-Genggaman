import React from 'react';
import { X, BookOpen, Image as ImageIcon, PenTool } from 'lucide-react';
import { SectionType } from '../types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: SectionType;
  onSelectSection: (section: SectionType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, activeSection, onSelectSection }) => {
  const menuItems = [
    { type: SectionType.EDUCATION, icon: <BookOpen className="w-5 h-5" />, label: "Edukasi & Materi" },
    { type: SectionType.VISUALS, icon: <ImageIcon className="w-5 h-5" />, label: "Visual Breakdown" },
    { type: SectionType.DESIGN, icon: <PenTool className="w-5 h-5" />, label: "Design Insight" },
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-xl border-l border-white/10 z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl font-bold text-white">Navigasi</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <nav className="flex-1 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.type}
                onClick={() => onSelectSection(item.type)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group ${
                  activeSection === item.type 
                    ? 'bg-blue-600/30 border border-blue-400/50 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                    : 'hover:bg-white/5 text-gray-300 hover:text-white border border-transparent'
                }`}
              >
                <div className={`${activeSection === item.type ? 'text-gold' : 'text-gray-400 group-hover:text-white'}`}>
                  {item.icon}
                </div>
                <span className="font-medium tracking-wide">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-white/10">
            <p className="text-xs text-center text-gray-500">
              &copy; 2024 Project Poster Digital
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;