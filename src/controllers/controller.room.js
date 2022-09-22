import model from "../models/index.js"
import multer from "multer"
import path from "path"

class RoomController {
    createRoom = async (req, res) => {
        try {
            let data = {
                image: req.file.path,
                guestNumber: req.body.guestNumber,
                price: req.body.type,
                status: req.body.status
            }
            const room = await model.Room.create(data)
            res.status(201).send(room)
            console.log(room)   
        } catch (e) {
            console.log(e);
        }
    }

     // Image Controller
     storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./images/rooms")
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + path.extname(file.originalname))
        }
    })

    upload = multer({
        storage: this.storage,
        limits: {fileSize: '1000000'},
        fileFilter: (req, file, cb) => {
            const fileTypes = /jpeg|jpg|png/
            const mimeType = fileTypes.test(file.mimetype)
            const extname = fileTypes.test(path.extname(file.originalname))
        
            if (mimeType && extname) {
                return cb(null, true)
            }
            cb('Give proper files format to upload');
        }
    }).single('image')
//  }).array('images',3)
}

export default RoomController