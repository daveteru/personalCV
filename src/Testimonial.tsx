import TestimonialContent1 from "./TestimonialContent1";
import TestimonialContent2 from "./TestimonialContent2";

export default function Testimonial() {
  return (
    <div>
      <div className="relative z-5 flex flex-col items-end w-full h-fit text-right text-white md:mix-blend-difference pointer-events-none mb-10 mt-5">
        <p>
          <hr></hr>05
        </p>
        <span className="text-5xl md:text-8xl font-extralight mb-4">
          TESTIMONIALS
        </span>
        <section className="grid lg:grid-cols-2 md:w-[75%] h-fit gap-4">
          <TestimonialContent1 />
          <TestimonialContent2 />
        </section>
      </div>
      <hr className="relative z-1 w-full border-t border-gray-500  md:mix-blend-difference" />
    </div>
  );
}
