import { useState, useEffect } from 'react';
import { Routes, Route, Outlet, Link, useLocation } from 'react-router-dom';
import {
    Activity,
    Award,
    BrainCircuit,
    CreditCard,
    Home,
    ShieldCheck,
    LogOut,
    PieChart,
    ChevronUp,
    ChevronDown,
    UserCircle,
    Building,
    Building2,
    Users,
    Trophy,
    Gift,
    Briefcase,
    Store,
    ArrowRightLeft,
    ChevronRight,
    TrendingUp,
    ShoppingBag
} from 'lucide-react';
import './views.css';

// Radix/Shadcn Sidebar Components
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInput,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
    SidebarInset
} from '@/components/ui/sidebar';

// Dashboard Sections
import IPhoneMockup from '@/components/ui/iphone-mockup';
import { ScoreImpactEngine } from '../components/ScoreImpactEngine';
import { CreditCardView } from '../components/CreditCardView';
import { LoanView } from '../components/LoanView';
import { BenefitsTiers } from '../components/BenefitsTiers';
import { ScoreSimulator } from '../components/ScoreSimulator';
import { CrediPointsDashboard } from '../components/CrediPointsDashboard';

// New Consumer Modules
import { RiskAlertSystem } from '../components/RiskAlertSystem';
import { DecisionEngine } from '../components/DecisionEngine';
import { TrustIndex } from '../components/TrustIndex';
import { AutomationLayer } from '../components/AutomationLayer';

// New PyME Modules
import { PymeScore } from '../components/PymeScore';
import { PymeCreditTracking } from '../components/PymeCreditTracking';
import { PymeCashflow } from '../components/PymeCashflow';
import { PymeInvoices } from '../components/PymeInvoices';
import { PymeInventory } from '../components/PymeInventory';

// --- Dashboard Views (Routed Components) ---

function ScoreView() {
    return (
        <div className="animate-fade-in w-full mx-auto flex flex-col items-center max-w-5xl">
            <div className="w-full text-left mb-6">
                <h1 className="text-3xl font-black tracking-tight text-slate-900 mb-1">Mi Score y Perfil</h1>
                <p className="text-sm text-slate-600 font-bold">Monitorea y mejora tu puntaje para acceder a mejores tasas.</p>
            </div>
            
            <DecisionEngine />
            
            <div className="w-full grid grid-cols-1 mb-8 gap-8">
                <ScoreImpactEngine score={742} />
            </div>

            <div className="w-full mb-8">
                <TrustIndex />
            </div>

            {/* Social Benchmarking Banner */}
            <div className="w-full bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 flex flex-col gap-4 sm:flex-row shadow-sm text-slate-800 relative overflow-hidden mb-8">
                <div className="absolute right-0 top-0 opacity-[0.03] pointer-events-none transform translate-x-1/4 -translate-y-1/4 z-0 text-slate-900">
                    <Trophy size={140} />
                </div>

                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0 border border-emerald-100 z-10">
                    <Users size={24} className="text-emerald-600" />
                </div>

                <div className="flex-1 z-10">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] uppercase font-black tracking-wider px-2 py-0.5 rounded-full border border-emerald-200">Comunidad</span>
                        <h3 className="font-black text-xl text-slate-900">Estás en el Top 15% 🏆</h3>
                    </div>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-[85%] mt-1">
                        Tu score de <span className="font-black text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded">742</span> destaca entre los usuarios de tu misma edad.
                        ¡Estás a solo <span className="font-bold text-emerald-600">9 puntos</span> de entrar al codiciado Top 10%!
                    </p>
                </div>
            </div>

            <ScoreSimulator />
        </div>
    );
}

function CardsView() {
    return (
        <div className="animate-fade-in w-full max-w-5xl mx-auto">
            <h1 className="text-3xl font-black tracking-tight text-slate-900 mb-1">Mis Tarjetas</h1>
            <p className="text-sm text-slate-600 font-bold mb-8">Controla tu deuda, simula pagos y ahorra en intereses.</p>
            
            <RiskAlertSystem />
            
            <CreditCardView
                name="Diners Club Miles" brand="Diners" last4="8492"
                balance={1250.00} quota={5000} cutDate="12 cada mes" payDate="05 Nov" minPay={120} apr={24.5} hasMora={false}
            />
            <CreditCardView
                name="Visa Infinite Gold" brand="Visa" last4="1022"
                balance={840.00} quota={1500} cutDate="18 cada mes" payDate="02 Nov" minPay={45} apr={28.9} hasMora={true}
            />
            
            <AutomationLayer />
        </div>
    );
}

