import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

// Interceptor to add token
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const login = (data: any) => api.post('/login', data);
export const logout = () => api.post('/logout');
export const getMe = () => api.get('/me');
export const getKategoriProfil = () => api.get('/kategori-profil');
export const getSettings = () => api.get('/settings');

export const downloadProfil = async (id: number, filename: string) => {
    try {
        const response = await api.get(`/profils/${id}/download`, { responseType: 'blob' });

        // If it's too small, it might be a JSON error message instead of a PDF
        if (response.data.size < 500) {
            const text = await response.data.text();
            try {
                const json = JSON.parse(text);
                if (json.message) {
                    alert(json.message);
                    return;
                }
            } catch (e) {
                // Not JSON, proceed with download
            }
        }

        triggerDownload(response.data, filename);
    } catch (err: any) {
        console.error('Download failed:', err);
        let errorMsg = 'Gagal mengunduh berkas. Pastikan Anda sudah login dan berkas tersedia.';

        if (err.response?.data instanceof Blob) {
            const text = await err.response.data.text();
            try {
                const json = JSON.parse(text);
                errorMsg = json.message || errorMsg;
            } catch (e) { }
        }

        alert(errorMsg);
        throw err;
    }
};

const triggerDownload = (data: Blob, filename: string) => {
    const finalFilename = filename.toLowerCase().endsWith('.pdf') ? filename : `${filename}.pdf`;
    const url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', finalFilename);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
};

export const getProfils = (kategoriId?: number) => {
    const url = kategoriId ? `/kategori-profil/${kategoriId}/profils` : '/profils';
    return api.get(url);
};

export { api };
export default api;
