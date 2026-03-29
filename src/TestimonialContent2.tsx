export default function TestimonialContent2() {
  return (
    <div className="w-full h-full bg-gray-800 flex p-5 box-border gap-5 flex-col">
      <p className="text-[15px] leading-relaxed text-left flex-1">
        "Teru joined us early in his career but immediately brought a level of
        intentionality to his work that you rarely see from a junior designer. His
        eye for type and layout was already exceptional, and he had this natural
        instinct for knowing when a design was done — no over-engineering, no
        unnecessary decoration. He grew fast, took ownership of client relationships,
        and consistently delivered work that made us look good. I wasn't surprised at
        all when he moved into development. He always wanted to understand how things
        were actually built."
      </p>
      <div className="flex flex-row items-center gap-4 mt-auto">
        <div className="bg-red-50 w-12 h-12 rounded-full shrink-0 overflow-clip">
          <img src="/arayavute_professional_young_indonesian_female_teacher_in_a_sma_a0eddebb-5487-49da-87c2-28ee495108d5.webp" alt="" />
        </div>
        <div className="flex flex-col text-left">
          <h1 className="font-bold text-base">ANDINI SETIAWATI</h1>
          <h2 className="text-[10px] text-gray-400">CREATIVE DIRECTOR · KREAVI STUDIO</h2>
          <a
            href="https://www.linkedin.com/in/andini-setiawati-kreavi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-blue-400 hover:underline mt-0.5 pointer-events-auto"
          >
            linkedin.com/in/andini-setiawati-kreavi
          </a>
        </div>
      </div>
    </div>
  );
}
