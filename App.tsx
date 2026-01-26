
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Menu, 
  X, 
  CheckCircle2, 
  AlertCircle,
  ChevronLeft,
  Sparkles,
  ArrowRight,
  Play,
  ArrowDown
} from 'lucide-react';
import { Button } from './components/Button';
import { SectionHeading } from './components/SectionHeading';
import { TiltCard } from './components/TiltCard';
import { 
  NAV_ITEMS, 
  SERVICES, 
  PROCESS_STEPS, 
  AUDIENCES, 
  BENEFITS, 
  PAIN_POINTS 
} from './constants';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const sphereScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.4]);
  const sphereOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fix: Added missing toggleMobileMenu function to handle mobile menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement> | { preventDefault: () => void }, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const sectionAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div ref={containerRef} className="min-h-screen selection:bg-blue-500/30 selection:text-white">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-4 shadow-2xl' : 'bg-transparent py-10'}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 glass border-white/20 rounded-xl flex items-center justify-center font-bold text-xl">A</div>
            <span className="text-xl font-bold tracking-tight">أركان <span className="opacity-40 font-light">ديجيتال</span></span>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-12">
            {NAV_ITEMS.map((item) => (
              <motion.a 
                key={item.href} 
                href={item.href} 
                onClick={(e) => scrollToSection(e, item.href)}
                whileHover={{ y: -2 }}
                className="text-white/50 hover:text-white transition-all font-medium text-xs tracking-widest uppercase"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:block !border-white/10 !bg-white/5 hover:!bg-white/10 !px-6 !py-2 !text-xs tracking-wider" onClick={(e: any) => scrollToSection(e, '#process')}>
              ابدأ الآن <ArrowRight className="inline-block mr-2 w-3 h-3 rotate-180" />
            </Button>
            <button className="lg:hidden text-white p-2" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass border-t border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-8 gap-6 text-center">
                {NAV_ITEMS.map((item) => (
                  <a 
                    key={item.href} 
                    href={item.href} 
                    className="text-xl font-medium tracking-wide text-white/70" 
                    onClick={(e) => scrollToSection(e, item.href)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button className="mt-4" onClick={() => scrollToSection({ preventDefault: () => {} } as any, '#process')}>احجز استشارة مجانية</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        <motion.div style={{ scale: sphereScale, opacity: sphereOpacity }} className="hero-sphere" />
        <motion.div className="hero-arc" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-14"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 animate-pulse"></div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative glass p-5 rounded-3xl border-white/20"
              >
                 <Sparkles className="w-8 h-8 text-white" />
              </motion.div>
              <div className="absolute -top-3 -right-12 glass px-3 py-1 rounded-full text-[9px] font-black text-white/60 border-white/10 uppercase tracking-[0.2em]">
                BETA
              </div>
            </div>
            <div className="mt-6 text-white font-medium text-lg tracking-widest opacity-80 uppercase">Arkan AI Engine</div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold mb-12 tracking-tighter leading-[1.05] text-white"
          >
            حلول <span className="text-gradient">تتجاوز التوقعات</span>، <br />
            بلمسة <span className="opacity-40">رقمية ذكية.</span>
          </motion.h1>

          {/* Prompt Bar (Dora Style) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto w-full relative mb-16"
          >
            <div className="glass p-3 rounded-[2.5rem] border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center gap-4 group hover:border-white/20 transition-all duration-500">
              <div className="flex-grow flex items-center gap-4 pr-5">
                <Sparkles className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors" />
                <span className="text-white/30 text-sm md:text-base font-light text-right w-full cursor-text">بناء منصة متكاملة لتحويل الأفكار إلى واقع...</span>
              </div>
              <Button variant="primary" className="!rounded-3xl !py-3 !px-8 flex items-center gap-2 text-xs font-bold whitespace-nowrap !bg-white !text-black hover:!bg-slate-200 shadow-none">
                توليد <ArrowRight className="w-4 h-4 rotate-180" />
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            <button className="flex items-center gap-4 text-white/40 hover:text-white transition-all text-xs font-bold tracking-widest uppercase">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center border-white/5">
                <Play className="w-3 h-3 fill-current ml-1" />
              </div>
              كيف نغير قواعد اللعبة
            </button>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-10 text-white/20"
            >
              <ArrowDown size={20} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <motion.section 
        id="services" 
        {...sectionAnimation}
        className="py-40 relative"
      >
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="آفاق خدماتنا" 
            subtitle="نحن نمزج الذكاء الاصطناعي مع أحدث تقنيات التطوير لبناء أنظمة تتنفس الابتكار وتدفع بالنمو."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <TiltCard className="h-full">
                  <div className="group h-full p-12 rounded-[3rem] glass border-white/5 hover:border-white/10 transition-all duration-700 flex flex-col items-center text-center">
                    <div className="w-24 h-24 glass rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-700 shadow-inner">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">{service.title}</h3>
                    <p className="text-white/40 leading-relaxed mb-12 text-sm font-light">{service.description}</p>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 hover:text-white transition-all border-b border-transparent hover:border-white/20 pb-1"
                    >
                      تعرف على الحل
                    </motion.button>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Audience - Interactive selection visual */}
      <motion.section 
        id="audience" 
        {...sectionAnimation}
        className="py-40 relative overflow-hidden bg-white/[0.01]"
      >
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading 
            title="لمن هذه التجربة؟" 
            subtitle="صممنا خدماتنا لتلائم القادة ورواد الأعمال والمهنيين الذين لا يقبلون بأقل من التميز الرقمي."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIENCES.map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-5 p-8 glass rounded-[2rem] border-white/5 cursor-default transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/60">
                  {item.icon}
                </div>
                <span className="font-bold text-lg text-white/90">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pain Points Section */}
      <motion.section 
        {...sectionAnimation}
        className="py-40 relative"
      >
        <div className="container mx-auto px-6">
          <div className="relative p-14 md:p-24 rounded-[4rem] glass border-white/5 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>

            <div className="grid md:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em] mb-8 block"
                >
                  Current Friction
                </motion.span>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight tracking-tighter">
                  الجمود الرقمي <br /> <span className="opacity-30">يقتل الإبداع.</span>
                </h2>
                <div className="space-y-10">
                  {PAIN_POINTS.map((point, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-6 group"
                    >
                      <div className="w-14 h-14 flex-shrink-0 glass rounded-2xl flex items-center justify-center group-hover:bg-red-500/5 transition-colors">
                        <AlertCircle className="w-6 h-6 text-white/10 group-hover:text-red-400/50 transition-colors" />
                      </div>
                      <p className="text-white/50 text-xl leading-relaxed font-light group-hover:text-white/80 transition-colors">{point.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <TiltCard>
                  <div className="aspect-square glass rounded-[4rem] border-white/10 p-16 flex flex-col justify-center items-center text-center shadow-[0_0_80px_rgba(0,0,0,0.3)]">
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center mb-10 border border-white/5"
                    >
                      <CheckCircle2 className="w-16 h-16 text-white/10" />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-white mb-6">إعادة تعريف المسار</h4>
                    <p className="text-white/30 text-base font-light">نحن نكسر الحواجز التقليدية لنفتح لك آفاقاً من الكفاءة التي لم تعهدها من قبل.</p>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Grid */}
      <motion.section 
        {...sectionAnimation}
        className="py-40"
      >
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="جوهر الكفاءة" 
            subtitle="لماذا يقع اختيار النخبة على أركان ديجيتال؟ الأمر يتعلق بالدقة والسرعة والنتائج."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-10 rounded-[3rem] glass border-white/5 hover:border-white/20 transition-all duration-700 text-center"
              >
                <div className="mb-8 flex justify-center grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100 duration-700 scale-110">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{benefit.title}</h4>
                <p className="text-white/30 text-sm leading-relaxed font-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        id="process" 
        {...sectionAnimation}
        className="py-40 relative"
      >
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="خارطة الطريق" 
            subtitle="منهجية واضحة، خطوات مدروسة، ونتائج ملموسة."
          />
          
          <div className="grid md:grid-cols-4 gap-16 relative">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full glass border border-white/10 flex items-center justify-center mb-10 text-2xl font-black text-white/20 group-hover:text-white group-hover:border-blue-500/50 transition-all duration-700">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-5 text-white/90 group-hover:text-white transition-colors">{step.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed font-light">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        {...sectionAnimation}
        className="py-40"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="relative p-20 md:p-32 rounded-[5rem] glass border-white/10 text-center overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent"></div>
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-8xl font-bold text-white mb-12 leading-[1.1] tracking-tighter">
                ابدأ رحلة <span className="text-gradient">التحول</span>.
              </h2>
              <p className="text-white/40 text-xl max-w-2xl mx-auto mb-20 font-light leading-relaxed">
                دعنا نبني مستقبلك الرقمي اليوم. استشارتك الأولى هي الخطوة التي ستغير كل شيء.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <Button variant="primary" className="!px-16 !py-6 text-lg !bg-white !text-black hover:!bg-blue-50 transition-all shadow-[0_20px_60px_-15px_rgba(255,255,255,0.2)]">ابدأ الآن</Button>
                <Button variant="outline" className="!px-16 !py-6 text-lg !border-white/10 !text-white/60 hover:!text-white">تواصل معنا</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-24 border-t border-white/5 relative z-10 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 glass border-white/20 rounded-2xl flex items-center justify-center font-bold text-2xl">A</div>
               <span className="text-2xl font-bold text-white">أركان <span className="opacity-20 font-light">ديجيتال</span></span>
            </div>
            <div className="flex gap-16 flex-wrap justify-center">
              {NAV_ITEMS.map(item => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-white/30 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
            <p className="text-white/20 text-[10px] uppercase tracking-[0.4em]">Designed for the elite era of automation.</p>
            <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">© ٢٠٢٥ أركان ديجيتال. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
