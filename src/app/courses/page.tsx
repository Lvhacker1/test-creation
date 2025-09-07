import CourseCard from "@/components/CourseCard";
import PageIntro from "@/components/PageIntro";
import { courseCards, pageIntroData } from "@/data/data";

const CoursesPage = () => {
    const intro = pageIntroData["courses"]

    return (
        <main>
            <div>
                <PageIntro {...intro} />
            </div>
            <div>
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
        </main>
    )
}

export default CoursesPage;