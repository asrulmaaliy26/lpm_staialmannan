import React from 'react';
import { FileSignature, FileText, Award } from 'lucide-react';
import PageHero from '../components/PageHero';

interface AkreditasiLandingProps {
    onNavigate: (page: string) => void;
}

const AkreditasiLanding: React.FC<AkreditasiLandingProps> = ({ onNavigate }) => (
    <>
        <PageHero
            title="Standar Akreditasi"
            subtitle="Dokumen dan informasi status akreditasi institusi dan program studi."
            image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200"
        />
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        { id: 'izin-prodi', title: 'Izin Penyelenggaraan', icon: <FileSignature />, desc: 'Panduan legalitas program studi baru.' },
                        { id: 'dokumen-akreditasi', title: 'Dokumen Akreditasi', icon: <FileText />, desc: 'Borang, LED, dan instrumen akreditasi.' },
                        { id: 'status-akreditasi', title: 'Status Akreditasi', icon: <Award />, desc: 'Informasi terkini peringkat akreditasi.' }
                    ].map((item) => (
                        <div key={item.id} onClick={() => onNavigate(item.id)} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-[30px] flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-lg group-hover:-rotate-6">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-blue-950 mb-4">{item.title}</h3>
                            <p className="text-slate-500 mb-8 max-w-xs">{item.desc}</p>
                            <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-gold transition-colors">Lihat Detail</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
);

export default AkreditasiLanding;
