import express from "express";
import HotelController from "../controllers/controller.hotel.js";

const router = express.Router();
const hotelController = new HotelController();

router.get('/', hotelController.getAllHotel);

router.get('/byCity', hotelController.getHotelbyCity);

router.get('/sortbyRating', hotelController.getAllHotelbyRating);

router.get('/sortbyStar', hotelController.getAllHotelbyStar);

router.get('/byName', hotelController.getHotelbyName);

router.post('/', hotelController.upload, hotelController.createHotel);

export default router;