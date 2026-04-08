const Footer = () => {
  return (
    <footer className="px-6 py-24 md:py-32 bg-archive-brown text-oat border-y-4 border-primary overflow-hidden relative pb-32 md:pb-32">
      {/* Background Brand Text */}
      <div className="absolute top-0 right-0 p-8 rotate-12 opacity-10 pointer-events-none hidden md:block">
        <h1 className="text-[250px] font-bold leading-none uppercase" style={{ fontFamily: '"Times New Roman", Times, serif' }}>NATAI</h1>
      </div>
      
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
        {/* Contact Info Section */}
        <div className="lg:col-span-7 space-y-12">
          <h2 className="font-headline font-black text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.8] -rotate-1">
            CONTACT<br />THE ARCHIVE
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-body text-xl lg:text-2xl">
            <div className="space-y-6">
              <p className="flex items-start gap-4">
                <span className="material-symbols-outlined text-archive-brown-light text-3xl">location_on</span>
                <span className="max-w-xs">311 Executive Chambers, 16 George Silundika Ave, Harare, Zimbabwe</span>
              </p>
              <p className="flex items-center gap-4">
                <span className="material-symbols-outlined text-archive-brown-light text-3xl">architecture</span>
                Tailoring, Repairs & Alterations
              </p>
              <p className="flex items-center gap-4">
                <span className="material-symbols-outlined text-archive-brown-light text-3xl">schedule</span>
                Open everyday
              </p>
            </div>
            
            <div className="flex flex-col gap-6 justify-end">
              <a 
                href="https://wa.me/c/263775071803" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-oat text-archive-brown px-8 py-4 font-headline font-bold uppercase tracking-widest text-sm border-4 border-primary hover:bg-archive-brown-light hover:text-white transition-all shadow-[8px_8px_0px_0px_#1B1B1B] text-center"
              >
                WHATSAPP CATALOGUE
              </a>
              <a 
                href="https://www.instagram.com/natai.natai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-oat px-8 py-4 font-headline font-bold uppercase tracking-widest text-sm border-4 border-oat hover:bg-oat hover:text-primary transition-all shadow-[8px_8px_0px_0px_#8D6E63] text-center"
              >
                INSTAGRAM
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="lg:col-span-5 flex flex-col justify-center bg-primary p-8 md:p-12 border-4 border-oat shadow-[16px_16px_0px_0px_#543D28]">
          <h3 className="font-headline font-black text-4xl lg:text-5xl uppercase tracking-tighter mb-6 italic text-oat">
            JOIN THE ARCHIVE
          </h3>
          <p className="font-body text-xl mb-10 opacity-80 text-oat leading-relaxed">
            Letters on craft, philosophy, and occasional complaints about the weather. No spam, we promise. We&apos;re too tired for that.
          </p>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <input
              className="w-full bg-oat border-4 border-primary text-primary font-headline font-bold px-6 py-5 focus:ring-0 placeholder:text-primary/30 uppercase tracking-widest text-sm"
              placeholder="YOUR EMAIL ADDRESS HERE"
              type="email"
            />
            <button
              className="w-full bg-archive-brown-light text-oat px-12 py-5 font-headline font-black uppercase tracking-widest text-lg border-4 border-oat hover:bg-oat hover:text-primary transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]"
              type="submit"
            >
              SUBSCRIBE (OR WHATEVER)
            </button>
          </form>
        </div>
      </div>
      
      {/* Copyright/Footer Bottom */}
      <div className="max-w-screen-2xl mx-auto mt-24 pt-12 border-t-4 border-primary/20 flex flex-col md:flex-row justify-between items-center gap-8 font-headline font-bold text-xs uppercase tracking-[0.3em] opacity-40">
        <p>&copy; 2024 NATI NATAI ARCHIVE</p>
        <div className="flex gap-12">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Shipping</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
