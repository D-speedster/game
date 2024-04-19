
const { default: mongoose } = require("mongoose");

let ProductSchema = mongoose.Schema({
    title: {
        type: String,

    },
    price: {
        type: Number,

    },
    genre: {
        type: String
    },
    pic: {
        type: String
    } ,
    
} ,{ versionKey: false })

let MyModel = mongoose.models.product || mongoose.model('product', ProductSchema)
export default MyModel