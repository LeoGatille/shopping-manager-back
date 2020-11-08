import { database } from './../config/database';
import { Sequelize, Model, BuildOptions, DataTypes } from 'sequelize';

export class Test extends Model {
    public id!: number;
    public name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}
Test.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(255),
            allowNull: false,
        }
    },
    {
        tableName: "test",
        sequelize: database
    }
);
Test.sync({ force: true })
    .then(() => {
        console.log('Created => Test');
    })
    .catch((err) => {
        console.error('Test ERROR => ', err);
    });

