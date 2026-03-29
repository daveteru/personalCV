export default function TestimonialContent1() {
  return (
    <div className="w-full h-full bg-gray-800 flex p-5 box-border gap-5 flex-col">
      <p className="text-[15px] leading-relaxed text-left flex-1">
        "What sets Teru apart is the rare ability to think like a designer and build
        like an engineer simultaneously. During the driver onboarding project, he took
        a brief that felt impossible — high drop-off, offline constraints, dozens of
        edge cases — and turned it into the smoothest, most intuitive flow I've seen
        ship at Grab. He didn't just execute the spec; he pushed back on assumptions
        that would have hurt the experience, and he was always right. One of the most
        collaborative and technically sharp people I've worked with."
      </p>
      <div className="flex flex-row items-center gap-4 mt-auto">
        <div className="bg-red-50 w-12 h-12 rounded-full shrink-0 overflow-clip">
          <img src="/decledoo6675_Young_Asian_male_business_style_black_and_clean_gr_f290720c-e2c8-44ba-a861-bcaf4930b6ec.webp" alt="" />
        </div>
        <div className="flex flex-col text-left">
          <h1 className="font-bold text-base">RIZKY ADIPUTRA</h1>
          <h2 className="text-[10px] text-gray-400">SENIOR PRODUCT MANAGER · GRAB INDONESIA</h2>
          <a
            href="https://www.linkedin.com/in/rizky-adiputra-grab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-blue-400 hover:underline mt-0.5 pointer-events-auto"
          >
            linkedin.com/in/rizky-adiputra-grab
          </a>
        </div>
      </div>
    </div>
  );
}
