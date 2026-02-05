import React from 'react';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    image: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, image }) => (
    <section className="relative h-[45vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/60 to-blue-900/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">{title}</h1>
                {subtitle && <p className="text-lg md:text-xl text-blue-50/90 leading-relaxed">{subtitle}</p>}
            </div>
        </div>
    </section>
);

export default PageHero;
