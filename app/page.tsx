import Jake from "./components/Jake";
import Spongebob from "./components/Spongebob";
import Tailung from "./components/Tailung";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="my-auto">
        <div className="flex flex-row flex-wrap">
          <Jake />
          <Tailung />
          <Spongebob />
        </div>
      </main>
    </div>
  );
}
