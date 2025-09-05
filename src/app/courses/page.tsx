import CourseCard from "@/components/CourseCard";
import { courseCards } from "@/data/data";

const CoursesPage = () => {
    return (
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
    )
}

export default CoursesPage;