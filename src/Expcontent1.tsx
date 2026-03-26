interface ExpContentProps {
  company: string;
  period: string;
  description: string;
}

export default function ExpContent({ company, period, description }: ExpContentProps) {
  return (
    <div>
      <div className="w-full h-full border-[0.5px] rounded-2xl flex flex-col  p-8 items-start gap-5">
        <div className="flex flex-col text-left w-75">
          <h1 className="font-bold text-2xl">{company}</h1>
          <h2 className="text-[10px] mb-2">{period}</h2>
          <hr className="w-[5%]"></hr>
          <p className="text-[14px] mt-5 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
