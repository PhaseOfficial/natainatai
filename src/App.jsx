import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import Voice from "./pages/Voice";
import Header from "./components/common/Header";
import BottomNav from "./components/common/BottomNav";
import Footer from "./components/common/Footer";
import CookieConsent from "./components/Cookies";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-PKXK7LPV",
};

TagManager.initialize(tagManagerArgs);

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-oat min-h-screen font-body selection:bg-archive-brown selection:text-white">
      <Header />
      
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/voice" element={<Voice />} />
          
          <Route
            path="*"
            element={
              <div className="text-center mt-40 text-2xl font-headline text-primary">
                404 - Archive Item Not Found
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
      <BottomNav />
      <CookieConsent />
    </div>
  );
};

export default App;
