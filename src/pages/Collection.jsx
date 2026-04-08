import { Link } from "react-router-dom";
import anesuImg from "../assets/Anesu Linen Shirt Dress.jpg";
import laurenaImg from "../assets/Laurena Linen Set.jpg";
import nalaniImg from "../assets/Nalani set.jpg";
import plusSizeImg from "../assets/plus size essentials.jpg";

const Collection = () => {
  return (
    <div className="bg-oat text-primary font-headline selection:bg-archive-brown selection:text-oat">
      <main className="pt-28 md:pt-40 pb-32 px-6 max-w-screen-2xl mx-auto">
        {/* Collection Intro */}
        <section className="mb-20 border-b-4 border-primary pb-12">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-bold text-sm uppercase tracking-tighter bg-primary text-oat px-3 py-1">Volume 04</span>
            <span className="font-body italic text-lg opacity-60">Spring / Summer Archive</span>
          </div>
          <h2 className="font-black text-7xl md:text-9xl lg:text-[12rem] leading-[0.8] uppercase tracking-tighter mb-10 italic">
            The Human <br /> Archive
          </h2>
          <p className="font-body italic text-3xl md:text-4xl text-primary/80 max-w-3xl leading-tight">
            A study of texture, movement, and the quiet resonance of raw luxury. Hand-crafted artifacts for the modern nomad.
          </p>
        </section>

        {/* Functional Filter */}
        <div className="flex justify-between items-end mb-20">
          <button className="skew-heading bg-primary text-oat px-12 py-5 font-bold text-sm uppercase tracking-widest active:translate-y-1 transition-all border-r-4 border-b-4 border-archive-brown/30 hover:bg-archive-brown">
            FILTER & SORT
          </button>
          <div className="flex flex-col items-end">
            <span className="font-bold text-sm uppercase tracking-tighter text-primary italic">12 Artifacts</span>
            <div className="h-1 w-24 bg-archive-brown mt-2"></div>
          </div>
        </div>

        {/* Product Gallery: Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 md:gap-y-32">
          {/* Product 1 */}
          <article className="group relative">
            <Link to="/product/anesu-linen-shirt-dress">
              <div className="relative aspect-[3/4] overflow-hidden irregular-border bg-oat-dark shadow-[12px_12px_0px_0px_#543D28]">
                <img
                  alt="Anesu Linen Shirt Dress"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                  src={anesuImg}
                />
                <div className="absolute top-6 left-6 rotate-2 bg-archive-brown text-oat font-black text-xs px-4 py-2 uppercase tracking-widest border-2 border-oat shadow-xl">
                  NEW ARRIVAL
                </div>
              </div>
            </Link>
            <div className="mt-10 flex justify-between items-start">
              <div className="max-w-[70%]">
                <h3 className="font-black text-4xl lg:text-5xl uppercase tracking-tighter leading-[0.8] mb-4 group-hover:italic group-hover:text-archive-brown transition-all">Anesu Linen Shirt Dress</h3>
                <p className="font-body italic text-xl text-primary/70">Heavy-weight crinkled silk</p>
              </div>
              <span className="font-black text-3xl tracking-tighter text-primary">€180</span>
            </div>
          </article>

          {/* Product 2 */}
          <article className="group relative md:mt-24 lg:mt-0">
            <Link to="/product/laurena-linen-set">
              <div className="relative aspect-[3/4] overflow-hidden irregular-border bg-oat-dark shadow-[12px_12px_0px_0px_#1B1B1B]">
                <img
                  alt="Laurena Linen Set"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                  src={laurenaImg}
                />
                <div className="absolute bottom-6 right-6 -rotate-3 bg-primary text-oat font-black text-[10px] px-3 py-1 uppercase tracking-widest border-2 border-oat">
                  LIMITED ARCHIVE
                </div>
              </div>
            </Link>
            <div className="mt-10 flex justify-between items-start">
              <div className="max-w-[70%]">
                <h3 className="font-black text-4xl lg:text-5xl uppercase tracking-tighter leading-[0.8] mb-4 group-hover:italic group-hover:text-archive-brown transition-all">Laurena Linen Set</h3>
                <p className="font-body italic text-xl text-primary/70">Two-piece textured linen</p>
              </div>
              <span className="font-black text-3xl tracking-tighter text-primary">€220</span>
            </div>
          </article>

          {/* Product 3 */}
          <article className="group relative lg:mt-40">
            <Link to="/product/nalani-set">
              <div className="relative aspect-[3/4] overflow-hidden irregular-border bg-oat-dark shadow-[12px_12px_0px_0px_#543D28]">
                <img
                  alt="Nalani set"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                  src={nalaniImg}
                />
                <div className="absolute top-6 right-6 rotate-12 bg-oat text-archive-brown font-black text-[10px] px-3 py-1 uppercase tracking-widest border-2 border-archive-brown">
                  BESTSELLER
                </div>
              </div>
            </Link>
            <div className="mt-10 flex justify-between items-start">
              <div className="max-w-[70%]">
                <h3 className="font-black text-4xl lg:text-5xl uppercase tracking-tighter leading-[0.8] mb-4 group-hover:italic group-hover:text-archive-brown transition-all">Nalani Set</h3>
                <p className="font-body italic text-xl text-primary/70">Regenerative cotton wrap</p>
              </div>
              <span className="font-black text-3xl tracking-tighter text-primary">€240</span>
            </div>
          </article>

          {/* Product 4 */}
          <article className="group relative lg:-mt-24">
            <Link to="/product/plus-size-essentials">
              <div className="relative aspect-[3/4] overflow-hidden irregular-border bg-oat-dark shadow-[12px_12px_0px_0px_#1B1B1B]">
                <img
                  alt="Plus size essentials"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                  src={plusSizeImg}
                />
              </div>
            </Link>
            <div className="mt-10 flex justify-between items-start">
              <div className="max-w-[70%]">
                <h3 className="font-black text-4xl lg:text-5xl uppercase tracking-tighter leading-[0.8] mb-4 group-hover:italic group-hover:text-archive-brown transition-all">Plus Size Essentials</h3>
                <p className="font-body italic text-xl text-primary/70">Architectural silhouette</p>
              </div>
              <span className="font-black text-3xl tracking-tighter text-primary">€195</span>
            </div>
          </article>
          
          {/* Info Card in Grid */}
          <div className="hidden lg:flex flex-col justify-center items-center p-12 border-4 border-primary border-dashed bg-archive-brown text-oat rotate-1 aspect-[3/4] shadow-[12px_12px_0px_0px_#1B1B1B]">
            <span className="material-symbols-outlined text-6xl mb-8">architecture</span>
            <h3 className="font-headline font-black text-4xl text-center uppercase tracking-tighter mb-6">CUSTOM<br />ALTERATIONS</h3>
            <p className="font-body text-center text-xl italic">Every artifact can be tailored to your unique form in our Harare studio.</p>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-40 text-center pb-20">
          <button className="font-body italic text-4xl wavy-underline text-archive-brown pb-2 hover:opacity-70 transition-opacity">
            Discover more from the archive
          </button>
        </div>
      </main>
    </div>
  );
};

export default Collection;
