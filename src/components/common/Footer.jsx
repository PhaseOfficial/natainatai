const Footer = () => {
  return (
    <footer className="px-6 py-24 bg-oatly-blue text-oat border-y-4 border-primary overflow-hidden relative">
      <div className="absolute top-0 right-0 p-8 rotate-12 opacity-10 pointer-events-none">
        <h1 className="text-[200px] font-black leading-none uppercase font-headline">OAT</h1>
      </div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="font-headline font-black text-6xl md:text-8xl uppercase tracking-tighter mb-8 leading-[0.8] -rotate-1">
          JOIN THE<br />ARCHIVE
        </h2>
        <p className="font-body text-xl md:text-2xl mb-12 italic">
          Letters on craft, philosophy, and occasional complaints about the weather. No spam, we promise. We&apos;re too tired for that.
        </p>
        <form className="space-y-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            className="w-full bg-oat border-4 border-primary text-primary font-headline font-bold px-6 py-5 focus:ring-0 placeholder:text-primary/30 uppercase tracking-widest text-sm"
            placeholder="YOUR EMAIL ADDRESS HERE"
            type="email"
          />
          <button
            className="w-full bg-primary text-oat px-12 py-5 font-headline font-black uppercase tracking-widest text-lg border-4 border-primary hover:bg-oat hover:text-primary transition-colors shadow-[6px_6px_0px_0px_#F9F9F9]"
            type="submit"
          >
            SUBSCRIBE (OR WHATEVER)
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
