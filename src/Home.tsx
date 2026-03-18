import About from "./About";
import Contact from "./Contact";
import Exp from "./Exp";
import Gridbg from "./Gridbg";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Testimonial from "./Testimonial";
import Title from "./Title";

export default function Home() {
  return (
    <div className="relative w-full h-auto bg-[#212121] px-5 box-border cursor-crosshair overflow-x-hidden">
      <Title />
      <div className="hidden lg:block"><Gridbg /></div>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Exp />
        <Testimonial/>
        <Contact/>
    </div>
  );
}
