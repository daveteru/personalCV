export default function About() {
  return (
    <div>
      <div className="relative z-5 flex flex-col items-end w-full h-fit text-right text-white mix-blend-difference pointer-events-none mb-10 mt-5">
        <p>
          <hr></hr>01
        </p>
        <span className="w-full  md:w-[70%] text-7xl md:text-9xl font-extralight mb-4 ">ABOUT</span>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col items-end gap-3 mb-10">
            <h1 className="uppercase max-w-[400px] min-w-[300px]">
              I design with intent and build with craft // visual designer
              turned engineer. Still obsessed with the details
            </h1>
            <hr className="relative z-10 w-20 border-t border-white mix-blend-normal" />
            <p>BASED IN JAKARTA, INDONESIA</p>
            <button className="bg-white w-fit py-1 px-3 rounded-full text-black hover:bg-blue-700 hover:text-white pointer-events-auto">
              GET IN TOUCH
            </button>
          </div>
          <p className="max-w-[550px] min-w-[300px] h-fit mb-5 font-light text-[16px] tracking-wide leading-6">
            I started out as a graphic designer — obsessed with type, grids, and the
            quiet logic of a well-composed layout. Over time, that obsession pushed me
            past Figma and into code. Not because I wanted to become a developer, but
            because I wanted to build exactly what I imagined without losing anything
            in translation.
            <br /><br />
            Now I work at the intersection of both. I design systems that scale and
            build interfaces that feel considered — from the motion of a button to the
            architecture of a component library. I've shipped work for startups, agencies,
            and large platforms like Grab, and I run an independent practice taking on
            projects where design and engineering need to speak the same language.
            <br /><br />
            Based in Jakarta. Available for select freelance and collaborative work.
          </p>
        </div>
        <hr className="border-white w-[15px]"></hr>
        <ul className="mt-5">
          <li>JAVASCRIPT + TYPESCRIPT </li>
          <li>FRONT END DEVELOPMENT</li>
          <li>BACKEND END DEVELOPMENT</li>
          <li>UI/UX DESIGN</li>
          <li>BRAND IDENTITY DESIGN</li>
          <li>DESIGN SYSTEM</li>
        </ul>
      </div>
      <hr className="relative z-1 w-full border-t border-gray-500  mix-blend-difference" />
    </div>
  );
}
