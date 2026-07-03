import axios from "axios";

const api = axios.create({
  baseURL: "https://issue-pilot-bug-triage-production.up.railway.app",
});

export default api;
