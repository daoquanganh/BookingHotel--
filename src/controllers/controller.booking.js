import model from "../models/index.js"

class BookingController {
    createBooking = async (req, res) => {
        try {
            const data = await model.Booking.create(req.body).then(() => {
                res.status(201).send(data)
                console.log(data)   
            });
        } catch (e) {
            const errors = e.errors.map((error) => error.message)
            throw new Error(errors)
        }
    }
}

export default BookingController