
import React from 'react';
import { 
  Cpu, 
  Rocket, 
  Layout, 
  Clock, 
  Zap, 
  ShieldCheck, 
  Users, 
  CheckCircle2,
  Stethoscope,
  GraduationCap,
  Briefcase,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { NavItem, Service, ProcessStep, Benefit } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'الخدمات', href: '#services' },
  { label: 'لمن نحن؟', href: '#audience' },
  { label: 'آلية العمل', href: '#process' },
];

export const SERVICES: Service[] = [
  {
    id: 'automation',
    title: 'أتمتة سير العمل',
    description: 'تحويل المهام اليدوية المكررة إلى عمليات تلقائية ذكية توفر عليك ساعات من الجهد الأسبوعي، لتركز على ما يهم حقاً.',
    icon: <Cpu className="w-8 h-8 text-blue-500" />
  },
  {
    id: 'mvp',
    title: 'تطوير المنتج الأولي (MVP)',
    description: 'حول فكرتك إلى واقع في وقت قياسي. نبني لك نسخة أولية احترافية تختبر بها السوق وتبدأ رحلتك الريادية.',
    icon: <Rocket className="w-8 h-8 text-purple-500" />
  },
  {
    id: 'custom',
    title: 'حلول رقمية مخصصة',
    description: 'أنظمة برمجية مصممة خصيصاً لتناسب احتياجات عملك الفريدة، سواء كانت منصة تعليمية أو نظام إدارة عيادة.',
    icon: <Layout className="w-8 h-8 text-indigo-500" />
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '٠١',
    title: 'استشارة مجانية',
    description: 'نجلس سوياً لنفهم رؤيتك، التحديات التي تواجهك، والأهداف التي تطمح لتحقيقها.'
  },
  {
    number: '٠٢',
    title: 'التخطيط الاستراتيجي',
    description: 'نرسم خريطة طريق تقنية واضحة تحدد الأدوات والحلول الأمثل لمشروعك.'
  },
  {
    number: '٠٣',
    title: 'التنفيذ والتطوير',
    description: 'يبدأ فريقنا في بناء الحل الرقمي الخاص بك مع اطلاعك على كل خطوة تحديث أولاً بأول.'
  },
  {
    number: '٠٤',
    title: 'الإطلاق والدعم',
    description: 'نطلق مشروعك للنور ونستمر معك بالدعم الفني لضمان سلاسة التشغيل والنمو.'
  }
];

export const AUDIENCES = [
  { title: 'الأطباء والمهنيون الصحيون', icon: <Stethoscope className="w-6 h-6" /> },
  { title: 'المعلمون والمدربون', icon: <GraduationCap className="w-6 h-6" /> },
  { title: 'رواد الأعمال والمستشارون', icon: <Briefcase className="w-6 h-6" /> },
  { title: 'أصحاب الأفكار المبتكرة', icon: <TrendingUp className="w-6 h-6" /> },
];

export const BENEFITS: Benefit[] = [
  {
    title: 'توفير الوقت',
    description: 'تخلص من الساعات الضائعة في المهام الإدارية المكررة.',
    icon: <Clock className="w-10 h-10 text-blue-400" />
  },
  {
    title: 'كفاءة تشغيلية',
    description: 'دقة أعلى في تنفيذ العمليات وتقليل الأخطاء البشرية.',
    icon: <Zap className="w-10 h-10 text-yellow-400" />
  },
  {
    title: 'سرعة التنفيذ',
    description: 'انقل فكرتك من الورق إلى السوق في أسابيع وليس شهور.',
    icon: <Rocket className="w-10 h-10 text-purple-400" />
  },
  {
    title: 'بساطة التعامل',
    description: 'حلول تقنية معقدة من الداخل، لكنها سهلة الاستخدام من الخارج.',
    icon: <ShieldCheck className="w-10 h-10 text-green-400" />
  }
];

export const PAIN_POINTS = [
  { text: 'إهدار الوقت في مهام روتينية يمكن أتمتتها بسهولة.' },
  { text: 'صعوبة تحويل الأفكار الكبيرة إلى منتجات تقنية ملموسة.' },
  { text: 'تشتت البيانات والعمليات اليدوية التي تعيق نمو عملك.' }
];
