import React from 'react';
import { ShieldCheck, MessageSquare, UserCheck } from 'lucide-react';
import PageHero from '../components/PageHero';

interface LayananLandingProps {
    onNavigate: (page: string) => void;
}

const LayananLanding: React.FC<LayananLandingProps> = ({ onNavigate }) => (
    <>
        <PageHero
            title="Layanan LPM"
            subtitle="Dukungan teknis dan konsultasi untuk civitas akademika."
            image="https://images.unsplash.com/photo-1521791136064-7986c2959d43?q=80&w=1200"
        />
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        { id: 'sop-disabilitas', title: 'SOP Disabilitas', icon: <ShieldCheck />, desc: 'Layanan inklusif bagi mahasiswa disabilitas.' },
                        { id: 'konsultasi', title: 'Konsultasi Mutu', icon: <MessageSquare />, desc: 'Bantuan teknis penyusunan kurikulum dan borang.' },
                        { id: 'evaluasi-dosen', title: 'Evaluasi Dosen', icon: <UserCheck />, desc: 'Sistem umpan balik kinerja pengajaran dosen.' }
                    ].map((item) => (
                        <div key={item.id} onClick={() => onNavigate(item.id)} className="p-12 border-2 border-slate-100 rounded-[50px] hover:border-emerald-500 transition-all cursor-pointer group">
                            <div className="text-emerald-600 mb-6 group-hover:translate-x-2 transition-transform">{item.icon}</div>
                            <h3 className="text-3xl font-bold text-blue-950 mb-4">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
);

export default LayananLanding;
