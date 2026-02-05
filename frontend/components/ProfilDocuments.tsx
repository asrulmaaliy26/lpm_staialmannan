import React, { useEffect, useState } from 'react';
import { getKategoriProfil, getProfils, downloadProfil, login } from '../services/api';
import { Download, Lock, FileText } from 'lucide-react';

const ProfilDocuments = () => {
    const [categories, setCategories] = useState<any[]>([]);
    const [documents, setDocuments] = useState<any[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<number | undefined>(undefined);
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        loadCategories();
    }, []);

    useEffect(() => {
        if (isLoggedIn) {
            loadDocuments(selectedCategory);
        } else {
            setDocuments([]);
        }
    }, [isLoggedIn, selectedCategory]);

    const loadCategories = async () => {
        try {
            const res = await getKategoriProfil();
            setCategories(res.data.data);
            // Optional: Default select first category?
            // if (res.data.data.length > 0) setSelectedCategory(res.data.data[0].id);
        } catch (e) {
            console.error(e);
        }
    };

    const loadDocuments = async (catId?: number) => {
        try {
            const res = await getProfils(catId);
            setDocuments(res.data.data);
        } catch (e) {
            console.error(e);
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await login({ email, password });
            localStorage.setItem('token', res.data.token);
            setIsLoggedIn(true);
            setError('');
        } catch (e) {
            setError('Login failed. Check credentials.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setDocuments([]);
    };

    return (
        <div className="py-12 bg-gray-50 rounded-2xl p-8 mt-10 w-full max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-blue-950 mb-6 text-center">Dokumen Profil & Mutu</h3>

            {!isLoggedIn ? (
                <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto border border-gray-100">
                    <div className="flex items-center justify-center mb-6 text-amber-500">
                        <div className="p-4 bg-amber-50 rounded-full">
                            <Lock className="w-8 h-8" />
                        </div>
                    </div>
                    <p className="text-center text-gray-600 mb-6 font-medium">Area Terbatas.<br />Silahkan login untuk mengakses dokumen.</p>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">{error}</p>}
                        <button type="submit" className="w-full bg-blue-950 text-white py-3 rounded-lg hover:bg-blue-900 transition-colors font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            Masuk
                        </button>
                    </form>
                </div>
            ) : (
                <div>
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto noscrollbar">
                            <button
                                onClick={() => setSelectedCategory(undefined)}
                                className={`px-5 py-2 rounded-full whitespace-nowrap transition-all font-medium border ${!selectedCategory ? 'bg-blue-950 text-white border-blue-950 shadow-md' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
                            >
                                Semua
                            </button>
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-5 py-2 rounded-full whitespace-nowrap transition-all font-medium border ${selectedCategory === cat.id ? 'bg-blue-950 text-white border-blue-950 shadow-md' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
                                >
                                    {cat.nama}
                                </button>
                            ))}
                        </div>
                        <button onClick={handleLogout} className="text-red-500 text-sm font-bold hover:bg-red-50 px-4 py-2 rounded-lg transition-colors border border-transparent hover:border-red-100">
                            Sign Out
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {documents.length === 0 ? (
                            <div className="col-span-2 text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
                                <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                                <p className="text-gray-500">Tidak ada dokumen tersedia di kategori ini.</p>
                            </div>
                        ) : (
                            documents.map(doc => (
                                <div key={doc.id} className="flex items-center justify-between bg-white p-5 rounded-xl border border-gray-100 hover:shadow-lg transition-all group hover:border-emerald-100">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 text-lg group-hover:text-blue-950 transition-colors">{doc.judul}</h4>
                                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{doc.kategori_profil?.nama} • PDF</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <button
                                            onClick={() => downloadProfil(doc.id, doc.judul)}
                                            className="text-emerald-600 hover:text-emerald-700 p-3 hover:bg-emerald-50 rounded-xl transition-colors border border-transparent hover:border-emerald-200"
                                            title="Download Document"
                                        >
                                            <Download className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilDocuments;
