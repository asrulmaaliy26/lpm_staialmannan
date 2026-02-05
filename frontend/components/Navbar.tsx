import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';

interface NavbarProps {
    onNavigate: (page: string) => void;
    isLoggedIn: boolean;
    onLogout: () => void;
    categories?: any[];
    user?: any;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, isLoggedIn, onLogout, categories = [], user }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (href: string, e: React.MouseEvent) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    // Construct dynamic menu
    const dynamicMenu = [
        { label: 'Beranda', href: 'home' },
        ...(categories || []).map(cat => ({
            label: cat.nama,
            href: `category-${cat.id}`
        })),
    ];

    const handleClick = (href: string, e: React.MouseEvent) => {
        e.preventDefault();
        onNavigate(href);
        setIsOpen(false);
    };

    return (
        <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white shadow-xl py-2' : 'bg-blue-950 py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-3 cursor-pointer" onClick={(e) => handleClick('home', e)}>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${isScrolled ? 'bg-blue-900 text-white' : 'bg-white text-blue-900'}`}>S</div>
                        <div>
                            <span className={`block font-bold text-lg leading-tight ${isScrolled ? 'text-blue-900' : 'text-white'}`}>LPM STAIMAN</span>
                            <span className={`block text-[10px] uppercase tracking-widest font-bold ${isScrolled ? 'text-emerald-700' : 'text-emerald-200'}`}>Pendidikan Berkualitas</span>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center space-x-1">
                        {dynamicMenu.map((item) => (
                            <div key={item.label} className="px-3 py-2 text-white">
                                <a
                                    href={`#${item.href}`}
                                    onClick={(e) => handleClick(item.href, e)}
                                    className={`text-sm font-bold uppercase tracking-wider hover:text-gold transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}
                                >
                                    {item.label}
                                </a>
                            </div>
                        ))}
                        {isLoggedIn ? (
                            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-white/10">
                                <div className="flex items-center space-x-2">
                                    <div className={`p-1.5 rounded-lg ${isScrolled ? 'bg-blue-50 text-blue-900' : 'bg-white/10 text-white'}`}>
                                        <User className="w-4 h-4" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={`text-[10px] font-black uppercase tracking-tighter ${isScrolled ? 'text-slate-400' : 'text-white/50'}`}>Administrator</span>
                                        <span className={`text-xs font-bold leading-none ${isScrolled ? 'text-blue-950' : 'text-white'}`}>{user?.name || 'Admin'}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={onLogout}
                                    className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${isScrolled ? 'bg-red-50 text-red-600 hover:bg-red-600 hover:text-white shadow-sm' : 'bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-md'}`}
                                >
                                    Keluar
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={(e) => handleClick('login', e as any)}
                                className={`ml-4 px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 ${isScrolled ? 'bg-blue-900 text-white hover:bg-yellow-500 hover:text-blue-950' : 'bg-yellow-500 text-blue-950 hover:bg-white hover:text-blue-900'}`}
                            >
                                Masuk
                            </button>
                        )}
                    </div>

                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? 'text-blue-900' : 'text-white'}`}>
                            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden bg-white shadow-2xl absolute top-full left-0 w-full max-h-[90vh] overflow-y-auto">
                    <div className="px-4 py-6 space-y-1">
                        {isLoggedIn && (
                            <div className="px-4 py-6 bg-slate-50 rounded-3xl mb-4 flex items-center space-x-4">
                                <div className="w-12 h-12 bg-blue-900 rounded-2xl flex items-center justify-center text-white">
                                    <User className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Login Sebagai</div>
                                    <div className="text-lg font-black text-blue-950">{user?.name || 'Admin'}</div>
                                    <div className="text-xs text-slate-500">{user?.email}</div>
                                </div>
                            </div>
                        )}
                        {dynamicMenu.map((item) => (
                            <div key={item.label} className="border-b border-slate-50">
                                <a
                                    href={`#${item.href}`}
                                    onClick={(e) => handleClick(item.href, e)}
                                    className="block px-4 py-4 text-sm font-bold text-slate-800 uppercase"
                                >
                                    {item.label}
                                </a>
                            </div>
                        ))}
                        <div className="pt-4">
                            {isLoggedIn ? (
                                <button
                                    onClick={onLogout}
                                    className="w-full text-left px-4 py-6 text-sm font-black text-red-600 uppercase"
                                >
                                    Keluar dari Akun
                                </button>
                            ) : (
                                <button
                                    onClick={(e) => handleClick('login', e as any)}
                                    className="w-full text-left px-4 py-6 text-sm font-black text-blue-900 uppercase"
                                >
                                    Masuk ke Portal
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
