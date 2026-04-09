import { NavLink } from "react-router-dom";

const BottomNav = () => {
  const baseClasses = "flex flex-col items-center justify-center px-4 py-2 transition-all active:translate-y-1 duration-300";
  const activeClasses = "bg-archive-brown text-[#F9F9F9] rounded-none px-6 py-2 scale-110 -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]";
  const inactiveClasses = "text-[#1B1B1B] hover:bg-[#E2E2E2]";

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-2 pb-safe bg-[#F9F9F9] border-t-4 border-[#1B1B1B] md:hidden">
      <NavLink 
        to="/" 
        end
        className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        <span className="material-symbols-outlined mb-1">search</span>
        <span className="font-headline font-bold text-[11px] tracking-widest uppercase">EXPLORE</span>
      </NavLink>
      <NavLink 
        to="/collection" 
        className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        <span className="material-symbols-outlined mb-1">folder</span>
        <span className="font-headline font-bold text-[11px] tracking-widest uppercase">STASH</span>
      </NavLink>
      <NavLink 
        to="/voice" 
        className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        <span className="material-symbols-outlined mb-1">record_voice_over</span>
        <span className="font-headline font-bold text-[11px] tracking-widest uppercase">VOICE</span>
      </NavLink>
      <NavLink 
        to="/profile" 
        className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        <span className="material-symbols-outlined mb-1">face</span>
        <span className="font-headline font-bold text-[11px] tracking-widest uppercase">ME</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
