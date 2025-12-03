import React, { useState } from 'react';
import { Smartphone, Glasses, Layers, Users } from 'lucide-react';

const VisualsSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const elements = [
    {
      id: 1,
      title: "VR/AR Headset",
      icon: <Glasses className="w-8 h-8 text-cyan-300" />,
      desc: "Simbol imersi total. Siswa yang melayang menggunakan headset merepresentasikan kebebasan imajinasi yang lepas dari gravitasi (keterbatasan fisik).",
      color: "from-cyan-500/20 to-blue-600/20"
    },
    {
      id: 2,
      title: "Smartphone Center",
      icon: <Smartphone className="w-8 h-8 text-gold" />,
      desc: "Elemen sentral di tangan karakter utama. Menunjukkan bahwa segala kekuatan teknologi ini berada dalam kendali (genggaman) siswa itu sendiri.",
      color: "from-yellow-500/20 to-orange-600/20"
    },
    {
      id: 3,
      title: "Holographic Interface",
      icon: <Layers className="w-8 h-8 text-purple-300" />,
      desc: "Layar-layar melayang yang menampilkan data sosial, peta, dan chart. Visualisasi dari informasi yang transparan dan mudah diakses.",
      color: "from-purple-500/20 to-pink-600/20"
    },
    {
      id: 4,
      title: "Floating Students",
      icon: <Users className="w-8 h-8 text-green-300" />,
      desc: "Posisi melayang menggambarkan dinamisme dan fleksibilitas. Generasi digital tidak kaku, mereka bergerak cepat dan adaptif.",
      color: "from-green-500/20 to-teal-600/20"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Visual Breakdown</h2>
        <p className="text-blue-200">Klik atau hover kartu di bawah untuk memahami makna setiap elemen visual.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {elements.map((el, idx) => (
          <div 
            key={el.id}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`
              relative overflow-hidden rounded-2xl p-6 border border-white/10 backdrop-blur-md transition-all duration-300
              ${hoveredCard === idx ? 'bg-white/10 scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.1)]' : 'bg-white/5'}
            `}
          >
            {/* Background Gradient Effect on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${el.color} transition-opacity duration-300 ${hoveredCard === idx ? 'opacity-100' : 'opacity-0'}`} />

            <div className="relative z-10 flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                {el.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{el.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {el.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Hint */}
      <div className="mt-12 bg-black/20 rounded-xl p-6 text-center border border-white/5">
        <p className="text-sm text-gray-400">
          Visual Style: <span className="text-gold font-semibold">Glassmorphism & Neon Cyberpunk</span>. 
          Penggunaan cahaya (glow) pada setiap objek menandakan energi dan harapan masa depan.
        </p>
      </div>
    </div>
  );
};

export default VisualsSection;