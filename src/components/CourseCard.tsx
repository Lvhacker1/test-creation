'use client'
import { CourseCardProps } from "@/types/types";
import { useState } from "react";

const CourseCard = ({language, topic, role, description, fullDescription}: CourseCardProps) => {
    const [showDescription, setShowDescription] = useState(false);
    const handleToggle = () => setShowDescription(prev => !prev);

    return (
        <div className="flex flex-col justify-between gap-3 p-6 w-full mx-auto bg-white dark:bg-gray-800 rounded-lg  border-gray-200 dark:border-gray-700 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 ">{language}</h3>
            <h4 className="text-md font-medium text-gray-700 dark:text-gray-300">{topic}</h4>
            <h4 className="text-md font-medium text-gray-700 dark:text-gray-300 ">{role}</h4>
            <p className="text-gray-600 dark:text-gray-400 ">{description}</p>
            {showDescription && (
                <p className="text-gray-600 dark:text-gray-400 mb-4 overflow-auto">{fullDescription}</p>
            )}
            <button className="mt-auto p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                onClick={handleToggle}>
                {showDescription ? "Read Less" : "Read More"}
            </button>
        </div>
    )
}

export default CourseCard;