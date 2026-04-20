import React from 'react';
import { Receipt, AlertTriangle, ArrowRight, ShieldAlert, UploadCloud } from 'lucide-react';

export const PymeInvoices = () => {
    const invoices = [
        { supplier: "Distribuidora del Pacífico", due: "Hoy", amount: 450, urgent: true },
        { supplier: "Importadora Global", due: "En 3 días", amount: 1200, urgent: true },
        { supplier: "Servicios Generales S.A.", due: "En 8 días", amount: 320, urgent: false },
    ];

    return (
        <div className="w-full bg-white rounded-3xl p-6 border border-slate-200 shadow-sm animate-fade-in relative mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                    <h2 className="text-xl font-bold flex items-center gap-2 text-slate-900 tracking-tight">
                        <Receipt className="text-violet-500" size={24} />
                        Facturas y Proveedores
                    </h2>
                    <p className="text-sm font-medium text-slate-500 mt-1">Controla tus obligaciones para evitar efectos en cadena.</p>
                </div>
                <div className="flex gap-2 items-center">
                    <span className="bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-rose-200 flex items-center gap-1">
                        <AlertTriangle size={14} /> 2 Riesgos de atraso
                    </span>
                </div>
            </div>

            {/* Upload Area */}
            <div className="w-full mb-6 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50 hover:bg-violet-50/50 hover:border-violet-300 transition-colors flex flex-col items-center justify-center p-6 cursor-pointer group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 group-hover:text-violet-600 shadow-sm border border-slate-100 mb-3 transition-colors">
                    <UploadCloud size={24} />
                </div>
                <p className="text-sm font-bold text-slate-900 mb-1">Cargar nueva factura</p>
                <p className="text-xs text-slate-500 font-medium text-center">Arrastra tu XML o PDF aquí, o haz clic para examinar</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-5">
                <div className="grid grid-cols-12 gap-4 p-4 text-[10px] font-black uppercase tracking-wider text-slate-500 border-b border-slate-100 bg-slate-50">
                    <div className="col-span-6 md:col-span-5">Proveedor</div>
                    <div className="col-span-3 text-right">Monto</div>
                    <div className="col-span-3 md:col-span-4 text-right md:text-left pl-0 md:pl-4">Vencimiento</div>
                </div>

                <div className="divide-y divide-slate-100">
                    {invoices.map((inv, idx) => (
                        <div key={idx} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-slate-50 transition-colors">
                            <div className="col-span-6 md:col-span-5 flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${inv.urgent ? 'bg-rose-100 text-rose-500' : 'bg-slate-100 text-slate-500'}`}>
                                    <Receipt size={14} />
                                </div>
                                <span className="text-sm font-bold text-slate-900 truncate">{inv.supplier}</span>
                            </div>
                            <div className="col-span-3 text-right font-black text-slate-900">
                                ${inv.amount.toFixed(2)}
                            </div>
                            <div className="col-span-3 md:col-span-4 text-right md:text-left pl-0 md:pl-4 flex items-center md:gap-3 flex-col md:flex-row">
                                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${inv.urgent ? 'bg-rose-100 text-rose-700 border border-rose-200' : 'text-slate-600 bg-slate-100 border border-slate-200'}`}>
                                    {inv.due}
                                </span>
                                {inv.urgent && (
                                    <button className="hidden md:inline-flex text-[10px] font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 px-3 py-1.5 rounded-lg transition-colors items-center gap-1">
                                        Pagar <ArrowRight size={12} />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 flex gap-4 items-start items-center">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center shrink-0 border border-rose-200">
                    <ShieldAlert className="text-rose-600" size={20} />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-slate-900">Priorización Inteligente</h4>
                    <p className="text-xs font-medium text-rose-900/80 mt-1">Si no tienes saldo completo hoy, te sugerimos <strong>pagar solo a Distribuidora del Pacífico</strong> ($450) para no cortar tu cadena de abastecimiento principal y asegurar ventas de mañana.</p>
                </div>
            </div>
        </div>
    );
};
