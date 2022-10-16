import express from "express";
import HotelController from "../controllers/controller.hotel.js";

const router = express.Router();
const hotelController = new HotelController();

router.get('/', hotelController.getAllHotel);

router.get('/byCity/:city', hotelController.getHotelbyCity);

router.get('/byRating/:city', hotelController.HotelbyRating);

router.get('/byStar/:city', hotelController.HotelbyStar);

router.get('/byName', hotelController.getHotelbyName);

router.post('/', hotelController.upload, hotelController.createHotel);

export default router;