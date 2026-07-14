import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Users, 
  FileX, 
  UserMinus, 
  TriangleAlert, 
  MessageSquareX, 
  TrendingDown, 
  RefreshCw, 
  Flame, 
  ThumbsDown, 
  Scale, 
  DollarSign, 
  Clock, 
  TrendingUp, 
  Heart, 
  Award, 
  Search, 
  Map, 
  Zap, 
  ChartNoAxesColumn, 
  BookOpen, 
  UserCheck, 
  Linkedin, 
  Phone, 
  Globe, 
  Instagram, 
  Send,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';

// Import our self-contained, custom-generated assets
import xeniaLogo from './assets/images/xenia_logo_1784040002398.jpg';
import xeniaStage from './assets/images/xenia_stage_1784040013479.jpg';
import xeniaProfile from './assets/images/xenia_profile_1784040023269.jpg';
import xeniaPattern from './assets/images/xenia_pattern_1784040032215.jpg';

export default function App() {
  // Navigation states
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Interactive Slider State for Intervenções Corporativas
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Accordion State for FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Contact form state
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    funcionarios: '',
    interesse: '',
    mensagem: ''
  });

  // Active section tracking for highlighting menu
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'sobre', 'nr1', 'programas', 'servicos', 'faq', 'contato'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `Olá Xênia, gostaria de solicitar uma consultoria para minha empresa.
*Nome:* ${formData.nome}
*E-mail:* ${formData.email}
*Telefone:* ${formData.telefone || 'Não informado'}
*Empresa:* ${formData.empresa || 'Não informada'}
*Nº de Funcionários:* ${formData.funcionarios || 'Não informado'}
*Interesse:* ${formData.interesse || 'Geral'}
*Mensagem:* ${formData.mensagem || 'Nenhuma mensagem adicional'}`;

    const whatsappUrl = `https://wa.me/5511966028821?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const menuItems = [
    { label: 'Início', href: '#hero', id: 'hero' },
    { label: 'Sobre', href: '#sobre', id: 'sobre' },
    { label: 'NR-1', href: '#nr1', id: 'nr1' },
    { label: 'Programas', href: '#programas', id: 'programas' },
    { label: 'Serviços', href: '#servicos', id: 'servicos' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
    { label: 'Contato', href: '#contato', id: 'contato' }
  ];

  const diagnosticSymptoms = [
    { id: 'diag-1', icon: <Users className="w-5 h-5 text-[#B87B7E]" />, text: 'Equipes desmotivadas e sem engajamento' },
    { id: 'diag-2', icon: <FileX className="w-5 h-5 text-[#B87B7E]" />, text: 'Afastamentos frequentes e aumento dos atestados' },
    { id: 'diag-3', icon: <UserMinus className="w-5 h-5 text-[#B87B7E]" />, text: 'Alta rotatividade e dificuldade para reter talentos' },
    { id: 'diag-4', icon: <TriangleAlert className="w-5 h-5 text-[#B87B7E]" />, text: 'Lideranças sobrecarregadas e despreparadas' },
    { id: 'diag-5', icon: <MessageSquareX className="w-5 h-5 text-[#B87B7E]" />, text: 'Conflitos constantes entre áreas e equipes' },
    { id: 'diag-6', icon: <TrendingDown className="w-5 h-5 text-[#B87B7E]" />, text: 'Queda de produtividade sem causa aparente' },
    { id: 'diag-7', icon: <RefreshCw className="w-5 h-5 text-[#B87B7E]" />, text: 'Resistência a mudanças e baixa adaptação' },
    { id: 'diag-8', icon: <Flame className="w-5 h-5 text-[#B87B7E]" />, text: 'Sobrecarga e risco de esgotamento (Burnout)' },
    { id: 'diag-9', icon: <ThumbsDown className="w-5 h-5 text-[#B87B7E]" />, text: 'Reclamações sobre o ambiente de trabalho' },
    { id: 'diag-10', icon: <Scale className="w-5 h-5 text-[#B87B7E]" />, text: 'Receio de passivos trabalhistas com saúde mental' }
  ];

  const advantages = [
    { id: 'adv-1', icon: <TrendingDown className="w-6 h-6 text-[#B87B7E]" />, title: 'Redução de custos com afastamentos' },
    { id: 'adv-2', icon: <DollarSign className="w-6 h-6 text-[#B87B7E]" />, title: 'Retorno financeiro estratégico' },
    { id: 'adv-3', icon: <Clock className="w-6 h-6 text-[#B87B7E]" />, title: 'Diminuição de absenteísmo e presenteísmo' },
    { id: 'adv-4', icon: <TrendingUp className="w-6 h-6 text-[#B87B7E]" />, title: 'Aumento do engajamento e produtividade' },
    { id: 'adv-5', icon: <Heart className="w-6 h-6 text-[#B87B7E]" />, title: 'Melhoria significativa do clima organizacional' },
    { id: 'adv-6', icon: <Award className="w-6 h-6 text-[#B87B7E]" />, title: 'Valorização da imagem institucional (ESG)' },
    { id: 'adv-7', icon: <Scale className="w-6 h-6 text-[#B87B7E]" />, title: 'Redução de passivos trabalhistas e riscos legais' },
    { id: 'adv-8', icon: <Users className="w-6 h-6 text-[#B87B7E]" />, title: 'Atração e retenção de talentos qualificados' }
  ];

  const methodologySteps = [
    { label: 'Diagnosticar', icon: <Search className="w-5 h-5 text-[#B87B7E]" />, bg: 'bg-[#B87B7E]/10', position: 'left-[50%] top-[7%]' },
    { label: 'Planejar', icon: <Map className="w-5 h-5 text-[#B87B7E]" />, bg: 'bg-[#B87B7E]/20', position: 'left-[90.89%] top-[36.71%]' },
    { label: 'Implementar', icon: <Zap className="w-5 h-5 text-[#B87B7E]" />, bg: 'bg-[#B87B7E]/30', position: 'left-[75.27%] top-[84.78%]' },
    { label: 'Monitorar', icon: <ChartNoAxesColumn className="w-5 h-5 text-[#B87B7E]" />, bg: 'bg-[#B87B7E]/40', position: 'left-[24.72%] top-[84.78%]' },
    { label: 'Melhorar', icon: <TrendingUp className="w-5 h-5 text-[#FDFBFA]" />, bg: 'bg-[#B87B7E]/50', position: 'left-[9.1%] top-[36.71%]' }
  ];

  const programs = [
    {
      id: 'prog-essencial',
      badge: 'Ideal para quem está iniciando',
      title: 'Programa Essencial',
      subtitle: 'Diagnóstico e Sensibilização',
      description: 'Ideal para empresas que estão iniciando a adequação à nova NR-1, oferecendo os primeiros diagnósticos essenciais de riscos.',
      featured: false
    },
    {
      id: 'prog-evolucao',
      badge: 'Mais procurado',
      title: 'Programa Evolução',
      subtitle: 'Diagnóstico e Plano de Ação',
      description: 'Ideal para empresas que desejam ir além da conscientização básica e implementar melhorias práticas baseadas no diagnóstico.',
      featured: true
    },
    {
      id: 'prog-estrategico',
      badge: 'Atuação preventiva e contínua',
      title: 'Programa Estratégico',
      subtitle: 'Gestão Contínua dos Riscos',
      description: 'Ideal para organizações que buscam uma atuação preventiva constante, auditoria, monitoramento de métricas de saúde mental.',
      featured: false
    }
  ];

  const services = [
    {
      title: 'Avaliação Psicossocial',
      num: '01',
      icon: <Search className="w-4 h-4 text-[#B87B7E]" />,
      desc: 'Identificar detalhadamente riscos psicossociais e pontos críticos no ambiente organizacional.',
      topics: [
        'Escuta estruturada de colaboradores',
        'Avaliação técnica com questionários específicos',
        'Levantamento aprofundado de fatores de risco',
        'Entrega de relatório e direcionamento inicial'
      ],
      results: ['Clareza total sobre os riscos ocupacionais', 'Base sólida para tomada de decisões']
    },
    {
      title: 'Intervenções Psicoeducativas',
      num: '02',
      icon: <BookOpen className="w-4 h-4 text-[#B87B7E]" />,
      desc: 'Atuar de forma proativa e direta na prevenção e manejo de riscos emocionais identificados.',
      topics: [
        'Palestras temáticas (ansiedade, burnout, etc.)',
        'Workshops práticos direcionados a equipes',
        'Rodas de conversa e sensibilização contínua',
        'Ações integradas de bem-estar corporativo'
      ],
      results: ['Maior consciência e regulação emocional', 'Melhoria imediata na dinâmica interna']
    },
    {
      title: 'Desenvolvimento de Liderança',
      num: '03',
      icon: <UserCheck className="w-4 h-4 text-[#B87B7E]" />,
      desc: 'Preparar gestores e líderes para gerenciar pessoas de forma saudável, empática e legalmente segura.',
      topics: [
        'Workshops especializados com lideranças',
        'Rodas de mentoria sobre gestão de pessoas',
        'Treinamento em segurança psicológica corporativa',
        'Gestão preventiva de conflitos internos'
      ],
      results: ['Líderes mais humanizados e preparados', 'Redução drástica de conflitos e desgaste']
    }
  ];

  const faqs = [
    {
      q: 'Minha empresa é obrigada a fazer gestão dos riscos psicossociais?',
      a: 'Sim. A nova NR-1 (Norma Regulamentadora 1) estabelece de maneira clara que o Gerenciamento de Riscos Ocupacionais (GRO) deve englobar a identificação e controle de todos os perigos que afetam os trabalhadores, o que inclui de forma explícita os riscos psicossociais e o estresse no trabalho.'
    },
    {
      q: 'Pequenas empresas precisam se adequar?',
      a: 'Sim. Toda organização que possua empregados regidos pela CLT precisa se adequar à NR-1. Embora a complexidade e a estrutura possam ser adaptadas ao tamanho do negócio, a conformidade legal e a preocupação em mitigar riscos à integridade mental do trabalhador são universais.'
    },
    {
      q: 'Vocês realizam palestras corporativas isoladas?',
      a: 'Sim. Oferecemos palestras, workshops e treinamentos avulsos para complementar as iniciativas existentes nas empresas (como na SIPAT, Setembro Amarelo, Janeiro Branco ou eventos internos de RH). No entanto, recomendamos associá-los a planos integrados para resultados estruturais sustentáveis.'
    },
    {
      q: 'O atendimento é realizado de forma presencial ou online?',
      a: 'Oferecemos total flexibilidade. O diagnóstico de riscos, as reuniões com RH/Liderança, palestras e sessões psicoeducativas podem ser executados no formato 100% online, híbrido ou presencial em todo o país, de acordo com o porte e preferência da organização.'
    }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-[#FDFBFA] min-h-screen text-[#1A1C1E] font-sans antialiased overflow-x-hidden selection:bg-[#B87B7E]/20 selection:text-[#3D2030]">
      
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[#B87B7E]/10 h-16' 
          : 'bg-transparent h-20'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-full">
          <a href="#hero" onClick={(e) => handleScrollTo(e, 'hero')} className="flex items-center gap-3 group">
            <img 
              src={xeniaLogo} 
              alt="Logo Xênia" 
              className="h-9 w-9 object-contain rounded-full border border-[#B87B7E]/20 group-hover:scale-105 transition-transform duration-300" 
              referrerPolicy="no-referrer"
            />
            <span className="font-heading text-lg font-semibold tracking-wide text-[#3D2030] group-hover:text-[#B87B7E] transition-colors duration-300">
              Xênia Hisamoto
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a 
                key={item.id}
                href={item.href} 
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                  activeSection === item.id 
                    ? 'text-[#B87B7E] font-semibold' 
                    : 'text-[#4A5157] hover:text-[#B87B7E]'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contato" 
              onClick={(e) => handleScrollTo(e, 'contato')}
              className="ml-4 px-6 py-2.5 bg-[#B87B7E] text-[#FDFBFA] text-sm font-medium tracking-wide hover:bg-[#a66a6d] transition-all duration-300 rounded-full shadow-sm hover:shadow-md"
            >
              Solicitar Consultoria
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#1A1C1E] p-2 hover:bg-[#B87B7E]/10 rounded-full transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 z-40 bg-white/95 backdrop-blur-md md:hidden flex flex-col px-6 pt-8 pb-12 gap-6 shadow-lg border-t border-[#B87B7E]/10"
          >
            {menuItems.map((item) => (
              <a 
                key={item.id}
                href={item.href} 
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`text-lg font-medium tracking-wide pb-2 border-b border-gray-100 ${
                  activeSection === item.id 
                    ? 'text-[#B87B7E] font-semibold' 
                    : 'text-[#4A5157]'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contato" 
              onClick={(e) => handleScrollTo(e, 'contato')}
              className="w-full text-center py-3.5 bg-[#B87B7E] text-white font-medium tracking-wide hover:bg-[#a66a6d] transition-all duration-300 rounded-full"
            >
              Solicitar Consultoria
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#FDF8F7]">
        {/* Stage background with overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src={xeniaStage} 
            alt="Xênia no Palco" 
            className="absolute inset-0 w-full h-full object-cover opacity-35 filter brightness-95" 
            style={{ objectPosition: 'center 15%' }}
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDF8F7]/50 via-[#FDF8F7]/70 to-[#FDF8F7]"></div>

        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Text content */}
              <motion.div 
                initial={{ opacity: 0, x: -35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#B87B7E]/10 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-[#B87B7E]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#B87B7E]">
                    Psicóloga • Consultora Organizacional
                  </span>
                </div>
                
                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-[#3D2030] leading-[1.08] tracking-tight mb-6">
                  Sua Saúde Mental<br />no Trabalho é <span className="text-[#B87B7E] font-medium">Estratégico...</span>.
                </h1>
                
                <p className="text-lg text-[#5A6370] leading-relaxed max-w-xl mb-10">
                  Gestão completa de Riscos Psicossociais, promoção do Bem-Estar estratégico e Desenvolvimento de Lideranças para empresas saudáveis, produtivas e seguras perante a NR-1.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-12">
                  <a 
                    href="#contato" 
                    onClick={(e) => handleScrollTo(e, 'contato')}
                    className="px-8 py-4 bg-[#B87B7E] text-white font-medium tracking-wide hover:bg-[#a66a6d] transition-all duration-300 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Solicitar Consultoria →
                  </a>
                  <a 
                    href="#programas" 
                    onClick={(e) => handleScrollTo(e, 'programas')}
                    className="px-8 py-4 border border-[#3D2030]/20 text-[#3D2030] font-medium tracking-wide hover:border-[#B87B7E] hover:text-[#B87B7E] transition-all duration-300 rounded-full"
                  >
                    Conhecer Programas
                  </a>
                </div>

                <div className="pt-8 border-t border-[#B87B7E]/20">
                  <p className="font-heading text-lg font-light text-[#B87B7E] italic leading-relaxed">
                    "Resultados consistentes de verdade só começam em ambientes corporativos psicologicamente saudáveis."
                  </p>
                </div>
              </motion.div>

              {/* Graphical Card & Accent */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, x: 35 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="relative hidden lg:block"
              >
                <div className="absolute inset-0 bg-[#B87B7E]/8 rounded-3xl transform rotate-2"></div>
                <div className="relative bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-white/50 shadow-xl overflow-hidden aspect-[4/3] flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#B87B7E]/10 rounded-full filter blur-xl"></div>
                  
                  <div className="flex items-center gap-3">
                    <img 
                      src={xeniaLogo} 
                      alt="Xênia Logo" 
                      className="w-12 h-12 rounded-full object-contain border border-[#B87B7E]/20" 
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-heading text-[#3D2030] font-semibold text-base leading-tight">Xênia Hisamoto</h4>
                      <p className="text-xs text-[#B87B7E] uppercase font-medium tracking-widest">NR-1 & Gestão de Pessoas</p>
                    </div>
                  </div>

                  <div className="space-y-4 my-6">
                    <div className="flex items-center gap-3.5 bg-white/90 p-3.5 rounded-xl border border-gray-100 shadow-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#B87B7E] animate-ping"></div>
                      <span className="text-sm text-[#4A5157] font-medium">Avaliações Psicossociais em dia</span>
                    </div>
                    <div className="flex items-center gap-3.5 bg-white/90 p-3.5 rounded-xl border border-gray-100 shadow-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#3D2030]"></div>
                      <span className="text-sm text-[#4A5157] font-medium">PGR Alinhado à Norma Federal</span>
                    </div>
                  </div>

                  <div className="bg-[#B87B7E]/15 rounded-xl px-5 py-3.5 border border-[#B87B7E]/10">
                    <p className="text-xs text-[#B87B7E] font-bold tracking-wide uppercase mb-0.5">Especialidade Principal</p>
                    <p className="text-[#3D2030] font-semibold text-sm">Riscos Psicossociais ocupacionais</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Prepared for NR-1 Subsection */}
        <section id="nr1" className="relative z-10 bg-[#3D2030] overflow-hidden">
          {/* Subtle decoration overlay */}
          <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
            <div className="max-w-4xl">
              <span className="text-xs tracking-[0.25em] uppercase text-[#B87B7E] font-bold block mb-4">Norma Regulamentadora 1</span>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-white mb-6 leading-tight">
                Sua empresa está preparada para os desafios da nova NR-1?
              </h2>
              <div className="h-1 w-20 bg-[#B87B7E] mb-8 rounded-full"></div>
              <p className="text-white/80 text-lg leading-relaxed mb-6 font-light">
                A recente atualização da NR-1 trouxe uma nova perspectiva obrigatória para a saúde e segurança ocupacional: as empresas devem identificar, avaliar de forma mensurável e gerenciar proativamente todos os **fatores de riscos psicossociais** que geram estresse e impacto mental aos colaboradores.
              </p>
              <p className="text-white/75 leading-relaxed font-light">
                Muito além de evitar multas e cumprir regras jurídicas básicas, trata-se de um olhar focado em como a organização do trabalho influencia no engajamento, na retenção de talentos críticos, no absenteísmo elevado e nos afastamentos médicos por distúrbios emocionais.
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* Diagnosis Symptoms Section */}
      <section className="py-20 lg:py-28 bg-[#FDFBFA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.25em] uppercase text-[#B87B7E] font-bold block mb-3">Diagnóstico Preventivo</span>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-[#3D2030] tracking-tight mb-4">
              Como saber se sua empresa precisa agir?
            </h2>
            <p className="text-[#5A6370] text-sm">Observe os indicadores internos abaixo. Identificar esses sintomas precocemente evita passivos de longo prazo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {diagnosticSymptoms.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="group cursor-pointer p-5 rounded-2xl border border-[#B87B7E]/15 hover:border-[#B87B7E]/40 hover:shadow-md bg-white transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#B87B7E]/10 rounded-xl group-hover:bg-[#B87B7E]/20 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#1A1C1E] text-sm leading-snug group-hover:text-[#3D2030] transition-colors">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#FDF4F4] border border-[#B87B7E]/20 rounded-3xl p-8 md:p-10 text-center max-w-4xl mx-auto shadow-sm"
          >
            <p className="text-[#3D2030] text-lg leading-relaxed mb-6 font-medium">
              Se você identificou um ou mais desses pontos no seu negócio, existem riscos psicossociais iminentes que exigem mapeamento técnico. O primeiro passo ideal não é tomar medidas gerais no escuro, mas sim realizar um diagnóstico estruturado.
            </p>
            <a 
              href="#contato" 
              onClick={(e) => handleScrollTo(e, 'contato')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#B87B7E] text-[#FDFBFA] font-medium tracking-wide hover:bg-[#a66a6d] transition-all duration-300 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Solicitar Diagnóstico Inicial →
            </a>
          </motion.div>

        </div>
      </section>

      {/* Advantages Section with Pattern Background */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-cover bg-center">
        {/* Abstract Pattern overlay */}
        <div className="absolute inset-0">
          <img 
            src={xeniaPattern} 
            alt="Abstrato" 
            className="w-full h-full object-cover opacity-10 filter mix-blend-multiply" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#FDFBFA]/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="w-full h-px bg-[#B87B7E]/20 mb-16"></div>

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.25em] uppercase text-[#B87B7E] font-bold block mb-3">Vantagens Reais</span>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-[#3D2030] tracking-tight">
              O que sua empresa ganha com isso?
            </h2>
            <p className="text-[#5A6370] text-sm mt-3">Os investimentos em saúde mental trazem retornos mensuráveis em produtividade, conformidade jurídica e clima organizacional.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group text-center p-8 bg-white/50 backdrop-blur-sm border border-gray-100 hover:bg-white hover:shadow-lg hover:border-[#B87B7E]/25 transition-all duration-500 rounded-2xl"
              >
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-[#B87B7E]/10 rounded-full group-hover:bg-[#B87B7E]/20 transition-colors duration-300">
                  {item.icon}
                </div>
                <p className="text-[#1A1C1E] font-semibold text-sm leading-snug group-hover:text-[#3D2030] transition-colors">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Step Section */}
      <section className="py-20 lg:py-28 bg-[#FDFBFA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="w-full h-px bg-[#B87B7E]/20 mb-16"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-[#B87B7E] font-bold block mb-4">Metodologia Exclusiva</span>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-[#3D2030] tracking-tight mb-4 leading-tight">
                Como funciona a implantação da gestão dos riscos psicossociais?
              </h2>
              <p className="text-[#B87B7E] font-medium text-lg mb-6 italic">
                Um processo circular e permanente de melhoria contínua.
              </p>
              <div className="space-y-4 text-[#4A5157] leading-relaxed">
                <p>
                  A gestão integrada de riscos psicossociais não consiste apenas em aplicar uma avaliação de clima rápida ou promover uma única palestra isolada no ano.
                </p>
                <p>
                  Seguimos um ciclo de melhoria contínua para sua empresa: mapeamos detalhadamente o cenário, criamos os planos prioritários, desenvolvemos lideranças críticas, aplicamos ações e medimos resultados periodicamente para conformidade com a NR-1.
                </p>
              </div>
            </div>

            {/* Interactive Circle Component */}
            <div className="relative flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
                {/* Dashed outer orbit */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#B87B7E]/20 animate-[spin_100s_linear_infinite]"></div>
                {/* Inner line circle */}
                <div className="absolute inset-6 rounded-full border border-[#B87B7E]/10"></div>
                
                {/* Center text badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-white/80 p-5 rounded-full shadow-sm border border-gray-50 backdrop-blur-sm">
                    <p className="font-heading text-lg text-[#3D2030] font-light">Ciclo</p>
                    <p className="font-heading text-lg text-[#3D2030] font-light">Contínuo</p>
                    <div className="w-8 h-px bg-[#B87B7E]/40 mx-auto my-1.5"></div>
                    <p className="text-[9px] text-[#B87B7E] tracking-widest font-bold uppercase">NR-1</p>
                  </div>
                </div>

                {/* Nodes */}
                {methodologySteps.map((step, idx) => (
                  <motion.div 
                    key={step.label}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, type: 'spring' }}
                    whileHover={{ scale: 1.1 }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 cursor-pointer z-20 ${step.position}`}
                  >
                    <div className={`w-12 h-12 rounded-full ${step.bg} flex items-center justify-center shadow-sm border border-[#B87B7E]/20 hover:shadow-md transition-shadow`}>
                      {step.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#3D2030] bg-white px-2 py-0.5 rounded shadow-sm border border-gray-100">
                      {step.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Sequential legend arrow indicators */}
              <div className="mt-12 flex items-center justify-center gap-2 flex-wrap text-xs font-semibold text-[#B87B7E] bg-white p-3 rounded-full border border-gray-100 shadow-sm">
                <span>Diagnosticar</span>
                <span className="opacity-40">→</span>
                <span>Planejar</span>
                <span className="opacity-40">→</span>
                <span>Implementar</span>
                <span className="opacity-40">→</span>
                <span>Monitorar</span>
                <span className="opacity-40">→</span>
                <span>Melhorar</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Programs Cards Section */}
      <section id="programas" className="py-20 lg:py-28 bg-[#FDFBFA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="w-full h-px bg-[#B87B7E]/20 mb-16"></div>

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.25em] uppercase text-[#B87B7E] font-bold block mb-4">Modelos de Implementação</span>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-[#3D2030] tracking-tight">
              Programas de Gestão Integrada
            </h2>
            <p className="text-[#5A6370] text-sm mt-3">Selecione o modelo mais adequado à maturidade de RH e segurança do seu negócio.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {programs.map((prog, index) => (
              <motion.div 
                key={prog.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative p-8 lg:p-10 rounded-2xl flex flex-col justify-between transition-all duration-300 border ${
                  prog.featured 
                    ? 'bg-[#3D2030] text-white shadow-xl scale-[1.03] border-transparent' 
                    : 'bg-white border-[#3D2030]/10 hover:shadow-lg hover:border-[#B87B7E]/30'
                }`}
              >
                <div>
                  <div className="mb-4">
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-3.5 py-1.5 rounded-full ${
                      prog.featured 
                        ? 'bg-[#B87B7E] text-white' 
                        : 'bg-[#B87B7E]/10 text-[#B87B7E]'
                    }`}>
                      {prog.badge}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold mb-1 mt-4">{prog.title}</h3>
                  <p className={`text-xs uppercase tracking-widest font-bold mb-6 ${prog.featured ? 'text-[#B87B7E]' : 'text-[#B87B7E]/80'}`}>
                    {prog.subtitle}
                  </p>
                  <p className={`text-sm leading-relaxed ${prog.featured ? 'text-white/80' : 'text-[#4A5157]'}`}>
                    {prog.description}
                  </p>
                </div>

                <a 
                  href="#contato" 
                  onClick={(e) => handleScrollTo(e, 'contato')}
                  className={`block text-center mt-10 py-3.5 px-6 text-sm font-semibold tracking-wide transition-all duration-300 rounded-xl border ${
                    prog.featured 
                      ? 'bg-[#B87B7E] text-white hover:bg-[#a66a6d] border-transparent' 
                      : 'border-[#3D2030]/20 text-[#3D2030] hover:border-[#B87B7E] hover:text-[#B87B7E]'
                  }`}
                >
                  Solicitar Proposta
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-[#4A5157] text-lg mb-6">Tem dúvidas sobre qual se enquadra na sua necessidade atual?</p>
            <a 
              href="#contato" 
              onClick={(e) => handleScrollTo(e, 'contato')}
              className="inline-block px-10 py-4 bg-[#B87B7E] text-[#FDFBFA] font-semibold tracking-wide hover:bg-[#a66a6d] transition-all duration-300 rounded-full shadow-sm hover:shadow-md"
            >
              Falar com Especialista →
            </a>
          </div>

        </div>
      </section>

      {/* Services and Corporative Interventions */}
      <section id="servicos" className="py-20 lg:py-28 bg-[#3D2030] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.25em] uppercase text-[#B87B7E] font-bold block mb-3">Ações Avulsas</span>
            <h2 className="font-heading text-3xl md:text-4xl font-light tracking-tight">
              Intervenções Corporativas Focadas
            </h2>
            <p className="text-white/60 text-sm mt-3">Para complementar as estratégias de RH, Sipats ou atender a demandas de urgência.</p>
          </div>

          {/* Interactive slider indicator dots & slide renderer */}
          <div className="relative">
            {/* Desktop and Mobile list view (interactive) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`group p-6 border rounded-2xl transition-all duration-400 flex flex-col justify-between ${
                    activeSlide === index 
                      ? 'border-[#B87B7E] bg-white/5' 
                      : 'border-white/10 hover:border-[#B87B7E]/40 hover:bg-white/5'
                  }`}
                  onClick={() => setActiveSlide(index)}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <span className="font-heading text-3xl font-extrabold text-[#B87B7E]/20">{item.num}</span>
                      <div className="w-10 h-10 flex items-center justify-center bg-[#B87B7E]/20 rounded-xl">
                        {item.icon}
                      </div>
                    </div>
                    
                    <h3 className="font-heading text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-white/70 text-sm mb-6 leading-relaxed min-h-[40px]">{item.desc}</p>
                    
                    <ul className="space-y-2.5 mb-6">
                      {item.topics.map((t, i) => (
                        <li key={i} className="text-white/55 text-xs flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B87B7E] mt-1.5 flex-shrink-0"></span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10 mt-6">
                    <p className="text-[10px] uppercase tracking-widest text-[#B87B7E] font-bold mb-2">Entregável e Resultado</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.results.map((res, i) => (
                        <span key={i} className="text-[10px] text-white/85 bg-white/10 px-2.5 py-1 rounded-full font-medium">
                          {res}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Carousel navigation controls (for interactive display feel) */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <button 
                onClick={() => setActiveSlide(prev => (prev === 0 ? 2 : prev - 1))}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-[#B87B7E] hover:text-[#B87B7E] transition-all"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {services.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === activeSlide ? 'bg-[#B87B7E] w-6' : 'bg-white/30'}`}
                  />
                ))}
              </div>

              <button 
                onClick={() => setActiveSlide(prev => (prev === 2 ? 0 : prev + 1))}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-[#B87B7E] hover:text-[#B87B7E] transition-all"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Consultant Bio Section */}
      <section id="sobre" className="py-20 lg:py-28 bg-[#FDFBFA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="w-full h-px bg-[#B87B7E]/20 mb-16"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <span className="text-xs tracking-[0.25em] uppercase text-[#B87B7E] font-bold block mb-4">A Especialista</span>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-[#3D2030] tracking-tight mb-6">
                Xênia L. M. Hisamoto
              </h2>
              <p className="text-[#4A5157] text-lg leading-relaxed mb-6 font-light">
                Psicóloga clínica e corporativa, especialista em Desenvolvimento Humano e Lideranças. Soma mais de 20 anos de experiência estrutural na área de Recursos Humanos de grandes organizações, desenhando projetos preventivos, gestão de cultura e implantação de conformidade de Riscos Psicossociais.
              </p>
              <p className="text-[#4A5157] text-sm leading-relaxed mb-8">
                Minha atuação une psicologia aplicada de ponta a uma sólida vivência na realidade de RH. Isso possibilita entregar ferramentas viáveis, de fácil adoção para a liderança e alinhadas aos objetivos estratégicos e jurídicos exigidos na nova NR-1.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="w-1 bg-[#B87B7E] rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-[#B87B7E] font-bold mb-1">Especializações Técnicas</p>
                    <p className="text-[#4A5157] text-sm font-medium">
                      Psicologia Clínica, MBA em Gestão de RH, Especialista em Terapia Cognitivo-Comportamental (TCC) e Neurociência do Comportamento.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-[#B87B7E] rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-[#B87B7E] font-bold mb-1">Pilares de Atuação</p>
                    <p className="text-[#4A5157] text-sm font-medium">
                      Mapeamento de Riscos, Adequação à NR-1, Promoção do Bem-Estar e Treinamento de Segurança Psicológica de Líderes.
                    </p>
                  </div>
                </div>
              </div>

              <a 
                href="https://www.linkedin.com/in/xenialeticia" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-[#4A5157] hover:text-[#B87B7E] transition-colors text-sm font-semibold bg-gray-50 px-5 py-3 rounded-full border border-gray-100 shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-[#B87B7E]" />
                linkedin.com/in/xenialeticia
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                {/* Visual Frame */}
                <div className="absolute -top-4 -right-4 w-full h-full border border-[#B87B7E]/30 rounded-2xl pointer-events-none"></div>
                <img 
                  src={xeniaProfile} 
                  alt="Xênia Hisamoto" 
                  className="relative w-full object-cover rounded-2xl shadow-xl aspect-[4/5] filter brightness-105" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section id="faq" className="py-20 lg:py-28 bg-[#FDFBFA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.25em] uppercase text-[#B87B7E] font-bold block mb-3">Esclarecimentos Legais e Práticos</span>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-[#3D2030] tracking-tight">
              Perguntas Frequentes — FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="border border-[#B87B7E]/20 rounded-2xl overflow-hidden bg-white shadow-sm hover:border-[#B87B7E]/40 transition-all duration-300"
                >
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-[#1A1C1E] bg-white hover:bg-[#B87B7E]/5 transition-all"
                  >
                    <span className="leading-snug text-base text-[#3D2030]">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#B87B7E] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`} />
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-[#4A5157] text-sm leading-relaxed border-t border-[#B87B7E]/10 bg-gray-50/50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contato" className="py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl shadow-2xl border border-gray-100">
            
            {/* Informational Column */}
            <div className="bg-[#FDFBFA] p-10 lg:p-16 flex flex-col justify-between">
              <div>
                <span className="text-xs tracking-[0.25em] uppercase text-[#B87B7E] font-bold block mb-4">Parceria Estratégica</span>
                <h2 className="font-heading text-4xl md:text-5xl font-light text-[#3D2030] tracking-tight mb-6">
                  Vamos conversar?
                </h2>
                <p className="text-[#4A5157] text-base leading-relaxed mb-6 font-light">
                  Sua empresa está de fato adequada para mapear a saúde mental dos colaboradores e mitigar passivos da nova NR-1?
                </p>
                <p className="text-[#4A5157] text-sm leading-relaxed mb-12">
                  Preencha o formulário para agendar um diagnóstico prévio ou detalhar suas demandas em palestras, consultorias contínuas ou workshops focados.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-4 pt-6 border-t border-gray-100">
                <a href="tel:+5511966028821" className="flex items-center gap-3.5 text-[#4A5157] hover:text-[#B87B7E] transition-colors font-medium">
                  <div className="w-9 h-9 rounded-full bg-[#B87B7E]/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#B87B7E]" />
                  </div>
                  <span className="text-sm">(11) 96602-8821</span>
                </a>
                
                <a href="https://www.psicologaxenialeticia.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 text-[#4A5157] hover:text-[#B87B7E] transition-colors font-medium">
                  <div className="w-9 h-9 rounded-full bg-[#B87B7E]/10 flex items-center justify-center">
                    <Globe className="w-4 h-4 text-[#B87B7E]" />
                  </div>
                  <span className="text-sm">psicologaxenialeticia.com.br</span>
                </a>
                
                <a href="https://www.instagram.com/psicologaxenialeticia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 text-[#4A5157] hover:text-[#B87B7E] transition-colors font-medium">
                  <div className="w-9 h-9 rounded-full bg-[#B87B7E]/10 flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-[#B87B7E]" />
                  </div>
                  <span className="text-sm">@psicologaxenialeticia</span>
                </a>
              </div>
            </div>

            {/* Interactive Form Column */}
            <div className="bg-[#3D2030] p-10 lg:p-16 text-white">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-1">Solicitar Consultoria</h3>
                  <p className="text-white/40 text-xs">Preencha os campos abaixo e entraremos em contato via WhatsApp rapidamente.</p>
                </div>

                <div className="space-y-4">
                  
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/55 mb-2">Nome Completo *</label>
                    <input 
                      type="text" 
                      required
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Ex: Ana Souza" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#B87B7E] focus:bg-white/10 outline-none transition-all placeholder:text-white/20"
                    />
                  </div>

                  {/* Email & Phone grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/55 mb-2">E-mail Corporativo *</label>
                      <input 
                        type="email" 
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Ex: ana@empresa.com" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#B87B7E] focus:bg-white/10 outline-none transition-all placeholder:text-white/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/55 mb-2">Telefone de Contato</label>
                      <input 
                        type="tel" 
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        placeholder="Ex: (11) 99999-9999" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#B87B7E] focus:bg-white/10 outline-none transition-all placeholder:text-white/20"
                      />
                    </div>
                  </div>

                  {/* Company & Employees grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/55 mb-2">Empresa</label>
                      <input 
                        type="text" 
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        placeholder="Ex: Tech Soluções" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#B87B7E] focus:bg-white/10 outline-none transition-all placeholder:text-white/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/55 mb-2">Nº de Funcionários</label>
                      <input 
                        type="text" 
                        name="funcionarios"
                        value={formData.funcionarios}
                        onChange={handleInputChange}
                        placeholder="Ex: 50 a 100" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#B87B7E] focus:bg-white/10 outline-none transition-all placeholder:text-white/20"
                      />
                    </div>
                  </div>

                  {/* Area of Interest Selection */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/55 mb-2">Área de Interesse</label>
                    <select 
                      name="interesse"
                      value={formData.interesse}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#B87B7E] focus:bg-white/10 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#3D2030] text-white">Selecione o tema</option>
                      <option value="Programa Completo (Adequação NR1)" className="bg-[#3D2030] text-white">Programa Completo (Adequação NR1)</option>
                      <option value="Palestras / Workshops Corporativos" className="bg-[#3D2030] text-white">Palestras / Workshops Corporativos</option>
                      <option value="Avaliação Psicossocial Específica" className="bg-[#3D2030] text-white">Avaliação Psicossocial Específica</option>
                      <option value="Desenvolvimento de Líderes" className="bg-[#3D2030] text-white">Desenvolvimento de Líderes</option>
                      <option value="Outro assunto" className="bg-[#3D2030] text-white">Outro assunto</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/55 mb-2">Mensagem (opcional)</label>
                    <textarea 
                      rows={3}
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      placeholder="Conte um pouco mais sobre o seu cenário..." 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#B87B7E] focus:bg-white/10 outline-none transition-all resize-none placeholder:text-white/20"
                    />
                  </div>

                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-[#B87B7E] text-[#FDFBFA] font-bold text-sm uppercase tracking-wider hover:bg-[#a66a6d] transition-all duration-300 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Enviar via WhatsApp</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Elegant Footer */}
      <footer className="bg-[#6B2737] border-t border-white/5 text-white/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-3">
              <img 
                src={xeniaLogo} 
                alt="Logo Footer" 
                className="h-8 w-8 object-contain rounded-full opacity-65 border border-white/10" 
                referrerPolicy="no-referrer"
              />
              <span className="font-heading text-sm text-white/80 font-semibold tracking-wide">
                Xênia L. M. Hisamoto — Psicóloga e Consultora (CRP 06/80467)
              </span>
            </div>
            
            <p className="text-white/30 text-xs text-center md:text-right">
              © 2026 Todos os direitos reservados. Desenhado para Conformidade de Saúde Mental NR-1.
            </p>

          </div>
        </div>
      </footer>

    </div>
  );
}
