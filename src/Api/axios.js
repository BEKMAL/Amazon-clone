import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-4681f/us-central1/api",
  //localhost
// baseURL: "http://127.0.0.1:5001",
  //deploy on render.com
  baseURL: "https://amazon-api-z8q9.onrender.com",
});

export { axiosInstance };
