import React from 'react';

export const ProgressBar = ({ value, max, colorClass = "bg-green-500", text = "" }) => {
    const pct = Math.min((value / max) * 100, 100);
    return (
        <div className="w-full">
            <div className="flex justify-between text-xs mb-1 font-semibold text-secondary">
                <span>{text}</span>
                <span>{value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} / {max.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                <div className={`h-1.5 rounded-full ${colorClass}`} style={{ width: `${pct}%` }}></div>
            </div>
        </div>
    );
};
