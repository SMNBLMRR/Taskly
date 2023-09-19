import { AxiosResponse } from "axios";
import request from "../util/request";

export interface RegisterSchema {
    email:string,
    username:string
    password:string
}

export interface LoginSchema extends Omit<RegisterSchema, "username"> {}

export async function doLogin(data:LoginSchema):Promise<AxiosResponse>{
    return request.post("/api/v1/login",data)
}

export async function doRegister(data:RegisterSchema):Promise<AxiosResponse>{
    return request.post("/api/v1/register",data)
}

export async function doLogout():Promise<AxiosResponse>{
    return request.get("/api/v1/logout")
}