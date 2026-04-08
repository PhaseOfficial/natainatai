import { Link } from "react-router-dom";
import aboutHeroImg from "../assets/champagne brunch essentials.jpg";
import weavingImg from "../assets/641765982_18284005750304797_1153224978901269136_n.jpg";
import workshopImg from "../assets/636753771_18282742504304797_2482532055227530582_n.jpg";

const About = () => {
  return (
    <div className="bg-oat text-primary font-body selection:bg-archive-brown selection:text-white">
      <main className="pt-24 pb-32">
        {/* Hero / Manifesto Intro */}
        <section className="px-6 mb-24 md:mb-40">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-12 flex flex-wrap gap-6 items-center">
              <span className="inline-block bg-primary text-oat px-4 py-2 font-bold text-sm uppercase tracking-widest -rotate-1">Est. 2024</span>
              <span className="font-headline font-bold text-lg tracking-tighter uppercase border-b-4 border-archive-brown">Studio: CBD, Harare</span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              <div className="lg:col-span-7">
                <h1 className="font-headline font-black text-7xl md:text-9xl lg:text-[12rem] uppercase mb-12 leading-[0.8] tracking-tighter">
                  THE <br />
                  <span className="text-archive-brown italic font-serif font-normal lowercase">story</span> <br />
                  OF US
                </h1>
                <div className="flex flex-col justify-center space-y-12">
                  <blockquote className="text-4xl md:text-5xl lg:text-6xl font-serif italic leading-none border-l-8 border-archive-brown pl-8 lg:pl-12 py-4">
                    &quot;We are not just making clothes; we are <span className="wavy-underline">archiving the whispers</span> of a continent.&quot;
                  </blockquote>
                  <div className="space-y-8 max-w-2xl">
                    <p className="text-xl md:text-2xl font-medium leading-relaxed">
                      Nati Natai was born from a desire to reconcile the raw energy of African heritage with the precision of contemporary design. Our workshop is a sanctuary where tradition meets disruption.
                    </p>
                    <p className="font-bold uppercase tracking-tighter text-lg underline decoration-6 underline-offset-8 decoration-archive-brown">
                      HONESTY ABOVE EVERYTHING.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-5 relative mt-12 lg:mt-0">
                <div className="irregular-border bg-oat-dark overflow-hidden rotate-2 shadow-[20px_20px_0px_0px_#543D28]">
                  <img
                    alt="Nati Natai champagne brunch essentials"
                    className="w-full h-auto grayscale contrast-125 hover:grayscale-0 hover:scale-105 transition-all duration-1000"
                    src={aboutHeroImg}
                  />
                </div>
                <div className="absolute -top-10 -right-10 bg-primary text-oat p-8 border-4 border-primary rounded-full aspect-square flex items-center justify-center rotate-12 hidden xl:flex">
                  <span className="font-headline font-black text-center leading-none text-xl">RAW<br/>LUXURY</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="bg-oat-dark border-y-4 border-primary py-32 mb-24 md:mb-40 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-6">
            <h2 className="font-headline font-black text-6xl md:text-9xl lg:text-[10rem] uppercase mb-32 -rotate-1 inline-block leading-[0.8] tracking-tighter">
              OUR PILLARS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
              <div className="space-y-6 group p-8 border-4 border-transparent hover:border-primary transition-all duration-500">
                <div className="text-archive-brown font-black text-6xl lg:text-8xl mb-4 group-hover:scale-110 transition-transform inline-block">01</div>
                <h3 className="font-black text-3xl lg:text-4xl uppercase tracking-tighter bg-primary text-oat inline-block px-4 py-2 transform group-hover:translate-x-4 transition-transform">Sustainability</h3>
                <p className="text-xl md:text-2xl font-medium leading-relaxed">Respecting the earth by utilizing deadstock fabrics and traditional low-impact dyeing techniques that have existed for centuries.</p>
              </div>
              <div className="space-y-6 group p-8 border-4 border-transparent hover:border-primary transition-all duration-500 md:mt-24">
                <div className="text-archive-brown font-black text-6xl lg:text-8xl mb-4 group-hover:scale-110 transition-transform inline-block">02</div>
                <h3 className="font-black text-3xl lg:text-4xl uppercase tracking-tighter bg-primary text-oat inline-block px-4 py-2 transform group-hover:translate-x-4 transition-transform">Inclusivity</h3>
                <p className="text-xl md:text-2xl font-medium leading-relaxed">Designing silhouettes that embrace the human form in all its variations, rejecting the binary of modern sizing.</p>
              </div>
              <div className="space-y-6 group p-8 border-4 border-transparent hover:border-primary transition-all duration-500">
                <div className="text-archive-brown font-black text-6xl lg:text-8xl mb-4 group-hover:scale-110 transition-transform inline-block">03</div>
                <h3 className="font-black text-3xl lg:text-4xl uppercase tracking-tighter bg-primary text-oat inline-block px-4 py-2 transform group-hover:translate-x-4 transition-transform">African Luxury</h3>
                <p className="text-xl md:text-2xl font-medium leading-relaxed">Redefining luxury as the time taken to hand-weave a single meter of cloth, rather than the price tag attached to it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Craft Narrative */}
        <section className="py-24 px-6 mb-24 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-24 items-center">
            <div className="order-2 xl:order-1">
              <div className="grid grid-cols-2 gap-8 py-8">
                <div className="irregular-border -rotate-3 overflow-hidden shadow-[12px_12px_0px_0px_#543D28]">
                  <img
                    alt="weaving process"
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                    src={weavingImg}
                  />
                </div>
                <div className="irregular-border rotate-3 mt-16 overflow-hidden shadow-[12px_12px_0px_0px_#1B1B1B]">
                  <img
                    alt="workshop detail"
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                    src={workshopImg}
                  />
                </div>
              </div>
            </div>
            
            <div className="order-1 xl:order-2 space-y-12">
              <div>
                <span className="font-black uppercase tracking-[0.4em] text-sm text-archive-brown mb-4 block">The Craft</span>
                <h2 className="font-headline font-black text-7xl md:text-9xl uppercase leading-[0.8] tracking-tighter">THE <span className="wavy-underline">HUMAN</span> ARCHIVE</h2>
              </div>
              <div className="font-serif text-3xl md:text-4xl lg:text-5xl leading-snug space-y-12">
                <p>Every piece in our collection is numbered. It is a record of time, a document of labor, and a fragment of a larger story. We do not mass-produce; <span className="font-bold italic">we curate.</span></p>
                <p className="text-archive-brown italic text-2xl lg:text-3xl border-l-4 border-archive-brown pl-8">From the dust of the workshop to the bright lights of the runway, our journey is transparent, gritty, and profoundly human.</p>
              </div>
              <div className="pt-12">
                <Link to="/collection" className="w-full bg-primary text-oat irregular-border py-10 text-3xl lg:text-4xl font-black uppercase tracking-tighter hover:bg-archive-brown hover:-translate-y-2 transition-all flex items-center justify-center gap-6 active:translate-y-1 shadow-[12px_12px_0px_0px_#543D28]">
                  EXPLORE THE COLLECTION
                  <span className="material-symbols-outlined text-5xl">trending_flat</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
