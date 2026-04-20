import React from 'react';
import { PackageOpen, Info, TrendingDown, FileSpreadsheet } from 'lucide-react';

export const PymeInventory = () => {
    return (
        <div className="w-full bg-white rounded-3xl p-6 border border-slate-200 shadow-sm animate-fade-in relative mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                    <h2 className="text-xl font-bold flex items-center gap-2 text-slate-900 tracking-tight">
                        <PackageOpen className="text-teal-500" size={24} />
                        Gestión de Inventario
                    </h2>
                    <p className="text-sm font-medium text-slate-500 mt-1">Sincroniza tus productos y visualiza capital inmovilizado.</p>
                </div>
                <div className="text-right bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                    <span className="text-[10px] uppercase font-black tracking-widest text-slate-500">Valor de Stock Estimado</span>
                    <p className="text-lg font-black text-slate-900">$18,450</p>
                </div>
            </div>

            {/* Upload Area for Inventory */}
            <div className="w-full mb-6 border-2 border-dashed border-teal-200/60 rounded-2xl bg-teal-50/20 hover:bg-teal-50 hover:border-teal-300 transition-colors flex flex-col sm:flex-row items-center justify-between p-5 cursor-pointer group">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-500 shadow-sm border border-teal-100 group-hover:scale-110 transition-transform">
                        <FileSpreadsheet size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-900">Actualizar listado de inventario</p>
                        <p className="text-xs text-slate-500 font-medium">Sube tu Excel o CSV con el corte de stock más reciente.</p>
                    </div>
                </div>
                <button className="mt-4 sm:mt-0 px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-sm">
                    Seleccionar Archivo
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Slow moving item */}
                <div className="border border-amber-200 bg-amber-50 rounded-2xl p-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                    <div className="flex justify-between items-start mb-3">
                        <h4 className="text-sm font-bold text-slate-900">Electrónica Menor</h4>
                        <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-200">Rotación Lenta</span>
                    </div>
                    <p className="text-xs font-medium text-slate-600 mb-2">Tienes capital atrapado que no se está moviendo rápido.</p>
                    <p className="text-2xl font-black text-amber-600 mb-1">$4,200</p>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-amber-800">120 unidades detenidas</p>
                </div>

                {/* High moving item */}
                <div className="border border-teal-200 bg-teal-50 rounded-2xl p-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-teal-500"></div>
                    <div className="flex justify-between items-start mb-3">
                        <h4 className="text-sm font-bold text-slate-900">Cables y Cargadores</h4>
                        <span className="bg-teal-100 text-teal-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-teal-200">Alta Rotación</span>
                    </div>
                    <p className="text-xs font-medium text-slate-600 mb-2">Inventario crítico: a este ritmo te quedarás sin stock pronto.</p>
                    <p className="text-2xl font-black text-teal-600 mb-1">15 unis.</p>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-teal-800">Restantes en tienda</p>
                </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-4 items-start shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200">
                    <Info className="text-blue-600" size={20} />
                </div>
                <div className="flex-1">
                    <h4 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">Insight de Liquidez <TrendingDown size={14} className="text-rose-500" /></h4>
                    <p className="text-xs font-medium text-slate-700 leading-relaxed">
                        Tu stock actual de Electrónica Menor cubre más de lo necesario. Reducir futuras compras de esta categoría por <strong>14 días</strong> podría liberar la caja exacta para tu próxima cuota comercial.
                    </p>
                </div>
            </div>
        </div>
    );
};
