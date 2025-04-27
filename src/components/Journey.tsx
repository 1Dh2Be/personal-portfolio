import { JourneyMilestone } from "./ui/JourneyMilestone";
import JourneyData from "../data/JourneyData.json";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const Journey = () => {
  const scrollSection = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollSection,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-84%"]);

  return (
    <div ref={scrollSection} className="h-[350vh]">
      <section className="flex flex-col py-15 md:py-30 xl:py-40 sticky top-0 gap-30">
        <div className="flex flex-col gap-5">
          <h2 className="text-text-primary text-3xl md:text-4xl lg:text-[64px]! font-bold">
            My Journey So Far
          </h2>

          <p className="text-lg xl:text-2xl max-w-[600px]">
            Explore the key milestones and experiences that have shaped my path
            in software development and design. From early beginnings to current
            achievements, here's how my journey has unfolded.
          </p>
        </div>

        <div className="flex top-0 h-auto overflow-hidden">
          <motion.div style={{ x }} className="flex gap-10 md:gap-20 lg:gap-60">
            {JourneyData.map((entry, i) => (
              <JourneyMilestone
                key={i + 1}
                date={entry.date}
                number={i + 1}
                title={entry.title}
                text={entry.description}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
