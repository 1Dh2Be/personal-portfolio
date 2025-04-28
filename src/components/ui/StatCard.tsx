import { useSpring, animated } from "@react-spring/web";
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

  const spring = useSpring({
    from: { number: 0 },
    to: { number: inView ? end : 0 },
    config: { tension: 120, friction: 14 },
  });

  return (
    <div
      ref={ref}
      className="flex h-full flex-col justify-start gap-10 flex-1 text-text-primary"
    >
      <span className="text-8xl md:text-5xl lg:text-7xl 2xl:text-9xl">
        <animated.span>
          {spring.number.to((n) => `${Math.round(n)}${suffix}`)}
        </animated.span>
      </span>

      <hr className="border-border-primary" />
      <div className="flex flex-col gap-2">
        <h2 className="md:text-[32px]!">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};
