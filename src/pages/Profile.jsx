import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="bg-oat text-primary font-headline selection:bg-archive-brown selection:text-oat">
      <main className="pt-28 md:pt-40 pb-32 px-6 max-w-screen-xl mx-auto">
        {/* Profile Header */}
        <section className="mb-16 border-b-4 border-primary pb-12 relative">
          <div className="flex flex-col md:flex-row gap-12 items-end">
            <div className="w-40 h-40 md:w-56 md:h-56 irregular-border bg-oat-dark overflow-hidden shadow-[12px_12px_0px_0px_#543D28]">
              <div className="w-full h-full flex items-center justify-center bg-archive-brown/10">
                <span className="material-symbols-outlined text-8xl text-archive-brown/30">face</span>
              </div>
            </div>
            <div className="space-y-4">
              <span className="font-bold text-sm uppercase tracking-[0.3em] bg-primary text-oat px-3 py-1 inline-block -rotate-1">Archive Member</span>
              <h1 className="font-black text-6xl md:text-8xl uppercase tracking-tighter leading-none">
                HUMAN<br />#8402
              </h1>
              <p className="font-body italic text-2xl opacity-60">Joined the inquiry in April 2024</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Stats/Info */}
          <div className="lg:col-span-4 space-y-12">
            <div className="p-8 border-4 border-primary bg-oat-dark rotate-1 shadow-[8px_8px_0px_0px_#1B1B1B]">
              <h3 className="font-black text-2xl uppercase tracking-tighter mb-6 border-b-2 border-primary pb-2">STASH STATS</h3>
              <ul className="space-y-4 font-body text-xl">
                <li className="flex justify-between">
                  <span>Artifacts Owned</span>
                  <span className="font-bold">03</span>
                </li>
                <li className="flex justify-between">
                  <span>Inquiries Made</span>
                  <span className="font-bold">12</span>
                </li>
                <li className="flex justify-between">
                  <span>Archive Credits</span>
                  <span className="font-bold">420</span>
                </li>
              </ul>
            </div>

            <div className="p-8 border-4 border-primary border-dotted space-y-6">
              <h3 className="font-black text-xl uppercase tracking-widest">PERSONAL DATA</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">Electronic Mail</p>
                  <p className="font-bold text-lg">human@archive.life</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">Physical Coordinates</p>
                  <p className="font-bold text-lg uppercase leading-tight">16 George Silundika Ave<br/>Harare, Zimbabwe</p>
                </div>
              </div>
              <button className="w-full anti-button py-3 text-xs font-bold uppercase tracking-widest hover:bg-archive-brown hover:text-oat">
                EDIT DATA
              </button>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Recent Orders / Stash */}
            <div className="space-y-8">
              <h2 className="font-black text-4xl uppercase tracking-tighter italic border-l-8 border-archive-brown pl-6">RECENT ARTIFACTS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group border-4 border-primary p-4 hover:bg-oat-dark transition-colors cursor-pointer">
                  <div className="aspect-square bg-stone-200 mb-4 irregular-border overflow-hidden">
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXlVuLePeWydbI5Awm4lrRM2OO5M4XA-3q0V5bNyr6mHMjcm5aCdlc8803G_-4XxzzC_EP2RmwH2M1g3z9Ee9h93Ddft0CX5jQ2O9-mMVgxP9JarFv_DoOw_SuVSm9EChzSNwEgnGbdtD-LpWGSU34-7MjCiNtFaH2naoliwUA_nonkMSXYqKo_Xpn7ZzytgMNyXRNeRXk-8GcddUBR-UV5qGz_KdIYnrEM_Uvt-DlGuua4M-24Ejpxh1eA2ek_79fOQvRd8Sp_328"
                      className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-opacity"
                      alt="Product"
                    />
                  </div>
                  <h4 className="font-black text-lg uppercase tracking-tighter">Essential Veneer</h4>
                  <p className="text-xs font-bold opacity-40">ACQUIRED: 12.04.24</p>
                </div>
                <div className="flex items-center justify-center border-4 border-primary border-dashed p-8 bg-oat-dark/50 hover:bg-oat-dark transition-all group">
                  <Link to="/collection" className="text-center space-y-4">
                    <span className="material-symbols-outlined text-5xl group-hover:scale-110 transition-transform block">add_circle</span>
                    <span className="font-black text-sm uppercase tracking-widest block">FIND MORE<br/>ARTIFACTS</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Logout/Danger Zone */}
            <div className="pt-12 border-t-4 border-primary/10">
              <button className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm hover:underline flex items-center gap-2">
                <span className="material-symbols-outlined">logout</span>
                ABANDON SESSION
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
