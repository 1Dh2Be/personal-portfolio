import BlogData from "../data/BlogData.json";
import { ArticleHero } from "./ui/ArticleHero";

import EmptyParkBench from "../assets/png/EmptyParkBench.png";
import InfiniteStairCase from "../assets/png/InfiniteStairCase.png";

const imageMapping = {
  "empty-park-bench": EmptyParkBench,
  "infinite-staircase": InfiniteStairCase,
};

// Define the type for BlogData entries
type BlogEntry = {
  title: string;
  src: keyof typeof imageMapping;
  alt: string;
  description: string;
};

export const Blog = () => {
  return (
    <section className="py-15 md:py-30 xl:py-40">
      <div className="flex flex-col xl:flex-row gap-5 justify-between">
        <h2 className="text-text-primary text-3xl md:text-4xl lg:text-[64px]! font-bold">
          My personal blog
        </h2>
        <p className="text-lg xl:text-2xl max-w-[800px] text-text-secondary!">
          A space to share my thoughts, lessons, and experiences beyond work,
          beyond titles. Here, I explore what shapes me, what challenges me, and
          what I'm learning along the way. This is my voice, unfiltered.
        </p>
      </div>

      <hr className="my-10 border-border-primary" />

      <div>
        {(BlogData as BlogEntry[]).map((entry, i) => (
          <ArticleHero
            key={i}
            index={i + 1}
            title={entry.title}
            src={imageMapping[entry.src]}
            alt={entry.alt}
            soon={true}
          />
        ))}
      </div>
    </section>
  );
};
