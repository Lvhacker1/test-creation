import PageIntro from "@/components/PageIntro";
import { pageIntroData } from "@/data/data";

export default function Home() {
  const intro = pageIntroData["home"]

  return (
    <main>
      <div>
        <PageIntro {...intro} />
      </div>
    </main>
  );
}
