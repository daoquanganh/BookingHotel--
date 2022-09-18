import model from "../models/index.js"

class BookingController {
    createBooking = async (req, res) => {
        try {
            const data = await model.Booking.create(req.body)
            res.status(201).send(data)
            console.log(data)   
        } catch (e) {
            throw new Error(e)
        }
    }
}

export default BookingController