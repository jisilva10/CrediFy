import React from 'react';
import { ShieldCheck, TrendingUp, CheckCircle, Clock } from 'lucide-react';

export const TrustIndex = () => {
    return (
        <div className="w-full bg-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-sm border border-slate-200 group">
            {/* Background elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-50 rounded-full blur-3xl pointer-events-none transition-all duration-700 opacity-50 group-hover:opacity-100 group-hover:scale-110"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-violet-50 rounded-full blur-3xl pointer-events-none transition-all duration-700 opacity-50 group-hover:opacity-100 group-hover:scale-110"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
                
                {/* Visual Representation */}
                <div className="flex flex-col items-center justify-center shrink-0 border-b pb-6 md:border-b-0 md:border-r border-slate-100 md:pr-10 w-full md:w-auto">
                    <div className="relative w-36 h-36 flex items-center justify-center mb-5">
                        {/* Outer Glow */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-100 to-violet-100 opacity-80 blur-xl animate-pulse"></div>
                        {/* Circular Rings */}
                        <div className="absolute inset-0 rounded-full border-[6px] border-slate-50 shadow-sm"></div>
                        <div className="absolute inset-2 rounded-full border-4 border-indigo-50/50"></div>
                        <div className="absolute inset-4 rounded-full border-2 border-indigo-200 border-dashed animate-[spin_20s_linear_infinite]"></div>
                        
                        {/* Core Shield */}
                        <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-600/30">
                            <ShieldCheck size={40} className="text-white drop-shadow-md" />
                        </div>
                    </div>
                    
                    <span className="text-xs uppercase tracking-[0.25em] text-slate-400 font-black mb-1">Tu Trust Index</span>
                    <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Confiable</h3>
                </div>

                {/* Details */}
                <div className="flex-1 w-full flex flex-col">
                    <div className="mb-6 text-center md:text-left">
                        <h2 className="text-xl font-black text-slate-900 mb-2 tracking-tight">Más allá del score tradicional.</h2>
                        <p className="text-sm text-slate-600 leading-relaxed font-medium md:max-w-md">
                            El Trust Index evalúa tu estabilidad operativa mes a mes, asegurando que tu comportamiento real valga más que cualquier deuda.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-100 flex items-center gap-4 hover:shadow-md hover:border-indigo-100 transition-all cursor-default">
                            <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                                <Clock size={18} className="text-indigo-600" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-black text-slate-400 tracking-wider">Consistencia</p>
                                <p className="text-sm font-bold text-slate-900">14 Meses Puntual</p>
                            </div>
                        </div>
                        
                        <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-100 flex items-center gap-4 hover:shadow-md hover:border-emerald-100 transition-all cursor-default">
                            <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                                <TrendingUp size={18} className="text-emerald-600" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-black text-slate-400 tracking-wider">Flujo de Caja</p>
                                <p className="text-sm font-bold text-slate-900">Alto & Estable</p>
                            </div>
                        </div>

                        <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-100 flex items-center gap-4 hover:shadow-md hover:border-amber-100 transition-all cursor-default">
                            <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                                <ShieldCheck size={18} className="text-amber-500" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-black text-slate-400 tracking-wider">Perfil Actual</p>
                                <p className="text-sm font-bold text-slate-900">Riesgo Mínimo</p>
                            </div>
                        </div>

                        <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-100 flex items-center gap-4 hover:shadow-md hover:border-blue-100 transition-all cursor-default">
                            <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                                <CheckCircle size={18} className="text-blue-600" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-black text-slate-400 tracking-wider">Disciplina de Uso</p>
                                <p className="text-sm font-bold text-slate-900">Óptima (28%)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Progress tracker */}
            <div className="relative mt-8 pt-8 border-t border-slate-100">
                <div className="flex justify-between text-xs font-black text-slate-400 uppercase tracking-wider mb-3">
                    <span className="text-slate-500">Emergente</span>
                    <span className="text-slate-500">Estable</span>
                    <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Confiable</span>
                    <span className="text-slate-400 opacity-60">Preferencial</span>
                    <span className="text-slate-400 opacity-60">Elite</span>
                </div>
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 w-[60%] rounded-full relative shadow-sm">
                        <div className="absolute right-0 top-0 bottom-0 w-8 bg-white/30 skew-x-12 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
