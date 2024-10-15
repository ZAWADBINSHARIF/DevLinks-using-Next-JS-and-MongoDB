import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String
});


const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;