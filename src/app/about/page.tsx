import AboutSection from "@/components/AboutSection";
import CodeBlock from "@/components/CodeBlock";
import PageIntro from "@/components/PageIntro";
import { pageIntroData } from "@/data/data";

const AboutPage = () => {
    const intro = pageIntroData["about"]

    return (
        <main className="flex flex-col gap-15 p-5 lg:px-15">
            <div>
                <PageIntro {...intro} />
            </div>
            <div>
                <AboutSection  />
            </div>
        </main>
    )
}

export default AboutPage;