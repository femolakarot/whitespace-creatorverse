// components/FlipSwitch.js
export default function FlipSwitch({ isElite, onToggle }) {
  return (
    <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md px-2 py-2 rounded-full border border-white/10">
      
      <span className={`text-[10px] font-bold uppercase tracking-widest transition-opacity duration-300 ${isElite ? 'opacity-30' : 'opacity-100'}`}>
        Creator
      </span>

      <button 
        onClick={onToggle}
        className={`
          relative w-14 h-7 rounded-full p-1 transition-colors duration-500 ease-in-out
          ${isElite ? 'bg-[#d4af37]' : 'bg-gray-600'}
        `}
      >
        <div 
          className={`
            w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-500 ease-in-out
            ${isElite ? 'translate-x-7' : 'translate-x-0'}
          `}
        />
      </button>

      <span className={`text-[10px] font-bold uppercase tracking-widest transition-opacity duration-300 ${isElite ? 'opacity-100 text-[#d4af37]' : 'opacity-30'}`}>
        Elite
      </span>

    </div>
  );
}