import React from 'react';
import { Target, Activity, Check, Clock, TrendingDown } from 'lucide-react';

export const PymeCreditTracking = () => {
    return (
        <div className="w-full bg-white rounded-3xl p-6 border border-slate-200 shadow-sm animate-fade-in relative overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                    <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                        <Target className="text-blue-500" size={24} />
                        Microcrédito Comercial
                    </h2>
                    <p className="text-sm font-medium text-slate-500 mt-1">Progreso y sostenibilidad de tu préstamo destinado a Capital de Trabajo.</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                    <span className="text-xs font-black uppercase text-slate-400 tracking-wider">Monto Solicitado</span>
                    <p className="text-2xl font-black text-slate-900">$15,000</p>
                </div>
            </div>

            {/* Core Progress Tracker */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 mb-6">
                <div className="flex justify-between items-end mb-2">
                    <div className="flex gap-2 items-center">
                        <span className="text-2xl font-black text-blue-600">43%</span>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Cubierto</span>
                    </div>
                    <div className="text-right">
                        <span className="text-sm font-bold text-slate-900">12</span> <span className="text-xs font-medium text-slate-500">cuotas pagadas</span>
                        <span className="mx-2 text-slate-300">|</span>
                        <span className="text-sm font-bold text-slate-900">16</span> <span className="text-xs font-medium text-slate-500">pendientes</span>
                    </div>
                </div>
                
                {/* Progress Bar */}
                <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-blue-500 rounded-full w-[43%] relative">
                        <div className="absolute top-0 bottom-0 right-0 w-2 bg-white/30 animate-pulse"></div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-200/50">
                    <div>
                        <span className="text-[10px] uppercase font-bold text-slate-500 block mb-0.5">Próxima Fecha</span>
                        <span className="text-sm font-black text-slate-900 flex items-center gap-1.5"><Clock size={14} className="text-slate-400" /> 15 Nov</span>
                    </div>
                    <div>
                        <span className="text-[10px] uppercase font-bold text-slate-500 block mb-0.5">Cuota Mensual</span>
                        <span className="text-sm font-black text-slate-900">$645.50</span>
                    </div>
                    <div className="md:col-span-2">
                        <span className="text-[10px] uppercase font-bold text-slate-500 block mb-0.5">Riesgo Calculado</span>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                            <span className="text-sm font-bold text-emerald-600">Bajo Incumplimiento</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Smart Tracking Insight */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex gap-4 items-start items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                    <Activity className="text-indigo-600" size={20} />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-slate-900">Sostenibilidad del Pago</h4>
                    <p className="text-xs font-medium text-indigo-900/80 mt-1">Si mantienes este ritmo de ingresos diarios ($120/día en promedio), tu capacidad de pago para la cuota de Noviembre es altamente sostenible.</p>
                </div>
            </div>
        </div>
    );
};
