import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#F9F9F9] border-b-4 border-[#1B1B1B]">
      <nav className="flex justify-between items-center w-full px-6 py-4">
        <button className="text-[#1B1B1B] hover:skew-x-2 transition-transform active:scale-95 duration-100">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <Link to="/" className="text-3xl font-black tracking-tighter text-[#124A17] italic font-headline uppercase">
          NATI NATAI
        </Link>
        <button className="text-[#1B1B1B] hover:skew-x-2 transition-transform active:scale-95 duration-100">
          <span className="material-symbols-outlined">shopping_bag</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
