import { apiRequest } from "./api";

export function signup(data) {
  return apiRequest("/signup/", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function login(data) {
  return apiRequest("/login/", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function getPlatforms() {
  return apiRequest("/platforms/");
}
