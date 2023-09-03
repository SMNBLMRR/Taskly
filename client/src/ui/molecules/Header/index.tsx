import React from "react";
import { MenuInterface, menu } from "../../../util/menu";
import { Link } from "react-router-dom";
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <header className="w-full py-2 px-6 flex justify-between items-center fixed top-0 left-0">
        <div>
          <span className="font-bold text-3xl">Fast-Todo</span>
        </div>
        <div className="flex justify-center items-center">
          {menu.map((item: MenuInterface) => {
            return (
              <div key={item?.id} className="mx-2 font-semibold text-base">
                <Link className={item?.style} to={item?.path}>{item?.name}</Link>
              </div>
            );
          })}
        </div>
      </header>
    </>
  );
};

export default Header;
