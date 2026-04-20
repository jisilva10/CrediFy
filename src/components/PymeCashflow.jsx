import React from 'react';
import { Wallet, ArrowDownRight, ArrowUpRight, AlertCircle, LineChart } from 'lucide-react';

export const PymeCashflow = () => {
    return (
        <div className="w-full bg-white rounded-3xl p-6 border border-slate-200 shadow-sm animate-fade-in relative mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                    <h2 className="text-xl font-bold flex items-center gap-2 text-slate-900 tracking-tight">
                        <LineChart className="text-indigo-500" size={24} />
                        Flujo de Caja y Utilidad
                    </h2>
                    <p className="text-sm font-medium text-slate-500 mt-1">
                        Visibilidad en tiempo real de si tus ganancias reales cubren cómodamente tu crédito.
                    </p>
                </div>
            </div>

            {/* Budget grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5 mb-1">
                        <ArrowUpRight size={12} className="text-emerald-500" /> Ingresos este mes
                    </span>
                    <span className="text-2xl font-black text-slate-900">$8,450.00</span>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5 mb-1">
                        <ArrowDownRight size={12} className="text-rose-500" /> Gastos y Fijos
                    </span>
                    <span className="text-2xl font-black text-slate-900">$6,210.00</span>
                </div>
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-4">
                        <Wallet size={80} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 flex items-center gap-1.5 mb-1">
                        Utilidad Proyectada
                    </span>
                    <span className="text-2xl font-black text-emerald-600">$2,240.00</span>
                </div>
            </div>

            {/* Smart Analysis Alert */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 items-start">
                <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                <div className="flex-1">
                    <h4 className="text-sm font-bold text-amber-900 mb-1">Análisis de Capacidad de Pago</h4>
                    <p className="text-xs font-medium text-amber-800 leading-relaxed mb-2">
                        Tus gastos crecieron más que tus ingresos esta quincena. Aunque tu utilidad actual de $2,240 cubre la cuota del préstamo ($645.50), operativamente te deja un <strong>margen de seguridad muy ajustado</strong>.
                    </p>
                    <p className="text-[11px] font-bold text-amber-900 uppercase tracking-wider">💡 Insight inteligente: Reduce el gasto operativo variable en la próxima semana para liberar caja.</p>
                </div>
            </div>
        </div>
    );
};
