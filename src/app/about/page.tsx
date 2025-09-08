import CodeBlock from "@/components/CodeBlock";
import PageIntro from "@/components/PageIntro";
import { pageIntroData } from "@/data/data";

const AboutPage = () => {
    const intro = pageIntroData["about"]

    return (
        <main className="flex flex-col gap-15 py-5 px-15">
            <div>
                <PageIntro {...intro} />
            </div>
        </main>
    )
}

export default AboutPage;