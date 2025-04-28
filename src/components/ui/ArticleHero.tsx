import { motion } from "motion/react";

type ArticleHeroType = {
  index: number;
  title: string;
  src: string;
  alt: string;
};

export const ArticleHero = ({ index, title, src, alt }: ArticleHeroType) => {
  return (
    <div
      className="flex flex-col lg:flex-row lg:items-center gap-5 justify-between w-full px-8 py-6 relative border-b border-border-primary"
      style={{ minHeight: "160px" }}
    >
      {/* Left Section */}
      <div className="flex xl:flex-1 flex-col justify-center">
        <span className="text-lg text-text-secondary tracking-widest mb-2">
          // {index}
        </span>
        <span className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">
          {title}
        </span>
      </div>

      {/* Right Section */}
      <motion.div className="flex xl:flex-1 items-center gap-6 origin-left overflow-hidden">
        {/* Clipped Image */}
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 0.5, ease: [0.61, 1, 0.88, 1] }}
          className=" w-full h-[120px]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
          }}
        >
          <img src={src} alt={alt} className="object-cover w-full h-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};
