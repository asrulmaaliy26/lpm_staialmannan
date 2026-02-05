import React from 'react';
import { Calendar } from 'lucide-react';
import PageHero from '../components/PageHero';
import { NEWS } from '../constants';

const NewsPage: React.FC = () => (
    <>
        <PageHero
            title="Warta & Berita"
            subtitle="Informasi terkini mengenai kegiatan dan kebijakan mutu."
            image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200"
        />
        <section className="py-24 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-12">
                    {NEWS.map((item) => (
                        <div key={item.id} className="group cursor-pointer">
                            <div className="relative h-72 overflow-hidden rounded-[30px] mb-6 shadow-md border border-slate-100">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-2 rounded-xl text-[10px] font-black uppercase flex items-center space-x-2 shadow-sm">
                                    <Calendar className="w-3 h-3 text-emerald-600" /> <span>{item.date}</span>
                                </div>
                            </div>
                            <h4 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors leading-snug">{item.title}</h4>
                            <p className="text-slate-500 leading-relaxed mb-6">{item.excerpt}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
);

export default NewsPage;
