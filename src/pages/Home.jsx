import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-oat text-primary font-body overflow-x-hidden selection:bg-oatly-blue selection:text-white">
      <main className="pt-[12px] pb-24">
        {/* Hero Section: High Impact / Quirky */}
        <section className="relative px-4 py-8 bg-oat border-b-4 border-primary">
          <div className="relative w-full aspect-[4/5] md:aspect-video border-4 border-primary overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale brightness-90 contrast-110"
              alt="Editorial fashion shot of a model wearing organic textured linen garments."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXlVuLePeWydbI5Awm4lrRM2OO5M4XA-3q0V5bNyr6mHMjcm5aCdlc8803G_-4XxzzC_EP2RmwH2M1g3z9Ee9h93Ddft0CX5jQ2O9-mMVgxP9JarFv_DoOw_SuVSm9EChzSNwEgnGbdtD-LpWGSU34-7MjCiNtFaH2naoliwUA_nonkMSXYqKo_Xpn7ZzytgMNyXRNeRXk-8GcddUBR-UV5qGz_KdIYnrEM_Uvt-DlGuua4M-24Ejpxh1eA2ek_79fOQvRd8Sp_328"
            />
            <div className="absolute inset-0 bg-[#124A17]/10 pointer-events-none"></div>
          </div>
          <div className="mt-8 space-y-6 max-w-2xl">
            <h1 className="font-headline font-black text-6xl md:text-8xl leading-none uppercase tracking-tighter skew-heading bg-primary text-oat px-4 py-2 inline-block">
              BACK TO<br />BASICS
            </h1>
            <p className="font-body italic text-2xl md:text-3xl leading-tight">
              (Actually, it’s mostly just linen. But "Basics" sounds more expensive, doesn't it?)
            </p>
            <div>
              <Link to="/collection" className="anti-button inline-block bg-oat text-primary px-8 py-4 font-headline font-bold uppercase tracking-widest text-sm shadow-[6px_6px_0px_0px_#1B1B1B]">
                EXPLORE THE ARCHIVE
              </Link>
            </div>
          </div>
        </section>

        {/* Philosophy Section: Manifesto */}
        <section className="px-6 py-20 bg-oat-dark border-b-4 border-primary">
          <div className="max-w-4xl mx-auto">
            <span className="font-headline font-bold text-sm tracking-widest uppercase text-oatly-blue mb-4 block">MANIFESTO #01 (THE HONEST VERSION)</span>
            <h2 className="font-headline font-black text-5xl md:text-7xl uppercase mb-10 leading-[0.9] tracking-tighter">
              THE HUMAN<br />ARCHIVE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <p className="font-body text-2xl md:text-3xl leading-snug">
                  We believe in garments that hold memory. Like that coffee stain you got while reading Kafka.
                </p>
                <p className="font-body text-lg opacity-80">
                  In a world of synthetic perfection, NATI NATAI embraces the irregular. We call it "tactile honesty." Our lawyers call it "character." Every wrinkle is a story of a day lived, or a nap taken.
                </p>
                <Link className="inline-block font-headline font-bold text-xl text-oatly-blue wavy-underline" to="/about">
                  READ THE FULL INQUIRY
                </Link>
              </div>
              <div className="relative group">
                <div className="aspect-[3/4] border-4 border-primary overflow-hidden shadow-[12px_12px_0px_0px_#124A17]">
                  <img
                    className="w-full h-full object-cover grayscale brightness-110"
                    alt="Close-up of hand-stitched fabric detail."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-1VfK952xDnF2OKEyuKqLx2R3FLv9IejLPqpV6IiKDz_q0jIVqbihk6PC5HRSB0YJPDMG1nTMpdqN6rKPFAflPJ9dYXH07F8E2brekTx3AUto1UnSaoym4vuvUn-4Qvey7C7gUOFo_RQcsxf0UUpNMA5VSGw7fVpYCzIISEmsBX4g8SQ4yO4vjQMbO1N7yp18rxIAE633E3UoEM8YRTGw1OM9gPKxBaQAExiJLhK3N0pUrQ_771otr3pqumBxqD5QSoFkiijN-CQv"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-oatly-blue text-oat p-4 border-2 border-primary rotate-3 font-headline font-bold text-xs uppercase tracking-tighter">
                  HANDMADE IN A REAL PLACE
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid: Brutalist Layout */}
        <section className="px-6 py-20 bg-oat">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Product 1 */}
            <Link to="/product/paradise-coat" className="group cursor-pointer">
              <div className="border-4 border-primary mb-6 overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[10px_10px_0px_0px_#1B1B1B]">
                <img
                  className="w-full aspect-[4/5] object-cover grayscale"
                  alt="Oversized linen coat."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuARDtwyPK_tEG0Z8OHhc5OZ1AQNWKeXbdltwqyx6S7WLpNVZVPyk5aLh0-wpk6rDIj1ZpY_YmR1fLF2mvUw-LimsSvFHPnPrl6VvW7YT5iKFkQWLePz_nyRkiICdlUsVrtQez9Xg6jdf_31nAEKBlIOP9OqCmG1vAg-Ha_OarzhM8gSAUU7GLLfOx_OEqGSo2lK88odoZX8UNVUqk2PhpmpqY-TltpDyKbM80jQofGYPmS10FlDn-NuEiVB7tRLF7ky-MBR1fPjBtUV"
                />
              </div>
              <div className="flex justify-between items-end border-b-2 border-primary pb-2">
                <div>
                  <h3 className="font-headline font-black text-2xl uppercase tracking-tighter">PARADISE COAT</h3>
                  <p className="font-body italic text-oatly-blue">Unbleached Raw Linen</p>
                </div>
                <span className="font-headline font-black text-xl">€ 420</span>
              </div>
            </Link>
            {/* Product 2 */}
            <Link to="/product/archive-trousers" className="group cursor-pointer md:mt-24">
              <div className="border-4 border-primary mb-6 overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[10px_10px_0px_0px_#1B1B1B]">
                <img
                  className="w-full aspect-[3/4] object-cover grayscale"
                  alt="Artisan trousers."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCefBET7SffOL6NPYUm0EshB3FiIfkjb84iPbq6ig6NTP0sfRptAOpoVm4VqwEODP0IqgGdFTQ3ql_xpU5Dn4NNXMZtKMauh9uodNPa0_qIaKwEBR3ZVgfTNVfTXk6affwMe2fs51JL2kkZ5divf9Ktiw7mowG8aqFyMYGN9jJKnOteSczIXXq-qDGcft8V11lSx-fy1wx_4zOSOLKrC_bRsJPXiX6ZPkQb83DxxkQcRU0uIUVIQEkILXYh6veBphOYMzLGkZYoVTO0"
                />
              </div>
              <div className="flex justify-between items-end border-b-2 border-primary pb-2">
                <div>
                  <h3 className="font-headline font-black text-2xl uppercase tracking-tighter">ARCHIVE TROUSERS</h3>
                  <p className="font-body italic text-oatly-blue">The "Permanent" Fit</p>
                </div>
                <span className="font-headline font-black text-xl">€ 280</span>
              </div>
            </Link>
          </div>
          <div className="text-center mt-20">
            <Link className="font-headline font-black text-4xl uppercase tracking-tighter hover:text-oatly-blue hover:skew-x-6 transition-all duration-300" to="/collection">
              SEE ALL PRODUCTS? <span className="material-symbols-outlined align-middle text-4xl">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
