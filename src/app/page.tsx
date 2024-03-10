import InfoBoxes from "@/components/InfoBoxes";
import HomeIntro from "./HomeIntro";
import Technologies from "./Technologies";

export default function Home() {
  return (
    <main className="w-full pb-8">
      <HomeIntro />
      <Technologies />
      <InfoBoxes />
    </main>
  );
}
