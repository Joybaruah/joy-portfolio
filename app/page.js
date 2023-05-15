import Header from "@/components/home/Header";
import HeaderImage from "@/components/home/HeaderImage";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col-reverse sm:flex-row sm:mt-2 justify-evenly items-center sm:pb-[15%] p-7 h-screen sm:justify-between">
      <Header />
      <HeaderImage/>
      </section>
    </main>
  )
}
