import { getCarByIdService, getCarsListService } from "./service.js";

const STATUS_OK = 200;
const STATUS_BAD = 500;
const getCarsListController = async (req, res) => {
  try {
    const { query } = req;
    const cars = await getCarsListService({ query });
    res.status(STATUS_OK).json(cars);
  } catch (error) {
    res.status(STATUS_BAD).json({ error });
  }
};

const getCarByIdController = async (req, res) => {
  try {
    const cars = await getCarByIdService(1);
    res.status(STATUS_OK).json(cars);
  } catch (error) {
    res.status(STATUS_BAD).json({ error });
  }
};

export { getCarsListController, getCarByIdController };
