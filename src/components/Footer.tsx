import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auraLogo from '@/assets/aura-logo.png';
import twitter from '@/assets/icons/x.png';
import snapchat from '@/assets/icons/snapchat.png';
import tiktok from '@/assets/icons/tiktok.png';

/* =========================
   Footer Dropdown Component
========================= */
const FooterDropdown = ({
  title,
  items,
  isOpen,
  onToggle,
  isQuickLinks = false,
}: {
  title: string;
  items: { label: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
  isQuickLinks?: boolean;
}) => {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' && window.innerWidth >= 1024
  );

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (href: string) => {
    if (isQuickLinks) {
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="border-b border-border lg:border-none">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-4 lg:py-0 lg:cursor-default"
      >
        <span className="font-semibold text-foreground">{title}</span>
        <ChevronDown
          className={`w-5 h-5 lg:hidden transition-transform text-muted-foreground ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence mode="wait">
        {(isOpen || isDesktop) && (
          <motion.div
            key="dropdown-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden lg:overflow-visible"
          >
            <ul className="pb-4 lg:pb-0 lg:mt-4 space-y-3">
              {items.map((item, index) => (
                <li key={index}>
                  {isQuickLinks ? (
                    <button
                      onClick={() => handleClick(item.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm text-start"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* =========================
          Footer
========================= */
const Footer = () => {
  const { t } = useTranslation();

  // 👇 Only ONE dropdown open at a time
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const servicesItems = [
    { label: t('footer.ecommerce'), href: '/services/ecommerce' },
    { label: t('footer.adCampaigns'), href: '/services/campaigns' },
    { label: t('footer.socialManagement'), href: '/services/social-media' },
    { label: t('footer.motionVideo'), href: '/services/motion-graphics' },
  ];

  const pastWorkItems = [
    { label: t('footer.portfolio'), href: '/portfolio' },
    { label: t('footer.profile'), href: '/profile' },
  ];

  const blogItems = [
    { label: t('footer.blogPost1'), href: '/success-story' },
    { label: t('footer.blogPost2'), href: '/blog/ecommerce-guide' },
  ];

  const quickLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.portfolio'), href: '#portfolio' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img src={auraLogo} alt="Aura Marketing" className="h-12 w-auto" />
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {t('mission.desc').substring(0, 200)}
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{t('footer.location')}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span dir="ltr">+966 53 995 9221</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@auramarketingsa.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/auramarketingsa" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5 text-slate-300" />
              </a>
              <a href="https://x.com/auramarketingsa" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                <img className="w-5 h-5" src={twitter} alt="X" />
              </a>
              <a href="https://www.facebook.com/people/Aura-Marketing/61585938591898/" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5 text-slate-300" />
              </a>
              <a href="https://www.snapchat.com/@auramarketingsa" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                <img className="w-5 h-5" src={snapchat} alt="Snapchat" />
              </a>
              <a href="https://www.youtube.com/@auramarketingsa" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5 text-slate-300" />
              </a>
              <a href="https://www.tiktok.com/@auramarketingsa" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                <img className="w-4 h-5" src={tiktok} alt="TikTok" />
              </a>
            </div>
          </div>

          {/* Dropdowns */}
          <FooterDropdown
            title={t('footer.quickLinks')}
            items={quickLinks}
            isQuickLinks
            isOpen={openDropdown === 'quickLinks'}
            onToggle={() =>
              setOpenDropdown(openDropdown === 'quickLinks' ? null : 'quickLinks')
            }
          />

          <FooterDropdown
            title={t('footer.services')}
            items={servicesItems}
            isOpen={openDropdown === 'services'}
            onToggle={() =>
              setOpenDropdown(openDropdown === 'services' ? null : 'services')
            }
          />

          <FooterDropdown
            title={t('footer.pastWork')}
            items={pastWorkItems}
            isOpen={openDropdown === 'pastWork'}
            onToggle={() =>
              setOpenDropdown(openDropdown === 'pastWork' ? null : 'pastWork')
            }
          />

          <FooterDropdown
            title={t('footer.blog')}
            items={blogItems}
            isOpen={openDropdown === 'blog'}
            onToggle={() =>
              setOpenDropdown(openDropdown === 'blog' ? null : 'blog')
            }
          />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6">
            <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm">
              {t('footer.terms')}
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm">
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
