import React from "react";
import { MenuInterface, menu } from "../../../util/menu";
import { Link } from "react-router-dom";
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <header className="w-full py-2 px-4 flex justify-between items-center">
        <div className="">
          <span>Logo</span>
        </div>
        <div className="flex justify-center items-center">
          {menu.map((item: MenuInterface) => {
            return (
              <div key={item?.id} className="mx-2">
                <Link to={item?.path}>{item?.name}</Link>
              </div>
            );
          })}
        </div>
      </header>
    </>
  );
};

export default Header;
