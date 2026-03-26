import { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText);

export default function Title() {
  const container = useRef<HTMLHeadingElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isMd, setIsMd] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onResize = () => setIsMd(window.innerWidth >= 768);

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useGSAP(() => {
    SplitText.create(".splittext", {
      type: "words,chars",
      onSplit(self) {
        return gsap.from(self.chars, {
          opacity: 0,
          y: 40,
          stagger: 0.03,
          duration: 0.6,
          ease: "back.out(1.7)",
        });
      },
    });
  });

  const hidden = isMd && scrollY >= 2000;

  return (
    <div
      inert={hidden || undefined}
      className={`sm:fixed relative top-5 z-15 sm:h-fit w-fit pointer-events-none md:mix-blend-difference transition-opacity duration-500 ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
    >
     <div ref={container} >
        <h1
          className="text-6xl flex flex-wrap h-fit w-70 splittext "
          
        >
          DAVID TERU SUDIONO
        </h1>
        <p className="h-fit w-[300px] text-white splittext" >
          DESIGN / UX ENGINEER SPECIALIZING IN
          INTERACTIVE DIGITAL EXPERIENCES
        </p>
     </div>
      <nav className="mt-5 relative z-1 flex flex-col text-white">
        <a
          href="mailto:daveteru@gmail.com"
          className="mb-4 w-full pointer-events-auto hover:text-blue-600 hover:bg-white "
        >
          <button className="underline">DAVETERU@GMAIL.COM</button>
        </a>
        <ul className="w-full pointer-events-none gap-1 flex flex-col">
          <li>
            <a>CONTACT//</a>
          </li>
          <li className="hover:text-blue-600 hover:bg-white pointer-events-auto w-full">
            <a href="https://www.instagram.com/daveteru">INSTAGRAM</a>
          </li>
          <li className="hover:text-blue-600 hover:bg-white pointer-events-auto w-full">
            <a href="https://wa.me/+6281285338235">WHATSAPP</a>
          </li>
          <li className="hover:text-blue-600 hover:bg-white pointer-events-auto w-full">
            <a href="https://github.com/daveteru">GITHUB</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
