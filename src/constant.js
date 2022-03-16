import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2UzNjVkYTUyZDRmZDMxOTUwZmI5NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTY2MzkwNCwiZXhwIjoxNjM1OTIzMTA0fQ.WIsLjYCFU2JU3XuWVsivUNSyui2KfBH0XT-C0Ld9TOA";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
