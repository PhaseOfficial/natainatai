import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-2 pb-safe bg-[#F9F9F9] border-t-4 border-[#1B1B1B] md:hidden">
      <Link to="/" className="flex flex-col items-center justify-center text-[#1B1B1B] px-4 py-2 hover:bg-[#E2E2E2] transition-transform active:translate-y-1">
        <span className="material-symbols-outlined mb-1">search</span>
        <span className="font-headline font-bold text-[11px] tracking-widest uppercase">EXPLORE</span>
      </Link>
      <Link to="/collection" className="flex flex-col items-center justify-center bg-archive-brown text-[#F9F9F9] rounded-none px-6 py-2 scale-110 -rotate-2 active:translate-y-1 transition-transform">
        <span className="material-symbols-outlined mb-1">folder</span>
        <span className="font-headline font-bold text-[11px] tracking-widest uppercase">STASH</span>
      </Link>
      <Link to="/about" className="flex flex-col items-center justify-center text-[#1B1B1B] px-4 py-2 hover:bg-[#E2E2E2] transition-transform active:translate-y-1">
        <span className="material-symbols-outlined mb-1">record_voice_over</span>
        <span className="font-headline font-bold text-[11px] tracking-widest uppercase">VOICE</span>
      </Link>
      <Link to="/profile" className="flex flex-col items-center justify-center text-[#1B1B1B] px-4 py-2 hover:bg-[#E2E2E2] transition-transform active:translate-y-1">
        <span className="material-symbols-outlined mb-1">face</span>
        <span className="font-headline font-bold text-[11px] tracking-widest uppercase">ME</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
