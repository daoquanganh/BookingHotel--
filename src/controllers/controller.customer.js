import model from "../models/index.js"

class CustomerController {
    createCustomer = async (req, res) => {
        try {
            const customerData = await model.Customer.create(req.body);
            res.status(201).send(customerData);
            console.log(customerData);
        } catch (e) {
            console.log(e);
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