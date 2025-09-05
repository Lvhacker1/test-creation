'use client'
import { CodeBlockProps } from "@/types/types";
import { useState } from "react";


const CodeBlock = ({code, language}: CodeBlockProps) => {
    const [showCode, setShowCode] = useState(false);
    const handleToggle = () => setShowCode(prev => !prev);


    return (
        <div>
            <p>{language}</p>
            <button onClick={handleToggle}>
                {showCode ? "Hide" : "Run"}
            </button>
            {showCode && <pre>{code}</pre>}
        </div>
    )
}

export default CodeBlock;