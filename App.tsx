import React, { useState, useEffect } from 'react';
import { SectionType } from './types';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Modal from './components/Modal';
import Footer from './components/Footer';
import EducationSection from './components/sections/EducationSection';
import VisualsSection from './components/sections/VisualsSection';
import DesignSection from './components/sections/DesignSection';
import { Settings } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>(SectionType.EDUCATION);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleSettings = () => setIsSettingsOpen(!isSettingsOpen);

  // Scroll to section handler
  const handleNavClick = (section: SectionType) => {
    setActiveSection(section);
    setIsSidebarOpen(false);
    
    let elementId = '';
    switch (section) {
      case SectionType.EDUCATION: elementId = 'education'; break;
      case SectionType.VISUALS: elementId = 'visuals'; break;
      case SectionType.DESIGN: elementId = 'design'; break;
      default: return;
    }

    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll Spy: Update active section based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'education') setActiveSection(SectionType.EDUCATION);
            if (entry.target.id === 'visuals') setActiveSection(SectionType.VISUALS);
            if (entry.target.id === 'design') setActiveSection(SectionType.DESIGN);
          }
        });
      },
      { 
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "-10% 0px -50% 0px" // Adjust viewport trigger area
      }
    );

    const sections = ['education', 'visuals', 'design'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className="min-h-screen text-white font-sans transition-colors duration-500"
      style={{
        background: 'radial-gradient(circle, rgba(32, 40, 117, 1) 0%, rgba(148, 187, 233, 1) 100%)',
        backgroundAttachment: 'fixed' 
      }}
    >
      {/* Navigation Layer */}
      <Header 
        onOpenSettings={toggleSettings} 
        onOpenSidebar={toggleSidebar} 
        activeSection={activeSection}
      />

      {/* Sidebar Navigation */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        activeSection={activeSection}
        onSelectSection={handleNavClick}
      />

      {/* Settings Modal */}
      <Modal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
        title="Tentang Aplikasi"
      >
        <div className="space-y-4">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-600 rounded-full bg-opacity-20">
              <Settings className="w-8 h-8 text-blue-200" />
            </div>
          </div>
          <p className="text-gray-200 leading-relaxed text-center">
            Aplikasi web ini dirancang sebagai media presentasi interaktif untuk poster digital 
            <span className="font-bold text-gold"> "Kreativitas dalam Genggaman"</span>.
          </p>
          <p className="text-sm text-gray-400 text-center">
            Gunakan menu navigasi atau scroll ke bawah untuk menjelajahi materi edukasi, analisis visual, dan teknis desain.
          </p>
          <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10 text-center">
             <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Versi</p>
             <p className="font-semibold">1.0.0 (UAS Edition)</p>
          </div>
        </div>
      </Modal>

      {/* Main Content Area - Single Page Layout */}
      <main className="max-w-7xl mx-auto">
        
        {/* Section 1: Education */}
        <section 
          id="education" 
          className="min-h-screen pt-28 px-4 sm:px-6 lg:px-8 scroll-mt-20 animate-fade-in-up"
        >
          <EducationSection />
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"></div>

        {/* Section 2: Visuals */}
        <section 
          id="visuals" 
          className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 animate-fade-in-up delay-100"
        >
          <VisualsSection />
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"></div>

        {/* Section 3: Design */}
        <section 
          id="design" 
          className="min-h-screen pt-24 pb-32 px-4 sm:px-6 lg:px-8 scroll-mt-20 animate-fade-in-up delay-200"
        >
          <DesignSection />
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;