
import { NavItem, Achievement, Service, DocumentItem, NewsItem, Testimonial } from './types';

export const NAV_MENU: NavItem[] = [
  { label: 'Beranda', href: '#home' },
  { label: 'Profil', href: '#profil' },
  { label: 'Akreditasi', href: '#akreditasi' },
  { label: 'Penjaminan Mutu', href: '#mutu' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Prestasi', href: '#prestasi' },
  { label: 'Berita', href: '#berita' },
  { label: 'Kontak', href: '#kontak' },
];

export const PROFILE_CONTENT = {
  sambutan: {
    title: "Sambutan Ketua LPM",
    content: "Assalamu'alaikum Wr. Wb. Lembaga Penjaminan Mutu (LPM) STAIMAN berkomitmen penuh dalam mengawal standar mutu pendidikan tinggi. Kepercayaan masyarakat adalah amanah yang kami jaga melalui sistem evaluasi dan monitoring yang ketat demi melahirkan lulusan yang kompeten dan berakhlaqul karimah.",
    author: "Drs. H. Ahmad Fauzi, M.Pd.I",
    role: "Ketua LPM STAIMAN"
  },
  profilStaiman: {
    title: "Profil STAIMAN",
    content: "Sekolah Tinggi Agama Islam Al-Mannan (STAIMAN) adalah institusi pendidikan tinggi Islam yang berfokus pada integrasi ilmu agama dan sains modern. Berdiri sejak tahun 2005, kami terus berinovasi dalam memberikan layanan pendidikan terbaik di Jawa Timur.",
    vision: "Menjadi pusat keunggulan pendidikan Islam yang berdaya saing global pada tahun 2030."
  },
  tupoksi: {
    title: "Tupoksi LPM",
    tasks: [
      "Perencanaan dan pelaksanaan sistem penjaminan mutu internal secara menyeluruh.",
      "Penetapan standar mutu akademik institusi.",
      "Pelaksanaan monitoring dan evaluasi internal secara berkala.",
      "Koordinasi persiapan akreditasi program studi dan institusi."
    ]
  }
};

export const DOCUMENTS_BY_CATEGORY: Record<string, DocumentItem[]> = {
  'izin-prodi': [
    { id: 'acc1', title: 'Panduan Pembukaan Prodi Baru 2024', category: 'Akreditasi', fileSize: '2.4 MB', downloadUrl: '#' },
    { id: 'acc2', title: 'Instrumen Pemenuhan Syarat Minimum Akreditasi', category: 'Akreditasi', fileSize: '1.8 MB', downloadUrl: '#' },
  ],
  'dokumen-akreditasi': [
    { id: 'acc3', title: 'Laporan Evaluasi Diri (LED) Institusi', category: 'Akreditasi', fileSize: '5.2 MB', downloadUrl: '#' },
    { id: 'acc4', title: 'Borang Akreditasi Prodi PAI', category: 'Akreditasi', fileSize: '3.1 MB', downloadUrl: '#' },
  ],
  'template-rps': [
    { id: 'mutu1', title: 'Template RPS Berbasis OBE', category: 'Kurikulum', fileSize: '1.1 MB', downloadUrl: '#' },
    { id: 'mutu2', title: 'Contoh Silabus Integratif', category: 'Kurikulum', fileSize: '950 KB', downloadUrl: '#' },
  ],
  'sk-rektor': [
    { id: 'mutu3', title: 'SK Rektor No. 102 Tentang Standar Mutu', category: 'Kebijakan', fileSize: '2.1 MB', downloadUrl: '#' },
    { id: 'mutu4', title: 'Pedoman Kode Etik Dosen & Mahasiswa', category: 'Kebijakan', fileSize: '1.4 MB', downloadUrl: '#' },
  ]
};

export const POPULAR_DOCUMENTS: DocumentItem[] = [
  { id: 'doc1', title: 'Pedoman Akademik 2025', category: 'Pedoman', fileSize: '2.5 MB', downloadUrl: '#' },
  { id: 'doc2', title: 'Manual Mutu SPMI', category: 'SPMI', fileSize: '1.8 MB', downloadUrl: '#' },
  { id: 'doc3', title: 'Formulir Audit Mutu Internal', category: 'Formulir', fileSize: '500 KB', downloadUrl: '#' },
];


export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Audit Mutu Internal',
    description: 'Layanan evaluasi sistematis untuk memastikan kesesuaian proses akademik dengan standar mutu yang ditetapkan.',
    icon: 'ShieldCheck'
  },
  {
    id: '2',
    title: 'Sistem Informasi Mutu',
    description: 'Platform digital terintegrasi untuk pengelolaan data dan dokumentasi penjaminan mutu.',
    icon: 'Monitor'
  },
  {
    id: '3',
    title: 'Survei Kepuasan',
    description: 'Layanan survei dan analisis kepuasan pemangku kepentingan terhadap layanan pendidikan.',
    icon: 'MessageSquare'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Dr. Siti Aminah, M.Pd.',
    role: 'Kaprodi PAI',
    content: 'Pendampingan dari LPM sangat membantu kami dalam meraih akreditasi Unggul. Sistem monitoring yang diterapkan sangat efektif.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't2',
    name: 'Budi Santoso, S.Kom.',
    role: 'Alumni',
    content: 'Budaya mutu yang dibangun di STAIMAN membekali kami dengan kompetensi yang relevan dengan dunia kerja.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Workshop Audit Mutu Internal (AMI) 2025',
    date: '15 Feb 2025',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop',
    excerpt: 'LPM STAIMAN menggelar penyegaran bagi auditor internal kampus untuk menjamin kualitas prodi.'
  },
  {
    id: '2',
    title: 'Sosialisasi Instrumen IPEPA',
    date: '10 Feb 2025',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=600&auto=format&fit=crop',
    excerpt: 'Upaya pemantauan peringkat akreditasi secara otomatis oleh BAN-PT disosialisasikan kepada pimpinan.'
  },
  {
    id: '3',
    title: 'LPM STAIMAN Menuju Sertifikasi ISO',
    date: '02 Feb 2025',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop',
    excerpt: 'Persiapan administrasi dan infrastruktur mutu untuk standarisasi internasional ISO 9001:2015.'
  }
];
