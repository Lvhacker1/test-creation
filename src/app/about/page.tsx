import CodeBlock from "@/components/CodeBlock";
import { codeBlockProps } from "@/data/data";

const AboutPage = () => {
    return (
        <div>
            {codeBlockProps.map((codeBlockProps, index ) => 
                <CodeBlock key={index} code={codeBlockProps.code} language={codeBlockProps.language} />
            )}
        </div>
    )
}

export default AboutPage;