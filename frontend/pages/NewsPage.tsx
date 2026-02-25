import React, { useState, useEffect } from 'react';
import { Calendar, Newspaper } from 'lucide-react';
import PageHero from '../components/PageHero';
import { fetchAllNews } from '../services/api';
import { NewsItem } from '../types';

const NewsPage: React.FC<{ onNavigate: (p: string) => void }> = ({ onNavigate }) => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadNews = async () => {
            try {
                const data = await fetchAllNews();
                // Filter news for KAMPUS or just show all if appropriate for LPM
                // Since this is LPM site, usually we want KAMPUS news.
                const filtered = data.filter((n: NewsItem) => n.jenjang === 'KAMPUS');
                setNews(filtered.length > 0 ? filtered : data.slice(0, 9));
            } catch (error) {
                console.error('Error fetching news:', error);
            } finally {
                setLoading(false);
            }
        };
        loadNews();
    }, []);

    return (
        <>
            <PageHero
                title="Warta & Berita"
                subtitle="Informasi terkini mengenai kegiatan dan kebijakan mutu."
                image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200"
            />
            <section className="py-24 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-4">
                    {loading ? (
                        <div className="grid lg:grid-cols-3 gap-12">
                            {Array(6).fill(0).map((_, i) => (
                                <div key={i} className="animate-pulse">
                                    <div className="h-72 bg-slate-200 rounded-[30px] mb-6"></div>
                                    <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>
                                    <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
                                    <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                                </div>
                            ))}
                        </div>
                    ) : news.length > 0 ? (
                        <div className="grid lg:grid-cols-3 gap-12">
                            {news.map((item) => (
                                <div key={item.id} className="group cursor-pointer" onClick={() => onNavigate(`news-detail-${item.id}`)}>
                                    <div className="relative h-72 overflow-hidden rounded-[30px] mb-6 shadow-md border border-slate-100">
                                        <img src={item.main_image || item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-2 rounded-xl text-[10px] font-black uppercase flex items-center space-x-2 shadow-sm">
                                            <Calendar className="w-3 h-3 text-emerald-600" /> <span>{item.date}</span>
                                        </div>
                                        {item.jenjang && (
                                            <div className="absolute top-4 right-4 bg-yellow-500 text-blue-950 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">
                                                {item.jenjang}
                                            </div>
                                        )}
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors leading-snug">
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-500 leading-relaxed mb-6 line-clamp-3">{item.excerpt}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 bg-slate-50 rounded-[40px] border-2 border-dashed border-slate-200">
                            <Newspaper className="w-20 h-20 text-slate-300 mx-auto mb-6" />
                            <h3 className="text-2xl font-bold text-slate-400">Belum Ada Berita</h3>
                            <p className="text-slate-400 mt-2">Silakan cek kembali di lain waktu.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default NewsPage;
