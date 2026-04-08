import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-oat text-primary font-body selection:bg-oatly-blue selection:text-white">
      <main className="pt-24 pb-32">
        {/* Hero / Manifesto Intro */}
        <section className="px-6 mb-24">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-8">
              <span className="inline-block bg-primary text-oat px-3 py-1 font-bold text-xs uppercase tracking-widest -rotate-1">Est. 2024</span>
            </div>
            <h1 className="font-headline font-black text-7xl md:text-[12rem] uppercase mb-12 leading-[0.9] tracking-tighter">
              THE <br />
              <span className="text-oatly-blue italic font-serif font-normal lowercase">story</span> <br />
              OF US
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="relative">
                <div className="irregular-border bg-oat-dark overflow-hidden rotate-1">
                  <img
                    alt="hero image"
                    className="w-full h-auto grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5V5CKnDcX-q9m3Hr5A1Y5eAwJiFAhurxFtHqDtUJ6ukjWs6JWVNGOZW6llDZCPOW7pnjiqr3lUQo26ZRnYJQyu-4nRSyyvGwDwoHubUv6M7RKVmDgOEX3xKAnIco3UA66U1H1YTrB2ZKjZaWuxHHGL-Kq97e6gfJy7UmKTzyo5G4uSY1CIe_4i-0WNxqG3M8DSqzMzYYxm9k78Lz4qbVpD2cTrNZM76pcm-B-WbWvqnmimzau7eGKUCvnhtPPL64NDBctnj6lzZf7"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-12">
                <blockquote className="text-4xl font-serif italic leading-none border-l-8 border-oatly-blue pl-6">
                  "We are not just making clothes; we are <span className="wavy-underline">archiving the whispers</span> of a continent."
                </blockquote>
                <div className="space-y-6">
                  <p className="text-xl font-medium leading-tight max-w-lg">
                    Nati Natai was born from a desire to reconcile the raw energy of African heritage with the precision of contemporary design. Our workshop is a sanctuary where tradition meets disruption.
                  </p>
                  <p className="font-bold uppercase tracking-tighter text-sm underline decoration-4 underline-offset-4 decoration-oatly-blue">
                    HONESTY ABOVE EVERYTHING.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="bg-oat-dark border-y-4 border-primary py-24 mb-24 overflow-hidden">
          <div className="max-w-screen-xl mx-auto px-6">
            <h2 className="font-headline font-black text-6xl md:text-9xl uppercase mb-24 -rotate-1 inline-block leading-[0.9] tracking-tighter">
              OUR PILLARS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="space-y-4 group">
                <div className="text-oatly-blue font-black text-5xl mb-2">01</div>
                <h3 className="font-black text-2xl uppercase tracking-tighter bg-primary text-oat inline-block px-2 py-1 transform group-hover:translate-x-2 transition-transform">Sustainability</h3>
                <p className="text-xl font-medium leading-snug">Respecting the earth by utilizing deadstock fabrics and traditional low-impact dyeing techniques that have existed for centuries.</p>
              </div>
              <div className="space-y-4 group">
                <div className="text-oatly-blue font-black text-5xl mb-2">02</div>
                <h3 className="font-black text-2xl uppercase tracking-tighter bg-primary text-oat inline-block px-2 py-1 transform group-hover:translate-x-2 transition-transform">Inclusivity</h3>
                <p className="text-xl font-medium leading-snug">Designing silhouettes that embrace the human form in all its variations, rejecting the binary of modern sizing.</p>
              </div>
              <div className="space-y-4 group">
                <div className="text-oatly-blue font-black text-5xl mb-2">03</div>
                <h3 className="font-black text-2xl uppercase tracking-tighter bg-primary text-oat inline-block px-2 py-1 transform group-hover:translate-x-2 transition-transform">African Luxury</h3>
                <p className="text-xl font-medium leading-snug">Redefining luxury as the time taken to hand-weave a single meter of cloth, rather than the price tag attached to it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Craft Narrative */}
        <section className="py-24 px-6 mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-black uppercase tracking-[0.4em] text-xs text-oatly-blue">The Craft</span>
              <h2 className="font-headline font-black text-7xl md:text-9xl uppercase mt-4 leading-[0.9] tracking-tighter">THE <span className="wavy-underline">HUMAN</span> ARCHIVE</h2>
            </div>
            <div className="font-serif text-3xl md:text-4xl leading-tight space-y-12">
              <p>Every piece in our collection is numbered. It is a record of time, a document of labor, and a fragment of a larger story. We do not mass-produce; <span className="font-bold italic">we curate.</span></p>
              <div className="grid grid-cols-2 gap-4 py-8">
                <div className="irregular-border -rotate-2 overflow-hidden">
                  <img
                    alt="weaving"
                    className="w-full grayscale"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3MNPNQV7nOPmN_aCfOnVuPQk7RYJFmSPJTxGv3lisqROlEFWzRAgWRA05rCJuiwSMaeyowtwdrYdQ1omURPPuaYJhYH5gGDK_R9a-pIlILV-f0sMrnUy9N5SRm5I9lEa3w617-ZcMMH6RiXgMYWWBBzdkAnA98cj-fjIBHP1jIWAS2ZZFpwyCsrB0XDLlUV8YE4YRe5CBghdKJMPDARbV3xQZcuVq_M7oS0hJ_Fkg8UBAgKGubjM3-axYPZ-6B8TyC3AIr3N9e4fW"
                  />
                </div>
                <div className="irregular-border rotate-1 mt-12 overflow-hidden">
                  <img
                    alt="workshop"
                    className="w-full grayscale"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5RSxNy-2DXVrg3mluEk1hoSoW1x08rzIzGp7LdlZ395uQBcFVdrFM0KLj3EpRUT1TC2uAK0nFp2FtqJUVwsJhNVP-H_4J6kLsDojeXJdom40G7g94VEZar7sQcSLlfLnKSPeD3vBRM4DVIcOVnmPJQOm_D2VZt4R0kc72dXTy1__ZaST5Zci5CNmI6qvkeQTfKIKy2uigbPrLypF-V5uL7XyDdOezzdYpa559GrNo891IMjCzo64oKREIQu3dWKkK3MODwl1G34KG"
                  />
                </div>
              </div>
              <p className="text-oatly-blue italic">From the dust of the workshop to the bright lights of the runway, our journey is transparent, gritty, and profoundly human.</p>
            </div>
            <div className="mt-20">
              <Link to="/collection" className="w-full bg-primary text-oat irregular-border py-8 text-2xl font-black uppercase tracking-tighter hover:bg-oatly-blue hover:-translate-y-1 transition-all flex items-center justify-center gap-4 active:translate-y-1">
                EXPLORE THE COLLECTION
                <span className="material-symbols-outlined text-4xl">trending_flat</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
