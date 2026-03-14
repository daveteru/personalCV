import ExpContent from "./Expcontent1";

const experiences = [
  {
    company: "KREAVI STUDIO",
    period: "2018 – 2020 · JUNIOR GRAPHIC DESIGNER",
    description:
      "Produced brand identity systems, marketing collateral, and social media campaigns for SME clients across retail and F&B. Developed fluency in Adobe Creative Suite and built a strong foundation in typography, colour theory, and print production.",
  },
  {
    company: "FABLE & FORM",
    period: "2020 – 2022 · SENIOR VISUAL DESIGNER",
    description:
      "Led visual design for a boutique branding agency, overseeing brand strategy, identity design, and motion for clients in tech, hospitality, and lifestyle. Directed junior designers and managed end-to-end delivery from brief to final artwork, including Webflow builds for select clients.",
  },
  {
    company: "GRAB INDONESIA",
    period: "2022 – 2023 · UI / FRONTEND DEVELOPER",
    description:
      "Transitioned into engineering within Grab's driver-partner product team. Built and maintained React Native UI components for the driver app, collaborating with product designers and backend engineers. Contributed to the interactive onboarding redesign that reduced activation time from 4.5 days to under 2.",
  },
  {
    company: "FREELANCE",
    period: "2023 – PRESENT · CREATIVE DEVELOPER",
    description:
      "Independent practice spanning creative front-end development, UI/UX design, and interactive 3D. Clients include design studios, startups, and direct brands. Specialising in WebGL, Three.js, and React — building experiences that sit at the intersection of engineering precision and visual craft.",
  },
];

export default function Exp() {
  return (
    <div>
      <div className="relative z-5 flex flex-col items-end w-full h-fit text-right text-white mix-blend-difference pointer-events-none mb-10 mt-5">
        <p>
          <hr></hr>04
        </p>
        <span className=" text-6xl md:text-9xl font-extralight mb-4">EXPERIENCE</span>
        <section className="grid md:grid-cols-2 lg:w-[60%] h-fit gap-4">
          {experiences.map((exp) => (
            <ExpContent key={exp.company} {...exp} />
          ))}
        </section>
      </div>
      <hr className="relative z-1 w-full border-t border-gray-500  mix-blend-difference" />
    </div>
  );
}
