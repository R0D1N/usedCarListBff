import { apiMethods } from "../../api/apiMethods.js";

const getCarsListService = async ({ query }) => {
  return apiMethods.getCars({ query });
};

const getCarByIdService = async (id) => {
  const cars = [
    {
      id: 1,
      name: "Audi A4",
      brand: "Audi",
      model: "A4",
      year: 2021,
      color: "Black",
      price: 10000,
      location: "USA",
    },
  ];
  return cars;
};

export { getCarsListService, getCarByIdService };
