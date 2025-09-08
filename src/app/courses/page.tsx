import CodeBlock from "@/components/CodeBlock";
import CourseCard from "@/components/CourseCard";
import PageIntro from "@/components/PageIntro";
import { codeBlockProps, courseCards, pageIntroData } from "@/data/data";

const CoursesPage = () => {
    const intro = pageIntroData["courses"]

    return (
        <main className="flex flex-col gap-15 p-5 lg:px-15">
            <div>
                <PageIntro {...intro} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {courseCards.map((course, index) => (
                    <CourseCard
                    key={index}
                    language={course.language}
                    topic={course.topic}
                    role={course.role}
                    description={course.description}
                    fullDescription={course.fullDescription}
                    />
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {codeBlockProps.map((codeBlockProps, index ) => 
                <CodeBlock key={index} code={codeBlockProps.code} language={codeBlockProps.language} />
            )}
            </div>
        </main>
    )
}

export default CoursesPage;