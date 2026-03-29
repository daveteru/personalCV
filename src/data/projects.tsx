import type { ReactNode } from "react";

export interface Metric {
  value: string;
  label: string;
}

export interface ProjectData {
  id: string;
  accordionTitle: ReactNode;
  image?: string;
  altimg?: string;
  title: string;
  intro: string;
  task: string;
  action: string;
  result: string;
  metrics?: Metric[];
}

export const projects: ProjectData[] = [
  {
    id: "masshiro",
    image:"/img/2.webp",
    accordionTitle: (
      <>
        E-COMMERCE WEBSITE FOR{" "}
        <span className="font-[Cardo] italic">Masshiro & Co.</span>
      </>
    ),
    title: "MASSHIRO & Co.",
    intro:
      "Mashiro & Co. is a Tokyo-founded luxury stationery and lifestyle brand known for its minimalist aesthetic and premium paper goods. Despite a loyal following, their existing website felt dated — cluttered navigation, poor mobile experience, and a visual identity that no longer reflected the brand's refined positioning. They approached us for a full website redesign ahead of their international expansion.",
    task: "Redesign the Masshiro & Co. website from the ground up — translating their offline brand identity into a cohesive digital experience. The new site needed to serve both existing customers in Japan and a new Western audience, support e-commerce, and communicate the brand's ethos of quiet luxury through every interaction and typographic choice.",
    action:
      "Conducted a full brand audit and competitor analysis across the luxury stationery and lifestyle space. Led UX research through user interviews and heatmap analysis of the existing site. Defined a new visual system — a restrained palette of off-white, ink black, and warm gold — paired with editorial typography and generous whitespace. Designed and prototyped in Figma, then built the front end in React with smooth page transitions and a custom cursor interaction to reinforce the tactile, craft-forward brand feeling.",
    result:
      "The redesigned site launched two weeks ahead of schedule. Within 60 days, average session duration increased by 48%, bounce rate dropped by 31%, and international orders accounted for 22% of total revenue — up from under 5%. Mashiro & Co. was subsequently featured in Wallpaper* and Monocle as a benchmark for refined brand digital experiences.",
  },
  {
    id: "arundaya",
        image:"/img/1.webp",
    accordionTitle: (
      <>
        <span className="font-[Cardo] italic">Pt.Arundaya</span> COMPANY
        PROFILE UPDATE
      </>
    ),
    title: "PT. ARUNDAYA",
    intro:
      "PT. Arundaya is a mid-sized Indonesian engineering and infrastructure consultancy with over two decades of project delivery across civil, mechanical, and environmental sectors. Their existing company profile — both digital and print — had not been updated in seven years, leaving a significant gap between their actual capabilities and how they were perceived by prospective clients and government partners.",
    task: "Deliver a complete brand refresh across two touchpoints: a redesigned company profile website and a print collateral suite (company profile booklet, capability statement, and project portfolio document). The updated materials needed to convey PT. Arundaya's technical credibility, Indonesian heritage, and readiness to compete for larger government and private-sector contracts.",
    action:
      "Conducted stakeholder interviews with the directors and project managers to map out key service pillars and flagship projects. Developed a refined visual identity — deep navy, warm earth tones, and structured grid layouts — to communicate authority and precision. Designed the website in Figma and built it in React with a clean, document-inspired layout optimised for desktop procurement teams. In parallel, produced a 32-page print profile booklet and a two-page capability statement in InDesign, export-ready for both digital distribution and professional offset printing.",
    result:
      "The refreshed profile was delivered across both digital and print within six weeks. PT. Arundaya used the materials in two subsequent government tender submissions and secured one contract valued at IDR 4.2 billion — directly citing the professional presentation as a differentiating factor. Website traffic from referral sources increased by 67% in the first quarter post-launch.",
  },
  {
    id: "grab",
        image:"/img/3.webp",
    accordionTitle: (
      <>
        INTERACTIVE USER ONBOARDING @{" "}
        <span className="font-[Cardo] italic">Grab Indonesia</span>
      </>
    ),
    title: "GRAB INDONESIA",
    intro:
      "Grab's driver-partner onboarding in Indonesia was a critical bottleneck — a lengthy, text-heavy registration flow designed for desktop was being completed almost entirely on low-end Android devices with inconsistent connectivity. Drop-off rates were high, support tickets were costly, and new drivers were taking an average of 4.5 days from sign-up to first trip. The product team engaged us to redesign the onboarding experience from the ground up.",
    task: "Redesign the end-to-end driver-partner onboarding flow to reduce time-to-activation, lower drop-off at key steps (document upload, vehicle verification, training modules), and accommodate offline-first usage across Tier 2 and Tier 3 cities in Indonesia. The experience needed to work across a wide range of Android devices and support both Bahasa Indonesia and regional language variants.",
    action:
      "Embedded with Grab's Jakarta product team for eight weeks. Ran contextual inquiry sessions with driver-partners in Surabaya and Medan to identify friction points firsthand. Redesigned the flow as a step-by-step guided journey with progress persistence, chunked document uploads with real-time validation feedback, and inline animated micro-tutorials replacing the static PDF training modules. Built interactive prototypes in Figma for usability testing, then collaborated with the engineering team on component specs and motion guidelines for the final React Native implementation.",
    result:
      "The redesigned onboarding shipped across Indonesia within one quarter and was subsequently rolled out to Grab's Vietnam and Philippines markets with minor localisation changes. The project was recognised internally as a benchmark for Grab's driver-partner product design standards.",
    metrics: [
      { value: "62%", label: "reduction in onboarding drop-off rate" },
      { value: "1.8d", label: "average time-to-first-trip, down from 4.5 days" },
      { value: "41%", label: "decrease in onboarding-related support tickets" },
    ],
  },
  {
    id: "globe",
        image:"/img/4.webp",
    accordionTitle: "DYNAMIC 3D GLOBE",
    title: "DYNAMIC 3D GLOBE",
    intro:
      "A self-initiated exploration into real-time 3D rendering on the web — building an interactive globe that visualises live geospatial data directly in the browser using Three.js and raw WebGL shaders. The project started as a personal challenge to push past framework abstractions and understand the GPU pipeline at a lower level, while producing something visually compelling enough to serve as a portfolio piece.",
    task: "Build a fully interactive 3D globe in the browser — no third-party globe libraries — with support for custom data overlays, smooth camera controls, atmospheric glow, and real-time country highlighting on hover. The renderer needed to maintain 60fps on modern hardware while keeping the bundle size lean enough for fast initial load.",
    action:
      "Constructed the sphere geometry and UV mapping manually in Three.js, then wrote custom GLSL fragment shaders for the atmospheric rim glow, specular ocean highlights, and night-side city lights blended from a NASA texture map. GeoJSON country boundaries were projected onto the sphere surface using a custom WebGL line renderer to avoid the overhead of mesh extrusion. Camera interaction was implemented with quaternion-based drag rotation and momentum damping for a natural feel. Data overlays — arc connections between coordinates — were animated using instanced geometry updated each frame on the GPU. The final build was bundled with Vite and deployed to Vercel, achieving a 94 Lighthouse performance score.",
    result:
      "The project was shared on X (Twitter) and gained traction in the creative dev community, leading to two freelance enquiries and an invitation to present at a Jakarta frontend meetup. The codebase is open-source on GitHub and has since been forked 200+ times as a starter template for WebGL globe projects.",
    metrics: [
      { value: "60fps", label: "sustained render rate on mid-range hardware" },
      { value: "94", label: "Lighthouse performance score on production build" },
      { value: "12k", label: "unique visitors in the first month after posting on X" },
    ],
  },
];
