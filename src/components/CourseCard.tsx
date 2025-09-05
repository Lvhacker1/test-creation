'use client'
import { CourseCardProps } from "@/types/types";
import { useState } from "react";

const CourseCard = ({language, topic, role, description, fullDescription}: CourseCardProps) => {
    const [showDescription, setShowDescription] = useState(false);
    const handleToggle = () => setShowDescription(prev => !prev);

    return (
        <div>
            <h3>{language}</h3>
            <h4>{topic}</h4>
            <h4>{role}</h4>
            <p>{description}</p>
            {showDescription && (
                <p>{fullDescription}</p>
            )}
            <button onClick={handleToggle}>
                {showDescription ? "Read Less" : "Read More"}
            </button>
        </div>
    )
}

export default CourseCard;