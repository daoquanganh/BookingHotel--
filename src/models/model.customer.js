import { DataTypes, Model } from "sequelize";
import db from "../configs/dbconfig.js"

class Customer extends Model {}

Customer.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    gender: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING
    },
    nationality: {
        type: DataTypes.STRING
    },
    bankCard: {
        type: DataTypes.STRING
    },
    userType: {
        type: DataTypes.INTEGER
    }
}, {
        sequelize: db,
        modelName: 'CUSTOMER'
})
export default Customer;