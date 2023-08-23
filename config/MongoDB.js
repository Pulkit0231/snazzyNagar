import mongoose from "mongoose";

const connectDatabase = async () => {
    try {
        const connection = mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log("DB connected")
    }
    catch (err) {
        console.log(`Error:${err.message}`)
        process.exit(1)
    }
}

export default connectDatabase