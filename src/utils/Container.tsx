import { ReactNode, HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

export const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <section
      {...props}
      className={`px-8 py-3 w-full ${className ? className : ""}`}
    >
      {children}
    </section>
  );
};
