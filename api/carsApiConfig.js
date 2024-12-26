import { getData } from "./fetchData.js";

const carsApiConfig = (baseURL) => [
  {
    name: "getCars",
    url: `http://8.209.113.173/api/carlist`,
    method: getData,
    errorMessage: "Failed to get car list",
  },
];

export default carsApiConfig;
