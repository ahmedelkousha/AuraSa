import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Phone, Mail, Clock } from "lucide-react";
import catchyAr from "@/assets/catchyAr.webp";
import catchyEn from "@/assets/catchyEn.webp";

const ContactSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const whatsappLink = "https://wa.me/966539959221";

  const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-primary">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
  const contactInfo = [
    {
      icon: Phone,
      label: isRTL ? "الهاتف" : "Phone",
      value: "+966 53 995 9221",
      href: "tel:+966539959221",
      noRedirect: false,
    },
    {
      icon: WhatsAppIcon,
      label: isRTL ? "واتساب" : "WhatsApp",
      value: "+966 53 995 9221",
      href: whatsappLink,
      noRedirect: false,
    },
    {
      icon: Mail,
      label: isRTL ? "البريد الإلكتروني" : "Email",
      value: "info@auramarketingsa.com",
      href: "mailto:info@auramarketingsa.com",
      noRedirect: false,
    },
    {
      icon: MapPin,
      label: isRTL ? "الموقع" : "Location",
      value: isRTL ? "جدة، المملكة العربية السعودية" : "Jeddah, Saudi Arabia",
      href: "https://maps.app.goo.gl/hGyYEyUmbKovwKXTA?g_st=awb",
      noRedirect: false,
    },
    {
      icon: Clock,
      label: isRTL ? "ساعات العمل" : "Working Hours",
      value: isRTL ? "السبت - الخميس: 8 ص - 11 م" : "Sat - Thu: 8 AM - 11 PM",
      href: "",
      noRedirect: true,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("nav.contact")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {isRTL
              ? "نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق أهدافك"
              : "We are here to answer your inquiries and help you achieve your goals"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`${
                  item.noRedirect && "pointer-events-none"
                } flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group`}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-semibold text-foreground" dir="ltr">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          <img
            className={`${!isRTL ? "hidden" : ""} h-auto w-auto`}
            src={catchyAr}
            alt="Catchy"
            loading="lazy"
            decoding="async"
          />
          <img
            className={`${isRTL ? "hidden" : ""} h-auto w-auto`}
            src={catchyEn}
            alt="Catchy"
            loading="lazy"
            decoding="async"
          />

          {/* WhatsApp CTA */}
          {/* <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div className="w-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-8 lg:p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {isRTL ? 'تواصل معنا عبر واتساب' : 'Contact Us via WhatsApp'}
              </h3>
              <p className="text-muted-foreground mb-8">
                {isRTL
                  ? 'احصل على رد سريع على استفساراتك من خلال واتساب'
                  : 'Get a quick response to your inquiries via WhatsApp'}
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 btn-aura rounded-full text-primary-foreground text-lg"
              >
                <MessageCircle className="w-6 h-6" />
                <span>{isRTL ? 'ابدأ المحادثة' : 'Start Chat'}</span>
              </a>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
