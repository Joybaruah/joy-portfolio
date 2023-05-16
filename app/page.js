import Header from "@/components/home/Header";
import HeaderImage from "@/components/home/HeaderImage";
import ExpCard from "@/components/home/experience/ExpCard";
import { fontDMSans, fontDMSerifDisplay } from "@/utils/fonts";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col-reverse sm:flex-row sm:mt-2 justify-around items-center p-7 h-[80vh] mb-[20%] sm:justify-between">
      <Header />
      <HeaderImage/>
      </section>

      {/* <section className="p-7">
        <h2 className="text-3xl font-semibold my-2" style={fontDMSerifDisplay.style}>Experience</h2>
        <ExpCard />
      </section> */}
    </main>
  )
}
