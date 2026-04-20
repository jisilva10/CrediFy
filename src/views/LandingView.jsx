import React from 'react';
import { Link } from 'react-router-dom';
import {
    ShieldCheck,
    TrendingUp,
    Zap,
    Lock,
    Users,
    CheckCircle2,
    ArrowRight,
    Star,
    LayoutDashboard,
    PieChart,
    Smartphone,
    Award,
    Activity,
    CreditCard
} from 'lucide-react';
import HeroAnimation from '../components/HeroAnimation';

export default function LandingView() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans w-full overflow-y-auto" style={{ fontFamily: "'Inter', 'Outfit', sans-serif" }}>
            {/* 1️⃣ Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src="https://i.imgur.com/VuuFfLy.png" alt="Credify Logo" className="h-14 md:h-16 object-contain drop-shadow-sm" />
                    </div>
                    <Link
                        to="/b2c"
                        className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md flex items-center gap-2"
                    >
                        <LayoutDashboard size={16} />
                        Dashboard
                    </Link>
                </div>
            </header>

            {/* 2️⃣ Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-emerald-50 -z-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-200">
                                <Zap size={14} /> El futuro de tus finanzas
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-6 lg:pr-4">
                                Toma el control de tu <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-500">
                                    salud financiera
                                </span>
                            </h1>
                            <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 mb-10 font-medium">
                                Monitorea tu score, gestiona tus tarjetas y mejora tu perfil crediticio con herramientas inteligentes diseñadas para llevarte al siguiente nivel.
                            </p>
                            <div className="flex flex-col flex-wrap sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    to="/b2c"
                                    className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-black text-lg transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2 hover:-translate-y-1"
                                >
                                    Ir al Dashboard <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full relative lg:px-0 mt-8 lg:mt-0 hidden lg:block">
                            <HeroAnimation />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3️⃣ Problem Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">El sistema tradicional te deja a ciegas</h2>
                        <p className="text-lg text-slate-600 font-medium">
                            La mayoría de las personas no sabe cómo se calcula su score crediticio, paga intereses excesivos y no tiene una estrategia clara para acceder a mejores oportunidades financieras.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center mt-12">
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp size={24} className="rotate-180" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Scores Estancados</h3>
                            <p className="text-slate-600">No entiendes qué acciones bajan tu puntaje ni cómo subirlo rápidamente.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <PieChart size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Deudas Descontroladas</h3>
                            <p className="text-slate-600">Pagas el mínimo y ves cómo los intereses consumen tus ingresos mes a mes.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Lock size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Mejores Tasas Fuera de Alcance</h3>
                            <p className="text-slate-600">Los bancos te niegan créditos o te ofrecen tasas abusivas por falta de historial.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4️⃣ Solution Section */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-500/30">
                                La Solución
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                                Transparencia total <br /> sobre tus finanzas
                            </h2>
                            <p className="text-lg text-slate-300 mb-8 font-medium">
                                Credify consolida tu información financiera, simula el impacto de tus decisiones antes de tomarlas y te guía paso a paso para mejorar tu perfil crediticio. Pasas de ser un espectador a ser el director de tu futuro financiero.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Simulador de Score Predictivo',
                                    'Análisis de Deuda Inteligente',
                                    'Recomendaciones Personalizadas',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-semibold text-slate-200">
                                        <CheckCircle2 className="text-emerald-400" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full relative">
                            {/* Decorative mock dashboard snippet */}
                            <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden mt-8 lg:mt-0 p-6 relative z-10 rotate-2 hover:rotate-0 transition-transform duration-500">
                                <div className="flex items-center justify-between mb-8 text-white">
                                    <h4 className="font-bold text-lg">Impacto Simulado</h4>
                                    <span className="text-emerald-400 font-black">+42 pts</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-4 bg-slate-700 rounded-full w-3/4"></div>
                                    <div className="h-4 bg-slate-700 rounded-full w-1/2"></div>
                                    <div className="h-4 bg-slate-700 rounded-full w-5/6"></div>
                                </div>
                                <div className="mt-8 pt-8 border-t border-slate-700 flex justify-between">
                                    <div className="text-center">
                                        <p className="text-slate-400 text-sm mb-1">Score Actual</p>
                                        <p className="text-2xl font-black text-white">742</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-slate-400 text-sm mb-1">Score Proyectado</p>
                                        <p className="text-2xl font-black text-emerald-400">784</p>
                                    </div>
                                </div>
                            </div>
                            {/* Background glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/20 blur-[100px] -z-10 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5️⃣ Benefits Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Resultados que transforman tu vida</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Ahorra en Intereses', desc: 'Accede a tasas preferenciales y deja de pagar de más a los bancos.', icon: TrendingUp },
                            { title: 'Toma Decisiones Seguras', desc: 'Simula cómo un nuevo crédito afectará tu perfil antes de pedirlo.', icon: ShieldCheck },
                            { title: 'Libertad Financiera', desc: 'Crea un plan realista para salir de deudas estructuradas mes a mes.', icon: Award },
                            { title: 'Gana Recompensas', desc: 'Acumula CrediPoints por tus buenos hábitos y canjéalos por premios.', icon: Star },
                        ].map((b, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <b.icon size={32} className="text-blue-600 mb-4" />
                                <h3 className="text-lg font-black text-slate-900 mb-2">{b.title}</h3>
                                <p className="text-slate-600 text-sm">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6️⃣ Features Section */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            {/* Abstract Feature Visualization */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="bg-blue-50 rounded-2xl p-6 h-48 border border-blue-100 flex flex-col justify-end">
                                        <Smartphone size={24} className="text-blue-500 mb-auto" />
                                        <div className="h-2 w-1/2 bg-blue-200 rounded-full mb-2"></div>
                                        <div className="h-2 w-3/4 bg-blue-200 rounded-full"></div>
                                    </div>
                                    <div className="bg-emerald-50 rounded-2xl p-6 h-32 border border-emerald-100 flex flex-col justify-end">
                                        <PieChart size={24} className="text-emerald-500 mb-auto" />
                                        <div className="h-2 w-2/3 bg-emerald-200 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="bg-purple-50 rounded-2xl p-6 h-32 border border-purple-100 flex flex-col justify-end">
                                        <Zap size={24} className="text-purple-500 mb-auto" />
                                        <div className="h-2 w-3/4 bg-purple-200 rounded-full"></div>
                                    </div>
                                    <div className="bg-orange-50 rounded-2xl p-6 h-48 border border-orange-100 flex flex-col justify-end">
                                        <TrendingUp size={24} className="text-orange-500 mb-auto" />
                                        <div className="h-2 w-1/2 bg-orange-200 rounded-full mb-2"></div>
                                        <div className="h-2 w-full bg-orange-200 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Herramientas poderosas y simples</h2>
                            <div className="space-y-8 mt-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                                        <Activity size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Motor de Impacto de Score</h3>
                                        <p className="text-slate-600">Entiende exactamente qué factores positivos y negativos están determinando tu puntaje crediticio actual.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                                        <CreditCard size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Gestor Integral de Tarjetas</h3>
                                        <p className="text-slate-600">Centraliza todas tus tarjetas, fechas de corte y simula cuánto pagar para minimizar intereses.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-fuchsia-100 text-fuchsia-600 rounded-full flex items-center justify-center shrink-0">
                                        <Award size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Programa de Lealtad (CrediPoints)</h3>
                                        <p className="text-slate-600">Canjea los puntos que ganas por buenos hábitos financieros físicos mediante códigos QR.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7️⃣ How It Works Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">El camino hacia tu bienestar financiero</h2>
                        <p className="text-lg text-slate-600">Es más fácil de lo que piensas.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 -z-10"></div>

                        {[
                            { num: '01', title: 'Conecta', desc: 'Vincula de forma segura tus datos financieros básicos.' },
                            { num: '02', title: 'Analiza', desc: 'Nuestro motor evalúa tu perfil y encuentra áreas de mejora.' },
                            { num: '03', title: 'Simula', desc: 'Prueba diferentes estrategias antes de comprometer pago.' },
                            { num: '04', title: 'Crece', desc: 'Aumenta tu score mes a mes y accede a mejores beneficios.' }
                        ].map((step, i) => (
                            <div key={i} className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative z-10 text-center">
                                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-emerald-500 absolute top-4 left-4 select-none opacity-90">{step.num}</span>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 mt-4">{step.title}</h3>
                                    <p className="text-slate-600 text-sm">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8️⃣ Target Audience Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                        <Users size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Creado para quienes buscan más</h2>
                    <p className="text-lg text-slate-600 mb-12 font-medium">
                        Desde estudiantes buscando construir su primer historial, hasta profesionales que quieren optimizar sus deudas para adquirir una vivienda. Nuestro propósito es democratizar el acceso a la información crediticia que los bancos tradicionalmente ocultan.
                    </p>
                </div>
            </section>

            {/* 9️⃣ Social Proof */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Lo que dicen nuestros usuarios</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { quote: "Subí 50 puntos en 3 meses solo siguiendo los consejos del simulador. ¡Por fin me aprobaron la tarjeta dorada!", author: "María G.", role: "Emprendedora" },
                            { quote: "Antes pagaba intereses altísimos sin saber por qué. Usar el gestor de tarjetas me organizó la vida financiera.", author: "Carlos R.", role: "Ingeniero" },
                            { quote: "Canjear mis CrediPoints por un café el fin de semana es el pequeño incentivo que necesitaba para pagar a tiempo.", author: "Ana L.", role: "Estudiante" }
                        ].map((testimonial, i) => (
                            <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                                <div className="flex gap-1 mb-4 text-emerald-400">
                                    {[1, 2, 3, 4, 5].map(v => <Star key={v} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-slate-300 mb-6 italic">"{testimonial.quote}"</p>
                                <div>
                                    <p className="font-bold text-white">{testimonial.author}</p>
                                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔟 Security & Trust */}
            <section className="py-16 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center text-slate-500">
                        <div className="flex items-center gap-2">
                            <Lock size={20} className="text-slate-400" />
                            <span className="font-semibold text-sm">Encriptación Nivel Bancario 256-bit</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={20} className="text-slate-400" />
                            <span className="font-semibold text-sm">Protección de Datos Garantizada</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={20} className="text-slate-400" />
                            <span className="font-semibold text-sm">Cumplimiento Legal Estricto</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1️⃣1️⃣ Final CTA */}
            <section className="py-24 relative overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900 opacity-90 -z-10" />
                {/* Abstract pattern */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] -z-10" />

                {/* Decorative glows */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full -z-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full -z-10"></div>

                <div className="max-w-3xl mx-auto px-4 text-center text-white relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-white drop-shadow-sm">¿Listo para mejorar tu score?</h2>
                    <p className="text-xl md:text-2xl mb-10 text-slate-300 font-medium">
                        Únete a miles de personas que ya tienen el control de su futuro financiero.
                    </p>
                    <Link
                        to="/b2c"
                        className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-8 py-4 rounded-full font-black text-xl transition-transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] inline-flex items-center gap-2"
                    >
                        Ingresar al Dashboard <ArrowRight size={24} />
                    </Link>
                </div>
            </section>

            {/* 1️⃣2️⃣ Footer (Mock) */}
            <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <img src="https://i.imgur.com/VuuFfLy.png" alt="Credify Logo" className="h-12 object-contain mb-6 grayscale opacity-60" />
                            <p className="mb-4">Tu aliado confiable para construir el futuro financiero que mereces.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">Producto</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Simulador</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Tarjetas</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Beneficios</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">Compañía</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Sobre Nosotros</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Carreras</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Soporte</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Términos y Condiciones</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Política de Privacidad</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Seguridad</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center pt-8 border-t border-slate-800 flex flex-col items-center justify-between md:flex-row">
                        <p>&copy; {new Date().getFullYear()} Credify. Todos los derechos reservados.</p>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white"><div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">IG</div></a>
                            <a href="#" className="hover:text-white"><div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">TW</div></a>
                            <a href="#" className="hover:text-white"><div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">IN</div></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
