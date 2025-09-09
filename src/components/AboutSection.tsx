import { aboutData } from "@/data/data"

const AboutSection = () => {
    const {name, role, description} = aboutData;
    return (
        <div className="p-6 w-full max-w-md mx-auto sm:max-w-3xl sm:p-10 dark:bg-gray-800 rounded-lg dark:border-gray-700 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 ">{name}</h2>
            <h3 className="text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-300 mb-4 sm:mb-8">{role}</h3>
            <p className="text-gray-600 dark:text-gray-400 sm:text-lg ">{description}</p>
        </div>
    )
}

export default AboutSection