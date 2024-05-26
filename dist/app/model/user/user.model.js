"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'email is required'],
    },
    name: {
        type: String,
        minlength: [3, 'name should not less then 3 carecter'],
        trim: true,
        maxlength: [50, 'name lengthe will not be gether then 50 carecter'],
        required: [true, 'name is required'],
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength: [4, 'password not will be less than 4 carecter'],
    },
});
// userSchema.statics.isExsits=async function (email:string) {    
//     const extisUser= await User.
// }
exports.User = (0, mongoose_1.model)('User', userSchema);
