import { Accordion, AccordionItem } from "@heroui/accordion";
import ProjectCard from "./Project1";
import { projects } from "./data/projects";

export default function Portfolio() {
  return (
    <div className="relative z-10 md:mix-blend-difference">
      <section className="flex flex-col w-full h-fit text-right text-white pointer-events-none mb-10 mt-5">
        <p className="ml-auto">
          <hr className="w-5"></hr>03
        </p>
        <span className=" text-7xl md:text-9xl font-extralight mb-4">PORTFOLIO</span>
      </section>
      <div>
        <div className="w-full ml-auto text-right flex justify-end text-white mb-10">
          <Accordion selectionMode="multiple">
            {projects.map((project) => (
              <AccordionItem
                key={project.id}
                aria-label={project.title}
                title={project.accordionTitle}
                classNames={{
                  base: "!bg-transparent",
                  trigger: "flex-row-reverse justify-end !bg-transparent hover:bg-white/10 transition-colors",
                  title:
                    "!flex-none text-right text-3xl md:text-5xl font-light font-[Inter] items-center my-3  hover:text-blue-500 transition-colors",
                  indicator: "data-[open=true]:rotate-270 transition-transform",
                }}
              >
                <ProjectCard {...project} />
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <hr className="relative z-10 w-full border-t border-gray-500  md:mix-blend-difference" />
    </div>
  );
}
