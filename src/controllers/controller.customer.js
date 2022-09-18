import model from "../models/index.js"

class CustomerController {
    createCustomer = async (req, res) => {
        try {
            const customerData = await model.Customer.create(req.body).then(() => {
                res.status(201).send(customerData)
                console.log(customerData)   
            });
        } catch (e) {
            const errors = e.errors.map((error) => error.message)
            throw new Error(errors)
        }
    }
}

export default CustomerController