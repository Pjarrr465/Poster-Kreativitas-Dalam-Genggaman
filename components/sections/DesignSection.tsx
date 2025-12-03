import React from 'react';
import InteractiveSlider from '../InteractiveSlider';
import { Palette, Layout, Type } from 'lucide-react';

const DesignSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in pb-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Design Insight</h2>
        <p className="text-blue-200">Bedah teknis dan filosofi visual di balik poster.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Color Palette */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-300">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Warna</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[rgba(32,40,117,1)] border border-white/20 shadow-lg"></div>
              <div>
                <p className="text-white font-mono text-sm">#202875</p>
                <p className="text-xs text-gray-400">Deep Blue Background</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[rgba(148,187,233,1)] border border-white/20 shadow-lg"></div>
              <div>
                <p className="text-white font-mono text-sm">#94BBE9</p>
                <p className="text-xs text-gray-400">Light Blue Gradient</p>
              </div>
            </div>
             <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFD700] border border-white/20 shadow-lg"></div>
              <div>
                <p className="text-white font-mono text-sm">#FFD700</p>
                <p className="text-xs text-gray-400">Golden Highlights</p>
              </div>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/20 rounded-lg text-purple-300">
              <Type className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Tipografi</h3>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-4xl font-bold text-white mb-2 font-sans">Aa</p>
              <p className="text-sm font-semibold text-white">Poppins / Sans-serif</p>
              <p className="text-xs text-gray-400 mt-1">
                Modern, geometric, dan clean. Digunakan untuk headline agar mudah terbaca dari kejauhan dengan kontras tinggi.
              </p>
            </div>
            <div className="h-px bg-white/10"></div>
            <div>
               <p className="text-sm text-gray-300 italic">
                 "Kreativitas dalam Genggaman"
               </p>
               <p className="text-xs text-gray-500 mt-1">
                 Style: Bold, Uppercase, Drop Shadow.
               </p>
            </div>
          </div>
        </div>

        {/* Layout */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-500/20 rounded-lg text-green-300">
              <Layout className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Layout</h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            <strong className="text-white">Central Composition:</strong> Objek utama diletakkan di tengah untuk fokus maksimal.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            <strong className="text-white">Radial Balance:</strong> Elemen pendukung menyebar dari pusat ke arah luar, menciptakan efek 'ledakan' kreativitas.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            <strong className="text-white">Glassmorphism:</strong> Panel transparan memberikan kesan futuristik tanpa menutupi background.
          </p>
        </div>
      </div>

      <InteractiveSlider />
    </div>
  );
};

export default DesignSection;