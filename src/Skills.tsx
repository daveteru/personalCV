export default function Skills() {
  return (
    <div>
      <div className="relative z-5 flex flex-col items-end w-full h-fit text-right text-white md:mix-blend-difference pointer-events-none mb-10 mt-5">
        <p>
          <hr></hr>02
        </p>
        <span className="text-7xl md:text-9xl font-extralight mb-4">SKILLS</span>
        <div className="flex flex-col md:flex-row gap-10 w-full lg:w-[70%]  md:justify-between  md:text-left">
        <section>
          <h1 className="font-bold mb-4">FRONT END DEVELOPMENT</h1>
          <ul className="text-[16px] md:list-disc md:translate-x-5">
            <li>REACT</li>
            <li>JAVASCRIPT + TYPESCRIPT </li>
            <li>WEBGL / OPENGL </li>
            <li>THREE.JS</li>
            <li>TAILWIND CSS</li>
            <li>GSAP</li>
            <li>WEBFLOW</li>
            <li>SHOPIFY</li>
          </ul>
        </section>
        <section>
          <h1 className="font-bold mb-4">BACK END DEVELOPMENT</h1>
          <ul className="text-[16px] md:list-disc md:translate-x-5">
            <li>VERCEL</li>
            <li>PYTHON</li>
            <li>EXPRESS.JS</li>
            <li>POSTGRES</li>
            <li>GIT</li>
            <li>NODE.JS</li>
          </ul>
        </section>
        <section>
          <h1 className="font-bold mb-4 md:-translate-x-5">VISUAL DESIGN</h1>
          <ul className="text-[16px] md:list-disc  text-wrap  ">
            <li>USER INTERFACE DESIGN</li>
            <li>UX DESIGN</li>
            <li>BRAND IDENTITY DESIGN</li>
            <li>3D MODEL</li>
            <li>MOTION DESIGN</li>
            <li>LOTTIE</li>
            <li>ADOBE CREATIVE SUITE</li>
            <li>FIGMA</li>
            <li>DAVINCI RESOLVE</li>
          </ul>
        </section>
        </div>
      </div>
      <hr className="relative z-10 w-full border-t border-gray-500  md:mix-blend-difference" />
    </div>
  );
}
