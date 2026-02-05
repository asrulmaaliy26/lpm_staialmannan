import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    dark?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, centered = false, dark = false }) => (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
        <div className={`flex items-center space-x-2 mb-3 ${centered ? 'justify-center' : ''}`}>
            <div className="h-1 w-12 bg-gold"></div>
            <span className="text-gold font-bold text-sm tracking-widest uppercase">Ekselensi & Mutu</span>
        </div>
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${dark ? 'text-white' : 'text-blue-950'}`}>{title}</h2>
        {subtitle && <p className={`text-lg max-w-3xl leading-relaxed ${centered ? 'mx-auto' : ''} ${dark ? 'text-blue-100' : 'text-slate-500'}`}>{subtitle}</p>}
    </div>
);

export default SectionHeader;
