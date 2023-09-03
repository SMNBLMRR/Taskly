export interface MenuInterface {
    id:number,
    name:string,
    path:string,
    style:string
}

export const menu:MenuInterface[] = [{
    id:2,
    name:"Log in",
    path:"/login",
    style:"rounded-md bg-black text-white py-2 px-4"
}]