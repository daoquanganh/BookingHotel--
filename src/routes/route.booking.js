import express from "express";
import BookingController from "../controllers/controller.booking.js";

const router = express.Router();
const bookingController = new BookingController();

router.get('/', (req, res) => {
    res.send('Hello');
});

router.post('/', bookingController.createBooking);

export default router;