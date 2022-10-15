import express from "express";
import CustomerController from "../controllers/controller.customer.js";
import passport from "../middlewares/auth.js";


const router = express.Router();
const customerController = new CustomerController();

router.get(
    '/', 
    passport.authenticate('jwt', {session: false}), customerController.getCustomer);

export default router;