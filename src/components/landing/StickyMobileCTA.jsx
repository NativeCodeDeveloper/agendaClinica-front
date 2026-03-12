"use client";

import { MessageCircle, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function StickyMobileCTA() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            {/* Backdrop blur effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/90 to-white/80 backdrop-blur-lg border-t border-slate-200/50"></div>

            {/* Content */}
            <div className="relative p-3 pb-safe">
                <div className="flex gap-2.5">
                    <Link
                        href="https://wa.me/56966091038?text=Hola,%20quiero%20automatizar%20mi%20centro"
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#1fb855] text-white py-3.5 rounded-2xl font-semibold text-sm shadow-lg shadow-green-500/25 active:scale-[0.98] transition-transform duration-150 hover:shadow-xl hover:shadow-green-500/30"
                    >
                        <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
                        <span>WhatsApp</span>
                    </Link>
                    <button
                        onClick={() => {
                            const element = document.getElementById('contacto');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }}
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-indigo-700 text-white py-3.5 rounded-2xl font-semibold text-sm shadow-lg shadow-cyan-500/25 active:scale-[0.98] transition-transform duration-150 hover:shadow-xl hover:shadow-cyan-500/30"
                    >
                        <span>Cotizar Ahora</span>
                        <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                    </button>
                </div>
            </div>
        </div>
    );
}
