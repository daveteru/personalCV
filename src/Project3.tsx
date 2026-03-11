export default function Project3() {
  return (
    <div>
      <div className="ml-auto gap-2 flex flex-col py-5">
        <div className="h-100 w-full bg-gray-100"></div>
        <div className="flex flex-col gap-8 my-8">
          <h1 className="font-bold text-left">GRAB INDONESIA</h1>
          <article className="text-left">
            <p>
              Grab's driver-partner onboarding in Indonesia was a critical bottleneck —
              a lengthy, text-heavy registration flow designed for desktop was being
              completed almost entirely on low-end Android devices with inconsistent
              connectivity. Drop-off rates were high, support tickets were costly, and
              new drivers were taking an average of 4.5 days from sign-up to first trip.
              The product team engaged us to redesign the onboarding experience from the ground up.
            </p>
          </article>
          <hr className="my-10"></hr>
          <article className="flex text-left my-2 gap-10">
            <p>
              <h2 className="font-bold">TASK:</h2>
              Redesign the end-to-end driver-partner onboarding flow to reduce time-to-activation,
              lower drop-off at key steps (document upload, vehicle verification, training modules),
              and accommodate offline-first usage across Tier 2 and Tier 3 cities in Indonesia.
              The experience needed to work across a wide range of Android devices and support
              both Bahasa Indonesia and regional language variants.
            </p>
            <p>
              <h2 className="font-bold">ACTION:</h2>
              Embedded with Grab's Jakarta product team for eight weeks. Ran contextual inquiry
              sessions with driver-partners in Surabaya and Medan to identify friction points firsthand.
              Redesigned the flow as a step-by-step guided journey with progress persistence,
              chunked document uploads with real-time validation feedback, and inline animated
              micro-tutorials replacing the static PDF training modules. Built interactive
              prototypes in Figma for usability testing, then collaborated with the engineering
              team on component specs and motion guidelines for the final React Native implementation.
            </p>
          </article>
          <hr></hr>
          <article className="text-left">
            <p>
              <h2 className="font-bold">RESULT:</h2>
            </p>
            <div className="grid grid-cols-3 gap-6 my-6">
              <div>
                <p className="text-4xl font-bold">62%</p>
                <p className="text-sm mt-1">reduction in onboarding drop-off rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold">1.8d</p>
                <p className="text-sm mt-1">average time-to-first-trip, down from 4.5 days</p>
              </div>
              <div>
                <p className="text-4xl font-bold">41%</p>
                <p className="text-sm mt-1">decrease in onboarding-related support tickets</p>
              </div>
            </div>
            <p>
              The redesigned onboarding shipped across Indonesia within one quarter and was
              subsequently rolled out to Grab's Vietnam and Philippines markets with minor
              localisation changes. The project was recognised internally as a benchmark for
              Grab's driver-partner product design standards.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
