import express from "express";
import HotelController from "../controllers/controller.hotel.js";

const router = express.Router();
const hotelController = new HotelController();

router.get('/', (req, res) => {
    res.send('Hello');
});

router.post('/', hotelController.upload, hotelController.createHotel);

export default router;