"use client";

import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";

export default function GoogleTranslate() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const scriptLoaded = useRef(false);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ];

  // 🔹 Lazy-load Google Translate
  const loadGoogleTranslate = () => {
    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,it",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  };

  // 🔹 Restore saved language safely (NO interval)
  useEffect(() => {
    const savedLang = localStorage.getItem("preferred-language");
    if (!savedLang) return;

    setCurrentLang(savedLang);

    const observer = new MutationObserver(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = savedLang;
        select.dispatchEvent(new Event("change"));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  // 🔹 Change language
  const changeLanguage = (langCode) => {
    setCurrentLang(langCode);
    localStorage.setItem("preferred-language", langCode);

    const select = document.querySelector(".goog-te-combo");
    if (!select) return;

    select.value = langCode;
    select.dispatchEvent(new Event("change"));
  };

  return (
    <>
      {/* Hidden Google Translate container */}
      <div id="google_translate_element" style={{ display: "none" }} />

      {/* Floating Translator */}
      <div className="floating-translator">
        <button
          className="floating-button"
          aria-label="Select language"
          onClick={() => {
            setIsOpen((prev) => !prev);
            loadGoogleTranslate(); // ✅ load only when needed
          }}
        >
          <Globe size={24} />
        </button>

        {isOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-header">
              <Globe size={18} />
              <span>Select Language</span>
            </div>

            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`lang-option ${
                  currentLang === lang.code ? "active" : ""
                }`}
                onClick={() => changeLanguage(lang.code)}
              >
                <span className="flag">{lang.flag}</span>
                <span className="lang-name">{lang.name}</span>
                {currentLang === lang.code && (
                  <span className="check">✓</span>
                )}
              </button>
            ))}
          </div>
        )}

        {isOpen && (
          <div
            className="dropdown-overlay"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </>
  );
}
