'use client'
import { actionButtonData } from "@/data/data";
import Link from "next/link";

const ActionButtons = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {actionButtonData.map((item, index) => (
                <Link key={index} href={item.href}
                    className="flex flex-col justify-between gap-4 p-6 sm:p-8 w-full sm:w-80 md:w-96 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-center transition-transform transform hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    <p className="text-gray-600 dark:text-gray-400 mb-2 sm:mb-4 text-sm sm:text-base">{item.description}</p>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
                </Link>
            ))}
        </div>
    );
};

export default ActionButtons;