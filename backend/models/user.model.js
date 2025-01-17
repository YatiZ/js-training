import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
},{
    timestamps: true
});

const UserInfo = mongoose.model('User',userSchema);

export default UserInfo;