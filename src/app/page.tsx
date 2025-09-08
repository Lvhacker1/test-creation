import PageIntro from "@/components/PageIntro";
import { pageIntroData } from "@/data/data";

export default function Home() {
  const intro = pageIntroData["home"]

  return (
    <main className="flex flex-col gap-15 p-5 lg:px-15">
      <div>
        <PageIntro {...intro} />
      </div>
    </main>
  );
}
