import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "./ui/avatar";
import profilePicture from "../assets/Images/Me.jpeg";
import { DotIcon } from "@/assets/icons/DotIcon";

export const About = () => {
  return (
    <section className="mt-15 md:mt-30 py-2">
      <section className="flex flex-col xl:flex-row gap-10">
        <div className="flex flex-col md:flex-row flex-1 justify-between">
          <div className="flex  gap-5">
            <Avatar className="h-15 w-15 md:h-20 md:w-20">
              <AvatarImage
                src={profilePicture}
                className="object-cover w-full h-full"
              />
            </Avatar>
            <span className="text-text-primary text-lg leading-[1.1] md:leading-7 md:text-xl font-medium whitespace-nowrap">
              19. <br /> Self Taught. <br /> Driven.
            </span>
          </div>

          <div className="flex h-fit items-center text-text-primary font-medium mr-40 whitespace-nowrap">
            <DotIcon />
            <span className="underline">AVAILABLE FOR WORK</span>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="max-w-[650px]">
            Unconventional path, exceptional results.
            <span className="underline"> Full Stack Engineer</span> with a knack
            for bringing complex ideas to life.
          </h2>
        </div>
      </section>
    </section>
  );
};
