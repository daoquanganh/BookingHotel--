import { DataTypes, Model } from "sequelize";
import db from "../configs/dbconfig.js"
class Room extends Model {}

Room.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    guestNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.CHAR(1),
        allowNull:false
    },
}, {
        sequelize: db,
        modelName: 'ROOM'
})
export default Room;