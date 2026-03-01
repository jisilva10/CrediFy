import React, { useState, useEffect } from 'react';
import { Activity, Clock, PieChart, CreditCard, FileSearch, TrendingUp } from 'lucide-react';

export const ScoreSimulator = () => {
    const [paymentHistory, setPaymentHistory] = useState(95);
    const [utilization, setUtilization] = useState(30);
    const [creditAge, setCreditAge] = useState(6);
    const [creditTypes, setCreditTypes] = useState(2);
    const [inquiries, setInquiries] = useState(1);

    // Animate score changes
    const [displayScore, setDisplayScore] = useState(0);
    const [targetScore, setTargetScore] = useState(720);

    // Initial animation trigger
    useEffect(() => {
        setDisplayScore(300); // Start animation from 300 on mount
    }, []);

    useEffect(() => {
        const base = 300;
        const p1 = (paymentHistory / 100) * 192.5;
        let p2 = 0;
        // make utilization penalize more if high
        if (utilization <= 10) p2 = 165;
        else if (utilization <= 30) p2 = 165 - ((utilization - 10) / 20) * 25; // 140 to 165
        else p2 = 140 - ((utilization - 30) / 70) * 140;

        const p3 = Math.min(creditAge / 15, 1) * 82.5;
        const p4 = (creditTypes / 5) * 55;
        const p5 = Math.max(0, 55 - (inquiries / 5) * 55);

        const total = Math.min(850, Math.max(300, Math.round(base + p1 + p2 + p3 + p4 + p5)));
        setTargetScore(total);
    }, [paymentHistory, utilization, creditAge, creditTypes, inquiries]);

    useEffect(() => {
        let start = displayScore;
        const end = targetScore;
        if (start === end) return;
        if (start === 0) start = 300;

        const duration = 500;
        const startTime = performance.now();

        const animate = (time) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + (end - start) * easeProgress);

            setDisplayScore(current);
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [targetScore]);

    const getScoreColor = (s) => {
        if (s < 580) return "text-slate-600";
        if (s < 670) return "text-cyan-500";
        if (s < 740) return "text-emerald-500";
        if (s < 800) return "text-violet-500";
        return "text-amber-500";
    };

    const getBgColor = (s) => {
        if (s < 580) return "bg-slate-50 border-slate-200";
        if (s < 670) return "bg-cyan-50 border-cyan-200";
        if (s < 740) return "bg-emerald-50 border-emerald-200";
        if (s < 800) return "bg-violet-50 border-violet-200";
        return "bg-amber-50 border-amber-200";
    };

    const getScoreName = (s) => {
        if (s < 580) return "En Reconstrucción";
        if (s < 670) return "Emergente";
        if (s < 740) return "Sólido";
        if (s < 800) return "Preferencial";
        return "Elite";
    };

    return (
        <div className="w-full mt-8 bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden flex flex-col md:flex-row">
            {/* Left side: Score display */}
            <div className={`p-8 md:w-2/5 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r transition-colors duration-700 ease-in-out ${getBgColor(displayScore)}`}>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                    <TrendingUp className={getScoreColor(displayScore)} size={32} />
                </div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Puntaje Simulado</h3>
                <div className="h-[90px] flex items-center justify-center">
                    <span className={`text-8xl font-black tracking-tighter ${getScoreColor(displayScore)} transition-colors duration-700 ease-in-out`}>
                        {displayScore || 300}
                    </span>
                </div>
                <span className={`mt-6 px-5 py-2 rounded-full text-sm font-bold bg-white shadow-sm border ${getScoreColor(displayScore)} transition-colors duration-700 ease-in-out`}>
                    Nivel {getScoreName(displayScore)}
                </span>
                <p className="text-xs text-center text-slate-500 mt-6 font-medium leading-relaxed max-w-[220px]">
                    Mueve las variables de la derecha para descubrir cómo impactan tu score en tiempo real.
                </p>
            </div>

            {/* Right side: Sliders */}
            <div className="p-6 md:p-8 md:w-3/5 flex flex-col space-y-7 bg-white">
                <div>
                    <h2 className="text-2xl font-black flex items-center gap-2 text-slate-900 mb-1 tracking-tight">
                        <Activity className="text-blue-500" size={24} />
                        Simulador Inteligente
                    </h2>
                    <p className="text-sm text-slate-500 font-bold mb-6">Ajusta tus hábitos financieros para ver los resultados.</p>
                </div>

                {/* Slider 1 */}
                <div className="space-y-3">
                    <div className="flex justify-between items-end">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            <Clock size={16} className="text-blue-500" />
                            Historial de Pagos (35%)
                        </label>
                        <span className="text-sm font-black text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">{paymentHistory}% a tiempo</span>
                    </div>
                    <div className="relative pt-1">
                        <input
                            type="range" min="0" max="100" value={paymentHistory}
                            onChange={(e) => setPaymentHistory(Number(e.target.value))}
                            className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 transition-all hover:h-3.5 outline-none"
                        />
                    </div>
                </div>

                {/* Slider 2 */}
                <div className="space-y-3">
                    <div className="flex justify-between items-end">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            <PieChart size={16} className="text-emerald-500" />
                            Uso de Línea de Crédito (30%)
                        </label>
                        <span className="text-sm font-black text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">{utilization}% usado</span>
                    </div>
                    <div className="relative pt-1">
                        <input
                            type="range" min="0" max="100" value={utilization}
                            onChange={(e) => setUtilization(Number(e.target.value))}
                            className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500 transition-all hover:h-3.5 outline-none"
                        />
                    </div>
                </div>

                {/* Grid for smaller sliders */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7 pt-2 border-t border-slate-100">
                    {/* Slider 3 */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-end">
                            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                                <FileSearch size={14} className="text-purple-500" />
                                Antigüedad (15%)
                            </label>
                            <span className="text-xs font-black text-slate-900">{creditAge} años</span>
                        </div>
                        <input
                            type="range" min="0" max="20" value={creditAge}
                            onChange={(e) => setCreditAge(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-500 hover:h-3 transition-all outline-none"
                        />
                    </div>

                    {/* Slider 4 */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-end">
                            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                                <CreditCard size={14} className="text-orange-500" />
                                Mix de Crédito (10%)
                            </label>
                            <span className="text-xs font-black text-slate-900">{creditTypes} tipos</span>
                        </div>
                        <input
                            type="range" min="1" max="5" value={creditTypes}
                            onChange={(e) => setCreditTypes(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500 hover:h-3 transition-all outline-none"
                        />
                    </div>

                    {/* Slider 5 */}
                    <div className="space-y-3 sm:col-span-2">
                        <div className="flex justify-between items-end">
                            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                                <Activity size={14} className="text-red-500" />
                                Consultas Recientes (10%)
                            </label>
                            <span className="text-xs font-black text-slate-900">{inquiries} consultas</span>
                        </div>
                        <p className="text-[10px] text-slate-400 font-medium">Veces que solicitaron tu reporte en 12 meses.</p>
                        <input
                            type="range" min="0" max="10" value={inquiries}
                            onChange={(e) => setInquiries(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-500 hover:h-3 transition-all outline-none"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};
