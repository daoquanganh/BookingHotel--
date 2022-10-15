import express from "express";
import CustomerController from "../controllers/controller.customer.js";

const router = express.Router();
const customerController = new CustomerController();
// Register a new User
router.post('/register', customerController.register);

// Login
router.post('/login', customerController.login);

export default router