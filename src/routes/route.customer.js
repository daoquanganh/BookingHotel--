import express from "express";
import CustomerController from "../controllers/controller.customer.js";

const router = express.Router();
const customerController = new CustomerController();

router.get('/', customerController.getCustomer);

router.post('/', customerController.createCustomer);

export default router;