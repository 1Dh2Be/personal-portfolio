import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

type StatCardType = {
  value: string;
  title: string;
  description: string;
};

const parseValue = (value: string): { end: number; suffix: string } => {
  const match = value.match(/^(\d+)([+%]?)$/);
  if (!match) return { end: 0, suffix: "" };
  return { end: Number(match[1]), suffix: match[2] };
};

export const StatCard = ({ value, title, description }: StatCardType) => {
  const [ref, inView] = useInView();
  const { end, suffix } = parseValue(value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startValue = 0;
    const duration = 2000; // ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(
        startValue + progress * (end - startValue)
      );

      setCount(currentCount);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [inView, end]);

  return (
    <div
      ref={ref}
      className="flex h-full flex-col justify-start gap-10 flex-1 text-text-primary"
    >
      <span className="text-8xl md:text-5xl lg:text-7xl 2xl:text-9xl">
        {count}
        {suffix}
      </span>

      <hr className="border-border-primary" />
      <div className="flex flex-col gap-2">
        <h2 className="md:text-[32px]!">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};
