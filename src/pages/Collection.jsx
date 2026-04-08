import React from "react";
import { Link } from "react-router-dom";

const Collection = () => {
  return (
    <div className="bg-oat text-primary font-headline selection:bg-oatly-blue selection:text-oat">
      <main className="pt-28 pb-32 px-6">
        {/* Collection Intro */}
        <section className="mb-12 border-b-4 border-primary pb-8">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="font-bold text-xs uppercase tracking-tighter bg-primary text-oat px-2 py-0.5">Volume 04</span>
          </div>
          <h2 className="font-black text-6xl leading-[0.85] uppercase tracking-tighter mb-6 italic">
            The Human <br /> Archive
          </h2>
          <p className="font-body italic text-2xl text-primary/80 max-w-[90%] leading-tight">
            A study of texture, movement, and the quiet resonance of raw luxury.
          </p>
        </section>

        {/* Functional Filter */}
        <div className="flex justify-between items-end mb-12">
          <button className="skew-heading bg-primary text-oat px-10 py-4 font-bold text-sm uppercase tracking-widest active:translate-y-1 transition-transform border-r-4 border-b-4 border-oatly-blue/30">
            FILTER & SORT
          </button>
          <span className="font-bold text-xs uppercase tracking-tighter text-primary italic">12 Artifacts</span>
        </div>

        {/* Product Gallery: Editorial Grid */}
        <div className="space-y-24">
          {/* Product 1 */}
          <article className="group relative">
            <Link to="/product/twinning-top">
              <div className="relative aspect-[3/4] overflow-hidden irregular-border bg-oat-dark">
                <img
                  alt="Luxury resort wear"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJpghzJAECyPy7kCRt_SQcRZwmlsh7VnijmVY08yhPxX1RAsI4C5cott5efeR88qE5w1pE4RpVVldH2r-K_AEqv3dxav3ulE13vctClJy9PuseCPWc6-8rYz15z7U5mcVWscN_WqJ_jH_S2oRlOtt2QHR75qEKrbCDu_maznNjzqyj4I6f3T6ibQolT_rfyH1AOvUg05k26s-VBQD1qRYO0WWuY1Urw5GNDrY_VLJNDKLj0SUUSTzJTeBtV8T0286wwNTw81VC9VGe"
                />
                <div className="absolute top-6 left-6 rotate-2 bg-oatly-blue text-oat font-black text-xs px-4 py-2 uppercase tracking-widest border-2 border-oat shadow-xl">
                  NEW ARRIVAL
                </div>
              </div>
            </Link>
            <div className="mt-8 flex justify-between items-start">
              <div className="max-w-[70%]">
                <h3 className="font-black text-5xl uppercase tracking-tighter leading-[0.8] mb-3 group-hover:italic transition-all">Twinning Top</h3>
                <p className="font-body italic text-xl text-primary/70">Heavy-weight crinkled silk</p>
              </div>
              <span className="font-black text-3xl tracking-tighter text-primary">€240</span>
            </div>
          </article>

          {/* Product 2 */}
          <div className="flex justify-end">
            <article className="w-[85%] group">
              <Link to="/product/paradise-dress">
                <div className="relative aspect-[4/5] overflow-hidden irregular-border bg-oat-dark">
                  <img
                    alt="Paradise Dress"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFmsu5EiNTlegdsaet84GPRTeuWRVYNz2NgZ0INS450lwo6LIbRWBRuGx51Up1oX1j6F6aKaf-ImDMjnu2PkSBD10ZYf5-6SQDAl5sCNBMrN-FEPFdk9dLUNdPwGgFcpBosmCT6-SqRY0iKoiwucT_bvCawMMOifuaxDNpHHVoawdhJwgT7rWKOeNouoHo8cXLa47AmuYykBaOGM8B1mXfUD68Mjedzp9fdybP48WytTJlBI8p2h-boC2VT897GEtoD4yTW-dP696S"
                  />
                  <div className="absolute bottom-6 right-6 -rotate-3 bg-primary text-oat font-black text-[10px] px-3 py-1 uppercase tracking-widest border-2 border-oat">
                    LIMITED ARCHIVE
                  </div>
                </div>
              </Link>
              <div className="mt-8">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-black text-4xl uppercase tracking-tighter italic">Paradise Dress</h3>
                  <span className="font-black text-2xl tracking-tighter">€580</span>
                </div>
                <div className="h-1 w-full bg-primary mb-4"></div>
              </div>
            </article>
          </div>

          {/* Product 3 */}
          <article className="group relative">
            <Link to="/product/artisan-wrap">
              <div className="grid grid-cols-12 gap-0 irregular-border overflow-hidden">
                <div className="col-span-10 relative aspect-square overflow-hidden">
                  <img
                    alt="Artisan Detail"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZap8l-Fv4AEYsHRWGmLQgpH4qR0sjZ6Rva_SLTCKvNsGF5jvr0kdsHdgbNDgeZ0gL6-FEPiAZTssUmk03fSsUucDHJwzR32_EQcXc7gkgNlw0hJXvpwWAHe1lODfJix7_QYDYmP1MakTLBJvDLThskEwdTEgW-9yk4bJCbZk04RDKQnU5SzjYmzCngxcgf7iRCUMPcnUqNMMi4YCeHLv59BIZ_PbzXQLyHbj9MH0Qm7xzvYbfBl58e5B9HvHxpH4SiNgkGZjzsaWU"
                  />
                </div>
                <div className="col-span-2 flex items-center justify-center bg-primary text-oat border-l-4 border-primary">
                  <div className="rotate-90 whitespace-nowrap">
                    <span className="font-bold text-[10px] uppercase tracking-[0.4em]">WORKSHOP SERIES</span>
                  </div>
                </div>
              </div>
            </Link>
            <div className="mt-10">
              <h3 className="font-black text-6xl uppercase tracking-tighter leading-[0.8] mb-4">Artisan Wrap</h3>
              <div className="flex justify-between items-end gap-4">
                <p className="font-body italic text-xl text-primary/80 leading-snug flex-1">Hand-loomed in the coastal workshop using regenerative cotton.</p>
                <span className="font-black text-4xl tracking-tighter border-b-4 border-primary pb-1">€195</span>
              </div>
            </div>
          </article>

          {/* Product 4 */}
          <article className="group">
            <Link to="/product/night-trousers">
              <div className="relative aspect-[3/4] overflow-hidden irregular-border bg-oat-dark">
                <img
                  alt="Linen Shorts"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg5jJ12WPQK3pAhwlzIvoI0EB_LTRwOhheE4zwXpP1IWi53D02zUHv-nNOk_435boQW93pbHMuvfg5VBUPHpqOQhSyz1cobAnu59sGSTlXLhq_tDQvKr01sjh3YyhibpJw76m5ZHCCa4H2qfENxVy0kWjMLYjoFIOwt23tm_21SwGw6FPyalC9ll7M3SbYZe2ljVfbP51rczrcMdBC4UibDyIYFSCVAbph4KWnR51WCJg3wRkO32953aHGSLwBjabtnHwpWPJgNfw4"
                />
              </div>
            </Link>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <h3 className="font-black text-5xl uppercase tracking-tighter leading-none italic">Night Trousers</h3>
                <span className="font-black text-3xl tracking-tighter">€310</span>
              </div>
              <p className="font-body italic text-2xl text-primary/60">Architectural cut for movement.</p>
            </div>
          </article>
        </div>

        {/* Pagination */}
        <div className="mt-32 text-center pb-12">
          <button className="font-body italic text-3xl wavy-underline text-oatly-blue pb-1 hover:opacity-70 transition-opacity">
            Discover more from the archive
          </button>
        </div>
      </main>
    </div>
  );
};

export default Collection;
