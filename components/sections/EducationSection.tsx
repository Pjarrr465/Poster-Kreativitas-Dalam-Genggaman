import React from 'react';
import { Lightbulb, Smartphone, Globe } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Title */}
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300 drop-shadow-sm">
          Masa Depan Edukasi
        </h2>
        <p className="text-lg text-blue-200 max-w-2xl mx-auto">
          Bagaimana teknologi Augmented Reality (AR) dan perangkat pintar mengubah cara kita belajar dan berkreasi.
        </p>
      </div>

      {/* Main Content Card */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
        <h3 className="text-2xl font-bold text-gold mb-6 border-b border-white/10 pb-4">
          Esensi "Kreativitas dalam Genggaman"
        </h3>
        <p className="text-gray-100 leading-relaxed mb-6 text-lg">
          Poster ini mengilustrasikan sebuah visi di mana batasan antara dunia fisik dan digital semakin tipis. 
          Siswa tidak lagi terbatas pada buku teks statis, melainkan memiliki akses ke dunia pengetahuan 
          yang imersif tepat di ujung jari mereka.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-blue-900/40 p-6 rounded-xl border border-blue-500/30 hover:bg-blue-800/50 transition-colors">
            <Smartphone className="w-10 h-10 text-cyan-400 mb-4" />
            <h4 className="font-bold text-white mb-2">Aksesibilitas</h4>
            <p className="text-sm text-gray-300">Belajar kapan saja dan di mana saja hanya dengan menggunakan perangkat smartphone.</p>
          </div>
          
          <div className="bg-blue-900/40 p-6 rounded-xl border border-blue-500/30 hover:bg-blue-800/50 transition-colors">
            <Lightbulb className="w-10 h-10 text-yellow-400 mb-4" />
            <h4 className="font-bold text-white mb-2">Inovasi</h4>
            <p className="text-sm text-gray-300">Memicu ide-ide liar dan kreativitas tanpa batas melalui tools digital modern.</p>
          </div>

          <div className="bg-blue-900/40 p-6 rounded-xl border border-blue-500/30 hover:bg-blue-800/50 transition-colors">
            <Globe className="w-10 h-10 text-purple-400 mb-4" />
            <h4 className="font-bold text-white mb-2">Konektivitas</h4>
            <p className="text-sm text-gray-300">Terhubung dengan informasi global dan kolaborasi tanpa batas ruang.</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-6 border border-white/10">
        <blockquote className="text-center italic text-blue-100 text-lg">
          "Technology is not just a tool. It can give learners a voice that they may not have had before."
        </blockquote>
      </div>
    </div>
  );
};

export default EducationSection;