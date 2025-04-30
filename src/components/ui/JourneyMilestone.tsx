type JourneyMilestoneType = {
  number: number;
  date: string;
  title: string;
  text: string;
};

export const JourneyMilestone = ({
  number,
  date,
  title,
  text,
}: JourneyMilestoneType) => {
  return (
    <div className=" flex-shrink-0 flex flex-col gap-5 text-text-primary w-[85vw] md:w-[70vw] lg:w-[40vw]">
      <div className="flex items-center justify-between">
        <span className="text-[20px] lg:text-[32px] text-text-secondary">
          {date}
        </span>
        <span className="text-[20px] lg:text-[32px] text-text-secondary tracking-widest mb-2">
          // {number}
        </span>
      </div>
      <h2 className="text-[20px] lg:text-[32px]!">{title}</h2>
      <p className="text-lg xl:text-2xl">{text}</p>
    </div>
  );
};
