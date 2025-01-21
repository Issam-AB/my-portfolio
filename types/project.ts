export interface Project {
    id: number;
    name: string;
    slug: string;
    description: string;
    img: string;
    images: string[];
    iconLists: string[];
    link: string;
    github?: string;
    language: string;
}

