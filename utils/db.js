import mongoose from "mongoose";

async function ConnectToDb() {
    try {
        if (mongoose.connection[0].readState) {
            return false
        }
        await mongoose.connect('mongodb://localhost:27017/Game')
            .then(() => console.log('Connected To DB!'))
    } catch (err) {

    }
    mongoose.connect('mongodb://localhost:27017/Game')
        .then(() => console.log('Connected To DB!'))
        .catch((err) => console.log("Error in Db connect", err))
}


export default ConnectToDb