import anesuImg from "../assets/Anesu Linen Shirt Dress.jpg";
import detailImg from "../assets/621456181_933997962289528_4711493255498423698_n.jpg";
import compositionImg from "../assets/640395019_18283486120304797_5634031868964619525_n.jpg";

const ProductDetail = () => {
  return (
    <div className="bg-oat text-primary font-headline selection:bg-archive-brown selection:text-white">
      <main className="pt-24 md:pt-40 pb-32 max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Hero Image Section */}
          <section className="lg:col-span-7 space-y-8">
            <div className="irregular-border overflow-hidden shadow-[16px_16px_0px_0px_#543D28]">
              <img
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                alt="Anesu Linen Shirt Dress texture"
                src={anesuImg}
              />
            </div>
            
            {/* Desktop Only Details Grid */}
            <div className="hidden md:grid grid-cols-2 gap-8 mt-12">
              <div className="bg-oat-dark border-4 border-primary p-8 flex flex-col justify-between aspect-square shadow-[8px_8px_0px_0px_#1B1B1B]">
                <span className="material-symbols-outlined text-archive-brown text-5xl">eco</span>
                <div>
                  <h3 className="font-headline font-black text-3xl leading-none mb-4 uppercase">EARTH<br />FIRST.</h3>
                  <p className="text-sm font-bold leading-relaxed uppercase tracking-widest">Grown in rain. Zero chemicals. No nonsense. Ethical craft from Harare.</p>
                </div>
              </div>
              <div className="irregular-border overflow-hidden aspect-square shadow-[8px_8px_0px_0px_#543D28]">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  alt="Tactile detail"
                  src={detailImg}
                />
              </div>
            </div>
          </section>

          {/* Product Info Section */}
          <section className="lg:col-span-5 lg:sticky lg:top-40">
            <div className="flex justify-between items-start mb-8">
              <div className="rotate-[-2deg] bg-archive-brown text-white px-4 py-2 text-sm font-bold tracking-[0.2em] uppercase shadow-lg">
                Archive No. 042
              </div>
              <div className="font-body italic text-2xl text-archive-brown font-bold">
                <span className="wavy-underline px-2">100% ORGANIC</span>
              </div>
            </div>

            <div className="border-b-8 border-primary pb-10 mb-10">
              <h2 className="font-headline text-[60px] md:text-[80px] lg:text-[100px] font-black leading-[0.8] tracking-tighter uppercase break-words mb-6">
                ANESU<br />LINEN SHIRT<br />DRESS.
              </h2>
              <div className="flex justify-between items-center">
                <span className="text-4xl md:text-5xl font-black italic tracking-tighter">$180.00</span>
                <span className="font-body italic text-2xl rotate-3 bg-oat-dark px-4 py-1 border-2 border-primary">In stock, barely.</span>
              </div>
            </div>

            <div className="mb-12 space-y-8">
              <p className="text-2xl lg:text-3xl font-bold leading-[1.1] tracking-tight">
                Dear Human,<br />
                This isn&apos;t just a shirt dress. It&apos;s an architectural silhouette for your form. We crafted it from fabrics that breathe exactly when you do.
              </p>
              <p className="font-body italic text-2xl text-archive-brown border-l-4 border-archive-brown pl-6 py-2">- The Workshop, Harare</p>
            </div>

            <div className="space-y-10">
              <div className="flex items-center gap-8">
                <span className="font-bold text-sm uppercase tracking-[0.3em] opacity-60">Select Tone:</span>
                <div className="flex gap-6">
                  <button className="w-12 h-12 border-4 border-primary bg-[#e4e2dd] ring-4 ring-offset-4 ring-archive-brown transition-all hover:scale-110"></button>
                  <button className="w-12 h-12 border-4 border-primary bg-[#1B1B1B] transition-all hover:scale-110"></button>
                  <button className="w-12 h-12 border-4 border-primary bg-[#cb6f56] transition-all hover:scale-110"></button>
                </div>
              </div>

              {/* Primary CTA - Archive Brown */}
              <button className="w-full bg-archive-brown text-oat py-10 px-10 flex justify-between items-center border-4 border-primary hover:translate-x-2 hover:-translate-y-2 transition-all active:translate-y-0 shadow-[12px_12px_0px_0px_rgba(27,27,27,1)] group">
                <span className="font-headline font-black text-3xl uppercase tracking-tighter group-hover:italic transition-all">ADD TO ARCHIVE</span>
                <span className="material-symbols-outlined text-5xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </button>
              
              {/* Additional Desktop Info */}
              <div className="pt-12 border-t-4 border-primary border-dotted grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-4 opacity-50">Shipping</h4>
                  <p className="text-sm font-bold uppercase">Worldwide delivery from Zimbabwe.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-4 opacity-50">Craft</h4>
                  <p className="text-sm font-bold uppercase">14 hours of manual labor per piece.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Composition Section - Responsive */}
        <section className="mt-32 md:mt-48 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-12">
            <div className="border-t-8 border-primary pt-12">
              <h4 className="font-bold text-sm uppercase tracking-[0.4em] mb-8 text-archive-brown">The Composition</h4>
              <ul className="space-y-8">
                <li className="flex items-center gap-6">
                  <span className="w-6 h-6 bg-primary shrink-0 rotate-45"></span>
                  <p className="text-4xl md:text-5xl font-black leading-none uppercase tracking-tighter">100% Organic Linen</p>
                </li>
                <li className="flex items-center gap-6">
                  <span className="w-6 h-6 bg-archive-brown shrink-0 rotate-45"></span>
                  <p className="text-4xl md:text-5xl font-black leading-none uppercase tracking-tighter">Hand-stamped serials</p>
                </li>
                <li className="flex items-center gap-6">
                  <span className="w-6 h-6 bg-primary shrink-0 rotate-45"></span>
                  <p className="text-4xl md:text-5xl font-black leading-none uppercase tracking-tighter">Fallen oak buttons</p>
                </li>
              </ul>
            </div>
            
            <p className="font-body italic text-2xl lg:text-3xl leading-snug text-archive-brown p-8 border-4 border-primary border-dashed rotate-[-1deg]">
              &quot;Designed to age with your skin. The more you wear it, the more it knows you.&quot;
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="irregular-border p-2 bg-primary shadow-[20px_20px_0px_0px_#543D28]">
              <img
                className="w-full grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Artistic silhouette"
                src={compositionImg}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetail;
