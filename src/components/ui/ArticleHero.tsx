import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";

type ArticleHeroType = {
  index: number;
  title: string;
  src: string;
  alt: string;
  soon: boolean;
};

export const ArticleHero = ({
  index,
  title,
  src,
  alt,
  soon,
}: ArticleHeroType) => {
  const [openSoonModal, setOpenSoonModal] = useState(false);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageX = useTransform(scrollYProgress, [0, 0.5], ["-100%", "0%"]);

  const handleClick = () => {
    if (soon) {
      setOpenSoonModal(true);
    }
  };

  const handleCloseModal = () => {
    console.log("Closing modal");
    setOpenSoonModal(false);
  };

  console.log("Modal state:", openSoonModal);

  const Container = ({ children }: { children: React.ReactNode }) => {
    if (soon) {
      return (
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          {children}
        </div>
      );
    }

    return (
      <Link to={`/blog/${title.toLowerCase().replace(/\s+/g, "-")}`}>
        {children}
      </Link>
    );
  };

  return (
    <Container>
      <motion.div
        ref={ref}
        data-cursor-trigger
        whileHover={{ x: 10 }}
        className="flex flex-col lg:flex-row lg:items-center gap-5 justify-between w-full px-8 py-6 relative border-b border-border-primary"
        style={{ minHeight: "160px" }}
      >
        {/* Left Section */}
        <div className="flex xl:flex-1 flex-col justify-center">
          <div>
            <span className="text-lg text-text-secondary tracking-widest mb-2">
              // {index}
            </span>
            {soon && (
              <span className="text-sm text-accent-primary mt-2">
                Coming soon
              </span>
            )}
          </div>

          <span className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">
            {title}
          </span>
        </div>

        {/* Right Section */}
        <motion.div className="flex xl:flex-1 items-center gap-6 origin-left overflow-hidden">
          {/* Clipped Image */}
          <motion.div
            className="w-full h-[120px]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
              x: imageX,
            }}
          >
            <img src={src} alt={alt} className="object-cover w-full h-full" />
          </motion.div>
        </motion.div>
      </motion.div>

      {openSoonModal && (
        <Modal
          title="Coming soon"
          description="I'm still working on this article. Since I'm currently focused on my job search,
              this content isn't my top priority at the moment, but stay tuned for updates!"
          onClose={handleCloseModal}
        />
      )}
    </Container>
  );
};
