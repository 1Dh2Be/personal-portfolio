// Component imports
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

//Image Imports
import conceive from "../assets/png/conceive2.png";
import believe from "../assets/png/believe2.png";
import achieve from "../assets/png/achieve2.png";

export const DynamicSwitch = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const textStyles =
    "bg-bg-primary rounded-xl p-2 text-4xl font-bold text-text-primary drop-shadow-lg";

  // Animation values for the first image (conceive)
  const opacity1 = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  // Animation values for the second image (believe)
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.5], [100, 0]);

  // Animation values for the third image (achieve)
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.8], [100, 0]);

  return (
    <section ref={scrollRef} className="mx-[-2rem] mt-8 h-[300vh]">
      <div className="flex flex-col md:flex-row gap-2 h-screen sticky top-0">
        {/* First image - Conceive */}
        <motion.div
          style={{ opacity: opacity1 }}
          className="h-1/3 md:h-full flex-1 relative"
        >
          <img
            src={conceive}
            alt="Conceive"
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: opacity1 }}
          >
            <h2 className={textStyles}>Conceive it</h2>
          </motion.div>
        </motion.div>

        {/* Second image - Believe */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="h-1/3 md:h-full flex-1 relative"
        >
          <img
            src={believe}
            alt="Believe"
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: opacity2 }}
          >
            <h2 className={textStyles}>Believe it</h2>
          </motion.div>
        </motion.div>

        {/* Third image - Achieve */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="h-1/3 md:h-full flex-1 relative"
        >
          <img
            src={achieve}
            alt="Achieve"
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: opacity3 }}
          >
            <h2 className={textStyles}>Achieve it</h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
