'use client'
import { CodeBlockProps } from "@/types/types";
import { useState } from "react";


const CodeBlock = ({code, language}: CodeBlockProps) => {
    const [showCode, setShowCode] = useState(false);
    const handleToggle = () => setShowCode(prev => !prev);


    return (
        <div className="p-3 border rounded-lg bg-white shadow-md">
            <h4 className="font-bold mb-2">{language}</h4>
            <button onClick={handleToggle}>
                {showCode ? "Hide" : "Run"}
            </button>
            {showCode && <pre>{code}</pre>}
        </div>
    )
}

export default CodeBlock;