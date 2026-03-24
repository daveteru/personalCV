import type { ProjectData } from "./data/projects";

export default function ProjectCard({ title, intro, task, action, result, metrics }: ProjectData) {
  return (
    <div>
      <div className="ml-auto gap-2 lg:w-[50%] flex flex-col py-5">
        <div className="h-100 w-full  bg-gray-100"></div>
        <div className="flex flex-col gap-8 my-8">
          <h1 className="font-bold text-left">{title}</h1>
          <article className="text-left">
            <p>{intro}</p>
          </article>
          <hr className="my-10"></hr>
          <article className="flex flex-col md:flex-row text-left my-2 gap-10">
            <p>
              <h2 className="font-bold">TASK:</h2>
              {task}
            </p>
            <p>
              <h2 className="font-bold">ACTION:</h2>
              {action}
            </p>
          </article>
          <hr></hr>
          <article className="text-left">
            <h2 className="font-bold">RESULT:</h2>
            {metrics && (
              <div className="grid grid-cols-3 gap-6 my-6">
                {metrics.map((m) => (
                  <div key={m.value}>
                    <p className="text-4xl font-bold">{m.value}</p>
                    <p className="text-sm mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            )}
            <p>{result}</p>
          </article>
        </div>
      </div>
    </div>
  );
}
