import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.1.23:3000/api",
});
// export const api = axios.create({
//   baseURL: "https://ander.lopscorp.com",
// });

// api.interceptors.request.use(function (config) {
//   const token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDIyODMzMDYsImV4cCI6MTY0MjI4NjkwNiwic3ViIjoiNTIwODAyODEtNTRiNy00MjdkLWFmNmQtZDA1NzkyZDRmNGM5In0.BLDfMoGv2BPLKSmPCPucZWPdMAqAmbuKku3TiOaYbAY";
//   config.headers.Authorization = token ? `Bearer ${token}` : "";
//   return config;
// });
