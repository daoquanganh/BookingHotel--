import model from "../models/index.js"
import jwt from "jsonwebtoken"
import { jwtOptions } from "../middlewares/auth.js"
class CustomerController {
    register = async (req, res) => {
        try {
            const user = await model.Customer.findOne({where: {"email": req.body.email}})
            if (user) {
                res.status(400).send({ "error": "User with specified email already exists"})
            }
            const customerData = await model.Customer.create(req.body);
            res.status(201).send(customerData);
        } catch (e) {
            res.status(500).send({"error": e.message});
        }
    }
    login = async (req,res) => {
        try {
            const user = await model.Customer.findOne({where: {
                "email": req.body.email,
                "password": req.body.password}})
            if (user) {

                if (req.body.password != user.password) return res.status(400).send("Email or Password is wrong");

                const token = jwt.sign(
                    {id: user.id, userType: user.userType}, 
                    jwtOptions.secretOrKey,
                    {
                        expiresIn: "1h",
                    });
                res.send({token})
            }
        } catch (e) {
            if ( err instanceof NotFoundError) {
                res.status(401).send("Email or Password is wrong");
            }
            else {
                res.status(500).send("Error retrieving User");
            }
        }
    }
    getCustomer = async (_req, res) => {
        try {
            const customerData = await model.Customer.findAll();
            res.status(200).send(customerData);
            console.log(customerData);

        } catch (e){
            console.log(e);
        }
    }
}

export default CustomerController