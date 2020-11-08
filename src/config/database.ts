
import { Sequelize } from 'sequelize';

// export const database = new Sequelize({
//     database: "shopping_manager",
//     dialect: "postgres",

// })
export const database = new Sequelize('postgres://postgres:ac4g8reR6q::5@localhost:5432/shopping_manager');