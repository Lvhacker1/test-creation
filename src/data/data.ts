import { CodeBlockProps, CourseCardProps, NavLinks } from "@/types/types";

export const navLinks: NavLinks[] = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/about" },
];

export const codeBlockProps: CodeBlockProps[] = [
    { code: "console.log('Hello, world!');", language: "javascript" },
    { code: "print('Hello')", language: "Python" },
    { code: "let x: number = 5;", language: "TypeScript" },
    { code: "#include <iostream>\nint main() { std::cout << \"Hello\"; }", language: "C++" },
    { code: "public class Main { public static void main(String[] args) { System.out.println(\"Hello\"); } }", language: "Java" },
    { code: "echo 'Hello';", language: "PHP" },
    { code: "puts 'Hello'", language: "Ruby" },
    { code: "printf(\"Hello\\n\");", language: "C" },
    { code: "echo Hello", language: "Bash" },
    { code: "fn main() { println!(\"Hello\"); }", language: "Rust" }
];

export const courseCards: CourseCardProps[] = [
    {
        language: "", 
        topic: "", 
        role: "", 
        description: "", 
        fullDescription: ""
    },
    {
        language: "", 
        topic: "", 
        role: "", 
        description: "", 
        fullDescription: ""
    },
    {
        language: "", 
        topic: "", 
        role: "", 
        description: "", 
        fullDescription: ""
    },
    {
        language: "", 
        topic: "", 
        role: "", 
        description: "", 
        fullDescription: ""
    },
    {
        language: "", 
        topic: "", 
        role: "", 
        description: "", 
        fullDescription: ""
    },
    {
        language: "", 
        topic: "", 
        role: "", 
        description: "", 
        fullDescription: ""
    },
    {
        language: "", 
        topic: "", 
        role: "", 
        description: "", 
        fullDescription: ""
    },
    {
        language: "", 
        topic: "", 
        role: "", 
        description: "", 
        fullDescription: ""
    },
    {
        language: "", 
        topic: "", 
        role: "", 
        description: "", 
        fullDescription: ""
    },
    {
        language: "", 
        topic: "", 
        role: "", 
        description: "", 
        fullDescription: ""
    }
]