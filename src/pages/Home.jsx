import { Link } from "react-router-dom";
import heroImg from "../assets/Laurena Linen Set.jpg";
import manifestoImg from "../assets/659061483_18289186630304797_2541909867203402742_n.jpg";
import product1Img from "../assets/Anesu Linen Shirt Dress.jpg";
import product2Img from "../assets/Nalani set.jpg";

const Home = () => {
  return (
    <div className="bg-oat text-primary font-body overflow-x-hidden selection:bg-archive-brown selection:text-white">
      <main className="pt-20 pb-24">
        {/* Hero Section: Responsive Layout */}
        <section className="relative px-6 py-12 md:py-24 bg-oat border-b-4 border-primary">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 md:order-1">
              <h1 className="font-headline font-black text-6xl md:text-8xl lg:text-9xl leading-[0.8] uppercase tracking-tighter skew-heading bg-primary text-oat px-4 py-2 inline-block">
                BACK TO<br />BASICS
              </h1>
              <p className="font-body italic text-2xl md:text-3xl lg:text-4xl leading-tight max-w-xl">
                (Actually, it&apos;s mostly just linen. But &quot;Basics&quot; sounds more expensive, doesn&apos;t it?)
              </p>
              <div className="pt-4">
                <Link to="/collection" className="anti-button inline-block bg-oat text-primary px-10 py-5 font-headline font-bold uppercase tracking-widest text-sm shadow-[8px_8px_0px_0px_#1B1B1B]">
                  EXPLORE THE ARCHIVE
                </Link>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] border-4 border-primary overflow-hidden shadow-[12px_12px_0px_0px_#543D28]">
                <img
                  className="w-full h-full object-cover grayscale brightness-90 contrast-110 hover:grayscale-0 transition-all duration-700"
                  alt="Laurena Linen Set"
                  src={heroImg}
                />
                <div className="absolute inset-0 bg-archive-brown/5 pointer-events-none"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-archive-brown text-oat p-4 border-4 border-primary rotate-3 font-headline font-bold text-xs md:text-sm uppercase tracking-tighter hidden md:block">
                ESTABLISHED IN HARARE
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section: Manifesto */}
        <section className="px-6 py-24 bg-oat-dark border-b-4 border-primary">
          <div className="max-w-screen-xl mx-auto">
            <span className="font-headline font-bold text-sm tracking-widest uppercase text-archive-brown mb-6 block">MANIFESTO #01 (THE HONEST VERSION)</span>
            <h2 className="font-headline font-black text-5xl md:text-8xl lg:text-9xl uppercase mb-16 leading-[0.8] tracking-tighter">
              THE HUMAN<br />ARCHIVE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div className="space-y-10">
                <p className="font-body text-3xl md:text-4xl lg:text-5xl leading-tight italic">
                  We believe in garments that hold memory. Like that coffee stain you got while reading Kafka.
                </p>
                <p className="font-body text-xl md:text-2xl opacity-80 leading-relaxed">
                  In a world of synthetic perfection, NATI NATAI embraces the irregular. We call it &quot;tactile honesty.&quot; Our lawyers call it &quot;character.&quot; Every wrinkle is a story of a day lived, or a nap taken.
                </p>
                <Link className="inline-block font-headline font-bold text-2xl text-archive-brown wavy-underline hover:text-archive-brown-light transition-colors" to="/about">
                  READ THE FULL INQUIRY
                </Link>
              </div>
              <div className="relative group">
                <div className="aspect-[3/4] border-4 border-primary overflow-hidden shadow-[16px_16px_0px_0px_#543D28] group-hover:shadow-[20px_20px_0px_0px_#543D28] transition-all duration-500">
                  <img
                    className="w-full h-full object-cover grayscale brightness-110 hover:scale-105 transition-transform duration-700"
                    alt="Tactile Archive Detail"
                    src={manifestoImg}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-archive-brown text-oat p-6 border-4 border-primary -rotate-2 font-headline font-bold text-sm uppercase tracking-tighter">
                  HANDMADE IN A REAL PLACE
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid: Brutalist Layout */}
        <section className="px-6 py-24 bg-oat">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex justify-between items-end mb-16 border-b-4 border-primary pb-8">
              <h2 className="font-headline font-black text-4xl md:text-6xl uppercase tracking-tighter">THE LATEST<br />ARTIFACTS</h2>
              <Link to="/collection" className="font-headline font-bold text-lg uppercase tracking-widest hover:text-archive-brown transition-colors mb-2">VIEW ALL (12)</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Product 1 */}
              <Link to="/product/anesu-linen-shirt-dress" className="group cursor-pointer">
                <div className="border-4 border-primary mb-8 overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0px_0px_#1B1B1B]">
                  <img
                    className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt="Anesu Linen Shirt Dress"
                    src={product1Img}
                  />
                </div>
                <div className="flex justify-between items-end border-b-2 border-primary pb-4">
                  <div>
                    <h3 className="font-headline font-black text-2xl lg:text-3xl uppercase tracking-tighter group-hover:text-archive-brown transition-colors">ANESU LINEN SHIRT DRESS</h3>
                    <p className="font-body italic text-archive-brown text-lg">Unbleached Raw Linen</p>
                  </div>
                  <span className="font-headline font-black text-2xl">€ 180</span>
                </div>
              </Link>
              {/* Product 2 */}
              <Link to="/product/nalani-set" className="group cursor-pointer lg:mt-32">
                <div className="border-4 border-primary mb-8 overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0px_0px_#1B1B1B]">
                  <img
                    className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt="Nalani set"
                    src={product2Img}
                  />
                </div>
                <div className="flex justify-between items-end border-b-2 border-primary pb-4">
                  <div>
                    <h3 className="font-headline font-black text-2xl lg:text-3xl uppercase tracking-tighter group-hover:text-archive-brown transition-colors">NALANI SET</h3>
                    <p className="font-body italic text-archive-brown text-lg">The &quot;Permanent&quot; Fit</p>
                  </div>
                  <span className="font-headline font-black text-2xl">€ 220</span>
                </div>
              </Link>
              {/* Desktop Only Product Placeholder or info */}
              <div className="hidden lg:flex flex-col justify-center p-12 border-4 border-primary border-dashed bg-oat-dark rotate-1 h-fit my-auto">
                <h3 className="font-headline font-black text-4xl uppercase tracking-tighter mb-6">EVERY PIECE<br />TELLS A STORY.</h3>
                <p className="font-body text-xl italic mb-8">Our garments are designed to age with you, gaining character with every wear.</p>
                <Link to="/collection" className="font-headline font-bold text-archive-brown wavy-underline text-xl">SEE THE COLLECTION</Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-32">
            <Link className="font-headline font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter hover:text-archive-brown hover:skew-x-6 transition-all duration-500 inline-block" to="/collection">
              SEE ALL PRODUCTS? <span className="material-symbols-outlined align-middle text-5xl md:text-7xl lg:text-8xl">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
