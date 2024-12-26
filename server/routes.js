import {
  getCarsListController,
  getCarByIdController,
} from "../modules/cars/controller.js";

const routes = [
  {
    endpoint: `/api/v1/cars`,
    handler: getCarsListController,
    method: "get",
  },
  {
    endpoint: `/api/v1/cars/:id`,
    handler: getCarByIdController,
    method: "get",
  },
];

export default routes;
