import axios from "axios";
const base = "https://youth-activism-app-server.herokuapp.com/api";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA0OTJjZTY5MjQwMDg5N2M1MTlhY2FmIn0sImlhdCI6MTYxNTk1NzkwMiwiZXhwIjoxNjE2Mzg5OTAyfQ.YeJ7nsJG1uMy0chROpY4AolePegJYiGQrWk8AAiVPpY";
// TODO: Connect to asyncstorage

//AUTHENTICATION
export const signUp = axios.create({
  baseURL: `${base}/users`,
  method: "POST",
  headers: {
    "Content-type": "application/json",
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
    "Content-type": "application/json",
    "x-auth-token": token,
  },
});

// CONTENT
export const createContent = axios.create({
  baseURL: `${base}/content`,
  method: "POST",
  headers: {
    "Content-type": "application/json",
    "x-auth-token": token,
  },
});

export const getContents = axios.create({
  baseURL: `${base}/content`,
  method: "GET",
  headers: {
    "Content-type": "application/json",
    "x-auth-token": token,
  },
});

export const updateContent = axios.create({
  baseURL: `${base}/content`,
  method: "PUT",
  headers: {
    "Content-type": "application/json",
    "x-auth-token": token,
  },
});

export const deleteContent = axios.create({
  baseURL: `${base}/content`,
  method: "DELTE",
  headers: {
    "Content-type": "application/json",
    "x-auth-token": token,
  },
});

export const getContentDetails = axios.create({
  baseURL: `${base}/content`,
  method: "GET",
  headers: {
    "Content-type": "application/json",
    "x-auth-token": token,
  },
});

//EVENT
export const createEvent = axios.create({
  baseURL: `${base}/event`,
  method: "POST",
  headers: {
    "Content-type": "application/json",
    "x-auth-token": token,
  },
});

export const getEvents = axios.create({
  baseURL: `${base}/event`,
  method: "GET",
  headers: {
    "Content-type": "application/json",
    "x-auth-token": token,
  },
});

export const updateEvent = axios.create({
  baseURL: `${base}/event`,
  method: "PUT",
  headers: {
    "Content-type": "application/json",
    "x-auth-token": token,
  },
});

export const deleteEvent = axios.create({
  baseURL: `${base}/event`,
  method: "DELTE",
  headers: {
    "Content-type": "application/json",
    "x-auth-token": token,
  },
});

export const getEventDetails = axios.create({
  baseURL: `${base}/event`,
  method: "GET",
  headers: {
    "Content-type": "application/json",
    "x-auth-token": token,
  },
});
