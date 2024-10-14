import mongoose from "mongoose";


export default function dbConnection() {
    try {
        const DATABASE_URI = process.env.DATABASE_URI;
        const DATABASE_NAME = process.env.DATABASE_NAME;

        if (DATABASE_URI && DATABASE_NAME) {
            mongoose.connect(DATABASE_URI, {
                dbName: DATABASE_NAME
            });
            console.log("Database connection is successfull");
        }

    } catch (error) {
        console.log(error);
    }
}