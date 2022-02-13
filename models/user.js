const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');


class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
};
User.init({
    // id column
    id: {
        // Creating Datatype Integer
        type: DataTypes.INTEGER,
        // Allow null if true is mandatory column
        allowNull: false,
        // Primary key
        primaryKey: true,
        // will increment by one everytime a row is created
        autoIncrement: true
    },
    // username column
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // email column
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique no duplicates
        unique: true,
        // validates only email will be accepted
        validate: {
            isEmail: true
        }
    },
    // password column
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // this means the password must be at least four characters long
            len: [4]
        }
    }
}, {
    hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
});
module.exports = User;