function LoansView() {
    return (
        <div className="animate-fade-in w-full max-w-5xl mx-auto">
            <h1 className="text-3xl font-black tracking-tight text-slate-900 mb-1">Mis Préstamos Bancarios</h1>
            <p className="text-sm text-slate-600 font-bold mb-8">Visualiza el progreso y saldo de tus créditos actuales.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <LoanView
                    name="Crédito Hipotecario"
                    type="Vivienda"
                    principal={84500}
                    apr={8.5}
                    monthlyFee={950}
                    remainingMonths={124}
                    progress={58}
                    progressLabel="Progreso de tu Préstamo"
                />
                {/* Auto Debt Exit Plan Block extracted and placed here for relevance */}
                <div className="card bg-slate-900 text-white shadow-xl relative overflow-hidden flex flex-col justify-center min-h-[280px]">
                    <div className="absolute top-0 right-0 p-8 opacity-10 text-emerald-500">
                        <PieChart size={120} />
                    </div>
                    <div className="relative z-10 px-6">
                        <span className="badge bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-3 font-bold uppercase tracking-widest text-[10px]">Plan Libertad Financiera</span>
                        <h2 className="text-xl font-black mb-2 text-white">Sal de Deudas Más Rápido</h2>
                        <p className="text-xs text-slate-300 mb-6 leading-relaxed font-medium">
                            Automatiza abonos extra cada semana. Nosotros lo destinamos al préstamo ideal para ahorrarte intereses.
                        </p>
                        <button className="btn btn-primary bg-emerald-500 hover:bg-emerald-400 border-none shadow-lg shadow-emerald-500/20 text-slate-900 font-black w-full text-sm">
                            Activar Plan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ClientLevelView() {
    return (
        <div className="animate-fade-in w-full max-w-6xl mx-auto">
            <h1 className="text-3xl font-black tracking-tight text-slate-900 mb-1">Nivel y Beneficios</h1>
            <p className="text-sm text-slate-600 font-bold mb-8">Descubre las recompensas por mantener buenos hábitos financieros.</p>
            <BenefitsTiers />
        </div>
    );
}

function CrediPointsView() {
    return (
        <div className="animate-fade-in w-full max-w-6xl mx-auto">
            <CrediPointsDashboard />
        </div>
    );
}

// -- PyME Views --
function PymeDashboardOverview() {
    return (
        <div className="animate-fade-in w-full max-w-5xl mx-auto flex flex-col gap-8">
            <div className="w-full text-left">
                <h1 className="text-3xl font-black tracking-tight text-slate-900 flex items-center gap-2">
                    <Store className="text-indigo-600" /> Credify Business
                </h1>
                <p className="text-sm text-slate-600 font-bold">Salud financiera y capacidad de pago para tu negocio.</p>
            </div>
            
            <PymeScore />
            <PymeCashflow />
            <div className="grid grid-cols-1 gap-6">
                <PymeCreditTracking />
            </div>
        </div>
    );
}

function PymeOperationsView() {
    return (
        <div className="animate-fade-in w-full max-w-5xl mx-auto flex flex-col gap-8">
            <div className="w-full text-left">
                <h1 className="text-3xl font-black tracking-tight text-slate-900 mb-1">Operación y Liquidez</h1>
                <p className="text-sm text-slate-600 font-bold">Gestión de activos retenidos y pago a proveedores.</p>
            </div>
            
            <PymeInvoices />
            <PymeInventory />
        </div>
    );
}

// --- Dashboard Layout Container ---
export default function B2CView() {
    const location = useLocation();
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobilePreview, setIsMobilePreview] = useState(false);
    const [workspaceMode, setWorkspaceMode] = useState('personal'); // 'personal' | 'pyme'
    const [pymeActiveTab, setPymeActiveTab] = useState('overview'); // 'overview' | 'operations'
    const isIframe = window !== window.parent;

    useEffect(() => {
        // Fallback for when video onEnded doesn't fire due to browser policies
        // Increased from 4.5s to 9s to avoid cutting off the new MP4 video
        const timer = setTimeout(() => setIsLoaded(true), 9000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleMessage = (event) => {
            if (event.data?.type === 'TOGGLE_MOBILE_PREVIEW') {
                setIsMobilePreview(prev => !prev);
            }
        };
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    const handleToggleMobile = () => {
        if (isIframe) {
            window.parent.postMessage({ type: 'TOGGLE_MOBILE_PREVIEW' }, '*');
        } else {
            setIsMobilePreview(!isMobilePreview);
        }
    };

    if (!isLoaded) return (
        <div className="h-screen w-full flex justify-center items-center" style={{ backgroundColor: '#ffffff' }}>
            <div className="flex flex-col items-center">
                <video
                    autoPlay
                    muted
                    playsInline
                    className="h-80 mb-6 object-contain"
                    onEnded={() => setIsLoaded(true)}
                >
                    <source src="/loading.mp4" type="video/mp4" />
                </video>
                <p className="text-slate-900 font-black text-xl mb-2">Preparando tu dashboard...</p>
                <p className="text-slate-600 text-sm font-bold">Cargando tu información financiera</p>
            </div>
        </div>
    );

    const DashboardContent = (
        <SidebarProvider>
            <div className="flex h-full bg-slate-50 w-full overflow-hidden">
                <Sidebar className="border-r border-slate-200">
                    <SidebarHeader className="p-4 border-b border-slate-100 flex flex-col justify-center min-h-[5rem] gap-3">
                        {/* Profile Switcher */}
                        <div 
                            className="bg-slate-100/50 hover:bg-slate-100 border border-slate-200 rounded-xl p-2 cursor-pointer transition-colors flex items-center justify-between"
                            onClick={() => setWorkspaceMode(mode => mode === 'personal' ? 'pyme' : 'personal')}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold shadow-sm ${workspaceMode === 'personal' ? 'bg-gradient-to-tr from-blue-600 to-emerald-400' : 'bg-gradient-to-tr from-indigo-600 to-violet-500'}`}>
                                    {workspaceMode === 'personal' ? <UserCircle size={20} /> : <Store size={20} />}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wider font-black text-slate-500 mb-0.5">Viendo Ahora</span>
                                    <span className="text-sm font-bold text-slate-900">{workspaceMode === 'personal' ? 'Mi Perfil' : 'Mi Negocio'}</span>
                                </div>
                            </div>
                            <ArrowRightLeft size={16} className="text-slate-400" />
                        </div>
                    </SidebarHeader>

                    <SidebarContent className="p-4">
                        <SidebarGroup>
                            <SidebarGroupLabel className="px-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Resumen Financiero</SidebarGroupLabel>
                            <SidebarGroupContent>
                                {workspaceMode === 'personal' ? (
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            asChild
                                            className="px-3 py-5 rounded-xl transition-all"
                                            isActive={location.pathname === '/b2c' || location.pathname === '/b2c/score'}
                                        >
                                            <Link to="/b2c/score" className="flex items-center gap-3">
                                                <Activity size={18} className={location.pathname === '/b2c' || location.pathname === '/b2c/score' ? 'text-blue-600' : 'text-slate-500'} />
                                                <span className="font-semibold text-sm">Score Crediticio</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            asChild
                                            className="px-3"
                                            isActive={location.pathname === '/b2c/tarjetas'}
                                        >
                                            <Link to="/b2c/tarjetas" className="flex items-center gap-3">
                                                <CreditCard size={18} className={location.pathname === '/b2c/tarjetas' ? 'text-blue-600' : 'text-slate-500'} />
                                                <span className="font-semibold text-sm">Tarjetas</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            asChild
                                            className="px-3"
                                            isActive={location.pathname === '/b2c/prestamos'}
                                        >
                                            <Link to="/b2c/prestamos" className="flex items-center gap-3">
                                                <Building size={18} className={location.pathname === '/b2c/prestamos' ? 'text-blue-600' : 'text-slate-500'} />
                                                <span className="font-semibold text-sm">Préstamos Bancarios</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            asChild
                                            className="px-3"
                                            isActive={location.pathname === '/b2c/cliente'}
                                        >
                                            <Link to="/b2c/cliente" className="flex items-center gap-3">
                                                <Award size={18} className={location.pathname === '/b2c/cliente' ? 'text-orange-500' : 'text-slate-500'} />
                                                <span className="font-semibold text-sm">Nivel y Beneficios</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            asChild
                                            className="px-3 py-5 rounded-xl transition-all"
                                            isActive={location.pathname === '/b2c/credipoints'}
                                        >
                                            <Link to="/b2c/credipoints" className="flex items-center gap-3">
                                                <Gift size={18} className={location.pathname === '/b2c/credipoints' ? 'text-fuchsia-600' : 'text-slate-500'} />
                                                <span className="font-semibold text-sm">CrediPoints</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                                ) : (
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            className={`px-3 py-5 rounded-xl transition-all ${pymeActiveTab === 'overview' ? 'bg-indigo-50 hover:bg-indigo-50' : 'hover:bg-slate-100'}`}
                                            isActive={pymeActiveTab === 'overview'}
                                            onClick={() => setPymeActiveTab('overview')}
                                        >
                                            <div className="flex items-center gap-3 w-full cursor-pointer">
                                                <Activity size={18} className={pymeActiveTab === 'overview' ? 'text-indigo-600' : 'text-slate-500'} />
                                                <span className={`font-semibold text-sm ${pymeActiveTab === 'overview' ? 'text-indigo-900' : 'text-slate-600'}`}>Salud & Crédito</span>
                                            </div>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            className={`px-3 py-5 rounded-xl transition-all ${pymeActiveTab === 'operations' ? 'bg-indigo-50 hover:bg-indigo-50' : 'hover:bg-slate-100'}`}
                                            isActive={pymeActiveTab === 'operations'}
                                            onClick={() => setPymeActiveTab('operations')}
                                        >
                                            <div className="flex items-center gap-3 w-full cursor-pointer">
                                                <Briefcase size={18} className={pymeActiveTab === 'operations' ? 'text-indigo-600' : 'text-slate-500'} />
                                                <span className={`font-semibold text-sm ${pymeActiveTab === 'operations' ? 'text-indigo-900' : 'text-slate-600'}`}>Facturas e Inventario</span>
                                            </div>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                                )}
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>

                    <SidebarFooter className="p-4 border-t border-slate-100">
                        <div className="flex items-center gap-3 mb-4 px-2">
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
                                <UserCircle size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-slate-900">Jose Ignacio Silva</span>
                                <span className="text-[10px] text-emerald-600 font-bold bg-emerald-100/50 px-2 py-0.5 rounded-lg border border-emerald-200 w-fit">Nivel Sólido</span>
                            </div>
                        </div>
                        <SidebarMenuButton asChild variant="ghost" className="w-full text-slate-500 justify-start px-2 py-4">
                            <Link to="/" className="flex items-center gap-2">
                                <LogOut size={16} />
                                <span className="text-xs font-bold uppercase tracking-wider">Cerrar Sesión</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarFooter>
                </Sidebar>

                <SidebarInset className="flex w-full flex-col h-full bg-slate-50">
                    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur-md px-4 shadow-sm md:shadow-none">
                        <div className="flex items-center gap-4">
                            <SidebarTrigger className="-ml-1" />
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <img src="https://i.imgur.com/VuuFfLy.png" alt="Credify Logo" className="h-12 object-contain" />
                                {(!isMobilePreview && !isIframe) && (
                                    <button
                                        onClick={handleToggleMobile}
                                        className="ml-4 px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold transition-colors border border-slate-200 flex items-center gap-2"
                                    >
                                        📱 Mobile
                                    </button>
                                )}
                            </div>
                        </div>
                    </header>

                    <main className="flex-1 overflow-auto p-4 md:p-8 lg:p-12 w-full bg-slate-50 relative">
                        {workspaceMode === 'personal' ? (
                            <Outlet />
                        ) : (
                            <div className="flex flex-col h-full">
                                {pymeActiveTab === 'overview' && <PymeDashboardOverview />}
                                {pymeActiveTab === 'operations' && <PymeOperationsView />}
                            </div>
                        )}
                    </main>
                </SidebarInset>
            </div>
        </SidebarProvider>
    );

    if (isMobilePreview && !isIframe) {
        return (
            <div className="flex-1 w-full h-screen bg-slate-50 overflow-hidden flex flex-col items-center justify-center relative">
                <div className="absolute top-6 z-50">
                    <button
                        onClick={() => setIsMobilePreview(false)}
                        className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-sm font-bold shadow-xl transition-all flex items-center gap-2"
                    >
                        🖥️ Volver a Desktop
                    </button>
                </div>

                <div className="flex w-full h-full items-center justify-center scale-[0.80] origin-center mt-12">
                    <IPhoneMockup scale={1} className="bg-transparent shadow-2xl drop-shadow-2xl">
                        <iframe
                            src={location.pathname + location.search}
                            className="w-full h-full border-none bg-slate-50 pointer-events-auto"
                            title="Mobile Preview"
                        />
                    </IPhoneMockup>
                </div>
            </div>
        );
    }

    return DashboardContent;
}

// Export the sub-views so App.jsx can route them
export { ScoreView, CardsView, LoansView, ClientLevelView, CrediPointsView, PymeDashboardOverview, PymeOperationsView };
