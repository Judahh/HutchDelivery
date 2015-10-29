import mongoose = require('mongoose');
export interface IUser extends IMongooseBase{
    _id: string;
    name: string;
}