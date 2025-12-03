import React, { useState } from 'react';

const InteractiveSlider: React.FC = () => {
  const [value, setValue] = useState(50);

  // Calculate dynamic styles based on slider value
  const rotation = (value - 50) * 2; // -100deg to 100deg
  const hue = value * 3.6; // 0 to 360
  const glow = value / 2; // 0 to 50px

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 shadow-lg mt-8">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="w-2 h-8 bg-gold rounded-full inline-block"></span>
        Interaktif: Eksplorasi Mood Warna
      </h3>
      
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Visual Feedback Object */}
        <div className="relative w-48 h-48 flex-shrink-0">
          <div 
            className="absolute inset-0 rounded-2xl transition-all duration-100 ease-out"
            style={{
              background: `linear-gradient(${rotation}deg, hsl(${hue}, 70%, 50%), hsl(${hue + 60}, 80%, 60%))`,
              transform: `rotate(${rotation}deg)`,
              boxShadow: `0 0 ${glow}px hsl(${hue}, 70%, 60%)`,
              opacity: 0.8
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center">
                <span className="block text-4xl font-bold text-white drop-shadow-md">{Math.round(value)}%</span>
                <span className="text-xs uppercase tracking-widest text-white/80">Kreativitas</span>
             </div>
          </div>
        </div>

        {/* Control Area */}
        <div className="flex-1 w-full space-y-6">
          <p className="text-gray-300 text-sm">
            Geser slider di bawah untuk mengubah <span className="text-gold">Gradient Angle</span> dan <span className="text-gold">Hue</span>. 
            Dalam desain poster, pemilihan warna gradient sangat krusial untuk menciptakan kedalaman (depth) dan suasana futuristik.
          </p>

          <div className="relative pt-6">
            <label htmlFor="gradient-slider" className="sr-only">Gradient Control</label>
            <input
              id="gradient-slider"
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold/50"
              style={{
                backgroundImage: `linear-gradient(to right, #4facfe 0%, #00f2fe 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>Cool Tone</span>
              <span>Balanced</span>
              <span>Warm Tone</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveSlider;