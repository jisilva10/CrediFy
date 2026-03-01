import React from 'react';
import { ChevronUp, ChevronDown, Activity, CheckCircle2, Award, BrainCircuit } from 'lucide-react';
import { Gauge } from './ui/gauge-1';

export const ScoreImpactEngine = ({ score }) => {
    return (
        <div className="card card-elevated relative overflow-hidden border-t-4 border-t-emerald-500 w-full p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                    <h2 className="text-xl font-bold flex items-center gap-2 text-slate-900">
                        <BrainCircuit className="text-emerald-500" size={24} />
                        Tu Bienestar Financiero
                    </h2>
                    <p className="text-sm text-secondary mt-1">Basado en cómo manejas tu dinero hoy.</p>
                </div>
                <div className="text-right">
                    <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">Nivel Actual</p>
                    <span className="badge font-bold bg-emerald-100/50 text-emerald-700 border border-emerald-200 shadow-sm px-4 py-1 text-sm"><Award size={14} className="mr-1" /> Nivel Sólido</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm relative">
                    <div className="absolute top-4 right-4">
                        <span className="badge badge-green flex items-center gap-1 font-bold">
                            <ChevronUp size={14} /> Subiste 12 puntos
                        </span>
                    </div>

                    <div className="my-2 mt-6 flex flex-col items-center">
                        <Gauge
                            value={score}
                            min={1}
                            max={999}
                            size={160}
                            gradient={true}
                            primary={{
                                1: "#94a3b8",   // Slate - En Reconstrucción
                                401: "#06b6d4", // Cyan - Emergente
                                601: "#10b981", // Emerald - Sólido
                                751: "#8b5cf6", // Violet - Preferencial
                                901: "#f59e0b"  // Amber - Elite
                            }}
                            tickMarks={true}
                            transition={{ length: 1500, delay: 300 }}
                        />
                        <p className="text-[11px] font-black text-slate-900 tracking-widest uppercase mt-1">Score Crediticio</p>
                    </div>

                    <div className="mt-2 text-center">
                        <p className="text-xs font-medium text-slate-500">Próxima meta: <b className="text-slate-800">Nivel Preferencial (751)</b></p>
                        <p className="text-[10px] text-emerald-700 font-bold mt-1">Te faltan {751 - score} puntos para el siguiente nivel.</p>
                    </div>
                </div>

                <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <p className="text-xs font-bold uppercase tracking-wider text-green-700 mb-3 flex items-center gap-1"><ChevronUp size={14} /> Buenos Hábitos</p>
                        <ul className="text-sm space-y-2 text-slate-600 font-medium">
                            <li className="flex justify-between items-center"><span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-green-500" /> Pagar todo el mes</span> <span className="font-bold text-green-700">+15</span></li>
                            <li className="flex justify-between items-center"><span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-green-500" /> Uso moderado (&lt;50%)</span> <span className="font-bold text-green-700">+8</span></li>
                            <li className="flex justify-between items-center"><span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-green-500" /> Pagar antes de fecha</span> <span className="font-bold text-green-700">+5</span></li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-3 flex items-center gap-1"><ChevronDown size={14} /> Alertas</p>
                        <ul className="text-sm space-y-2 text-slate-600 font-medium">
                            <li className="flex justify-between items-center"><span className="flex items-center gap-1.5"><Activity size={12} className="text-red-400" /> Pagos atrasados</span> <span className="font-bold text-red-600">-25</span></li>
                            <li className="flex justify-between items-center"><span className="flex items-center gap-1.5"><Activity size={12} className="text-orange-600" /> Deuda muy alta</span> <span className="font-bold text-orange-600">-10</span></li>
                            <li className="flex justify-between items-center"><span className="flex items-center gap-1.5"><Activity size={12} className="text-orange-600" /> Solo pago mínimo</span> <span className="font-bold text-orange-600">-5</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
