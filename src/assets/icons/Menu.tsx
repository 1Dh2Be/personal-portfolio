import { MenuNavigation } from "@/components/MenuNavigation";
import { SVGProps, useState } from "react";

export const MenuIcon = (props: SVGProps<SVGSVGElement>) => {
  const [openMenu, setOpenMenu] = useState(false);

  const onClickHandler = () => {
    setOpenMenu(!openMenu);
  };

  // console.log("isOpen?:", openMenu);

  return (
    <>
      <svg
        width="32"
        height="31"
        viewBox="0 0 32 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-text-primary cursor-pointer hover:rotate-45 transition-all duration-300 ease-in-out"
        onClick={onClickHandler}
        {...props}
      >
        <path
          d="M9.22734 11.3804C7.11585 11.3804 5.40401 9.66868 5.40401 7.5571C5.40401 5.44553 7.11585 3.73376 9.22734 3.73376C11.339 3.73376 13.0507 5.44553 13.0507 7.5571C13.0507 9.66868 11.339 11.3804 9.22734 11.3804Z"
          fill="currentColor"
        />
        <path
          d="M23.5391 11.3804C21.4276 11.3804 19.7158 9.66868 19.7158 7.5571C19.7158 5.44553 21.4276 3.73376 23.5391 3.73376C25.6507 3.73376 27.3625 5.44553 27.3625 7.5571C27.3625 9.66868 25.6507 11.3804 23.5391 11.3804Z"
          fill="currentColor"
        />
        <path
          d="M9.22734 27.2689C7.11585 27.2689 5.40401 25.5571 5.40401 23.4455C5.40401 21.3339 7.11585 19.6222 9.22734 19.6222C11.339 19.6222 13.0507 21.3339 13.0507 23.4455C13.0507 25.5571 11.339 27.2689 9.22734 27.2689Z"
          fill="currentColor"
        />
        <path
          d="M23.5391 27.2689C21.4276 27.2689 19.7158 25.5571 19.7158 23.4455C19.7158 21.3339 21.4276 19.6222 23.5391 19.6222C25.6507 19.6222 27.3625 21.3339 27.3625 23.4455C27.3625 25.5571 25.6507 27.2689 23.5391 27.2689Z"
          fill="currentColor"
        />
      </svg>

      {openMenu && <MenuNavigation setOpenMenu={setOpenMenu} />}
    </>
  );
};
