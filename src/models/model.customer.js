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
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: DataTypes.CHAR(1),
        allowNull: false,
    },
    email: {
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
    }
}, {
        sequelize: db,
        modelName: 'CUSTOMER'
})
export default Customer;