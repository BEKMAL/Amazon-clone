import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  baseURL: "http://127.0.0.1:5001/clone-4681f/us-central1/api",


});

export { axiosInstance };
