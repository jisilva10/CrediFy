import * as React from 'react';
import { motion } from 'framer-motion';
import { History, Search } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- UTILS ---
function cn(...inputs) {
    return twMerge(clsx(inputs));
}

// --- HELPER COMPONENTS ---
const IconWrapper = ({ icon: Icon, className }) => (
    <div className={cn('p-2.5 rounded-xl flex items-center justify-center', className)}>
        <Icon className="w-5 h-5" />
    </div>
);

// --- MAIN COMPONENT ---
export const FinancialDashboard = ({ recentActivity }) => {
    // Animation variants for Framer Motion
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-transparent w-full font-sans"
        >
            <div className="p-0">
                {/* Search Bar */}
                <motion.div variants={itemVariants} className="relative mb-6">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Busca transacciones, comercios o fecha..."
                        className="bg-white w-full border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-sm font-medium focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all shadow-sm text-slate-800 placeholder:text-slate-400"
                    />
                    <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center justify-center text-[10px] font-mono font-bold text-slate-400 bg-slate-100 p-1.5 rounded-lg border border-slate-200">
                        ⌘K
                    </kbd>
                </motion.div>

                {/* Recent Activity */}
                <motion.div variants={itemVariants} className="mb-2">
                    <div className="flex items-center gap-2 mb-4 px-1">
                        <History className="w-5 h-5 text-slate-400" />
                        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">Actividad Reciente</h2>
                    </div>
                    <motion.ul
                        variants={containerVariants}
                        className="space-y-3"
                    >
                        {recentActivity.map((activity, index) => (
                            <motion.li
                                key={index}
                                variants={itemVariants}
                                className="flex items-center justify-between bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all group cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    {React.isValidElement(activity.icon) ? (
                                        activity.icon
                                    ) : (
                                        <IconWrapper
                                            icon={activity.icon}
                                            className="bg-slate-50 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                                        />
                                    )}
                                    <div>
                                        <p className="font-bold text-sm text-slate-900">{activity.title}</p>
                                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                                            {activity.time}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className={cn(
                                        'text-sm font-black py-1.5 px-3 rounded-xl border',
                                        activity.amount > 0
                                            ? 'text-emerald-700 bg-emerald-50 border-emerald-100'
                                            : 'text-slate-700 bg-slate-50 border-slate-200'
                                    )}
                                >
                                    {activity.amount > 0 ? '+' : '-'}${Math.abs(activity.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                </div>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </div>
        </motion.div>
    );
};
