
import React from 'react';
import {
    Download, ArrowRight,
    ShieldCheck, MessageSquare, Monitor, FileText,
    Award, BookOpen, GraduationCap, Building, Scale, UserCheck, Mail, Phone, MapPin, Zap, Star, Users
} from 'lucide-react';
import { SERVICES, TESTIMONIALS, NEWS } from '../constants';

const SectionHeader = ({ title, subtitle, centered = false, light = false }: { title: string; subtitle?: string; centered?: boolean; light?: boolean }) => (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
        <div className={`flex items-center space-x-2 mb-3 ${centered ? 'justify-center' : ''}`}>
            <div className={`h-1 w-12 ${light ? 'bg-yellow-400' : 'bg-yellow-500'}`}></div>
            <span className={`${light ? 'text-yellow-400' : 'text-yellow-500'} font-bold text-sm tracking-widest uppercase`}>Ekselensi & Mutu</span>
        </div>
        <h2 className={`text-4xl md:text-6xl font-black mb-4 ${light ? 'text-white' : 'text-blue-950'} tracking-tight`}>{title}</h2>
        {subtitle && <p className={`text-xl max-w-3xl leading-relaxed mx-auto ${light ? 'text-blue-100/70' : 'text-slate-500'}`}>{subtitle}</p>}
    </div>
);

const Hero = ({ onNavigate, getCatId }: { onNavigate: (p: string) => void; getCatId: (name: string) => number | undefined }) => {
    return (
        <section id="home" className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1920"
                    alt="Pendidikan STAIMAN"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/80 to-transparent"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className="lg:max-w-4xl">
                    <div className="flex items-center space-x-3 mb-8 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full w-fit shadow-2xl">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="text-white font-black text-xs uppercase tracking-[0.3em]">Pilar Kemajuan Kampus STAIMAN</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
                        Mengawal <span className="text-yellow-500">Kualitas</span> <br />
                        Membangun <span className="text-emerald-400 underline decoration-yellow-500 underline-offset-8">Masa Depan</span>
                    </h1>
                    <p className="text-2xl text-blue-50/90 mb-12 max-w-2xl leading-relaxed font-medium">
                        LPM STAIMAN hadir sebagai jantung kualitas institusi, memastikan setiap detik proses akademik melahirkan generasi rabbani yang unggul dan kompetitif.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
                        <button onClick={() => onNavigate('category-' + (getCatId('Profil') || 1))} className="group relative bg-yellow-500 hover:bg-yellow-400 text-blue-950 px-12 py-6 rounded-2xl text-xl font-black shadow-[0_20px_50px_rgba(234,179,8,0.3)] transition-all transform hover:-translate-y-2 flex items-center justify-center overflow-hidden">
                            <span className="relative z-10 flex items-center">
                                Jelajahi Profil
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </button>
                        <button onClick={() => onNavigate('category-' + (getCatId('Akreditasi') || 2))} className="bg-white/10 hover:bg-white/20 backdrop-blur-2xl border-2 border-white/30 text-white px-12 py-6 rounded-2xl text-xl font-black transition-all transform hover:-translate-y-2 flex items-center justify-center shadow-2xl">
                            Akses Dokumen Mutu
                        </button>
                    </div>
                </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute bottom-12 right-12 hidden lg:block animate-bounce-slow">
                <div className="bg-white/10 backdrop-blur-3xl p-8 rounded-[40px] border border-white/20 shadow-2xl max-w-xs">
                    <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-500/50">
                            <ShieldCheck className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-white font-bold text-sm uppercase tracking-widest">Terverifikasi</span>
                    </div>
                    <p className="text-blue-50 text-lg font-medium leading-snug">
                        100% Program Studi telah melewati audit mutu internal berkala.
                    </p>
                </div>
            </div>
        </section>
    );
};

