import { useState } from "react";
import { ProcessRow } from "./ui/ProcessRow";
import { motion, AnimatePresence } from "framer-motion";
import processData from "../data/ProcessData.json";
import { useIsMobile } from "../utils/device";

export const Process = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const isMobile = useIsMobile();
  const viewportOptions = { amount: isMobile ? 0.3 : 1, once: false };

  const handleViewportEnter = (id: number) => {
    setScrollDirection(id > currentSection ? "down" : "up");
    setCurrentSection(id);
  };

  const numberVariants = {
    initial: (direction: "up" | "down") => ({
      y: direction === "up" ? 50 : -50,
      opacity: 0,
    }),
    animate: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: "up" | "down") => ({
      y: direction === "up" ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section className="flex py-15 md:py-30">
      <div className="flex-[40] font-Manrope sticky top-0 self-start">
        <div className="flex">
          <div>
            <h1 className="font-extrabold! text-[60px]! md:text-[180px]! lg:text-[243px]! xl:text-[304px]! leading-[1.05]!">
              0
            </h1>
          </div>
          <div className="relative h-[60px] md:h-[180px] lg:h-[243px] xl:h-[304px]">
            <AnimatePresence
              initial={false}
              mode="wait"
              custom={scrollDirection}
            >
              <motion.h1
                key={currentSection}
                variants={numberVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={scrollDirection}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
                className="absolute font-extrabold! text-[60px]! md:text-[180px]! lg:text-[243px]! xl:text-[304px]! leading-[1.05]!"
              >
                {currentSection}
              </motion.h1>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-80 flex-[60]">
        {processData.processes.map((process) => (
          <motion.div
            key={process.id}
            viewport={viewportOptions}
            onViewportEnter={() => handleViewportEnter(process.id)}
            className="flex flex-col gap-5 md:gap-10 lg:gap-15 border-t border-border-primary py-2 md:py-6"
          >
            <h3 className="text-lg!">{process.phase}</h3>
            <h2>{process.title}</h2>
            <div className="flex flex-col lg:flex-row gap-5 md:gap-10 lg:20">
              <p>{process.description.left}</p>
              <p>{process.description.right}</p>
            </div>

            <div>
              {process.steps.map((step, index) => (
                <ProcessRow
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  isLast={index === process.steps.length - 1}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
