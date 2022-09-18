import model from "../models/index.js";
import multer from "multer";
import path from "path";

class HotelController {
    createHotel = async (req, res) => {
        try {
            let data = {
                image: req.file.path,
                hotelName: req.body.hotelName,
                city: req.body.city,
                rating: req.body.rating,
                star: req.body.star
            }
            const hotel = await model.Hotel.create(data).then(() => {
                res.status(201).send(data)
                console.log(data)   
            });
        } catch (e) {
            throw new Error(e)
        }
    }

    // Image Controller
    storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./images")
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

export default HotelController