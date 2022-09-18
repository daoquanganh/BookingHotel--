import { Sequelize } from "sequelize";
const db = new Sequelize(process.env.database, process.env.username, process.env.password, {
    storage: "./database.sqlite",
    dialect: "sqlite",
    logging: false
})

export default db;