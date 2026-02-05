import React from 'react';
import { FileText, FileSignature, Scale, Monitor } from 'lucide-react';
import PageHero from '../components/PageHero';
import QualityPillars from '../components/QualityPillars';

interface PenjaminanMutuLandingProps {
    onNavigate: (page: string) => void;
}

const PenjaminanMutuLanding: React.FC<PenjaminanMutuLandingProps> = ({ onNavigate }) => (
    <>
        <PageHero
            title="Penjaminan Mutu Internal"
            subtitle="Siklus Penetapan, Pelaksanaan, Evaluasi, Pengendalian, dan Peningkatan (PPEPP)."
            image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
        />
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { id: 'template-rps', title: 'Template RPS', icon: <FileText /> },
                        { id: 'sk-rektor', title: 'SK Rektor', icon: <FileSignature /> },
                        { id: 'pedoman-evaluasi', title: 'Pedoman Evaluasi', icon: <Scale /> },
                        { id: 'ami', title: 'Sistem Audit (AMI)', icon: <Monitor /> }
                    ].map((item) => (
                        <div key={item.id} onClick={() => onNavigate(item.id)} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all cursor-pointer flex flex-col items-center text-center group">
                            <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-900 group-hover:text-white transition-colors">{item.icon}</div>
                            <h4 className="font-bold text-slate-800">{item.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <QualityPillars />
    </>
);

export default PenjaminanMutuLanding;
