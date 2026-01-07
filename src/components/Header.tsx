import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auraLogo from "@/assets/aura-logo.png";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
  };

  /**
   * NAV ITEMS
   * - hash  => jump link
   * - route => redirect
   */

  type HashNavItem = {
    key: string;
    type: "hash";
    hash: `#${string}`;
  };

  type RouteNavItem = {
    key: string;
    type: "route";
    path: string;
  };

  type NavItem = HashNavItem | RouteNavItem;

  const navItems: NavItem[] = [
    { key: "home", hash: "#home", type: "hash" },
    { key: "services", hash: "#services", type: "hash" },
    { key: "portfolio", path: "/portfolio", type: "route" },
    { key: "about", hash: "#about", type: "hash" },
    { key: "contact", hash: "#contact", type: "hash" },
  ];

  const whatsappLink =
    "https://wa.me/966539959221?text=Hello%20Aura%20Marketing";

  const handleNavClick = (item: NavItem) => {
    setIsMobileMenuOpen(false);

    // 🔹 Route navigation
    if (item.type === "route") {
      navigate(item.path);
      return;
    }

    // 🔹 Hash navigation
    const hash = item.hash;

    if (location.pathname !== "/") {
      navigate("/" + hash);
      return;
    }

    const element = document.querySelector(hash);
    if (!element) return;

    window.scrollTo({ top: 0, behavior: "auto" });

    requestAnimationFrame(() => {
      const headerOffset = 100;
      const y =
        element.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={auraLogo}
            alt="Aura Marketing"
            loading="eager"
            className="h-11 w-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item)}
              className="text-foreground/80 hover:text-primary transition-colors underline-aura text-sm font-medium">
              {t(`nav.${item.key}`)}
            </button>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          {/* LANGUAGE */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-foreground/80 lg:hover:text-primary transition-colors">
            <Globe className="w-5 h-5" />
            <span className="text-sm font-medium">{isRTL ? "EN" : "عربي"}</span>
          </button>

          {/* START NOW (DESKTOP) */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block btn-aura rounded-full text-sm text-primary-foreground">
            {t("nav.startNow")}
          </a>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2">
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item)}
                  className="text-foreground/80 hover:text-primary transition-colors py-2 text-lg text-start">
                  {t(`nav.${item.key}`)}
                </button>
              ))}

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-aura rounded-full text-center mt-4 text-primary-foreground">
                {t("nav.startNow")}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
