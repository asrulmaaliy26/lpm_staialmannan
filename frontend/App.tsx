import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import { login, getProfils, getKategoriProfil, getSettings, getMe } from './services/api';
import { Lock } from 'lucide-react';

import { PROFILE_CONTENT, DOCUMENTS_BY_CATEGORY } from './constants';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [authError, setAuthError] = useState('');
  const [apiDocuments, setApiDocuments] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [homeSettings, setHomeSettings] = useState<any>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      const [catRes, docRes, settingsRes] = await Promise.all([
        getKategoriProfil(),
        getProfils(),
        getSettings()
      ]);
      setCategories(catRes.data.data);
      setApiDocuments(docRes.data.data);
      setHomeSettings(settingsRes.data.data);

      if (isLoggedIn && !user) {
        const userRes = await getMe();
        setUser(userRes.data.data);
      }
    } catch (e) {
      console.error('Failed to fetch initial data:', e);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchInitialData();
    }
  }, [isLoggedIn]);

  const handleGlobalLogin = async (data: any) => {
    try {
      const res = await login(data);
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      setIsLoggedIn(true);
      setAuthError('');
      fetchInitialData();
    } catch (e: any) {
      const msg = e.response?.data?.message || 'Login Gagal. Periksa email & password.';
      setAuthError(msg);
    }
  };

  const handleGlobalLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUser(null);
    setApiDocuments([]);
  };

  const getDocsForCategory = (catName: string) => {
    // Filter docs from API based on category name
    const fromApi = apiDocuments.filter(doc =>
      doc.kategori_profils?.nama.toLowerCase().includes(catName.toLowerCase()) ||
      doc.judul.toLowerCase().includes(catName.toLowerCase())
    );
    if (fromApi.length > 0) {
      return fromApi.map(d => ({
        id: d.id.toString(),
        title: d.judul,
        category: d.kategori_profils?.nama || 'Umum',
        fileSize: 'API Document',
        downloadUrl: '#'
      }));
    }
    // Fallback to static if none in API for that specific filter (just in case)
    return DOCUMENTS_BY_CATEGORY[catName] || [];
  };

  const renderProtectedPage = (pageContent: React.ReactNode) => {
    if (!isLoggedIn) {
      return (
        <div className="pt-32 pb-20 px-4 max-w-md mx-auto">
          <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-blue-50">
            <div className="flex justify-center mb-8">
              <div className="p-5 bg-amber-50 rounded-3xl">
                <Lock className="w-10 h-10 text-amber-500" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center text-blue-950 mb-2">Area Terbatas</h2>
            <p className="text-center text-slate-500 mb-8">Silakan masuk untuk mengakses dokumen resmi LPM STAIMAN.</p>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              handleGlobalLogin(Object.fromEntries(formData));
            }}>
              <input name="email" type="email" placeholder="Email" required className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-900 outline-none" />
              <input name="password" type="password" placeholder="Password" required className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-900 outline-none" />
              {authError && <p className="text-red-500 text-sm text-center font-bold bg-red-50 p-3 rounded-xl">{authError}</p>}
              <button type="submit" className="w-full bg-blue-900 text-white py-4 rounded-2xl font-bold hover:bg-gold transition-all shadow-lg active:scale-95">Masuk</button>
            </form>
          </div>
        </div>
      );
    }
    return pageContent;
  };

  const renderContent = () => {
    if (currentPage.startsWith('category-')) {
      const catId = parseInt(currentPage.split('-')[1]);
      const category = categories.find(c => c.id === catId);
      if (category) {
        // Filter docs for this specific category ID
        const docs = apiDocuments.filter(doc => doc.kategori_profil_id === catId || doc.kategori_profils?.id === catId).map(d => ({
          id: d.id.toString(),
          title: d.judul,
          category: category.nama,
          fileSize: 'Format PDF',
          downloadUrl: '#'
        }));

        return (
          <DetailPage
            title={category.nama}
            type="docs"
            data={docs}
            image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200"
            onBack={() => setCurrentPage('home')}
            isLoggedIn={isLoggedIn}
          />
        );
      }
    }

    switch (currentPage) {
      case 'home': return <HomePage categories={categories} onNavigate={setCurrentPage} isLoggedIn={isLoggedIn} settings={homeSettings} />;
      case 'login': return renderProtectedPage(<div className="py-40 text-center font-bold text-2xl text-blue-900 bg-slate-50 min-h-screen">Anda sudah masuk sebagai Admin.</div>);
      case 'sambutan': return <DetailPage title="Sambutan Ketua LPM" type="profile" content={PROFILE_CONTENT.sambutan} image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200" onBack={() => setCurrentPage('home')} isLoggedIn={isLoggedIn} />;
      case 'profil-staiman': return <DetailPage title="Profil STAIMAN" type="profile" content={PROFILE_CONTENT.profilStaiman} image="https://images.unsplash.com/photo-1541339906194-e1610bd11037?q=80&w=1200" onBack={() => setCurrentPage('home')} isLoggedIn={isLoggedIn} />;
      case 'tupoksi': return <DetailPage title="Tupoksi LPM" type="profile" content={PROFILE_CONTENT.tupoksi} image="https://images.unsplash.com/photo-1454165833767-027508496b41?q=80&w=1200" onBack={() => setCurrentPage('home')} isLoggedIn={isLoggedIn} />;
      default: return <HomePage categories={categories} onNavigate={setCurrentPage} isLoggedIn={isLoggedIn} settings={homeSettings} />;
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="min-h-screen selection:bg-gold selection:text-blue-950 font-sans antialiased text-slate-900">
      <Navbar onNavigate={setCurrentPage} isLoggedIn={isLoggedIn} onLogout={handleGlobalLogout} categories={categories} user={user} />
      <main className="min-h-screen">
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentPage} settings={homeSettings} />
    </div>
  );
}