const Impact = () => (
    <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <SectionHeader
                    centered
                    title="Pilar Kemajuan Kampus"
                    subtitle="LPM STAIMAN bukan sekadar lembaga administratif, kami adalah mitra strategis dalam mengakselerasi kemajuan institusi."
                />
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
                {[
                    {
                        title: 'Standarisasi Global',
                        desc: 'Mengadopsi standar internasional untuk memastikan kurikulum dan layanan STAIMAN setara dengan kampus terbaik dunia.',
                        icon: <Zap className="w-10 h-10" />,
                        color: 'bg-blue-600'
                    },
                    {
                        title: 'Budaya Ekselensi',
                        desc: 'Menanamkan mindset kualitas di setiap lini, dari pelayanan administrasi hingga proses belajar mengajar di kelas.',
                        icon: <Star className="w-10 h-10" />,
                        color: 'bg-yellow-500'
                    },
                    {
                        title: 'Kepercayaan Publik',
                        desc: 'Menjaga marwah kampus dengan menjamin bahwa setiap lulusan STAIMAN memiliki kompetensi yang tervalidasi.',
                        icon: <Users className="w-10 h-10" />,
                        color: 'bg-emerald-600'
                    }
                ].map((item, i) => (
                    <div key={i} className="relative p-12 bg-slate-50 rounded-[50px] border border-slate-100 hover:shadow-2xl transition-all group overflow-hidden">
                        <div className={`w-20 h-20 ${item.color} text-white rounded-3xl flex items-center justify-center mb-8 shadow-2xl transform group-hover:rotate-12 transition-transform`}>
                            {item.icon}
                        </div>
                        <h3 className="text-3xl font-black text-blue-950 mb-6 tracking-tight">{item.title}</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const About = () => {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-400/5 rounded-full blur-3xl"></div>
                        <img
                            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000"
                            alt="Pendidikan Berkualitas"
                            className="rounded-[60px] shadow-2xl relative z-10 border-[16px] border-white"
                        />
                        <div className="absolute -bottom-10 -right-10 bg-yellow-500 p-12 rounded-[40px] shadow-2xl z-20 max-w-md transform hover:scale-105 transition-transform">
                            <h4 className="text-blue-950 font-black text-4xl mb-4 leading-tight">Berkomitmen Tanpa Henti</h4>
                            <p className="text-blue-900/80 font-medium text-lg italic">
                                "Kualitas bukanlah sebuah tindakan, melainkan sebuah kebiasaan yang terus kami pupuk di STAIMAN."
                            </p>
                        </div>
                    </div>

                    <div>
                        <SectionHeader
                            title="Dedikasi Penuh Untuk Kemajuan STAIMAN"
                            subtitle="Sejak didirikan, LPM telah menjadi garda terdepan dalam memastikan STAIMAN terus mendaki tangga prestasi nasional."
                        />

                        <div className="space-y-10">
                            {[
                                { title: 'Misi Penjaminan Mutu', desc: 'Membangun ekosistem pendidikan yang transparan, akuntabel, dan berorientasi pada kepuasan mahasiswa.', icon: <Users className="w-6 h-6 text-white" /> },
                                { title: 'Audit Berkala', desc: 'Memastikan seluruh unit kerja beroperasi pada performa maksimal melalui audit yang konstruktif.', icon: <ShieldCheck className="w-6 h-6 text-white" /> }
                            ].map((item, idx) => (
                                <div key={idx} className="flex space-x-8 items-start group">
                                    <div className="flex-shrink-0 w-16 h-16 bg-blue-950 rounded-3xl flex items-center justify-center shadow-xl group-hover:bg-yellow-500 transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-blue-950 mb-3 tracking-tight">{item.title}</h4>
                                        <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Services = () => (
    <section className="py-32 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-24">
                <SectionHeader
                    centered
                    light
                    title="Layanan Strategis LPM"
                    subtitle="Fokus kami adalah memberikan dukungan terbaik bagi seluruh unit di kampus."
                />
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                {SERVICES.map((service, i) => (
                    <div key={service.id} className="bg-white/5 border border-white/10 p-12 rounded-[50px] backdrop-blur-3xl hover:bg-white/10 transition-all hover:-translate-y-3 group shadow-2xl">
                        <div className="w-20 h-20 bg-yellow-500 rounded-3xl flex items-center justify-center mb-10 transform -rotate-6 group-hover:rotate-0 transition-transform text-blue-950 shadow-2xl">
                            <FileText className="w-10 h-10" />
                        </div>
                        <h3 className="text-3xl font-black mb-6 tracking-tight">{service.title}</h3>
                        <p className="text-blue-100/70 leading-relaxed text-xl">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const NewsSection = () => (
    <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
                centered
                title="Warta Mutu"
                subtitle="Ikuti perkembangan terbaru dan langkah-langkah kemajuan yang kami ambil."
            />
            <div className="grid md:grid-cols-3 gap-12">
                {NEWS.map((item) => (
                    <div key={item.id} className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-[50px] mb-8 aspect-[4/3] shadow-lg">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                                <span className="text-white font-black text-lg">Baca Selengkapnya</span>
                            </div>
                        </div>
                        <span className="text-emerald-600 font-black text-sm uppercase tracking-[0.2em] block mb-4">{item.date}</span>
                        <h3 className="text-2xl font-black text-blue-950 group-hover:text-yellow-600 transition-colors leading-tight mb-4 tracking-tight">
                            {item.title}
                        </h3>
                        <p className="text-slate-500 text-lg leading-relaxed line-clamp-3">{item.excerpt}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Testimonials = () => (
    <section className="py-32 bg-emerald-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-24">
                <div className="text-center max-w-3xl">
                    <SectionHeader centered light title="Suara Civitas" subtitle="Bagaimana dampak nyata LPM bagi kemajuan karir akademik dan institusi." />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
                {TESTIMONIALS.map((testi) => (
                    <div key={testi.id} className="bg-white/5 p-16 rounded-[60px] border border-white/10 relative backdrop-blur-3xl">
                        <div className="absolute top-12 right-16 text-yellow-500/20 text-9xl font-serif font-black">"</div>
                        <p className="text-2xl italic font-medium leading-relaxed mb-12 text-emerald-50 relative z-10">
                            {testi.content}
                        </p>
                        <div className="flex items-center space-x-6">
                            <img src={testi.avatar} alt={testi.name} className="w-20 h-20 rounded-3xl border-4 border-emerald-800 shadow-2xl object-cover" />
                            <div>
                                <div className="font-black text-2xl tracking-tight">{testi.name}</div>
                                <div className="text-emerald-400 font-bold uppercase tracking-widest text-xs mt-1">{testi.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const ContactSection = ({ settings }: { settings: any }) => (
    <section className="py-32 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-[100px] p-12 md:p-24 text-white relative shadow-[0_50px_100px_rgba(15,23,42,0.5)] overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="relative z-10 grid lg:grid-cols-2 gap-24">
                    <div>
                        <SectionHeader
                            light
                            title="Mari Berkolaborasi"
                            subtitle="Tim kami siap membantu setiap unit untuk mencapai standar mutu tertinggi."
                        />
                        <div className="space-y-12">
                            {[
                                { label: 'Alamat Kantor', value: settings?.alamat || 'Gedung Rektorat Utama Lt. 2, Kampus STAIMAN', icon: <MapPin /> },
                                { label: 'Saluran Resmi', value: settings?.email || 'lpm@staiman.ac.id', icon: <Mail /> },
                                { label: 'Layanan Telepon', value: settings?.telepon || '(0321) 888 1234', icon: <Phone /> },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-8 group">
                                    <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-[30px] flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-blue-950 transition-all shadow-xl">
                                        {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                                    </div>
                                    <div>
                                        <div className="text-xs text-blue-300 uppercase tracking-[0.3em] font-black mb-2">{item.label}</div>
                                        <div className="text-2xl font-bold tracking-tight">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-3xl p-16 rounded-[80px] border border-white/10 shadow-2xl">
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-blue-300 uppercase tracking-widest ml-1">Nama Lengkap</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 outline-none focus:ring-4 focus:ring-yellow-500/30 transition-all font-bold" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-blue-300 uppercase tracking-widest ml-1">Email Institusi</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 outline-none focus:ring-4 focus:ring-yellow-500/30 transition-all font-bold" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black text-blue-300 uppercase tracking-widest ml-1">Perihal / Masukan</label>
                                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 outline-none focus:ring-4 focus:ring-yellow-500/30 transition-all font-bold resize-none"></textarea>
                            </div>
                            <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-blue-950 py-6 rounded-3xl font-black text-xl uppercase tracking-widest shadow-[0_20px_40px_rgba(234,179,8,0.3)] transition-all active:scale-95">
                                Kirim Sekarang
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default function HomePage({ onNavigate, categories = [], isLoggedIn, settings }: { onNavigate: (p: string) => void; categories?: any[]; isLoggedIn?: boolean; settings?: any }) {
    // Helper to check if category exists in API
    const getCatId = (name: string) => categories.find(c => c.nama.toLowerCase().includes(name.toLowerCase()))?.id;

    return (
        <div className="min-h-screen bg-white">
            <Hero onNavigate={onNavigate} getCatId={getCatId} />
            <Impact />
            <About />
            <Services />
            <NewsSection />
            <Testimonials />
            <ContactSection settings={settings} />
        </div>
    );
}
