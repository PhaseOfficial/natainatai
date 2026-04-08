import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#F9F9F9] border-b-4 border-[#1B1B1B]">
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto">
        {/* Desktop Navigation Left */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/collection" className="font-headline font-bold text-sm tracking-widest uppercase hover:text-archive-brown transition-colors">
            COLLECTION
          </Link>
          <Link to="/about" className="font-headline font-bold text-sm tracking-widest uppercase hover:text-archive-brown transition-colors">
            STORY
          </Link>
        </div>

        {/* Logo */}
        <Link to="/" className="text-3xl md:text-4xl font-bold tracking-tighter text-archive-brown uppercase" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
          NATI NATAI
        </Link>

        {/* Desktop Navigation Right */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/voice" className="font-headline font-bold text-sm tracking-widest uppercase hover:text-archive-brown transition-colors">
            VOICE
          </Link>
          <button className="text-[#1B1B1B] hover:skew-x-2 transition-transform active:scale-95 duration-100 flex items-center">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="ml-2 font-headline font-bold text-sm tracking-widest uppercase">BAG (0)</span>
          </button>
        </div>

        {/* Mobile Bag Button */}
        <button className="text-[#1B1B1B] md:hidden hover:skew-x-2 transition-transform active:scale-95 duration-100">
          <span className="material-symbols-outlined">shopping_bag</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
