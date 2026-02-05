import React from 'react';
import PageHero from '../components/PageHero';
import { ACHIEVEMENTS } from '../constants';

const AchievementsPage: React.FC = () => (
    <>
        <PageHero
            title="Prestasi & Capaian"
            subtitle="Rekam jejak keberhasilan civitas akademika STAIMAN."
            image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200"
        />
        <section className="py-24 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-10">
                    {ACHIEVEMENTS.map((ach) => (
                        <div key={ach.id} className="bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all group border border-white">
                            <div className="h-64 overflow-hidden relative">
                                <img src={ach.image} alt={ach.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 right-4 bg-gold px-4 py-2 rounded-xl text-white font-black shadow-lg">{ach.year}</div>
                            </div>
                            <div className="p-8">
                                <span className="text-[10px] font-black uppercase text-emerald-600 tracking-[0.2em]">{ach.category}</span>
                                <h3 className="text-2xl font-bold text-slate-800 mt-2 mb-4 group-hover:text-blue-900 transition-colors">{ach.title}</h3>
                                <p className="text-slate-500 line-clamp-3 leading-relaxed">{ach.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
);

export default AchievementsPage;
