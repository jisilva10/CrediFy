import React from 'react';
import { AlertTriangle, AlertCircle, BellRing, Target, ArrowRight } from 'lucide-react';

export const RiskAlertSystem = () => {
    return (
        <div className="w-full flex flex-col gap-4 animate-fade-in mb-6">
            <div className="flex items-center gap-2 mb-1 px-1">
                <BellRing className="text-rose-500" size={20} />
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">Señales Tempranas</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Risk Alert: Utilization */}
                <div className="bg-white rounded-2xl p-5 border border-rose-200 shadow-sm flex flex-col sm:flex-row gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center shrink-0 border border-rose-100">
                        <AlertTriangle className="text-rose-500" size={20} />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-sm font-bold text-slate-900 mb-1">Riesgo por uso de crédito</h3>
                        <p className="text-sm text-slate-600 font-medium mb-3">
                            Tu uso de línea está subiendo rápidamente. Si llegas al 65% de utilización, tu perfil podría deteriorarse.
                        </p>
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Acción Recomendada</span>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-bold text-slate-800">Haz un pago parcial de <span className="text-rose-600">$45</span> hoy.</span>
                                <button className="text-xs bg-slate-900 text-white font-bold px-3 py-1.5 rounded-lg hover:bg-slate-800 transition-colors">Pagar Ahora</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Risk Alert: Close Payment */}
                <div className="bg-white rounded-2xl p-5 border border-amber-200 shadow-sm flex flex-col sm:flex-row gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0 border border-amber-100">
                        <AlertCircle className="text-amber-500" size={20} />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-sm font-bold text-slate-900 mb-1">Cercanía de pago en 3 días</h3>
                        <p className="text-sm text-slate-600 font-medium mb-3">
                            Tu fecha de pago en Banco Pichincha está cerca y aún no detectamos el monto necesario separado en tu cuenta base.
                        </p>
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Acción Recomendada</span>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                                    <Target size={14} className="text-amber-600" />
                                    Revisa tu presupuesto
                                </span>
                                <button className="text-xs bg-white text-slate-700 border border-slate-200 font-bold px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1">Ver Detalle <ArrowRight size={12} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
