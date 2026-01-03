import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const whatsappLink = "https://wa.me/966539959221";

  const contactInfo = [
    {
      icon: Phone,
      label: isRTL ? 'الهاتف' : 'Phone',
      value: '+966 53 995 9221',
      href: 'tel:+966539959221',
    },
    {
      icon: MessageCircle,
      label: isRTL ? 'واتساب' : 'WhatsApp',
      value: '+966 53 995 9221',
      href: whatsappLink,
    },
    {
      icon: Mail,
      label: isRTL ? 'البريد الإلكتروني' : 'Email',
      value: 'info@auramarketingsa.com',
      href: 'mailto:info@auramarketingsa.com',
    },
    {
      icon: MapPin,
      label: isRTL ? 'الموقع' : 'Location',
      value: isRTL ? 'جدة، المملكة العربية السعودية' : 'Jeddah, Saudi Arabia',
      href: '#',
    },
    {
      icon: Clock,
      label: isRTL ? 'ساعات العمل' : 'Working Hours',
      value: isRTL ? 'الأحد - الخميس: 9 ص - 6 م' : 'Sun - Thu: 9 AM - 6 PM',
      href: '#',
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('nav.contact')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {isRTL
              ? 'نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق أهدافك'
              : 'We are here to answer your inquiries and help you achieve your goals'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-semibold text-foreground" dir="ltr">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

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
