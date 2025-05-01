import React from "react";
import { useNavigate } from "react-router";

interface ProjectCardProps {
  src: string;
  projectName: string;
  projectType: string;
  projectDate: string | number;
  slug: string;
}

export const ProjectCards: React.FC<ProjectCardProps> = ({
  src,
  projectName,
  projectType,
  projectDate,
  slug,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${slug}`);
  };

  return (
    <div
      data-cursor-trigger
      className="flex flex-col gap-3 mb-5 sm:gap-4 w-full rounded-lg group cursor-pointer"
      onClick={handleClick}
    >
      {/* Project Name & subject */}
      <div className="flex mt-2 sm:mt-3">
        <div className="flex-1">
          <h3 className="text-base md:text-lg font-semibold drop-shadow-sm">
            {projectName}
          </h3>
          <p className="text-sm text-text-secondary drop-shadow-sm text-nowrap">
            {projectType}
          </p>
        </div>

        {/* Project date */}
        <div className="flex-1">
          <p className="text-sm text-text-secondary drop-shadow-sm text-right lg:text-left">
            {projectDate}
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="w-full max-h-[800px] relative overflow-hidden rounded-lg hover:translate-y-[-5px] transition-transform duration-300">
        <img
          src={src}
          alt={`Image for ${projectName} project`}
          className="object-fit w-full rounded-lg aspect-video"
        />
      </div>
    </div>
  );
};
