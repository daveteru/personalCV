import profpic from "./asset/teru_profpic_2_bw.png";

export default function Hero() {
  return (
    <div className="h-screen flex sm:justify-end items-end mb-20 pb-9 text-white flex-col">
        <hr></hr>
        <span className="z-11">DESIGN + TECH</span>
      <div className="relative z-10 w-100 h-140 bg-gray-400 pointer-events-none overflow-hidden "><img src={profpic} /> </div>
    </div>
  );
}
