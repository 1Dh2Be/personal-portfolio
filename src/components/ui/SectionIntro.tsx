type SectionIntroType = {
  number: string;
  title: string;
};

export const SectionIntro = ({ number, title }: SectionIntroType) => {
  return (
    <div className="flex items-center text-text-primary">
      <span className="flex-1 font-bold">{number}</span>
      <span className="relative flex-1 flex uppercase font-bold justify-end md:justify-start md:-left-5">
        {title}
      </span>
    </div>
  );
};
