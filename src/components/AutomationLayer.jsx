import React, { useState } from 'react';
import { Bot, CalendarClock, ShieldAlert, Sparkles, Check } from 'lucide-react';

export const AutomationLayer = () => {
    const [toggles, setToggles] = useState({
        reminders: true,
        alerts: false,
        autoReserve: false
    });

    const handleToggle = (key) => setToggles(p => ({ ...p, [key]: !p[key] }));

    return (
        <div className="w-full bg-white rounded-3xl p-6 border border-slate-200 shadow-sm mt-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center shrink-0">
                    <Bot className="text-violet-600" size={20} />
                </div>
                <div>
                    <h2 className="text-lg font-black text-slate-900 tracking-tight">Piloto Automático</h2>
                    <p className="text-sm font-medium text-slate-500">Evita recargos y mora con automatización inteligente.</p>
                </div>
            </div>

            <div className="space-y-4">
                {/* Option 1 */}
                <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                            <CalendarClock size={16} className="text-blue-600" />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-slate-900">Recordatorios Inteligentes</h4>
                            <p className="text-xs font-medium text-slate-500 mt-0.5 max-w-sm">Dime 3 días antes de mi fecha de pago, sugiriendo el monto óptimo.</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => handleToggle('reminders')}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${toggles.reminders ? 'bg-violet-600' : 'bg-slate-200'}`}
                    >
                        <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${toggles.reminders ? 'translate-x-5' : 'translate-x-0'}`} />
                    </button>
                </div>

                {/* Option 2 */}
                <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                            <ShieldAlert size={16} className="text-amber-600" />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-slate-900">Alertas de Uso Crítico</h4>
                            <p className="text-xs font-medium text-slate-500 mt-0.5 max-w-sm">Envíame una alerta push cuando mi uso de línea supere el 40%.</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => handleToggle('alerts')}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${toggles.alerts ? 'bg-violet-600' : 'bg-slate-200'}`}
                    >
                        <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${toggles.alerts ? 'translate-x-5' : 'translate-x-0'}`} />
                    </button>
                </div>

                {/* Option 3 - Upcoming / Beta */}
                <div className="flex items-center justify-between p-4 rounded-2xl border border-violet-100 bg-violet-50/30">
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-violet-200 flex items-center justify-center shrink-0 mt-0.5 relative">
                            <Sparkles size={16} className="text-violet-700" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-fuchsia-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-0.5">
                                <h4 className="text-sm font-bold text-slate-900">Reserva Automática</h4>
                                <span className="text-[9px] uppercase font-black tracking-wider bg-fuchsia-100 text-fuchsia-700 px-1.5 py-0.5 rounded shadow-sm">BETA</span>
                            </div>
                            <p className="text-xs font-medium text-slate-600 max-w-sm">Reserva automáticamente parte de mi liquidez entrante para mi próxima cuota.</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => handleToggle('autoReserve')}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${toggles.autoReserve ? 'bg-fuchsia-600' : 'bg-violet-200'}`}
                    >
                        <span className={`pointer-events-none flex items-center justify-center h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${toggles.autoReserve ? 'translate-x-5' : 'translate-x-0'}`}>
                           {toggles.autoReserve && <Check size={12} className="text-fuchsia-600" />}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};
