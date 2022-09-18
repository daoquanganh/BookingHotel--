import express from "express";
import RoomController from "../controllers/controller.room.js";

const router = express.Router();
const roomController = new RoomController(); 

router.route('/').get((req, res) => {
    res.send('Hello');
});

router.route('/').post(roomController.createRoom);

export default router;