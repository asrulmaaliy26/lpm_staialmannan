import React from 'react';
import { UserCheck, Building, Scale, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import QualityPillars from '../components/QualityPillars';

interface ProfilLandingProps {
    onNavigate: (page: string) => void;
}

const ProfilLanding: React.FC<ProfilLandingProps> = ({ onNavigate }) => (
    <>
        <PageHero
            title="Profil Lembaga"
            subtitle="Kenali lebih dalam Lembaga Penjaminan Mutu STAIMAN."
            image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200"
        />
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { id: 'sambutan', title: 'Sambutan Ketua', icon: <UserCheck />, desc: 'Pesan resmi pimpinan LPM STAIMAN.' },
                        { id: 'profil-staiman', title: 'Tentang STAIMAN', icon: <Building />, desc: 'Sejarah, visi, dan misi kampus perjuangan.' },
                        { id: 'tupoksi', title: 'Tupoksi LPM', icon: <Scale />, desc: 'Tugas pokok dan fungsi lembaga mutu.' }
                    ].map((item) => (
                        <div key={item.id} onClick={() => onNavigate(item.id)} className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group">
                            <div className="w-16 h-16 bg-blue-900 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                            <h3 className="text-2xl font-bold text-blue-950 mb-3">{item.title}</h3>
                            <p className="text-slate-500 mb-6">{item.desc}</p>
                            <span className="flex items-center text-gold font-bold text-sm uppercase tracking-widest">Selengkapnya <ArrowRight className="ml-2 w-4 h-4" /></span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <QualityPillars />
    </>
);

export default ProfilLanding;
