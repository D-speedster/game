const { default: mongoose } = require("mongoose");

let ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required
    },
    price: {
        type: String,
        required
    },
    genre: {
        type: String
    },
    pic: {
        type: String
    }
})
const MyModel = mongoose.model.product('product', ProductSchema)
export default MyModel