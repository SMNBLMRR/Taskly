import request from "../util/request";

export interface RegisterSchema {
    email:string,
    password:string
}

export default async function doRegister<T>(data:RegisterSchema):Promise<T>{
    return request.post("/api/v1/register",data)
}