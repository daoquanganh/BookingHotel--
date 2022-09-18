import model from "../models/index.js"

class RoomController {
    createRoom = async (req, res) => {
        try {
            const data = await model.Room.create(req.body)
            res.status(201).send(data)
            console.log(data)   
        } catch (e) {
            throw new Error(e)
        }
    }
}

export default RoomController