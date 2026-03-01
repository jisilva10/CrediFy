import React from 'react';
import { Award, Wrench, Sprout, ShieldCheck, Star, Crown, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const BenefitsTiers = () => {
    // Current user's tier is hardcoded as level 3 based on their score (742)
    const currentTierIndex = 2; // 0-indexed for "Sólido"

    const tiers = [
        {
            level: 'Nivel 1',
            name: 'En Reconstrucción',
            score: '1 - 400',
            description: 'Estás en la etapa de sanear tu historial. El sistema financiero te ve como un perfil de riesgo alto, usualmente por falta de experiencia o deudas pasadas.',
            icon: Wrench,
            color: 'slate',
            bg: 'bg-slate-50',
            border: 'border-slate-200',
            badgeBg: 'bg-slate-200 text-slate-700',
            iconBg: 'bg-slate-100 text-slate-600',
            gradient: 'from-slate-100 to-slate-50',
            benefits: [
                { title: 'Tarjetas Garantizadas', desc: 'Obtén una tarjeta dejando un depósito en prenda.' },
                { title: 'Microcréditos de Inclusión', desc: 'Préstamos pequeños ($50 - $200) para "limpiar" tu nombre.' },
                { title: 'Planes de Telefonía Básicos', desc: 'Planes postpago sin equipo financiado.' },
                { title: 'Educación Financiera', desc: 'Guías personalizadas dentro de la app para subir score.' }
            ]
        },
        {
            level: 'Nivel 2',
            name: 'Emergente',
            score: '401 - 600',
            description: 'Ya eres visible para los bancos, pero con límites. Estás empezando a demostrar que eres un pagador responsable.',
            icon: Sprout,
            color: 'cyan',
            bg: 'bg-cyan-50/50',
            border: 'border-cyan-200',
            badgeBg: 'bg-cyan-100 text-cyan-800',
            iconBg: 'bg-cyan-100 text-cyan-600',
            gradient: 'from-cyan-50 to-white',
            benefits: [
                { title: 'Créditos en Retail', desc: 'Facilidad para comprar en almacenes aliados a cuotas.' },
                { title: 'Tarjetas de Crédito Básicas', desc: 'Acceso a tarjetas "Classic" con cupos de $300 - $800.' },
                { title: 'Financiamiento de Equipos', desc: 'Saca un celular a cuotas con tu operadora.' },
                { title: 'Revisión Semestral', desc: 'Evaluación automática para subir tu límite cada 6 meses.' }
            ]
        },
        {
            level: 'Nivel 3',
            name: 'Sólido',
            score: '601 - 750',
            description: 'Tienes un comportamiento saludable. Eres el cliente "ideal" para consumo masivo y los bancos empiezan a competir por ti.',
            icon: ShieldCheck,
            color: 'emerald',
            bg: 'bg-emerald-50/80',
            border: 'border-emerald-500', // Highlight border for current tier
            badgeBg: 'bg-emerald-500 text-white',
            iconBg: 'bg-emerald-500 text-white shadow-emerald-500/30 shadow-lg',
            gradient: 'from-emerald-50 to-emerald-100/50',
            benefits: [
                { title: 'Diferidos sin Intereses', desc: 'Meses de gracia o 0% interés en establecimientos.' },
                { title: 'Préstamos Personales Estándar', desc: 'Créditos de consumo con tasas promedio del mercado.' },
                { title: 'Tarjetas Gold / Masary', desc: 'Seguros de compra y mejores programas de puntos.' },
                { title: 'Aprobación Ágil', desc: 'Procesos mucho más rápidos para vehículos o estudios.' }
            ]
        },
        {
            level: 'Nivel 4',
            name: 'Preferencial',
            score: '751 - 900',
            description: 'Eres un cliente "Prime". Tienes un historial impecable y el sistema financiero te premia con costos más bajos.',
            icon: Star,
            color: 'violet',
            bg: 'bg-violet-50/50',
            border: 'border-violet-200',
            badgeBg: 'bg-violet-100 text-violet-800',
            iconBg: 'bg-violet-100 text-violet-600',
            gradient: 'from-violet-50 to-white',
            benefits: [
                { title: 'Tasas Reducidas en Vehículos', desc: 'Descuentos reales en la tasa para autos nuevos.' },
                { title: 'Tarjetas Platinum / Black', desc: 'Accesos VIP a aeropuertos y seguros internacionales.' },
                { title: 'Exoneración de Costos', desc: 'Sin cuotas de manejo ni emisión de plásticos.' },
                { title: 'Crédito Pre-aprobado', desc: 'Dinero disponible inmediato desde la banca móvil.' }
            ]
        },
        {
            level: 'Nivel 5',
            name: 'Elite / Triple A',
            score: '901 - 999',
            description: 'Grupo exclusivo de máxima confianza. Tienes el poder de negociar tus propias condiciones directamente con el banco.',
            icon: Crown,
            color: 'amber',
            bg: 'bg-[#1a1a1a]', // Dark mode style for the elite tier
            border: 'border-amber-500/30',
            badgeBg: 'bg-amber-500 text-slate-900',
            iconBg: 'bg-gradient-to-br from-amber-300 to-amber-600 text-slate-900 shadow-amber-500/20 shadow-lg',
            gradient: 'from-[#222] to-black',
            textColor: 'text-amber-500',
            descColor: 'text-slate-400',
            titleColor: 'text-white',
            benefits: [
                { title: 'Mejor Tasa Hipotecaria', desc: 'Tasas más bajas para vivienda, ahorras miles de dólares.' },
                { title: 'Oficial de Cuenta Personal', desc: 'Atención prioritaria y directa VIP (Banca Premium).' },
                { title: 'Poder de Negociación', desc: 'Capacidad para solicitar rebajas directas de tasas.' },
                { title: 'Créditos al 100%', desc: 'Financia vehículos o proyectos sin dar entrada inicial.' }
            ],
            isElite: true
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } }
    };

    return (
        <div className="w-full max-w-5xl mx-auto">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="space-y-6"
            >
                {tiers.map((tier, index) => {
                    const isCurrent = index === currentTierIndex;
                    const Icon = tier.icon;
                    return (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`relative overflow-hidden group rounded-3xl border-2 ${tier.border} ${tier.bg} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                        >
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${tier.gradient} opacity-50 z-0`} />

                            <div className="relative z-10 p-6 md:p-8 flex flex-col lg:flex-row gap-6 lg:gap-10">
                                {/* Left Section: Header & Info */}
                                <div className="lg:w-2/5 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${tier.iconBg}`}>
                                                <Icon size={24} />
                                            </div>
                                            <div>
                                                <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${tier.badgeBg}`}>
                                                    {tier.level}
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className={`text-2xl font-black tracking-tight mb-1 ${tier.isElite ? 'text-amber-400' : 'text-slate-900'}`}>
                                            {tier.name}
                                        </h3>
                                        <div className={`text-sm font-mono font-bold px-3 py-1 inline-block rounded-lg mb-4 ${tier.isElite ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 'bg-white/60 text-slate-700 border border-slate-200'}`}>
                                            Score: {tier.score}
                                        </div>

                                        <p className={`text-sm font-medium leading-relaxed ${tier.isElite ? 'text-slate-400' : 'text-slate-600'}`}>
                                            {tier.description}
                                        </p>
                                    </div>

                                    {isCurrent && (
                                        <div className="mt-6 flex items-center gap-2 text-emerald-700 font-bold bg-emerald-100/50 py-2 px-4 rounded-xl border border-emerald-200 w-fit">
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                            </span>
                                            Tu nivel actual
                                        </div>
                                    )}
                                </div>

                                {/* Right Section: Benefits Grid */}
                                <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 lg:mt-0">
                                    {tier.benefits.map((benefit, i) => (
                                        <div key={i} className={`p-4 rounded-2xl ${tier.isElite ? 'bg-white/5 border border-white/10 hover:bg-white/10' : 'bg-white/60 border border-white hover:bg-white'} backdrop-blur-sm transition-colors`}>
                                            <div className="flex items-start gap-3">
                                                <div className={`mt-0.5 shrink-0 ${tier.isElite ? 'text-amber-500' : isCurrent ? 'text-emerald-500' : 'text-blue-500'}`}>
                                                    <Check size={16} strokeWidth={3} />
                                                </div>
                                                <div>
                                                    <h4 className={`text-sm font-bold mb-1 ${tier.isElite ? 'text-slate-200' : 'text-slate-900'}`}>{benefit.title}</h4>
                                                    <p className={`text-xs font-medium leading-snug ${tier.isElite ? 'text-slate-500' : 'text-slate-500'}`}>{benefit.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative element for current tier */}
                            {isCurrent && (
                                <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none" />
                            )}
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};
