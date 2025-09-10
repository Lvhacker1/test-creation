'use client'
import { CodeBlockTypes } from "@/types/types";
import { useState } from "react";

const CodeBlock = ({code, language}: CodeBlockTypes) => {
    const [showCode, setShowCode] = useState(false);
    const handleToggle = () => setShowCode(prev => !prev);

    return (
        <div className="p-3 border rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
            <h4 className="font-bold mb-2">{language}</h4>
            <div className={`transition-all duration-300 ${
                showCode ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="bg-gray-100 rounded p-3 mb-2">
                    <pre className="text-gray-800 text-sm overflow-x-auto">
                        <code>{code}</code>
                    </pre>
                </div>
            </div>
            <button 
                className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-progress"
                onClick={handleToggle}>
                {showCode ? "Hide" : "Run"}
            </button>
        </div>
    )
}

export default CodeBlock;