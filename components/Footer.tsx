import React from 'react';

const Footer: React.FC = () => {
  const members = [
    { name: "Novi Aprilia", id: "13" },
    { name: "Alisya Amanda Putri Pasila", id: "20" },
    { name: "Fajar Cahya Bahtera", id: "22" },
    { name: "Silfia Ulkhaq Fitriannisa", id: "25" }
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-30 bg-deepBlue/90 backdrop-blur-md border-t border-white/10 text-center py-3 sm:py-4 shadow-[0_-5px_20px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-[10px] sm:text-xs text-blue-300 uppercase tracking-widest mb-1 sm:mb-2 font-semibold">
          Proyek UAS Created by:
        </p>
        <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-1 text-[11px] sm:text-sm text-gray-200">
          {members.map((member) => (
            <span key={member.id} className="hover:text-gold transition-colors duration-300 cursor-default">
              {member.name} ({member.id})
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;