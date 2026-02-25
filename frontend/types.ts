export interface NavItem {
    label: string;
    href: string;
    dropdown?: {
        label: string;
        description?: string;
        href: string;
    }[];
}

export interface Achievement {
    id: string;
    title: string;
    category: "Mahasiswa" | "Dosen" | "Institusi";
    year: string;
    image: string;
    description: string;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface DocumentItem {
    id: string;
    title: string;
    category: string;
    fileSize: string;
    downloadUrl: string;
}

export interface NewsItem {
    id: string;
    title: string;
    date: string;
    image?: string; // local fallback
    main_image?: string; // from admin API
    excerpt: string;
    content?: string;
    category?: string;
    jenjang?: string;
    views?: number;
    gallery?: string[];
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    avatar: string;
}
