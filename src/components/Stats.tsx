import { StatCard } from "./ui/StatCard";

import StatCardsData from "../data/StatCardsData.json";

export const Stats = () => {
  return (
    <section>
      <div className="w-full flex justify-end">
        <h2 className="text-left max-w-[800px]">
          I’m passionate about building real solutions—combining creativity,
          code, and continuous learning. Every project is a step forward, and
          I’m excited to keep growing and delivering value.
        </h2>
      </div>

      <div className="flex flex-col h-[400px] md:flex-row items-center gap-28 pt-40">
        {StatCardsData.map((entry, i) => (
          <StatCard
            key={i}
            value={entry.value}
            title={entry.title}
            description={entry.description}
          />
        ))}
      </div>
    </section>
  );
};
