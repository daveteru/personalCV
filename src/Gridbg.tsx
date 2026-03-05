import PixelTrail from "./Trail";

export default function Gridbg() {
  return (
    <div className="fixed inset-0 h-full bg-[#212121]">
  <PixelTrail
    gridSize={75}
    trailSize={0.1}
    maxAge={450}
    interpolate={0.1}
    color="#CDCDCD"
    gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
/>
    </div>
  );
}