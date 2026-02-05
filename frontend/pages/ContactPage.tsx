import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import PageHero from '../components/PageHero';

const ContactPage: React.FC = () => (
    <>
        <PageHero
            title="Kontak Kami"
            subtitle="Hubungi Sekretariat LPM untuk layanan dan informasi lebih lanjut."
            image="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1200"
        />
        <section className="py-24 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-20">
                    <div>
                        <div className="space-y-6 mb-12">
                            {[
                                { icon: <MapPin />, title: "Alamat Kampus", text: "Jl. Pendidikan No. 45, Kompleks Kampus Al-Mannan, Jawa Timur", color: "blue" },
                                { icon: <Mail />, title: "Email Resmi", text: "lpm@staiman.ac.id", color: "emerald" },
                                { icon: <Phone />, title: "Telepon / Fax", text: "(031) 123-4567", color: "gold" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start space-x-6 p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                                    <div className={`w-14 h-14 bg-${item.color}-50 text-${item.color}-600 rounded-2xl flex items-center justify-center flex-shrink-0`}>{item.icon}</div>
                                    <div><h4 className="font-bold text-slate-800 text-lg">{item.title}</h4><p className="text-slate-500 leading-relaxed">{item.text}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white p-12 rounded-[40px] shadow-2xl border border-slate-100">
                        <h4 className="text-2xl font-bold text-slate-800 mb-8">Kirim Pesan Langsung</h4>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <input type="text" placeholder="Nama Lengkap" className="w-full bg-slate-50 border-0 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald-500 outline-none" />
                            <input type="email" placeholder="Email Anda" className="w-full bg-slate-50 border-0 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald-500 outline-none" />
                            <textarea rows={4} placeholder="Pesan Anda..." className="w-full bg-slate-50 border-0 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald-500 outline-none"></textarea>
                            <button className="w-full bg-blue-900 text-white py-5 rounded-2xl font-bold uppercase tracking-widest shadow-xl hover:bg-blue-950 transition-all">Kirim Pesan</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default ContactPage;
