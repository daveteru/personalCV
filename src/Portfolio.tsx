import { Accordion, AccordionItem } from "@heroui/accordion";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";

export default function Portfolio() {
  return (
    <div className="relative z-10 mix-blend-difference">
      <section className="flex flex-col w-full h-fit text-right text-white pointer-events-none mb-10 mt-5">
        <p className="ml-auto">
          <hr className="w-5"></hr>03
        </p>
        <span className="text-9xl font-extralight mb-4">PORTFOLIO</span>
      </section>
      <div>
        <div className="w-[60%] ml-auto text-right flex justify-end text-white mb-10">
            <Accordion selectionMode="multiple">
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title={<>E-COMMERCE WEBSITE FOR <span className="font-[Cardo] italic">Masshiro & Co.</span></>}
                classNames={{
                  base: "!bg-transparent",
                  trigger: "flex-row-reverse justify-end !bg-transparent",
                  title:
                    "text-right text-5xl font-light font-[Inter] items-center my-3",
                  indicator: "data-[open=true]:rotate-270 transition-transform",
                }}
              >
               <Project1/>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 1"
                title={<><span className="font-[Cardo] italic">Pt.Arundaya</span> COMPANY PROFILE UPDATE</>}
                classNames={{
                  base: "!bg-transparent",
                  trigger: "flex-row-reverse justify-end !bg-transparent",
                  title:
                    "!flex-none text-right text-5xl font-light items-center my-3",
                  indicator: "data-[open=true]:rotate-270 transition-transform",
                }}
              >
               <Project2/>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 1"
                title={<>INTERACTIVE USER ONBOARDING @ <span className="font-[Cardo] italic">Grab Indonesia</span></>}
                classNames={{
                  base: "!bg-transparent",
                  trigger: "flex-row-reverse justify-end !bg-transparent",
                  title:
                    "!flex-none text-right text-5xl font-light font-[inter] items-center my-3",
                  indicator: "data-[open=true]:rotate-270 transition-transform",
                }}
              >
               <Project3/>
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 1"
                title="DYNAMIC 3D GLOBE"
                classNames={{
                  base: "!bg-transparent",
                  trigger: "flex-row-reverse justify-end !bg-transparent",
                  title:
                    "!flex-none text-right text-5xl font-light font-[inter] items-center my-3",
                  indicator: "data-[open=true]:rotate-270 transition-transform",
                }}
              >
               <Project4/>
              </AccordionItem>
            </Accordion>
          </div>
      </div>
      <hr className="relative z-10 w-full border-t border-gray-500  mix-blend-difference" />
    </div>
  );
}
