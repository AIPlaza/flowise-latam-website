import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, TrendingUp, Globe, Users, DollarSign, Target, Zap, Shield, Award, ArrowRight, Play, Pause } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; // Import i18n instance
import { gsap } from 'gsap';

const InvestorPitch = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const slideContentRef = useRef(null);

  const slides = React.useMemo(() => [
    {
      id: 'hero',
      title: t('pitch.slides.hero.title'),
      subtitle: t('pitch.slides.hero.subtitle'),
      content: t('pitch.slides.hero.content')
    },
    {
      id: 'opportunity',
      title: t('pitch.slides.opportunity.title'),
      subtitle: t('pitch.slides.opportunity.subtitle'),
      content: t('pitch.slides.opportunity.content')
    },
    {
      id: 'problem',
      title: t('pitch.slides.problem.title'),
      subtitle: t('pitch.slides.problem.subtitle'),
      content: t('pitch.slides.problem.content')
    },
    {
      id: 'solution',
      title: t('pitch.slides.solution.title'),
      subtitle: t('pitch.slides.solution.subtitle'),
      content: t('pitch.slides.solution.content')
    },
    {
      id: 'traction',
      title: t('pitch.slides.traction.title'),
      subtitle: t('pitch.slides.traction.subtitle'),
      content: t('pitch.slides.traction.content')
    },
    {
      id: 'business',
      title: t('pitch.slides.business.title'),
      subtitle: t('pitch.slides.business.subtitle'),
      content: t('pitch.slides.business.content')
    },
    {
      id: 'financials',
      title: t('pitch.slides.financials.title'),
      subtitle: t('pitch.slides.financials.subtitle'),
      content: t('pitch.slides.financials.content')
    },
    {
      id: 'competitive',
      title: t('pitch.slides.competitive.title'),
      subtitle: t('pitch.slides.competitive.subtitle'),
      content: t('pitch.slides.competitive.content')
    },
    {
      id: 'ask',
      title: t('pitch.slides.ask.title'),
      subtitle: t('pitch.slides.ask.subtitle'),
      content: t('pitch.slides.ask.content')
    }
  ], [t]);

  const marketData = [
    { label: t('pitch.slides.opportunity.marketSize2024'), value: '$4.71B', color: 'from-purple-500 to-blue-500' },
    { label: t('pitch.slides.opportunity.projected2033'), value: '$30.2B', color: 'from-blue-500 to-cyan-500' },
    { label: t('pitch.slides.opportunity.cagrGrowth'), value: '22.9%', color: 'from-cyan-500 to-green-500' },
    { label: t('pitch.slides.opportunity.spanishSpeakers'), value: '600M+', color: 'from-green-500 to-yellow-500' }
  ];

  const revenueStreams = [
    { name: t('pitch.slides.business.vpsHosting'), price: '$25-85/mo', margin: '60-70%', icon: '🖥️' },
    { name: t('pitch.slides.business.consulting'), price: '$500', margin: '80%', icon: '💡' },
    { name: t('pitch.slides.business.education'), price: '$150-450', margin: '88-90%', icon: '🎓' },
    { name: t('pitch.slides.business.localization'), price: '$300', margin: '85%', icon: '🌐' },
    { name: t('pitch.slides.business.premiumSupport'), price: '$100/mo', margin: '75%', icon: '🛠️' }
  ];

  const competitiveAdvantages = [
    { title: t('pitch.slides.competitive.firstMoverTitle'), desc: t('pitch.slides.competitive.firstMoverDesc'), icon: '🚀' },
    { title: t('pitch.slides.competitive.highBarriersTitle'), desc: t('pitch.slides.competitive.highBarriersDesc'), icon: '🛡️' },
    { title: t('pitch.slides.competitive.verticalIntegrationTitle'), desc: t('pitch.slides.competitive.verticalIntegrationDesc'), icon: '🔗' },
    { title: t('pitch.slides.competitive.localPartnershipsTitle'), desc: t('pitch.slides.competitive.localPartnershipsDesc'), icon: '🤝' }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  useEffect(() => {
    // Global slide transition
    gsap.fromTo(slideContentRef.current, 
      { opacity: 0, y: 50, scale: 0.95 }, 
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
    );

    // Specific animations based on slide ID
    const currentSlideId = slides[currentSlide].id;
    if (currentSlideId === 'hero') {
      gsap.fromTo(".hero-title", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 });
      gsap.fromTo(".hero-subtitle", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.4 });
      gsap.fromTo(".hero-content", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.6 });
      gsap.fromTo(".hero-metric", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)", stagger: 0.1, delay: 0.8 });
    } else if (currentSlideId === 'opportunity') {
      gsap.fromTo(".market-data-item", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.1 });
      gsap.fromTo(".adoption-rate-card", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", delay: 0.3 });
    } else if (currentSlideId === 'problem') {
      gsap.fromTo(".problem-card", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)", stagger: 0.15 });
      gsap.fromTo(".problem-list-item", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out", stagger: 0.05, delay: 0.3 });
      gsap.fromTo(".market-validation-card", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.4 });
    } else if (currentSlideId === 'solution') {
      gsap.fromTo(".solution-card", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.7, ease: "power2.out", stagger: 0.15 });
      gsap.fromTo(".value-chain-item", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.1, delay: 0.3 });
    } else if (currentSlideId === 'business') {
      gsap.fromTo(".revenue-stream-item", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)", stagger: 0.1 });
      gsap.fromTo(".recurring-revenue-card", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.3 });
    } else if (currentSlideId === 'financials') {
      gsap.fromTo(".financial-metric-card", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.1 });
      gsap.fromTo(".financial-list-item", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out", stagger: 0.05, delay: 0.3 });
    } else if (currentSlideId === 'competitive') {
      gsap.fromTo(".competitive-advantage-item", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)", stagger: 0.15 });
      gsap.fromTo(".market-position-item", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.1, delay: 0.3 });
    } else if (currentSlideId === 'ask') {
      gsap.fromTo(".ask-amount", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)", delay: 0.2 });
      gsap.fromTo(".ask-text", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.1, delay: 0.5 });
      gsap.fromTo(".ask-button", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.1, delay: 0.8 });
    }
  }, [currentSlide, slides]);

  const AnimatedNumber = ({ value, duration = 1.5 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef({ val: 0 });

    useEffect(() => {
      const numValue = parseFloat(value.replace(/[^\d.]/g, ''));
      if (isNaN(numValue)) {
        setCount(value); // Display original value if not a number
        return;
      }

      const currentCountRef = countRef.current; // Capture current ref value

      gsap.to(currentCountRef, {
        val: numValue,
        duration: duration,
        onUpdate: () => {
          setCount(Math.floor(currentCountRef.val));
        },
        onComplete: () => {
          setCount(numValue);
        },
        ease: "power1.out"
      });

      return () => {
        gsap.killTweensOf(currentCountRef);
      };
    }, [value, duration]);
    
    return <span>{count}{value.includes('B') ? 'B' : value.includes('M') ? 'M' : value.includes('%') ? '%' : ''}</span>;
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const renderSlideContent = (slide) => {
    switch (slide.id) {
      case 'hero':
        return (
          <div className="text-center space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl rounded-full"></div>
              <h1 className="relative text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent hero-title">
                {t('pitch.slides.hero.title')}
              </h1>
            </div>
            <div className="space-y-4">
              <p className="text-2xl text-gray-300 hero-subtitle">{t('pitch.slides.hero.subtitle')}</p>
              <p className="text-lg text-gray-400 hero-content">{t('pitch.slides.hero.content')}</p>
            </div>
            <div className="flex justify-center space-x-8 pt-8">
              <div className="text-center hero-metric">
                <div className="text-3xl font-bold text-cyan-400">🚀</div>
                <div className="text-sm text-gray-400">{t('pitch.slides.hero.firstMover')}</div>
              </div>
              <div className="text-center hero-metric">
                <div className="text-3xl font-bold text-green-400">💰</div>
                <div className="text-sm text-gray-400">{t('pitch.slides.hero.marketSize')}</div>
              </div>
              <div className="text-center hero-metric">
                <div className="text-3xl font-bold text-purple-400">⚡</div>
                <div className="text-sm text-gray-400">{t('pitch.slides.hero.margins')}</div>
              </div>
            </div>
          </div>
        );

      case 'opportunity':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-white">{t('pitch.slides.opportunity.subtitle')}</h2>
              <p className="text-xl text-gray-300">{t('pitch.slides.opportunity.content')}</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {marketData.map((item, idx) => (
                <div key={idx} className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 market-data-item glassmorphism-card">
                  <div className="text-center space-y-2">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      <AnimatedNumber value={item.value} />
                    </div>
                    <div className="text-gray-400">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl p-6 border border-purple-500/20 adoption-rate-card glassmorphism-card">
              <div className="flex items-center space-x-4">
                <TrendingUp className="text-green-400" size={32} />
                <div>
                  <div className="text-lg font-semibold text-white">{t('pitch.slides.opportunity.adoptionRate')}</div>
                  <div className="text-gray-400">{t('pitch.slides.opportunity.globalAverage')}</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'problem':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-white">{t('pitch.slides.problem.title')}</h2>
              <p className="text-xl text-gray-300">{t('pitch.slides.problem.content')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20 problem-card glassmorphism-card">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Globe className="text-red-400" size={24} />
                    <h3 className="text-lg font-semibold text-white">{t('pitch.slides.problem.languageBarriers')}</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="problem-list-item">• {t('pitch.slides.problem.llmEnglish')}</li>
                    <li className="problem-list-item">• {t('pitch.slides.problem.noSpanishLocalization')}</li>
                    <li className="problem-list-item">• {t('pitch.slides.problem.missingDocumentation')}</li>
                  </ul>
                </div>
              </div>
              <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/20 problem-card glassmorphism-card">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="text-yellow-400" size={24} />
                    <h3 className="text-lg font-semibold text-white">{t('pitch.slides.problem.skillsGap')}</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="problem-list-item">• {t('pitch.slides.problem.aiSkillPremiums')}</li>
                    <li className="problem-list-item">• {t('pitch.slides.problem.demandGrowthMexico')}</li>
                    <li className="problem-list-item">• {t('pitch.slides.problem.noSpecializedTraining')}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-6 border border-orange-500/20 market-validation-card glassmorphism-card">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-white">{t('pitch.slides.problem.marketValidation')}</div>
                <div className="text-gray-300">{t('pitch.slides.problem.chatgptUsage')}</div>
              </div>
            </div>
          </div>
        );

      case 'solution':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-white">{t('pitch.slides.solution.title')}</h2>
              <p className="text-xl text-gray-300">{t('pitch.slides.solution.content')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/20 solution-card glassmorphism-card">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Zap className="text-purple-400" size={24} />
                    <h3 className="text-lg font-semibold text-white">{t('pitch.slides.solution.specializedVps')}</h3>
                  </div>
                  <p className="text-gray-300">{t('pitch.slides.solution.vpsDescription')}</p>
                </div>
              </div>
              <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20 solution-card glassmorphism-card">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="text-blue-400" size={24} />
                    <h3 className="text-lg font-semibold text-white">{t('pitch.slides.solution.educationPlatform')}</h3>
                  </div>
                  <p className="text-gray-300">{t('pitch.slides.solution.educationDescription')}</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20 glassmorphism-card">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-white">{t('pitch.slides.solution.integratedValueChain')}</h3>
                <div className="flex justify-center items-center space-x-4 text-sm">
                  <div className="bg-gray-800 rounded-lg px-4 py-2 value-chain-item glassmorphism-card">{t('pitch.slides.solution.hardware')}</div>
                  <ArrowRight className="text-gray-400" size={16} />
                  <div className="bg-gray-800 rounded-lg px-4 py-2 value-chain-item glassmorphism-card">{t('pitch.slides.solution.software')}</div>
                  <ArrowRight className="text-gray-400" size={16} />
                  <div className="bg-gray-800 rounded-lg px-4 py-2 value-chain-item glassmorphism-card">{t('pitch.slides.solution.education')}</div>
                  <ArrowRight className="text-gray-400" size={16} />
                  <div className="bg-gray-800 rounded-lg px-4 py-2 value-chain-item glassmorphism-card">{t('pitch.slides.solution.support')}</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'business':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-white">{t('pitch.slides.business.title')}</h2>
              <p className="text-xl text-gray-300">{t('pitch.slides.business.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {revenueStreams.map((stream, idx) => (
                <div key={idx} className="bg-gray-800/50 backdrop-blur-md rounded-xl p-4 border border-gray-700 revenue-stream-item glassmorphism-card">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{stream.icon}</div>
                      <div className="font-semibold text-white">{stream.name}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-cyan-400 font-bold">{stream.price}</div>
                      <div className="text-green-400 text-sm">{stream.margin} margin</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-xl p-6 border border-green-500/20 recurring-revenue-card glassmorphism-card">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-white">{t('pitch.slides.business.recurringRevenueModel')}</div>
                <div className="text-gray-300">{t('pitch.slides.business.subscriptionRevenue')}</div>
              </div>
            </div>
          </div>
        );

      case 'financials':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-white">{t('pitch.slides.financials.title')}</h2>
              <p className="text-xl text-gray-300">{t('pitch.slides.financials.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 financial-metric-card glassmorphism-card">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-green-400">{t('pitch.slides.financials.year1')}</div>
                  <div className="text-3xl font-bold text-white">$35K</div>
                  <div className="text-gray-400">{t('pitch.slides.financials.revenue')}</div>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 financial-metric-card glassmorphism-card">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-cyan-400">{t('pitch.slides.financials.year3')}</div>
                  <div className="text-3xl font-bold text-white">$2.5M</div>
                  <div className="text-gray-400">{t('pitch.slides.financials.projected')}</div>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 financial-metric-card glassmorphism-card">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-purple-400">{t('pitch.slides.financials.marketCap')}</div>
                  <div className="text-3xl font-bold text-white">$604M</div>
                  <div className="text-gray-400">{t('pitch.slides.financials.totalAddressable')}</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20 glassmorphism-card">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">{t('pitch.slides.financials.conservativeMetrics')}</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="financial-list-item">• {t('pitch.slides.financials.clientsPerMonth')}</li>
                    <li className="financial-list-item">• {t('pitch.slides.financials.monthlyGrowth')}</li>
                    <li className="financial-list-item">• {t('pitch.slides.financials.averageMargins')}</li>
                    <li className="financial-list-item">• {t('pitch.slides.financials.roiYear1')}</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-500/10 to-yellow-500/10 rounded-xl p-6 border border-green-500/20 glassmorphism-card">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">{t('pitch.slides.financials.growthCatalysts')}</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="financial-list-item">• {t('pitch.slides.financials.latamAiInvestment')}</li>
                    <li className="financial-list-item">• {t('pitch.slides.financials.elearningMarket')}</li>
                    <li className="financial-list-item">• {t('pitch.slides.financials.governmentPolicies')}</li>
                    <li className="financial-list-item">• {t('pitch.slides.financials.partnershipScalability')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'competitive':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-white">{t('pitch.slides.competitive.title')}</h2>
              <p className="text-xl text-gray-300">{t('pitch.slides.competitive.content')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {competitiveAdvantages.map((advantage, idx) => (
                <div key={idx} className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 competitive-advantage-item glassmorphism-card">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{advantage.icon}</div>
                      <h3 className="text-lg font-semibold text-white">{advantage.title}</h3>
                    </div>
                    <p className="text-gray-300">{advantage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-purple-500/20 glassmorphism-card">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-white">{t('pitch.slides.competitive.marketPosition')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2 market-position-item">
                    <div className="text-red-400 font-semibold">{t('pitch.slides.competitive.currentCompetition')}</div>
                    <div className="text-sm text-gray-400">{t('pitch.slides.competitive.genericVps')}</div>
                  </div>
                  <div className="space-y-2 market-position-item">
                    <div className="text-yellow-400 font-semibold">{t('pitch.slides.competitive.ourAdvantage')}</div>
                    <div className="text-sm text-gray-400">{t('pitch.slides.competitive.specializedLocalized')}</div>
                  </div>
                  <div className="space-y-2 market-position-item">
                    <div className="text-green-400 font-semibold">{t('pitch.slides.competitive.barriers')}</div>
                    <div className="text-sm text-gray-400">{t('pitch.slides.competitive.technicalComplexity')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'ask':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-white">{t('pitch.slides.ask.title')}</h2>
              <p className="text-xl text-gray-300">{t('pitch.slides.ask.subtitle')}</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl p-8 border border-purple-500/30 glassmorphism-card">
              <div className="text-center space-y-6">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent ask-amount">
                  $250K
                </div>
                <div className="text-xl text-gray-300 ask-text">{t('pitch.slides.ask.seedInvestment')}</div>
                <div className="text-gray-400 ask-text">
                  {t('pitch.slides.ask.captureMarket')}
                </div>
                <div className="flex justify-center space-x-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center space-x-2 ask-button">
                    <DollarSign size={20} />
                    <span>{t('pitch.slides.ask.investNow')}</span>
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center space-x-2 ask-button">
                    <Target size={20} />
                    <span>{t('pitch.slides.ask.learnMore')}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 relative">
      <div className="w-full max-w-4xl bg-gray-800/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 relative overflow-hidden glassmorphism-container">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 opacity-20 blur-3xl z-0"></div>
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-200">{t('pitch.title')}</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-200"
              >
                {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <div className="flex space-x-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentSlide(idx);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-3 h-3 rounded-full ${
                      currentSlide === idx ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
                    } transition duration-200`}
                  ></button>
                ))}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => handleLanguageChange('es')}
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    i18n.language === 'es' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
                  }`}
                >
                  ES
                </button>
              </div>
            </div>
          </div>

          <div ref={slideContentRef} className="flex-grow flex items-center justify-center py-8">
            {renderSlideContent(slides[currentSlide])}
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => {
                setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
                setIsAutoPlaying(false);
              }}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200"
            >
              {t('pitch.navigation.previous')}
            </button>
            <div className="text-gray-400">
              {t('pitch.navigation.slideOf', { current: currentSlide + 1, total: slides.length })}
            </div>
            <button
              onClick={() => {
                setCurrentSlide(prev => (prev + 1) % slides.length);
                setIsAutoPlaying(false);
              }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200"
            >
              {t('pitch.navigation.next')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorPitch;