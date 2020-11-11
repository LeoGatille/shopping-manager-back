import { database } from './../../config/database';
import { DataTypes, Model } from "sequelize";

export type ListType = {
    name: string;
    picture_url?: string;
}

export class List extends Model {
    public id!: number;
    public name!: string;
    public picture_url!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}
List.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(255),
            allowNull: false,
        },
        picture_url: {
            type: new DataTypes.TEXT,
            allowNull: true,

        }
    },
    {
        tableName: 'list',
        sequelize: database,
    }
);
List.sync({ alter: true })
    .then(() => {
        console.log('Created => List');

    })
    .catch((err) => {
        console.log('List ERROR => ', err);

    })