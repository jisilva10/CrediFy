import React from 'react';
import { Target, TrendingUp, AlertTriangle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Gauge } from './ui/gauge-1';

export const PymeScore = () => {
    return (
        <div className="w-full bg-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-sm border border-slate-200">
            {/* Visual Flair */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="flex flex-col md:flex-row gap-8 relative z-10">
                {/* Left Side: Score & Gauge */}
                <div className="flex flex-col items-center justify-center border-r-0 md:border-r border-slate-100 pr-0 md:pr-8 w-full md:w-1/3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Score Conductual PyME</span>
                    <div className="relative mt-2 mb-2 flex items-center justify-center w-full">
                        <Gauge
                            value={815}
                            min={1}
                            max={999}
                            size={180}
                            gradient={true}
                            primary={{
                                1: "#ef4444",   // Red
                                401: "#f59e0b", // Amber
                                601: "#10b981", // Emerald
                                800: "#6366f1"  // Indigo
                            }}
                            tickMarks={false}
                            transition={{ length: 1500, delay: 300 }}
                        />
                    </div>
                    <div className="flex items-center gap-2 mt-4 bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full shadow-sm">
                        <ShieldCheck size={16} className="text-indigo-600" />
                        <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Reputación Elite</span>
                    </div>
                </div>

                {/* Right Side: Factors & Insights */}
                <div className="flex-1 w-full flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-slate-900">Factores de tu negocio</h2>
                        <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                            Ver historial <ArrowRight size={14} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Positive factors */}
                        <div className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-100">
                            <p className="text-[10px] uppercase font-black tracking-wider text-emerald-600 mb-3 flex items-center gap-1.5">
                                <TrendingUp size={14} /> Impulsan tu score
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                    <span className="text-xs text-slate-600 font-medium whitespace-normal"><strong className="text-slate-900">Liquidez positiva:</strong> Mantuviste caja suficiente el cierre pasado.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                    <span className="text-xs text-slate-600 font-medium"><strong className="text-slate-900">Pago crediticio:</strong> Cuota abonada 3 días antes de la fecha.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Negative factors */}
                        <div className="bg-amber-50/50 rounded-xl p-4 border border-amber-100">
                            <p className="text-[10px] uppercase font-black tracking-wider text-amber-600 mb-3 flex items-center gap-1.5">
                                <AlertTriangle size={14} /> Puntos de fricción
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-1"></div>
                                    <span className="text-xs text-slate-600 font-medium"><strong className="text-slate-900">Flujo presionado:</strong> Gastos crecieron un 8% más rápido que ventas.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-1"></div>
                                    <span className="text-xs text-slate-600 font-medium"><strong className="text-slate-900">Retraso facturas:</strong> 2 proveedores con pagos pendientes &gt; 15 días.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
