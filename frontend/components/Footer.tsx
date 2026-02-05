import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
    onNavigate: (page: string) => void;
    settings?: any;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, settings }) => {
    const handleLinkClick = (page: string, e: React.MouseEvent) => {
        e.preventDefault();
        onNavigate(page);
    };

    return (
        <footer className="bg-slate-950 text-slate-500 pt-32 pb-12 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-16 pb-20 border-b border-slate-900">
                    <div className="col-span-1">
                        <div className="flex items-center space-x-3 mb-8">
                            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold">S</div>
                            <h4 className="text-white font-bold text-lg">STAIMAN</h4>
                        </div>
                        <p className="text-sm leading-relaxed">Institusi Pendidikan Tinggi Agama Islam yang berdedikasi pada keunggulan mutu dan integritas akademik.</p>
                    </div>
                    <div>
                        <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Menu Navigasi</h5>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" onClick={(e) => handleLinkClick('home', e)} className="hover:text-gold transition-colors">Beranda</a></li>
                            <li><a href="#" onClick={(e) => handleLinkClick('prestasi', e)} className="hover:text-gold transition-colors">Prestasi</a></li>
                            <li><a href="#" onClick={(e) => handleLinkClick('berita', e)} className="hover:text-gold transition-colors">Berita Utama</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Social Media</h5>
                        <div className="flex space-x-4">
                            <a href={settings?.social_facebook || '#'} target="_blank" className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center hover:bg-gold hover:text-blue-950 transition-all shadow-sm"><Facebook className="w-5 h-5" /></a>
                            <a href={settings?.social_instagram || '#'} target="_blank" className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center hover:bg-gold hover:text-blue-950 transition-all shadow-sm"><Instagram className="w-5 h-5" /></a>
                            <a href={settings?.social_twitter || '#'} target="_blank" className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center hover:bg-gold hover:text-blue-950 transition-all shadow-sm"><Twitter className="w-5 h-5" /></a>
                            <a href={settings?.social_youtube || '#'} target="_blank" className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center hover:bg-gold hover:text-blue-950 transition-all shadow-sm"><Youtube className="w-5 h-5" /></a>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Informasi</h5>
                        <p className="text-xs mb-4">Butuh bantuan portal?</p>
                        <button className="text-gold font-bold text-xs uppercase underline hover:text-white transition-colors">Hubungi Helpdesk</button>
                    </div>
                </div>
                <div className="pt-12 text-center text-[10px] font-bold uppercase tracking-[0.4em]">
                    <p>© {new Date().getFullYear()} LPM STAIMAN (Sekolah Tinggi Agama Islam Al-Mannan). All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
