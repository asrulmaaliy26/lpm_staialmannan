
import React, { useState, useEffect, useRef } from 'react';
import { 
    ArrowLeft, Calendar, User, Eye, Share2, 
    Bookmark, Newspaper, ZoomIn, X, Share 
} from 'lucide-react';
import { fetchNewsDetail, fetchLatestNews, incrementNewsViews } from '../services/api';
import { NewsItem } from '../types';

interface NewsDetailPageProps {
    newsId: string;
    onBack: () => void;
    onNavigate: (p: string) => void;
}

const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ newsId, onBack, onNavigate }) => {
    const [news, setNews] = useState<NewsItem | null>(null);
    const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    
    const lastIncrementedId = useRef<string | null>(null);

    useEffect(() => {
        const loadNews = async () => {
            setLoading(true);
            try {
                const [detailData, relatedData] = await Promise.all([
                    fetchNewsDetail(newsId),
                    fetchLatestNews(4) // Fetch some news for sidebar
                ]);
                
                setNews(detailData);
                setRelatedNews(relatedData.filter((n: NewsItem) => n.id.toString() !== newsId.toString()).slice(0, 3));
            } catch (err) {
                console.error('Error fetching news detail:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        
        loadNews();
        window.scrollTo(0, 0);
    }, [newsId]);

    // View Increment Logic
    useEffect(() => {
        if (!newsId || lastIncrementedId.current === newsId) return;
        
        lastIncrementedId.current = newsId;
        const inc = async () => {
            try {
                await incrementNewsViews(newsId);
            } catch (e) {
                console.error("Failed to increment views", e);
            }
        };
        inc();
    }, [newsId]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="flex flex-col items-center gap-6">
                    <div className="relative">
                        <div className="w-16 h-16 border-4 border-slate-200 border-t-blue-900 rounded-full animate-spin"></div>
                        <Newspaper className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-blue-900/50" />
                    </div>
                    <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px] animate-pulse">Menghubungkan ke Server...</p>
                </div>
            </div>
        );
    }

    if (error || !news) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
                <div className="bg-white p-12 rounded-[50px] shadow-2xl border border-slate-100 max-w-lg">
                    <div className="bg-red-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                        <X className="w-12 h-12 text-red-500" />
                    </div>
                    <h2 className="text-3xl font-black text-blue-950 mb-4">Berita Tidak Tersedia</h2>
                    <p className="text-slate-500 mb-10 leading-relaxed">Informasi yang Anda cari mungkin telah dihapus atau sedang dalam proses pemeliharaan sistem.</p>
                    <button onClick={onBack} className="w-full bg-blue-950 text-white px-8 py-5 rounded-2xl font-black shadow-xl hover:bg-yellow-500 hover:text-blue-950 transition-all flex items-center justify-center gap-3 active:scale-95">
                        <ArrowLeft className="w-5 h-5" /> Kembali Ke Beranda
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 selection:bg-yellow-200 selection:text-blue-950 overflow-x-hidden pb-32">
            {/* Ambient background elements from reactstaialmannan */}
            <div className={`fixed top-0 left-0 w-[500px] h-[500px] bg-blue-900 opacity-5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0`}></div>
            <div className="fixed bottom-0 right-0 w-[800px] h-[800px] bg-yellow-500 opacity-5 blur-[150px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3 z-0"></div>

            <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
                {/* Top Navigation Bar */}
                <div className="flex justify-between items-center mb-12">
                    <button onClick={onBack} className="group inline-flex items-center text-slate-500 hover:text-blue-900 font-bold gap-3 transition-all px-6 py-3 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span>Kembali ke Warta</span>
                    </button>
                    <div className="flex gap-3">
                        <button className="p-4 bg-white rounded-2xl text-slate-400 hover:text-blue-900 hover:shadow-xl transition-all border border-slate-100">
                            <Share2 className="w-5 h-5" />
                        </button>
                        <button className="p-4 bg-white rounded-2xl text-slate-400 hover:text-yellow-500 hover:shadow-xl transition-all border border-slate-100">
                            <Bookmark className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-16">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 min-w-0">
                        {/* Hero Image Container with Premium Effects */}
                        <div className="relative mb-16 group perspective-1000">
                            <div className="rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] relative z-10 aspect-video transform transition-all duration-700 hover:scale-[1.01] border-[8px] md:border-[16px] border-white">
                                {!imgLoaded && (
                                    <div className="absolute inset-0 bg-slate-200 animate-pulse z-20" />
                                )}
                                <img
                                    src={news.main_image || news.image}
                                    alt={news.title}
                                    className={`w-full h-full object-cover transition-opacity duration-1000 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                                    onLoad={() => setImgLoaded(true)}
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                                {/* Floating Badges */}
                                <div className="absolute top-6 left-6 md:top-10 md:left-10 flex flex-wrap gap-3">
                                    <span className="bg-yellow-500 text-blue-950 px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl border border-white/20">
                                        {news.jenjang || 'KAMPUS'}
                                    </span>
                                    <span className="bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-2xl text-[10px] font-bold uppercase tracking-widest shadow-2xl border border-white/10">
                                        {news.category || 'Warta Mutu'}
                                    </span>
                                </div>

                                {/* Title Overlay over Image */}
                                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center gap-6 text-white/70 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                        <span className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                                            <Calendar className="w-3.5 h-3.5" /> {news.date}
                                        </span>
                                        <span className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                                            <Eye className="w-3.5 h-3.5" /> {news.views || 0} Terbaca
                                        </span>
                                    </div>
                                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-black text-white leading-[1.1] drop-shadow-2xl">
                                        {news.title}
                                    </h1>
                                </div>
                            </div>
                            
                            {/* Decorative shadow behind */}
                            <div className="absolute -inset-6 bg-blue-900 opacity-10 blur-[60px] rounded-[4rem] -z-10 group-hover:opacity-20 transition-opacity duration-700"></div>
                        </div>

                        {/* Article Content with Premium Body Styling */}
                        <article className="bg-white/90 backdrop-blur-xl rounded-[3rem] md:rounded-[4rem] p-8 md:py-20 md:px-12 xl:px-20 shadow-2xl shadow-slate-200/50 border border-white relative">
                            {/* Content Background Decoration */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

                            <div 
                                className="prose prose-lg md:prose-xl prose-slate max-w-none break-words overflow-hidden
                                prose-headings:font-black prose-headings:text-blue-950 prose-headings:tracking-tight
                                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-8
                                prose-a:text-blue-700 prose-a:no-underline prose-a:font-bold prose-a:border-b-2 prose-a:border-blue-100 hover:prose-a:border-blue-500 prose-a:transition-all
                                prose-img:rounded-3xl prose-img:shadow-2xl prose-img:border-8 prose-img:border-slate-50 prose-img:my-16"
                                dangerouslySetInnerHTML={{ __html: news.content || news.excerpt }}
                            />

                            {/* Author section at the bottom */}
                            <div className="border-t border-slate-100 mt-20 pt-10 flex items-center justify-between">
                                <div className="flex items-center gap-5">
                                    <div className="w-16 h-16 bg-gradient-to-tr from-blue-900 to-blue-700 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-blue-900/20 transform -rotate-6">
                                        <User className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Editor In-Chief</p>
                                        <p className="text-xl font-black text-blue-950">Tim Penjaminan Mutu</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex gap-2">
                                    {[1,2,3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-slate-100"></div>)}
                                </div>
                            </div>
                        </article>

                        {/* Gallery Section if available */}
                        {((news as any).gallery) && (news as any).gallery.length > 0 && (
                            <div className="mt-20">
                                <h3 className="text-3xl font-black text-blue-950 mb-10 flex items-center gap-5">
                                    <span className="w-14 h-14 bg-yellow-500 rounded-3xl flex items-center justify-center text-blue-950 shadow-xl shadow-yellow-500/20 transform rotate-12">
                                        <ZoomIn className="w-7 h-7" />
                                    </span>
                                    <span>Galeri Warta</span>
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    {(news as any).gallery.map((img: string, idx: number) => (
                                        <div 
                                            key={idx} 
                                            className="group relative aspect-square rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-white active:scale-95"
                                            onClick={() => setSelectedImage(img)}
                                        >
                                            <img src={img} alt={`Galeri ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-blue-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-all duration-500 border border-white/30">
                                                    <ZoomIn className="w-6 h-6" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar with dynamic related news */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-32 space-y-10">
                            <div className="bg-white/90 backdrop-blur-xl rounded-[3rem] p-10 shadow-2xl shadow-slate-200/50 border border-white">
                                <h3 className="text-2xl font-black text-blue-950 mb-10 flex items-center gap-4">
                                    <div className="w-1.5 h-8 bg-blue-950 rounded-full"></div>
                                    Warta Lainnya
                                </h3>
                                
                                <div className="space-y-8">
                                    {relatedNews.length > 0 ? (
                                        relatedNews.map(item => (
                                            <div 
                                                key={item.id} 
                                                className="group flex gap-5 cursor-pointer"
                                                onClick={() => onNavigate(`news-detail-${item.id}`)}
                                            >
                                                {/* In a real app we'd navigate to news detail route, 
                                                    here we depend on App.tsx currentPage state if we had access to it, 
                                                    but since we are inside NewsDetailPage receiving props, 
                                                    we might need a prop to navigate from here too or refresh state.
                                                    Alternatively, we can just call back with a new ID if App supports it.
                                                 */}
                                                 <div className="w-24 h-24 rounded-3xl overflow-hidden flex-shrink-0 shadow-lg relative border-2 border-slate-50">
                                                    <img src={item.main_image || item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                 </div>
                                                 <div>
                                                    <span className="text-[9px] font-black text-blue-900/50 uppercase tracking-widest mb-1 block">
                                                        {item.jenjang || 'KAMPUS'}
                                                    </span>
                                                    <h4 className="font-bold text-blue-950 text-sm leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-[10px] font-bold text-slate-400">{item.date}</p>
                                                 </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center py-10">
                                            <Newspaper className="w-12 h-12 text-slate-100 mx-auto mb-4" />
                                            <p className="text-slate-300 font-bold text-xs uppercase tracking-widest">Memuat rekomendasi...</p>
                                        </div>
                                    )}
                                </div>
                                
                                <button 
                                    onClick={() => onNavigate('berita')}
                                    className="w-full mt-12 bg-slate-50 text-slate-500 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-950 hover:text-white transition-all shadow-sm"
                                >
                                    Lihat Seluruh Warta
                                </button>
                            </div>

                            {/* Promotional Card */}
                            <div className="bg-blue-950 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                                <h4 className="text-xl font-black mb-4 relative z-10">Punya Saran Mutu?</h4>
                                <p className="text-blue-100/60 text-sm mb-8 leading-relaxed relative z-10">Kontribusi Anda sangat berharga bagi peningkatan standar kualitas Kampus STAIMAN.</p>
                                <button className="bg-yellow-500 text-blue-950 px-8 py-3 rounded-2xl font-black text-xs uppercase relative z-10 hover:brightness-110 active:scale-95 transition-all">Hubungi LPM</button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Premium Lightbox Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[200] bg-blue-950/95 backdrop-blur-3xl flex items-center justify-center p-6 animate-fadeIn"
                    onClick={() => setSelectedImage(null)}
                >
                    <button className="absolute top-10 right-10 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all backdrop-blur-md border border-white/10">
                        <X className="w-8 h-8" />
                    </button>
                    <div className="relative max-w-6xl w-full max-h-[80vh] flex items-center justify-center">
                        <img 
                            src={selectedImage} 
                            alt="Preview" 
                            className="max-w-full max-h-full object-contain rounded-3xl shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/10 animate-scaleIn" 
                        />
                    </div>
                    <p className="absolute bottom-10 text-white/40 text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">Klik di mana saja untuk menutup</p>
                </div>
            )}
        </div>
    );
};

export default NewsDetailPage;
