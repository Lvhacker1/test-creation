import PageIntro from "@/components/PageIntro";
import { pageIntroData } from "@/data/data";

export default function Home() {
  const intro = pageIntroData["home"]

  return (
    <main className="flex flex-col gap-15 py-5 px-15">
      <div>
        <PageIntro {...intro} />
      </div>
    </main>
  );
}
