import React from "react";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  return (
    <div className="bg-oat text-primary font-headline selection:bg-oatly-blue selection:text-white">
      <main className="pt-24 pb-32">
        {/* Hero Image Section */}
        <section className="px-4 mb-8">
          <div className="irregular-border overflow-hidden">
            <img
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-500"
              alt="Macro close-up of premium raw linen fabric texture"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlIlODCnvJoHwxsp9G284RNXQhMSPXhXEjpu0_a8xYPn7fatKcN31XTyVZhDwSUCwwgEPO8V5tZvEv6N3mwsJPK8P51bFKcmjTL6V_1KVZ1P72_Sd_HgoMBvfqNMr6aEVIsCh54rjWopJTZFGW17PFHVisMFQo8GRhc6wLIZCB3WqvaGXobrJn1qr4v1ktIniVkIuD_OSSbOF2okjI1PdFNHcai367vUk6fdCb-aJy28KibXgJS0LPTslHujdS4cCbIpv1ClabkQnU"
            />
          </div>
          <div className="flex justify-between items-start mt-4 px-2">
            <div className="rotate-[-2deg] bg-oatly-blue text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">
              Archive No. 042
            </div>
            <div className="font-body italic text-2xl text-oatly-blue font-bold -mt-2">
              <span className="wavy-underline px-2">100% ORGANIC</span>
            </div>
          </div>
        </section>

        {/* Product Intro - Ultra Bold */}
        <section className="px-6 mb-12">
          <div className="border-b-6 border-primary pb-8 mb-8">
            <h2 className="font-headline text-[72px] font-black leading-[0.85] tracking-tighter uppercase break-words mb-4">
              THE<br />ESSENTIAL<br />VENEER.
            </h2>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-black italic">$440.00</span>
              <span className="font-body italic text-xl rotate-3">In stock, barely.</span>
            </div>
          </div>

          <div className="mb-10">
            <p className="text-2xl font-bold leading-tight mb-6">
              Dear Human,<br />
              This isn't just a shirt. It's an architectural silhouette for your form. We crafted it from fabrics that breathe exactly when you do. It's skin-loving, Earth-healing, and quite frankly, the last layer you'll ever need.
            </p>
            <p className="font-body italic text-2xl text-oatly-blue">- The Workshop</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <span className="font-bold text-sm uppercase tracking-widest">Select Tone:</span>
              <div className="flex gap-4">
                <button className="w-10 h-10 border-4 border-primary bg-[#e4e2dd] ring-4 ring-offset-2 ring-oatly-blue"></button>
                <button className="w-10 h-10 border-4 border-primary bg-[#1B1B1B]"></button>
                <button className="w-10 h-10 border-4 border-primary bg-[#cb6f56]"></button>
              </div>
            </div>

            {/* Primary CTA - Oatly Blue (Green) */}
            <button className="w-full bg-oatly-blue text-oat py-8 px-8 flex justify-between items-center border-4 border-primary hover:translate-x-1 hover:-translate-y-1 transition-transform active:translate-y-0 shadow-[8px_8px_0px_0px_rgba(27,27,27,1)]">
              <span className="font-headline font-black text-2xl uppercase tracking-tighter">ADD TO BAG</span>
              <span className="material-symbols-outlined text-4xl">arrow_forward</span>
            </button>
          </div>
        </section>

        {/* Detail Grid */}
        <section className="px-4 mb-16 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-oat-dark border-4 border-primary p-6 flex flex-col justify-between aspect-square">
              <span className="material-symbols-outlined text-oatly-blue text-4xl">eco</span>
              <div>
                <h3 className="font-headline font-black text-2xl leading-none mb-2 uppercase">EARTH<br />FIRST.</h3>
                <p className="text-xs font-bold leading-tight">Grown in rain. Zero chemicals. No nonsense.</p>
              </div>
            </div>
            <div className="irregular-border overflow-hidden aspect-square">
              <img
                className="w-full h-full object-cover grayscale"
                alt="Tactile detail of a human hand"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAWDMQq1ThtzFbrjflJrrup_XVCRx_1Ulefh3OrH-9PE5bd_ttzWRJepvO8riSSYmKqmowfZT31bzZOE2x6q2BbRVQKa7ZsrZKrCGH7dL5l0mFXPrhTpFXABqneV1wdJbqXZ9LI8HedrL3w9R45Kaa-a7fvz-VxyElSw6_bQ4Vvcn0HkdJBnw9-ojasBwRGXlRIQkfW1oDSYwuCRggGy2P9T9pqhhpH0hSNcF47Seb0PUdn54lgkEVphuZbcv5JJNNYjUuSvc2kS5K"
              />
            </div>
          </div>

          <div className="border-4 border-primary p-8 relative overflow-hidden bg-oat">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-oatly-blue/10 rounded-full blur-xl"></div>
            <h3 className="font-headline font-black text-4xl tracking-tighter mb-4 italic uppercase leading-none">"BACK TO BASICS" PHILOSOPHY.</h3>
            <p className="text-lg font-bold leading-snug mb-6">
              We're not here to make another shirt. We're recording moments. Every stitch is a data point in the history of craft.
            </p>
            <div className="relative inline-block">
              <a className="font-bold text-sm uppercase tracking-widest border-b-4 border-oatly-blue pb-1" href="#">Read The Diary</a>
              <span className="absolute -right-12 -top-4 font-body italic text-oatly-blue text-lg rotate-12">Must read!</span>
            </div>
          </div>
        </section>

        {/* Composition */}
        <section className="px-6 mb-20">
          <div className="border-t-4 border-primary pt-8 mb-12">
            <h4 className="font-bold text-xs uppercase tracking-[0.3em] mb-6 text-oatly-blue">The Composition</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <span className="w-4 h-4 bg-primary shrink-0"></span>
                <p className="text-3xl font-black leading-none uppercase tracking-tighter">100% Organic Linen</p>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-4 h-4 bg-primary shrink-0"></span>
                <p className="text-3xl font-black leading-none uppercase tracking-tighter">Hand-stamped serials</p>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-4 h-4 bg-primary shrink-0"></span>
                <p className="text-3xl font-black leading-none uppercase tracking-tighter">Fallen oak buttons</p>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-7 border-4 border-primary p-1">
              <img
                className="w-full grayscale"
                alt="Artistic silhouette"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV6Z_Hs0Y8lv4CjszqMpxljEwkW037Lrv69KdMnLHOYd2eTYc2-oVZnTj7oi0H-0jcyLih_t9QASBhyFruJhzRtfQB9oZCstK-e5AnWfZeZPLBlihJ0tI2R4bDsYrVKYpH0o7zVIyI6ozZ1BBS5MhpjmTXt1SzrJPIHAfyLR74QPASGNmw_qF6gQ7YFE7rVp0FaIsbjf1xqTFuTD-_Et9PMi43UbZzDP2FaE7dAdrq1uy_WpA1j7Z4WA7MfXGquSXvxDvmJpE6pghI"
              />
            </div>
            <div className="col-span-5 pl-2">
              <p className="font-body italic text-xl leading-none text-oatly-blue">
                "Designed to age with your skin. The more you wear it, the more it knows you."
              </p>
            </div>
          </div>
        </section>

        {/* Material Benefits */}
        <section className="bg-primary text-oat py-16 px-6">
          <h4 className="font-headline font-black text-4xl uppercase mb-10 italic tracking-tighter">Skin-loving.</h4>
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="bg-oatly-blue p-2 shrink-0 border-2 border-oat">
                <span className="material-symbols-outlined text-oat text-3xl">air</span>
              </div>
              <div>
                <p className="font-black uppercase text-xl mb-1 tracking-tight">Hyper-Breathable</p>
                <p className="text-oat-dark font-medium leading-tight">Naturally thermoregulating fibers for all-season life.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-oatly-blue p-2 shrink-0 border-2 border-oat">
                <span className="material-symbols-outlined text-oat text-3xl">temp_preferences_custom</span>
              </div>
              <div>
                <p className="font-black uppercase text-xl mb-1 tracking-tight">Soft Evolution</p>
                <p className="text-oat-dark font-medium leading-tight">Softens with every wash. No structural integrity lost.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetail;
