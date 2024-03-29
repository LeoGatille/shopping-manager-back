import { List } from './../list/list.model';
import { database } from './../../config/database';
import { DataTypes, Model } from "sequelize";

export class Article extends Model {
    public id!: number;
    public name!: string;
    public picture_url!: string;
    public price!: number;
    public quantity!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}
Article.init(
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

        },
        price: {
            type: DataTypes.BIGINT,
            allowNull: true,
        },
        quantity: {
            type: DataTypes.BIGINT,
            allowNull: true,
        }
    },
    {
        tableName: 'article',
        sequelize: database,
    }
);
List.hasMany(Article , {as: 'articles'});
Article.belongsTo(List);
Article.sync({ alter: true })
    .then(() => {
        console.log('Created => Article');

    })
    .catch((err) => {
        console.log('List ERROR => ', err);

    })