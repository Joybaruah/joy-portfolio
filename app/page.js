import Header from "@/components/home/Header";
import HeaderImage from "@/components/home/HeaderImage";
import ExpCard from "@/components/home/experience/ExpCard";
import { fontDMSans, fontDMSerifDisplay } from "@/utils/fonts";
import { exp } from "../exp.js";
import { BsArrowRight } from "react-icons/bs"

export default function Home() {
  return (
    <main>
      <section className="flex flex-col-reverse sm:flex-row sm:mt-2 justify-around sm:justify-between items-center p-7 h-[90vh] sm:h-[80vh] mb-[20%]">
        <Header />
        <HeaderImage />
      </section>

      <section className="p-7">
        <h2
          className="text-3xl font-semibold my-2 text-text"
          style={fontDMSerifDisplay.style}
        >
          Experience
        </h2>
        {exp.map((item) => {
          return <ExpCard exp={item} key={item.id} />;
        })}
      </section>

      <div>
        <button className="bg-primary px-6 py-2 flex items-center gap-3 m-6 rounded-lg hover:drop-shadow-lg hover:shadow-primary" style={fontDMSans.style}>
          Check my Works
            <BsArrowRight size={22} />
        </button>
      </div>
    </main>
  );
}
