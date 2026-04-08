import { useState, useEffect } from "react";
import { FaCookieBite } from "react-icons/fa";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === null) {
      setVisible(true);
    } else {
      setShowIcon(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
    setShowIcon(true);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setVisible(false);
    setShowIcon(true);
  };

  const reopenMessage = () => setVisible(true);

  return (
    <>
      {/* Floating Cookie Icon */}
      {showIcon && !visible && (
        <div
          onClick={reopenMessage}
          className="fixed bottom-24 left-6 bg-primary text-oat p-3 border-2 border-primary shadow-[4px_4px_0px_0px_rgba(18,74,23,1)] cursor-pointer hover:-translate-y-1 z-50 transition-all"
          title="Manage Cookie Settings"
        >
          <FaCookieBite size={22} />
        </div>
      )}

      {/* Consent Box */}
      {visible && (
        <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-oat text-primary p-6 irregular-border w-[90%] max-w-md z-50 animate-fadeIn">
          <p className="font-headline font-bold text-sm mb-4 uppercase tracking-tighter">
            THE ARCHIVE USES COOKIES TO RECORD YOUR JOURNEY. (ACTUALLY, JUST TO IMPROVE YOUR EXPERIENCE).
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={handleDecline}
              className="anti-button border-4 border-primary px-6 py-2 font-headline font-bold text-xs uppercase tracking-widest hover:bg-red-500 hover:text-white transition-colors"
            >
              DECLINE
            </button>

            <button
              onClick={handleAccept}
              className="anti-button bg-primary text-oat px-6 py-2 font-headline font-bold text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_#124A17]"
            >
              ACCEPT
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
