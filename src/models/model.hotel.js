import { DataTypes, Model } from "sequelize";
import db from "../configs/dbconfig.js"

class Hotel extends Model {}

Hotel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    hotelName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    star: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    image: { 
        type: DataTypes.STRING, 
        allowNull: true 
    }
}, {
        sequelize: db,
        modelName: 'HOTEL'
})
export default Hotel;