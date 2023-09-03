import { UserInterface } from "../store/user"
import request from "../util/request"

export default async function getUserInfoService<T extends UserInterface>():Promise<any>{
    return request.get("/api/v1/userInfo")
}