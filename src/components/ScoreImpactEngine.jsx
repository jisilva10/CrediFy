import React from 'react';
import { ChevronUp, ChevronDown, Activity, CheckCircle2, Award, BrainCircuit } from 'lucide-react';
import { Gauge } from './ui/gauge-1';

export const ScoreImpactEngine = ({ score }) => {
    return (
        <div className="card card-elevated relative overflow-hidden border-t-4 border-t-blue-500 w-full p-6 bg-gradient-to-br from-white to-blue-50/30">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                    <h2 className="text-xl font-bold flex items-center gap-2 text-slate-900">
                        <BrainCircuit className="text-blue-500" size={24} />
                        Impacto en tu futuro financiero
                    </h2>
                    <p className="text-sm text-secondary mt-1 font-medium">Proyección de cómo tus decisiones afectan tu acceso a crédito.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm relative">
                    <div className="absolute top-4 right-4">
                        <span className="badge badge-green flex items-center gap-1 font-bold">
                            <ChevronUp size={14} /> En Ascenso
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
                                1: "#94a3b8",
                                401: "#06b6d4",
                                601: "#10b981",
                                751: "#3b82f6", // Blue for Preferencial
                                901: "#8b5cf6"  // Violet for Elite
                            }}
                            tickMarks={true}
                            transition={{ length: 1500, delay: 300 }}
                        />
                        <p className="text-[11px] font-black text-slate-900 tracking-widest uppercase mt-1">Score Proyectado</p>
                    </div>

                    <div className="mt-2 text-center">
                        <p className="text-xs font-medium text-slate-500">Tendencia a 30 días</p>
                        <p className="text-sm text-blue-600 font-black mt-1">+42 Puntos Estimados</p>
                    </div>
                </div>

                <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
                    {/* Positive Projections */}
                    <div className="bg-white p-5 rounded-xl border border-emerald-100 shadow-sm relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
                        <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3 flex items-center gap-1"><ChevronUp size={16} /> Si mantienes tus hábitos...</p>
                        <ul className="text-sm space-y-3 text-slate-700 font-medium">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                <span><b className="text-slate-900">Tu score subirá a ~784</b> en 30 días si mantienes tu pago puntual de este mes.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                <span><b className="text-slate-900">Acceso a nivel Preferencial:</b> Pagar $50 más este mes te aseguraría calificar para el beneficio Black.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Optimization Opportunities */}
                    <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
                        <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-3 flex items-center gap-1"><Activity size={16} /> Áreas de mejora rápida</p>
                        <ul className="text-sm space-y-3 text-slate-700 font-medium">
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                                <span>Si reduces tu uso de línea de tu tarjeta Diners al 25% (pago de $125), <b className="text-amber-700">bajarías un nivel de riesgo de inmediato</b>.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                                <span>Tu probabilidad de atraso disminuye si mantienes tu puntualidad por <b className="text-slate-900">2 meses más seguidos</b>.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
