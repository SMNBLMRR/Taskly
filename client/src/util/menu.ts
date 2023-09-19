export interface MenuInterface {
  id: number;
  name: string;
  path: string;
  invisible: string;
  style: string;
}

export const menu: MenuInterface[] = [
  {
    id: 1,
    name: "Register",
    path: "/register",
    invisible: "/register",
    style: "rounded-md bg-[#E91E63] text-white py-2 px-4"
  },
  {
    id: 2,
    name: "Log in",
    path: "/login",
    invisible: "/login",
    style: "rounded-md bg-[#009688] text-white py-2 px-4"
  }
];
