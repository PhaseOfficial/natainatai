import { Link } from "react-router-dom";

const Voice = () => {
  return (
    <div className="bg-oat text-primary font-headline selection:bg-archive-brown selection:text-oat">
      <main className="pt-28 md:pt-40 pb-32 px-6 max-w-screen-xl mx-auto">
        {/* Page Header */}
        <section className="mb-20 border-b-4 border-primary pb-12">
          <span className="font-bold text-sm uppercase tracking-[0.4em] text-archive-brown mb-4 block">The Oral History</span>
          <h1 className="font-black text-7xl md:text-9xl lg:text-[12rem] leading-[0.8] uppercase tracking-tighter mb-10 italic">
            VOICE
          </h1>
          <p className="font-body italic text-3xl md:text-4xl text-primary/80 max-w-3xl leading-tight">
            A space for the community to share texture, memory, and the resonance of lived experience.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* Submission Card */}
          <div className="bg-primary text-oat p-10 md:p-16 border-4 border-primary shadow-[16px_16px_0px_0px_#543D28] rotate-1">
            <h2 className="font-black text-4xl lg:text-5xl uppercase tracking-tighter mb-8 leading-none">ADD YOUR<br />TESTIMONY</h2>
            <p className="font-body text-xl opacity-80 mb-12">How does the linen feel against your skin? What memories did you make in your archive artifacts?</p>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">Identity</label>
                <input className="w-full bg-oat text-primary border-4 border-oat px-6 py-4 font-bold focus:ring-0 focus:border-archive-brown transition-all" placeholder="YOUR NAME (OR ANONYMOUS)" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">The Inquiry</label>
                <textarea className="w-full bg-oat text-primary border-4 border-oat px-6 py-4 font-bold focus:ring-0 focus:border-archive-brown transition-all h-40" placeholder="SHARE YOUR STORY..."></textarea>
              </div>
              <button className="w-full bg-archive-brown text-oat py-6 font-black uppercase tracking-widest text-lg border-4 border-oat hover:bg-oat hover:text-archive-brown transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
                SUBMIT TO ARCHIVE
              </button>
            </form>
          </div>

          {/* Testimonials List */}
          <div className="space-y-16">
            <article className="border-l-8 border-archive-brown pl-8 space-y-6">
              <p className="font-serif text-3xl italic leading-snug">
                &quot;The Anesu dress feels like a second skin. I wore it through the markets of Harare and felt both invisible and completely present.&quot;
              </p>
              <div>
                <p className="font-black uppercase tracking-widest text-sm">- Sarah M.</p>
                <p className="font-body text-xs opacity-40 uppercase tracking-tighter">Verified Owner | 14.03.24</p>
              </div>
            </article>

            <article className="border-l-8 border-primary/20 pl-8 space-y-6">
              <p className="font-serif text-3xl italic leading-snug">
                &quot;There is a weight to the linen that feels permanent. It doesn&apos;t just hang; it holds.&quot;
              </p>
              <div>
                <p className="font-black uppercase tracking-widest text-sm">- David K.</p>
                <p className="font-body text-xs opacity-40 uppercase tracking-tighter">Verified Owner | 02.02.24</p>
              </div>
            </article>

            <article className="border-l-8 border-primary/20 pl-8 space-y-6">
              <p className="font-serif text-3xl italic leading-snug">
                &quot;Luxury redefined. Not by the price, but by the 14 hours of work I can feel in every stitch.&quot;
              </p>
              <div>
                <p className="font-black uppercase tracking-widest text-sm">- Anonymous</p>
                <p className="font-body text-xs opacity-40 uppercase tracking-tighter">Verified Owner | 20.01.24</p>
              </div>
            </article>
            
            <div className="pt-12">
              <Link to="/collection" className="font-headline font-bold text-archive-brown wavy-underline text-2xl">
                SEE THE ARTIFACTS THEY&apos;RE TALKING ABOUT
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Voice;
