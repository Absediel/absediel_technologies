const appFavicon = "/assets/Icons/Favicon.png";
import axios from "axios";

export const MainContent = {
  appName: "Absediel Technologies",
  appFullName: "Absediel Technologies",
  appFavicon: appFavicon,
  contactNo: "+919232564695",
  email: "absedieltechnologies@gmail.com",
  address: "Madhya Pradesh & Kolkata, West Bengal, India",
  appDescription: "Absediel Technologies",
};

export const backendConfig = {
  base: (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_API_BASE_URL) || "/api",
  origin: (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_API_ORIGIN) || "",
};

export const Axios = axios.create({
  baseURL: backendConfig.base,
  withCredentials: true,
});