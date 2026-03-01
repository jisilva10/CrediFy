import React, { useState } from 'react';
import { Gift, Coffee, Car, Ticket, Target, Flame, CheckCircle2, Star, Zap, QrCode, X } from 'lucide-react';

export const CrediPointsDashboard = () => {
    const [balance, setBalance] = useState(145);
    const [selectedReward, setSelectedReward] = useState(null);

    const earningHabits = [
        {
            title: "Paga tu tarjeta a tiempo",
            description: "No te atrases en la fecha de pago de tu Visa este mes.",
            points: "+15 pts",
            icon: <CheckCircle2 size={24} className="text-emerald-500" />,
            status: "Pendiente"
        },
        {
            title: "Desbloquea Nivel Preferencial",
            description: "Sube tu score a 751 para llevarte un bono masivo.",
            points: "+100 pts",
            icon: <Target size={24} className="text-blue-500" />,
            status: "En progreso"
        },
        {
            title: "Racha de bajo endeudamiento",
            description: "Mantén tu uso de crédito por debajo del 30% por 3 meses.",
            points: "+50 pts",
            icon: <Flame size={24} className="text-orange-500" />,
            status: "¡2 meses listos!"
        }
    ];

    const rewards = [
        {
            partner: "Juan Valdez",
            item: "Café Tinto Mediano",
            cost: 10,
            icon: <Coffee size={32} className="text-amber-700" />,
            bg: "bg-amber-50"
        },
        {
            partner: "Uber",
            item: "Cupón de $10.000",
            cost: 30,
            icon: <Car size={32} className="text-slate-900" />,
            bg: "bg-slate-100"
        },
        {
            partner: "Cine Colombia",
            item: "Entrada 2D General",
            cost: 25,
            icon: <Ticket size={32} className="text-indigo-600" />,
            bg: "bg-indigo-50"
        },
        {
            partner: "Spotify",
            item: "1 Mes Premium",
            cost: 45,
            icon: <Zap size={32} className="text-green-600" />,
            bg: "bg-green-50"
        }
    ];

    const handleRedeem = (reward) => {
        if (balance >= reward.cost) {
            setSelectedReward(reward);
        }
    };

    const confirmRedeem = () => {
        if (selectedReward && balance >= selectedReward.cost) {
            setBalance(prev => prev - selectedReward.cost);
            setSelectedReward(null);
            // In a real app we would show a success toast here
        }
    };

    return (
        <div className="w-full space-y-8 relative">
            {/* Header: Balance */}
            <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl p-6 md:p-8 text-white shadow-xl shadow-violet-500/20 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="absolute -right-8 -top-8 opacity-10 pointer-events-none transform rotate-12">
                    <Star size={200} fill="currentColor" />
                </div>

                <div className="z-10 text-center md:text-left">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase border border-white/30 backdrop-blur-sm shadow-sm mb-4 inline-block">Programa de Lealtad</span>
                    <h2 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">Tus CrediPoints</h2>
                    <p className="text-violet-100 font-medium text-sm max-w-sm">
                        Construir un gran futuro financiero nunca fue tan divertido. Canjea tus puntos por recompensas increíbles hoy mismo.
                    </p>
                </div>

                <div className="bg-white text-slate-900 rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center min-w-[180px] z-10 border border-violet-100 transform hover:scale-105 transition-transform cursor-pointer">
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Disponible</span>
                    <div className="flex items-center gap-2">
                        <Gift className="text-fuchsia-500" size={28} />
                        <span className="text-5xl font-black bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">{balance}</span>
                    </div>
                    <span className="text-xs font-bold text-violet-600 mt-2 bg-violet-50 px-2 py-0.5 rounded-lg border border-violet-100">+25 pts este mes</span>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Left Column: How to Earn */}
                <div>
                    <h3 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-2">
                        <Target className="text-blue-500" size={20} />
                        Hábitos que Premian
                    </h3>
                    <div className="space-y-4">
                        {earningHabits.map((habit, idx) => (
                            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:border-blue-300 hover:shadow-md transition-all">
                                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                                    {habit.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="font-bold text-slate-900 leading-tight">{habit.title}</h4>
                                        <span className="bg-emerald-100 text-emerald-700 font-black text-xs px-2 py-0.5 rounded-lg whitespace-nowrap ml-2 shadow-sm border border-emerald-200">{habit.points}</span>
                                    </div>
                                    <p className="text-xs text-slate-500 font-medium mb-3">{habit.description}</p>
                                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block ${habit.status.includes('listos') ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-600'}`}>
                                        Status: {habit.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Marketplace */}
                <div>
                    <h3 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-2">
                        <Gift className="text-fuchsia-500" size={20} />
                        Micro-Partners
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {rewards.map((reward, idx) => (
                            <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all group">
                                <div className={`${reward.bg} h-24 flex items-center justify-center relative overflow-hidden`}>
                                    <div className="absolute inset-0 opacity-20 bg-gradient-to-t from-black/10 to-transparent"></div>
                                    {reward.icon}
                                </div>
                                <div className="p-4 flex flex-col flex-1">
                                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-1">{reward.partner}</span>
                                    <h4 className="font-black text-slate-900 text-sm leading-tight flex-1 mb-4">{reward.item}</h4>

                                    <button
                                        onClick={() => handleRedeem(reward)}
                                        disabled={balance < reward.cost}
                                        className={`w-full py-2.5 rounded-xl font-black text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-2
                                            ${balance >= reward.cost
                                                ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-md focus:ring-slate-900'
                                                : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'}`}
                                    >
                                        {balance >= reward.cost ? 'Canjear por' : 'Te faltan'} {reward.cost} pts
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* QR Redemption Modal Overlay */}
            {selectedReward && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl relative animate-scale-in flex flex-col">
                        {/* Header Image/Color Area */}
                        <div className={`${selectedReward.bg} h-32 flex items-center justify-center relative shrink-0`}>
                            <button
                                onClick={() => setSelectedReward(null)}
                                className="absolute top-4 right-4 bg-white/50 hover:bg-white text-slate-900 rounded-full p-2 transition-colors z-10 shadow-sm"
                            >
                                <X size={20} />
                            </button>
                            <div className="transform scale-150 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                {selectedReward.icon}
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 md:p-8 flex flex-col items-center text-center">
                            <span className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-2">Canjeando Beneficio</span>
                            <h3 className="text-xl font-black text-slate-900 mb-1">{selectedReward.item}</h3>
                            <p className="text-slate-500 font-medium text-sm mb-6">en {selectedReward.partner}</p>

                            {/* QR Mockup */}
                            <div className="w-48 h-48 bg-slate-50 rounded-2xl border-2 border-slate-200 border-dashed flex items-center justify-center relative mb-6">
                                <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-slate-900 rounded-tl-xl m-2"></div>
                                <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-slate-900 rounded-tr-xl m-2"></div>
                                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-slate-900 rounded-bl-xl m-2"></div>
                                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-slate-900 rounded-br-xl m-2"></div>

                                <div className="flex flex-col items-center text-slate-800 animate-pulse">
                                    <QrCode size={90} strokeWidth={1.5} className="mb-1" />
                                </div>
                            </div>

                            <p className="text-xs text-slate-600 font-bold bg-slate-100 p-3 rounded-xl mb-6 w-full border border-slate-200">
                                📱 Escanea esto en la caja de la tienda para hacer válido tu beneficio.
                            </p>

                            {/* Action Buttons */}
                            <div className="w-full space-y-2">
                                <button
                                    onClick={confirmRedeem}
                                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black py-3.5 rounded-xl shadow-lg shadow-slate-900/20 transition-all flex items-center justify-center gap-2"
                                >
                                    <CheckCircle2 size={18} />
                                    Terminar y descontar {selectedReward.cost} pts
                                </button>
                                <button
                                    onClick={() => setSelectedReward(null)}
                                    className="w-full bg-white hover:bg-slate-50 text-slate-500 font-bold py-3 rounded-xl transition-all"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
