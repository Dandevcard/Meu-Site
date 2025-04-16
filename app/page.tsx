import Contact from "@/components/Contact";
import Eu from "@/components/Eu";
import Sobre from "@/components/Sobre";
import Projects from "@/components/Projects";
import Modelos from "@/components/Modelos";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className=" flex flex-col -mt-12 md:-mt-14 ">
        <main className="flex-1 space-y-14 md:space-y-0 overflow-hidden">
          <Eu />
          <Sobre />
          <Projects />
          <Modelos />
          <Contact />
        </main>
      </div>
    </div>
  );
}
