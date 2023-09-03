import { AxiosResponse } from "axios";
import { UserInterface } from "../store/user";
import request from "../util/request";

export interface LoginSchema {
    email:string,
    password:string
}

export async function doLogin(data:LoginSchema):Promise<AxiosResponse>{
    return request.post("/api/v1/login",data)
}

export interface RegisterSchema {
    email:string,
    username:string
    password:string
}

export async function doRegister(data:RegisterSchema):Promise<AxiosResponse>{
    return request.post("/api/v1/register",data)
}