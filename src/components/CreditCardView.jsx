import React, { useState } from 'react';
import { CreditCard, Info, Target, ShoppingCart, Coffee, Car, Plane, Smartphone, Film, Utensils } from 'lucide-react';
import { FinancialDashboard } from './ui/financial-dashboard';

// --- FAKE LOGO ICON ---
const LogoIcon = ({ letter, className }) => (
    <div className={`w-9 h-9 flex items-center justify-center rounded-xl font-black text-white text-sm shadow-sm ${className}`}>
        {letter}
    </div>
);

// --- FAKE DATA GENERATOR ---
const getRecentActivity = (name) => {
    if (name.includes('Diners')) {
        return [
            { icon: <LogoIcon letter="N" className="bg-red-600" />, title: 'Netflix Premium', time: 'Ayer, 14:30', amount: -15.99 },
            { icon: <Plane className="text-blue-600" />, title: 'Avianca Tickets', time: 'Hace 3 días', amount: -450.00 },
            { icon: <Utensils className="text-orange-600" />, title: 'Restaurante El Cielo', time: 'Hace 5 días', amount: -120.50 },
            { icon: <LogoIcon letter="A" className="bg-slate-900" />, title: 'Apple Store', time: 'Hace 1 semana', amount: -999.00 },
        ];
    } else {
        return [
            { icon: <Coffee className="text-amber-700" />, title: 'Starbucks', time: 'Hoy, 08:15', amount: -4.50 },
            { icon: <ShoppingCart className="text-emerald-600" />, title: 'Supermaxi', time: 'Ayer, 18:45', amount: -145.20 },
            { icon: <Car className="text-slate-700" />, title: 'Uber Trip', time: 'Hace 2 días', amount: -12.40 },
            { icon: <LogoIcon letter="S" className="bg-green-500" />, title: 'Spotify Familiar', time: 'Hace 4 días', amount: -5.99 },
        ];
    }
};

