import CodeBlock from "@/components/CodeBlock";
import PageIntro from "@/components/PageIntro";
import { codeBlockProps, pageIntroData } from "@/data/data";

const AboutPage = () => {
    const intro = pageIntroData["about"]

    return (
        <main>
            <div>
                <PageIntro {...intro} />
            </div>
            <div>
            {codeBlockProps.map((codeBlockProps, index ) => 
                <CodeBlock key={index} code={codeBlockProps.code} language={codeBlockProps.language} />
            )}
            </div>
        </main>
    )
}

export default AboutPage;