import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface LicenseGateProps {
    onUnlock: () => void;
}

export const LicenseGate: React.FC<LicenseGateProps> = ({ onUnlock }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'RADDVIP') {
            localStorage.setItem('globetrotter_vip_auth', 'true');
            onUnlock();
        } else {
            setError('Incorrect password. Please try again.');
        }
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center bg-neutral-950 overflow-hidden px-4">
            <div 
                className="absolute inset-0 bg-cover bg-center brightness-[0.3] contrast-[1.15]" 
                style={{ 
                    backgroundImage: 'url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1920&auto=format&fit=crop")',
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/75 z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#a4823f]/10 rounded-full blur-[120px] pointer-events-none z-0" />

            <motion.div 
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative z-10 w-full max-w-sm bg-neutral-900/65 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden"
            >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#a4823f] to-transparent" />
                
                <div className="text-center mb-8">
                    <div className="mx-auto w-12 h-12 rounded-full border border-[#a4823f]/50 flex items-center justify-center mb-4 bg-[#a4823f]/10 text-[#a4823f]">
                        <span className="font-serif text-lg font-bold tracking-widest">G</span>
                    </div>
                    <h1 className="text-2xl font-serif font-semibold tracking-wider text-white mb-2">
                        GLOBETROTTER
                    </h1>
                    <p className="text-xs font-poppins text-neutral-400 tracking-wide uppercase">
                        Travel Lens VIP Access
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="block text-xs font-poppins font-medium text-neutral-300 tracking-wider uppercase text-left">
                            Access Code
                        </label>
                        <input
                            type="text"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                if (error) setError(null);
                            }}
                            placeholder="Enter Password"
                            className="w-full px-5 py-3.5 bg-neutral-950/85 border border-white/10 rounded-xl text-white placeholder-neutral-500 text-center tracking-widest focus:outline-none focus:ring-2 focus:ring-[#a4823f]/60 focus:border-[#a4823f]/60 transition-all font-mono"
                            autoFocus
                        />
                    </div>

                    {error && (
                        <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="text-red-400 font-poppins text-xs text-center leading-normal"
                        >
                            {error}
                        </motion.p>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 px-6 rounded-xl bg-[#a4823f] hover:bg-[#8f7338] text-white font-poppins font-semibold tracking-wider text-sm shadow-lg shadow-[#a4823f]/10 transition-all duration-300 active:scale-[0.98]"
                    >
                        Submit
                    </button>
                    
                    <p className="text-[10px] text-center text-neutral-500 font-sans tracking-wide">
                        Default VIP Code required.
                    </p>
                </form>
            </motion.div>
        </div>
    );
};