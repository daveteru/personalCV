export default function Project4() {
  return (
    <div>
      <div className="ml-auto gap-2 flex flex-col py-5">
        <div className="h-100 w-full bg-gray-100"></div>
        <div className="flex flex-col gap-8 my-8">
          <h1 className="font-bold text-left">DYNAMIC 3D GLOBE</h1>
          <article className="text-left">
            <p>
              A self-initiated exploration into real-time 3D rendering on the web —
              building an interactive globe that visualises live geospatial data directly
              in the browser using Three.js and raw WebGL shaders. The project started
              as a personal challenge to push past framework abstractions and understand
              the GPU pipeline at a lower level, while producing something visually
              compelling enough to serve as a portfolio piece.
            </p>
          </article>
          <hr className="my-10"></hr>
          <article className="flex text-left my-2 gap-10">
            <p>
              <h2 className="font-bold">TASK:</h2>
              Build a fully interactive 3D globe in the browser — no third-party globe
              libraries — with support for custom data overlays, smooth camera controls,
              atmospheric glow, and real-time country highlighting on hover. The renderer
              needed to maintain 60fps on modern hardware while keeping the bundle size
              lean enough for fast initial load.
            </p>
            <p>
              <h2 className="font-bold">ACTION:</h2>
              Constructed the sphere geometry and UV mapping manually in Three.js, then
              wrote custom GLSL fragment shaders for the atmospheric rim glow, specular
              ocean highlights, and night-side city lights blended from a NASA texture map.
              GeoJSON country boundaries were projected onto the sphere surface using
              a custom WebGL line renderer to avoid the overhead of mesh extrusion.
              Camera interaction was implemented with quaternion-based drag rotation and
              momentum damping for a natural feel. Data overlays — arc connections between
              coordinates — were animated using instanced geometry updated each frame on
              the GPU. The final build was bundled with Vite and deployed to Vercel,
              achieving a 94 Lighthouse performance score.
            </p>
          </article>
          <hr></hr>
          <article className="text-left">
            <p>
              <h2 className="font-bold">RESULT:</h2>
            </p>
            <div className="grid grid-cols-3 gap-6 my-6">
              <div>
                <p className="text-4xl font-bold">60fps</p>
                <p className="text-sm mt-1">sustained render rate on mid-range hardware</p>
              </div>
              <div>
                <p className="text-4xl font-bold">94</p>
                <p className="text-sm mt-1">Lighthouse performance score on production build</p>
              </div>
              <div>
                <p className="text-4xl font-bold">12k</p>
                <p className="text-sm mt-1">unique visitors in the first month after posting on X</p>
              </div>
            </div>
            <p>
              The project was shared on X (Twitter) and gained traction in the creative
              dev community, leading to two freelance enquiries and an invitation to present
              at a Jakarta frontend meetup. The codebase is open-source on GitHub and has
              since been forked 200+ times as a starter template for WebGL globe projects.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
