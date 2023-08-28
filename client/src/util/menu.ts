export interface MenuInterface {
    id:number,
    name:string,
    path:string
}

export const menu:MenuInterface[] = [{
    id:1,
    name:"Home",
    path:"/"
},{
    id:2,
    name:"Login",
    path:"/login"
},{
    id:3,
    name:"Register",
    path:"/register"
}]