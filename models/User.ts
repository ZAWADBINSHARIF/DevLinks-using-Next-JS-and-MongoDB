import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    profile_img: String,
    firstname: String,
    lastname: String,
    email: String
});


const User = mongoose.models.users || mongoose.model("user", userSchema);

export default User;