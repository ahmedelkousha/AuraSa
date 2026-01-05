import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Download, Award, Users, Target, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProfilePage = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const highlights = [
    {
      icon: Users,
      value: '120+',
      label: isRTL ? 'عميل راضٍ' : 'Satisfied Clients',
    },
    {
      icon: Target,
      value: '1050+',
      label: isRTL ? 'حملة ناجحة' : 'Successful Campaigns',
    },
    {
      icon: TrendingUp,
      value: '10.5k+',
      label: isRTL ? 'تصميم وفيديو' : 'Designs & Videos',
    },
    {
      icon: Award,
      value: '250+',
      label: isRTL ? 'موقع ومتجر' : 'Websites & Stores',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
            <span>{isRTL ? 'العودة للرئيسية' : 'Back to Home'}</span>
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {isRTL ? 'بروفايل اورا' : 'Aura Profile'}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {isRTL
                ? 'تعرف على وكالة اورا للتسويق الرقمي وما نقدمه من خدمات احترافية'
                : 'Learn about Aura Digital Marketing Agency and our professional services'}
            </p>
            <a
              href="https://drive.google.com/file/d/1KvnS0X6d8QUml0TmOs3jrdnud-xidL-2/view?usp=drivesdk"
              className="inline-flex items-center gap-2 btn-aura rounded-full text-primary-foreground"
              target="_blank" rel="noopener noreferrer"
            >
              <ArrowRight className={`${!isRTL ? 'rotate-180' : ''} w-5 h-5`} />
              <span>{isRTL ? 'تعرف علينا' : 'Get to know us'}</span>
            </a>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {highlights.map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 text-center">
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{item.value}</div>
                <div className="text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Content Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-2xl p-8 lg:p-12"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {isRTL ? 'عن اورا' : 'About Aura'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isRTL
                ? 'نحن ندرك أن لكل مشروع روح خاصة تميزه عن غيره، ومهمتنا هي تسليط الضوء على علامتك وجعلها مرئية للجمهور المستهدف. من خلال فريق من الخبراء في تحليل البيانات، صناعة المحتوى، وإدارة الحملات الإعلانية، نلتزم بمنهجية عمل صارمة تبدأ من الدراسة العميقة وتنتهي بتحقيق عوائد ملموسة على الاستثمار.'
                : 'We realize that each project has a unique spirit that distinguishes it from others, and our mission is to spotlight your brand and make it visible to the target audience. Through a team of experts in data analysis, content creation, and advertising campaign management, we commit to a strict work methodology that starts from deep study and ends with achieving tangible returns on investment.'}
            </p>
            {/* <p className="text-muted-foreground leading-relaxed">
              {isRTL
                ? 'سيتم إضافة محتوى تفصيلي للبروفايل قريباً.'
                : 'Detailed profile content will be added soon.'}
            </p> */}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
