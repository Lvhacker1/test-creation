import { CodeBlockProps, CourseCardProps, NavLinks, PageIntroProps } from "@/types/types";

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
        language: "JavaScript",
        topic: "Web Development",
        role: "Websites, Frontend, Backend (Node.js)",
        description: "JavaScript is a versatile language used for interactive web development.",
        fullDescription: "JavaScript runs both in the browser and on servers via Node.js. It supports object-oriented, imperative, and functional programming styles, making it suitable for almost any type of web project."
    },
    {
        language: "Python",
        topic: "Data Science",
        role: "Data Analysis, AI, Web",
        description: "Python is readable and widely used in data science.",
        fullDescription: "Python has a simple syntax and a large ecosystem of libraries. It is widely used in data analysis, AI, web development, automation, and scripting tasks."
    },
    {
        language: "TypeScript",
        topic: "Web Development",
        role: "Large-Scale Web Applications",
        description: "TypeScript adds types to JavaScript for safer code.",
        fullDescription: "TypeScript helps catch errors early and improves maintainability in large projects. It compiles to plain JavaScript and integrates seamlessly with modern frameworks like React and Angular."
    },
    {
        language: "C++",
        topic: "System Programming",
        role: "Games, Performance-Critical Applications",
        description: "C++ is used for high performance applications.",
        fullDescription: "C++ is powerful for system programming, game development, and performance-critical applications. Supports both procedural and object-oriented programming and provides fine control over memory."
    },
    {
        language: "Java",
        topic: "Backend",
        role: "Enterprise Apps, Backend Services",
        description: "Java runs on any platform via JVM.",
        fullDescription: "Java is portable across platforms thanks to the Java Virtual Machine. Widely used for backend services, enterprise systems, and Android app development."
    },
    {
        language: "PHP",
        topic: "Web Development",
        role: "Websites, CMS",
        description: "PHP is a server-side scripting language.",
        fullDescription: "PHP is mainly used for web development and server-side scripting. Powers many websites, content management systems, and e-commerce platforms."
    },
    {
        language: "Ruby",
        topic: "Backend",
        role: "Web Applications",
        description: "Ruby is dynamic and simple for web development.",
        fullDescription: "Ruby is known for simplicity and productivity. Popularized by the Ruby on Rails framework, making rapid web development and clean code possible."
    },
    {
        language: "C",
        topic: "System Programming",
        role: "Operating Systems, Embedded Systems",
        description: "C is foundational for system programming.",
        fullDescription: "C provides low-level memory access and efficiency. Often used in operating systems, embedded devices, and performance-critical applications."
    },
    {
        language: "Bash",
        topic: "System Administration",
        role: "Automation, Scripting",
        description: "Bash automates tasks in Unix environments.",
        fullDescription: "Bash is a Unix shell and command language used to automate tasks, manage systems, and write scripts for DevOps and system administration."
    },
    {
        language: "Rust",
        topic: "System Programming",
        role: "Safe, High-Performance Applications",
        description: "Rust is safe and fast for system programming.",
        fullDescription: "Rust focuses on safety and performance. It prevents common bugs like null pointer dereferences and data races, making it ideal for high-performance, safe applications."
    }
]

export const pageIntroData: Record<string, PageIntroProps> = {
    home: {
        title: "Welcome to homeblablabla",
        description: "blabalbalabfosld,äö,asndjlmdölöll,s"
    },
    courses: {
        title: "Welcome to coursesblablabla",
        description: "blabalbalabajkhdk,grefefwedededll,s"
    },
    about: {
        title: "About jshnlskjmxblablabla",
        description: "blabalbalabajkhdkodköldk,össdfsdtghthts"
    }
}