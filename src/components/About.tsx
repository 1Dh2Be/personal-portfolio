import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "./ui/avatar";
import profilePicture from "../assets/png/Me.jpeg";
import { DotIcon } from "@/assets/icons/DotIcon";

export const About = () => {
  return (
    <section className="w-full py-10 md:py-16">
      <section className="flex flex-col xl:flex-row gap-10">
        <div className="flex flex-col md:flex-row flex-1 justify-between mobile-md:gap-5">
          <div className="flex gap-5">
            <Avatar className="h-15 w-15 mobile-md:h-20 mobile-md:w-20">
              <AvatarImage
                src={profilePicture}
                className="object-cover w-full h-full"
              />
            </Avatar>
            <span className="text-text-primary text-lg mobile-md:text-xl leading-[1.1] mobile-md:leading-[1.25] md:leading-7 font-medium whitespace-nowrap">
              19. <br /> Self Taught. <br /> Driven.
            </span>
          </div>

          <div className="flex h-fit items-center text-text-primary font-medium mr-40 whitespace-nowrap">
            <DotIcon />
            <span className="underline">AVAILABLE FOR WORK</span>
          </div>
        </div>
        <div className="flex-1 mobile-md:my-10 xl:mt-0">
          <h2 className="mobile-md:text-4xl max-w-[650px]">
            Unconventional path, exceptional results.
            <span className="underline"> Full Stack Engineer</span> with a knack
            for bringing complex ideas to life.
          </h2>
        </div>
      </section>
    </section>
  );
};
