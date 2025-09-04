export interface NavLinks {
    name: string;
    href: string;
}

export interface CodeBlockData {
    code: string;
    language: string;
}

export interface CodeBlockProps {
    code: string;
    language: string;
    onRun?: () => void;
}