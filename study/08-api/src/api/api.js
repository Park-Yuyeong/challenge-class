import axios from "axios";

export const baseURL = "https://api.ballang.yoojinyoung.com";

export const client = axios.create({ baseURL: baseURL });
