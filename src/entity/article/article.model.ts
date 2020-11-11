// import { database } from './../../config/database';
// import { DataTypes, Model } from "sequelize";

// export class Article extends Model {
//     public id!: number;
//     public name!: string;
//     public picture_url!: string;
//     public price!: number;
//     public quantity!: number;
    
//     public readonly createdAt!: Date;
//     public readonly updatedAt!: Date;
// }
// List.init(
//     {
//         id: {
//             type: DataTypes.BIGINT,
//             autoIncrement: true,
//             primaryKey: true,
//         },
//         name: {
//             type: new DataTypes.STRING(255),
//             allowNull: false,
//         },
//         picture_url: {
//             type: new DataTypes.TEXT,
//             allowNull: true,

//         }
//     },
//     {
//         tableName: 'list',
//         sequelize: database,
//     }
// );
// List.sync({ force: true })
//     .then(() => {
//         console.log('Created => List');

//     })
//     .catch((err) => {
//         console.log('List ERROR => ', err);

//     })