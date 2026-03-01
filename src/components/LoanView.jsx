import React, { useState } from 'react';
import { Home, MessageCircle, MapPin, Building2, ChevronDown, ChevronUp } from 'lucide-react';
import { JollyMeter } from '@/components/ui/meter';

export const LoanView = ({ name, type, principal, apr, monthlyFee, remainingMonths, progress, progressLabel }) => {
    const [showContact, setShowContact] = useState(false);

    return (
        <div className="card bg-white border-slate-200 w-full max-w-2xl mx-auto overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Home size={18} />
                </div>
                <div>
                    <h3 className="font-bold text-slate-900">{name}</h3>
                    <p className="text-xs text-slate-500">{type} • Tasa fija anual: {apr}%</p>
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Saldo que debes al banco</p>
                    <p className="text-2xl font-black text-slate-800">${principal.toLocaleString()}</p>
                </div>

                <div className="flex justify-between items-end border-t border-slate-100 pt-3">
                    <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Cuota cada mes</p>
                        <p className="text-lg font-bold text-slate-800">${monthlyFee.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Tiempo restante</p>
                        <p className="text-sm font-bold text-slate-800">{remainingMonths} meses</p>
                    </div>
                </div>

                {progress !== undefined && (
                    <div className="pt-2 pb-1">
                        <JollyMeter value={progress} label={progressLabel || "Progreso Pagado"} barClassName="bg-slate-100" fillClassName="bg-blue-500" />
                    </div>
                )}

                <button
                    onClick={() => setShowContact(!showContact)}
                    className="flex justify-center items-center gap-2 text-blue-600 text-[10px] uppercase tracking-wider font-black w-full text-center py-2 hover:bg-blue-50 rounded transition-colors bg-blue-50 border border-dashed border-blue-200 mt-2"
                >
                    <span>Quiero pagar un poco más hoy</span>
                    {showContact ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>

                {/* Inline Expansion Contact Card */}
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${showContact ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0 pointer-events-none'}`}>
                    <div className="text-sm text-slate-500 w-full divide-y divide-slate-200 border border-slate-200 rounded-xl bg-slate-50 shadow-sm">
                        <div className="flex items-start justify-between p-4 bg-white rounded-t-xl">
                            <div>
                                <div className="flex items-center space-x-2 mb-1">
                                    <h2 className="text-base font-bold text-slate-800">Banco Pichincha</h2>
                                    <p className="bg-emerald-100 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider text-emerald-700 border border-emerald-200">Cumbayá</p>
                                </div>
                                <p className="text-xs text-slate-500 font-medium">Sucursal Principal</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 border-2 border-slate-100 shadow-sm">
                                <Building2 size={20} />
                            </div>
                        </div>
                        <div className="flex items-center divide-x divide-slate-200 bg-slate-50 rounded-b-xl border-t border-slate-200">
                            <button type="button" className="flex flex-col items-center justify-center gap-1.5 w-1/2 py-3 hover:bg-slate-100 transition-colors text-slate-600 hover:text-blue-600 rounded-bl-xl font-bold text-xs">
                                <MessageCircle size={18} />
                                Envía un mensaje
                            </button>
                            <a
                                href="https://maps.google.com/?q=banco+pichincha+cumbaya"
                                target="_blank"
                                rel="noreferrer"
                                className="flex flex-col items-center justify-center gap-1.5 w-1/2 py-3 hover:bg-slate-100 transition-colors text-slate-600 hover:text-emerald-600 rounded-br-xl font-bold text-xs"
                            >
                                <MapPin size={18} />
                                Visita tu banco
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
