'use client'
import { CourseCardTypes } from "@/types/types";
import { useState } from "react";

const CourseCard = ({language, topic, role, description, fullDescription}: CourseCardTypes) => {
    const [showDescription, setShowDescription] = useState(false);
    const handleToggle = () => setShowDescription(prev => !prev);

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{language}</h3>
                <h4 className="text-md font-medium text-gray-700 dark:text-gray-300">{topic}</h4>
                <h4 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">{role}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
                <div className={`transition-all duration-300 ${showDescription ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="pt-6 border-t border-gray-200 dark:border-gray-600">
                        <p className="text-md text-gray-600 dark:text-gray-400 leading-relaxed">
                            {fullDescription}
                        </p>
                    </div>
                </div>
                <button className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer"
                    onClick={handleToggle}>
                    {showDescription ? "Read Less" : "Read More"}
                </button>
            </div>
        </div>
    )
}

export default CourseCard;