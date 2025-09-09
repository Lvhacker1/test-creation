export interface NavLinks {
    name: string;
    href: string;
}

export interface CodeBlockProps {
    code: string;
    language: string;
}

export interface CourseCardProps {
    language: string;
    topic: string;
    role: string;
    description: string;
    fullDescription: string;
}

export interface PageIntroProps {
    title: string;
    description: string;
}

export interface FooterProops {
    copyright: string;
    description: string;
    year: number;
}

export interface AboutSectionTypes {
    name: string;
    role: string;
    description: string;
}

export interface ActionButtonTypes {
    title: string;
    href: string;
    description: string;
}