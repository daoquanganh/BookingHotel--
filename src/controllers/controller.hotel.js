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
            const hotel = await model.Hotel.create(data)
            res.status(201).send(hotel)
            console.log(hotel)   
        } catch (e) {
            console.log(e);
        }
    }

    getAllHotel = async (_req, res) => {
        try {
            const data = await model.Hotel.findAll();
            res.status(200).send(data);
            console.log(data);

        } catch (e){
            console.log(e);
        }
    }

    getAllHotelbyRating = async (_req, res) => {
        try {
            const data = await model.Hotel.findAll({order: [
                ['rating', 'DESC']
            ]})
        } catch (e) {
            console.log(e);
        }
    }

    getAllHotelbyStar = async (_req, res) => {
        try {
            const data = await model.Hotel.findAll({order: [
                ['star', 'DESC']
            ]})
        } catch (e) {
            console.log(e);
        }
    }

    getHotelbyName = async (req, res) => {
        try {
            const data = await model.Hotel.findAll({"hotelName":req.params.hotelName});
            res.status(200).send(data);
        } catch (e) {
            console.log(e);
        }
    }

    getHotelbyCity = async (req, res) => {
        try {
            const data = await model.Hotel.findAll({"city": req.params.city});
            res.status(200).send(data);
        } catch (e) {
            console.log(e);
        }
    }

    // Image Controller
    storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./images/hotels")
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