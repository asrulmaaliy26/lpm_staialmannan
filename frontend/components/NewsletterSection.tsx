import React from 'react';

const NewsletterSection: React.FC = () => (
    <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h3 className="text-3xl font-bold mb-4">Dapatkan Update Mutu Berkala</h3>
            <p className="text-blue-200 mb-8">Berlangganan buletin LPM STAIMAN untuk mendapatkan info workshop dan pedoman terbaru.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input type="email" placeholder="Alamat Email Anda" className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gold" />
                <button className="bg-gold text-blue-950 px-8 py-4 rounded-full font-bold hover:bg-white transition-colors">Berlangganan</button>
            </div>
        </div>
    </section>
);

export default NewsletterSection;
