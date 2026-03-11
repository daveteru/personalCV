export default function Project2() {
  return (
    <div>
      <div className="ml-auto gap-2 flex flex-col py-5">
        <div className="h-100 w-full bg-gray-100"></div>
        <div className="flex flex-col gap-8 my-8">
          <h1 className="font-bold text-left">PT. ARUNDAYA</h1>
          <article className="text-left">
            <p>
              PT. Arundaya is a mid-sized Indonesian engineering and infrastructure
              consultancy with over two decades of project delivery across civil,
              mechanical, and environmental sectors. Their existing company profile —
              both digital and print — had not been updated in seven years, leaving a
              significant gap between their actual capabilities and how they were
              perceived by prospective clients and government partners.
            </p>
          </article>
          <hr className="my-10"></hr>
          <article className="flex text-left my-2 gap-10">
            <p>
              <h2 className="font-bold">TASK:</h2>
              Deliver a complete brand refresh across two touchpoints: a redesigned
              company profile website and a print collateral suite (company profile
              booklet, capability statement, and project portfolio document). The
              updated materials needed to convey PT. Arundaya's technical credibility,
              Indonesian heritage, and readiness to compete for larger government
              and private-sector contracts.
            </p>
            <p>
              <h2 className="font-bold">ACTION:</h2>
              Conducted stakeholder interviews with the directors and project managers
              to map out key service pillars and flagship projects. Developed a refined
              visual identity — deep navy, warm earth tones, and structured grid layouts
              — to communicate authority and precision. Designed the website in Figma and
              built it in React with a clean, document-inspired layout optimised for
              desktop procurement teams. In parallel, produced a 32-page print profile
              booklet and a two-page capability statement in InDesign, export-ready for
              both digital distribution and professional offset printing.
            </p>
          </article>
          <hr></hr>
          <article className="text-left">
            <p>
              <h2 className="font-bold">RESULT:</h2>
              The refreshed profile was delivered across both digital and print within
              six weeks. PT. Arundaya used the materials in two subsequent government
              tender submissions and secured one contract valued at IDR 4.2 billion —
              directly citing the professional presentation as a differentiating factor.
              Website traffic from referral sources increased by 67% in the first quarter
              post-launch.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