export const CreditCardView = ({ name, brand, last4, balance, quota, cutDate, payDate, minPay, apr, hasMora }) => {
    const [expanded, setExpanded] = useState(false);
    const [extraPayment, setExtraPayment] = useState(0);

    const utilization = Math.round((balance / quota) * 100);
    const totalPayment = minPay + extraPayment;

    // Fake calculations for the simulator
    const interestWithoutExtra = Math.floor(balance * (apr / 100 / 12));
    const interestSaved = Math.floor(extraPayment * (apr / 100 / 12) * 2.5); // Accelerated savings
    const monthsReduced = Math.floor(extraPayment / 50);
    const scoreBoost = Math.floor(extraPayment / 100) * 2;

    return (
        <div className="card bg-white hover:border-blue-300 transition-colors duration-300 mb-4 overflow-hidden p-0 w-full max-w-4xl mx-auto">
            {hasMora && <div className="bg-red-50 text-red-600 text-xs font-bold px-4 py-2 border-b border-red-100 flex items-center gap-2"><Info size={14} /> Tienes un pago pendiente. Paga hoy y evita cargos extra.</div>}

            <div className="p-5 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-4" onClick={() => setExpanded(!expanded)}>
                <div className="flex items-center gap-4 w-full md:w-1/3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${brand === 'Visa' ? 'bg-blue-50 border-blue-100 text-blue-600' : 'bg-slate-50 border-slate-200 text-slate-800'}`}>
                        <CreditCard size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900">{name}</h3>
                        <p className="text-xs text-slate-500">{brand} •••• {last4}</p>
                        <div className="mt-2 text-xs">
                            <span className={`font-bold px-2 py-0.5 rounded ${utilization > 70 ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>
                                Uso: {utilization}% del límite
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mt-4 md:mt-0">
                    <div>
                        <p className="text-slate-500 text-[10px] uppercase font-bold mb-0.5">Deuda Actual</p>
                        <p className="font-bold text-slate-800">${balance.toLocaleString()}</p>
                    </div>
                    <div>
                        <p className="text-slate-500 text-[10px] uppercase font-bold mb-0.5">Mínimo sugerido</p>
                        <p className="font-bold text-blue-600">${minPay.toLocaleString()}</p>
                    </div>
                    <div>
                        <p className="text-slate-500 text-[10px] uppercase font-bold mb-0.5">Próximo Pago</p>
                        <p className="font-bold text-slate-700">{payDate}</p>
                    </div>
                    <div className="flex justify-start md:justify-end items-center mt-2 md:mt-0">
                        <button className="text-blue-600 font-bold text-xs flex items-center gap-1 py-1.5 px-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                            {expanded ? 'X Cerrar' : 'Mejora mi pago'}
                        </button>
                    </div>
                </div>
            </div>

            {/* EXPANDED INTERACTIVE SIMULATOR */}
            {expanded && (
                <div className="bg-slate-50 p-6 border-t border-slate-200 animate-fade-in">
                    <div className="flex flex-col lg:flex-row gap-8">

                        <div className="flex-1">
                            <h4 className="font-bold text-slate-800 mb-1 flex items-center gap-2"><Target size={16} className="text-blue-500" /> Calcula tu ahorro mensual</h4>
                            <p className="text-xs text-slate-500 mb-6">Mueve el control para ver cuánto dinero y tiempo ahorras. (Interés: {apr}% anual)</p>

                            <div className="mb-6">
                                <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                                    <span>Solo el mínimo</span>
                                    <span>Pagar todo</span>
                                </div>
                                <input
                                    type="range"
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-slider"
                                    min="0"
                                    max={balance - minPay}
                                    step="50"
                                    value={extraPayment}
                                    onChange={(e) => setExtraPayment(parseInt(e.target.value))}
                                />
                                <div className="text-center mt-3">
                                    <span className="text-lg font-black text-slate-800">
                                        Pago total a realizar: ${(minPay + extraPayment).toLocaleString()}
                                    </span>
                                    <p className="text-xs text-emerald-700 font-bold mt-1">Estás abonando ${extraPayment.toLocaleString()} extra a tu deuda</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                            <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-4 border-b border-slate-100 pb-2">Tu resultado por pagar extra</h5>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-[10px] text-slate-500 font-semibold uppercase">Intereses que no regalas</p>
                                    <p className="text-xl font-black text-emerald-700">+ ${interestSaved.toLocaleString()}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 font-semibold uppercase">Tiempo que ganas</p>
                                    <p className="text-xl font-black text-blue-600">-{monthsReduced} meses</p>
                                </div>
                                <div className="col-span-2 bg-emerald-50 p-3 rounded-lg flex justify-between items-center border border-emerald-100 mt-2">
                                    <div>
                                        <p className="text-xs font-bold text-emerald-800">Subida proyectada de Score</p>
                                        <p className="text-[10px] text-emerald-700">Al pagar de forma inteligente</p>
                                    </div>
                                    <span className="badge badge-green font-bold text-sm">+{scoreBoost} Puntos</span>
                                </div>
                            </div>

                            <button className="btn btn-primary w-full mt-4 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">Programar mi ahorro de ${totalPayment}</button>
                        </div>

                    </div>

                    <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-3 text-sm flex gap-3 text-blue-900 font-medium">
                        <div className="text-blue-600">Tip:</div>
                        <div>
                            <span className="font-bold">Consejo de tu Personal Coach:</span> Reduciendo un 10% tus gastos en "Deliveries" podrías usar esos $120 para pagar esta tarjeta 6 meses antes y ahorrar $145 en intereses.
                        </div>
                    </div>

                    {/* NEW: FINANCIAL DASHBOARD FOR RECENT ACTIVITY */}
                    <div className="mt-8 border-t border-slate-200 pt-8 animate-fade-in">
                        <FinancialDashboard recentActivity={getRecentActivity(name)} />
                    </div>
                </div>
            )}
        </div>
    );
};
