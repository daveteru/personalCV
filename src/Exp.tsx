import Expcontent1 from "./Expcontent1";
import Expcontent2 from "./Expcontent2";
import Expcontent3 from "./Expcontent3";
import Expcontent4 from "./Expcontent4";

export default function Exp() {
  return (
    <div>
      <div className="relative z-5 flex flex-col items-end w-full h-fit text-right text-white mix-blend-difference pointer-events-none mb-10 mt-5">
        <p>
          <hr></hr>04
        </p>
        <span className="text-9xl font-extralight mb-4">EXPERIENCE</span>
        <section className="grid grid-cols-2 w-[60%] h-fit gap-4">
          <Expcontent1 />
          <Expcontent2 />
          <Expcontent3 />
          <Expcontent4 />
        </section>
      </div>
      <hr className="relative z-1 w-full border-t border-gray-500  mix-blend-difference" />
    </div>
  );
}
