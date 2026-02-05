import React, { useState } from 'react';
import { ArrowLeft, Download, FileText, Lock, Loader2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import { DocumentItem } from '../types';
import { downloadProfil } from '../services/api';

interface DetailPageProps {
    title: string;
    content?: any;
    type?: 'profile' | 'docs' | 'list';
    data?: any;
    onBack: () => void;
    image: string;
    isLoggedIn?: boolean;
}

const DetailPage: React.FC<DetailPageProps> = ({ title, content, type, data, onBack, image, isLoggedIn }) => {
    const [loadingDocs, setLoadingDocs] = useState<Record<string, boolean>>({});

    const handleDownload = async (doc: DocumentItem) => {
        if (!doc.id || isNaN(Number(doc.id))) {
            alert('Dokumen ini belum tersedia di API');
            return;
        }

        setLoadingDocs(prev => ({ ...prev, [doc.id]: true }));
        try {
            await downloadProfil(Number(doc.id), doc.title);
        } catch (error) {
            console.error('Download error:', error);
        } finally {
            setLoadingDocs(prev => ({ ...prev, [doc.id]: false }));
        }
    };

    return (
        <div className="bg-white">
            <PageHero title={title} image={image} />
            <div className="py-24 max-w-5xl mx-auto px-4 min-h-screen">
                <button onClick={onBack} className="flex items-center text-blue-900 font-bold mb-10 hover:text-gold transition-colors group">
                    <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Kembali ke Kategori
                </button>

                {type === 'profile' && content && (
                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                        {content.author && (
                            <div className="mb-10 p-8 bg-blue-50 rounded-3xl flex items-center space-x-6 border-l-8 border-blue-900">
                                <div className="w-20 h-20 bg-blue-900 rounded-full flex-shrink-0 flex items-center justify-center text-white text-3xl font-serif">A</div>
                                <div>
                                    <p className="text-xl italic font-serif mb-2">"{content.content}"</p>
                                    <p className="font-bold text-blue-900">{content.author}</p>
                                    <p className="text-sm text-slate-500 uppercase font-bold tracking-widest">{content.role}</p>
                                </div>
                            </div>
                        )}
                        {!content.author && <p className="text-xl mb-8">{content.content}</p>}
                        {content.vision && (
                            <div className="mt-8 p-10 bg-emerald-50 rounded-[40px] border border-emerald-100">
                                <h4 className="font-bold text-emerald-900 mb-4 text-2xl">Visi & Masa Depan</h4>
                                <p className="text-emerald-800 italic text-xl leading-relaxed">{content.vision}</p>
                            </div>
                        )}
                        {content.tasks && (
                            <div className="grid md:grid-cols-1 gap-6 mt-10">
                                {content.tasks.map((t: string, i: number) => (
                                    <div key={i} className="flex items-start space-x-6 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                                        <div className="w-10 h-10 bg-blue-900 text-white rounded-xl flex items-center justify-center flex-shrink-0 font-bold shadow-lg">{i + 1}</div>
                                        <span className="text-slate-700 text-lg">{t}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {type === 'docs' && data && (
                    <div className="space-y-6">
                        {data.map((doc: DocumentItem) => (
                            <div key={doc.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-8 border border-slate-100 rounded-[30px] hover:border-emerald-500 hover:shadow-2xl transition-all group">
                                <div className="flex items-center space-x-6">
                                    <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all">
                                        {loadingDocs[doc.id] ? <Loader2 className="w-8 h-8 animate-spin" /> : <Download className="w-8 h-8" />}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-800">{doc.title}</h4>
                                        <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-1">{doc.category} • {doc.fileSize}</p>
                                    </div>
                                </div>
                                {isLoggedIn ? (
                                    <button
                                        onClick={() => handleDownload(doc)}
                                        disabled={loadingDocs[doc.id]}
                                        className={`w-full sm:w-auto mt-4 sm:mt-0 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg active:scale-95 flex items-center justify-center space-x-2 ${loadingDocs[doc.id]
                                                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                                : 'bg-slate-900 text-white hover:bg-emerald-600'
                                            }`}
                                    >
                                        {loadingDocs[doc.id] && <Loader2 className="w-5 h-5 animate-spin" />}
                                        <span>{loadingDocs[doc.id] ? 'Sedang Mengunduh...' : 'Unduh Dokumen'}</span>
                                    </button>
                                ) : (
                                    <div className="text-sm font-bold text-amber-600 bg-amber-50 px-4 py-2 rounded-xl flex items-center">
                                        <Lock className="w-4 h-4 mr-2" />
                                        Masuk untuk Mengunduh
                                    </div>
                                )}
                            </div>
                        ))}
                        {data.length === 0 && (
                            <div className="text-center py-20 bg-slate-50 rounded-[40px]">
                                <FileText className="w-16 h-16 text-slate-200 mx-auto mb-4" />
                                <p className="text-slate-400 italic">Maaf, berkas untuk kategori ini sedang dalam proses pembaharuan.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DetailPage;
