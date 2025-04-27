import { useState } from "react";
import { ProcessRow } from "./ui/ProcessRow";
import { motion } from "motion/react";

export const Process = () => {
  const [currentSection, setCurrentSection] = useState(1);

  const viewportOptions = { amount: 1, once: false };

  return (
    <section className="flex py-15 md:py-30">
      <div className="flex-[40] font-Manrope sticky top-0 self-start">
        <div className="flex">
          <div>
            <h1 className="font-extrabold! text-[60px]! md:text-[180px]! lg:text-[243px]! xl:text-[304px]! leading-[1.05]!">
              0
            </h1>
          </div>
          <div>
            <h1 className="font-extrabold! text-[60px]! md:text-[180px]! lg:text-[243px]! xl:text-[304px]! leading-[1.05]!">
              {currentSection}
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-80 flex-[60]">
        <motion.div
          viewport={viewportOptions}
          onViewportEnter={() => setCurrentSection(1)}
          className="flex flex-col gap-5 md:gap-10 lg:gap-15 border-t border-border-primary py-2 md:py-6"
        >
          <h3 className="text-lg!">preparation</h3>
          <h2>Plan & Design</h2>
          <div className="flex flex-col lg:flex-row gap-5 md:gap-10 lg:20">
            <p>
              We start by laying a solid foundation understanding your goals,
              your users, and the best way to bring your ideas to life.
            </p>
            <p>
              Every project begins with research, ideation, and clear structure
              to ensure a smooth process from the start.
            </p>
          </div>

          <div>
            <ProcessRow
              number="01"
              title="Define project goals and requirements"
            />
            <ProcessRow
              number="02"
              title="Research user needs and sketch ideas"
            />
            <ProcessRow
              number="03"
              title="Create wireframes or prototypes for clarity"
              isLast={true}
            />
          </div>
        </motion.div>

        <motion.div
          viewport={viewportOptions}
          onViewportEnter={() => setCurrentSection(2)}
          className="flex flex-col gap-5 md:gap-10 lg:gap-15 border-t border-border-primary py-2 md:py-6"
        >
          <h3 className="text-lg!">preparation</h3>
          <h2>Plan & Design</h2>
          <div className="flex flex-col lg:flex-row gap-5 md:gap-10 lg:20">
            <p>
              We start by laying a solid foundation understanding your goals,
              your users, and the best way to bring your ideas to life.
            </p>
            <p>
              Every project begins with research, ideation, and clear structure
              to ensure a smooth process from the start.
            </p>
          </div>

          <div>
            <ProcessRow
              number="01"
              title="Define project goals and requirements"
            />
            <ProcessRow
              number="02"
              title="Research user needs and sketch ideas"
            />
            <ProcessRow
              number="03"
              title="Create wireframes or prototypes for clarity"
              isLast={true}
            />
          </div>
        </motion.div>

        <motion.div
          viewport={viewportOptions}
          onViewportEnter={() => setCurrentSection(3)}
          className="flex flex-col gap-5 md:gap-10 lg:gap-15 border-t border-border-primary py-2 md:py-6"
        >
          <h3 className="text-lg!">preparation</h3>
          <h2>Plan & Design</h2>
          <div className="flex flex-col lg:flex-row gap-5 md:gap-10 lg:20">
            <p>
              We start by laying a solid foundation understanding your goals,
              your users, and the best way to bring your ideas to life.
            </p>
            <p>
              Every project begins with research, ideation, and clear structure
              to ensure a smooth process from the start.
            </p>
          </div>

          <div>
            <ProcessRow
              number="01"
              title="Define project goals and requirements"
            />
            <ProcessRow
              number="02"
              title="Research user needs and sketch ideas"
            />
            <ProcessRow
              number="03"
              title="Create wireframes or prototypes for clarity"
              isLast={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
