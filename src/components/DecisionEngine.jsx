import React from 'react';
import { Lightbulb, ArrowUpRight, Zap, Target } from 'lucide-react';

export const DecisionEngine = () => {
    return (
        <div className="w-full bg-indigo-50/50 border border-indigo-100 rounded-2xl p-6 shadow-sm mb-6 animate-fade-in relative overflow-hidden">
            <div className="absolute -right-10 -top-10 text-indigo-500/10 pointer-events-none">
                <Lightbulb size={120} />
            </div>
            
            <div className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-indigo-100 flex items-center justify-center shrink-0">
                    <Zap className="text-indigo-600 fill-indigo-100" size={24} />
                </div>
                <div className="flex-1">
                    <h2 className="text-lg font-black text-indigo-950 mb-1 tracking-tight">Tu mejor siguiente decisión</h2>
                    <p className="text-sm font-medium text-indigo-800/80 mb-4">Nuestra IA analizó tus saldos y fechas. Esto es lo que más te conviene hacer hoy.</p>
                    
                    <div className="flex flex-col gap-3">
                        {/* Primary Recommendation */}
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-indigo-100 flex items-center justify-between group hover:border-indigo-300 transition-colors cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                                    <Target size={16} className="text-indigo-600" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900">Paga $30 extra en tu Tarjeta Visa</h4>
                                    <p className="text-xs font-medium text-slate-500 mt-0.5">Te ayudará a mantener tu score estable y ahorrarás $15 en intereses.</p>
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                                <ArrowUpRight size={16} />
                            </div>
                        </div>

                        {/* Secondary Recommendation */}
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-indigo-100 flex items-center justify-between group hover:border-indigo-300 transition-colors cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                                    <Target size={16} className="text-amber-500" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900">Limita tu gasto a $80 esta semana</h4>
                                    <p className="text-xs font-medium text-slate-500 mt-0.5">Para conservar tu nivel actual (<span className="font-bold text-amber-600">65% de uso alcanzado</span>).</p>
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                                <ArrowUpRight size={16} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
