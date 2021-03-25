import axios from "axios";
import { getData } from "../shared/asyncStorage";
const base = "https://youth-activism-app-server.herokuapp.com/api";

// const token = (async () => {
//   return await getData("@user_token");
// })();

// TODO: Connect to asyncstorage

//AUTHENTICATION
export const signUp = axios.create({
  baseURL: `${base}/users`,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = axios.create({
  baseURL: `${base}/auth`,
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
});

export const getUser = axios.create({
  baseURL: `${base}/auth`,
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    // "x-auth-token": token,
  },
});

// CONTENT
export const createContent = axios.create({
  baseURL: `${base}/content`,
  method: "POST",
  headers: {
    "Content-type": "application/json",
    // "x-auth-token": token,
  },
});

export const getContents = axios.create({
  baseURL: `${base}/content`,
  method: "GET",
  headers: {
    "Content-type": "application/json",
  },
});

export const postContent = axios.create({
  baseURL: `${base}/content`,
  method: "PUT",
  headers: {
    "Content-type": "application/json",
    // "x-auth-token": token,
  },
});

export const deleteContent = axios.create({
  baseURL: `${base}/content`,
  method: "DELTE",
  headers: {
    "Content-type": "application/json",
    // "x-auth-token": token,
  },
});

export const getContentDetails = axios.create({
  baseURL: `${base}/content`,
  method: "GET",
  headers: {
    "Content-type": "application/json",
    // "x-auth-token": token,
  },
});

//EVENT
export const createEvent = axios.create({
  baseURL: `${base}/event`,
  method: "POST",
  headers: {
    "Content-type": "application/json",
    // "x-auth-token": token,
  },
});

export const getEvents = axios.create({
  baseURL: `${base}/event`,
  method: "GET",
  headers: {
    "Content-type": "application/json",
    // "x-auth-token": token,
  },
});

export const updateEvent = axios.create({
  baseURL: `${base}/event`,
  method: "PUT",
  headers: {
    "Content-type": "application/json",
    // "x-auth-token": token,
  },
});

export const deleteEvent = axios.create({
  baseURL: `${base}/event`,
  method: "DELTE",
  headers: {
    "Content-type": "application/json",
    // "x-auth-token": token,
  },
});

export const getEventDetails = axios.create({
  baseURL: `${base}/event`,
  method: "GET",
  headers: {
    "Content-type": "application/json",
    // "x-auth-token": token,
  },
});
