import { AxiosPromise } from "axios";
import request from "../util/request";

export default async function getUserInfoService(): Promise<AxiosPromise> {
  return request.get("/api/v1/userInfo");
}
