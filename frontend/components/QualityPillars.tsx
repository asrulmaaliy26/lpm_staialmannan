import React from 'react';
import { CheckCircle2, ShieldCheck, Monitor, Award } from 'lucide-react';
import SectionHeader from './SectionHeader';

const QualityPillars: React.FC = () => (
    <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Pilar Penjaminan Mutu" centered subtitle="Prinsip dasar yang kami pegang dalam setiap proses evaluasi di lingkungan STAIMAN." />
            <div className="grid md:grid-cols-4 gap-8">
                {[
                    { icon: <CheckCircle2 className="text-emerald-600" />, title: "Transparansi", text: "Proses evaluasi yang terbuka dan dapat diakses oleh civitas." },
                    { icon: <ShieldCheck className="text-emerald-600" />, title: "Akuntabilitas", text: "Setiap langkah mutu dapat dipertanggungjawabkan secara akademik." },
                    { icon: <Monitor className="text-emerald-600" />, title: "Keberlanjutan", text: "Peningkatan kualitas yang konsisten dari waktu ke waktu." },
                    { icon: <Award className="text-emerald-600" />, title: "Integritas", text: "Menjaga kejujuran dalam setiap pelaporan dan hasil audit." }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all text-center">
                        <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">{item.icon}</div>
                        <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-500">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default QualityPillars;
