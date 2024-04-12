
const { default: mongoose } = require("mongoose");

let ProductSchema = mongoose.Schema({
    title: {
        type: String,

    },
    price: {
        type: String,

    },
    genre: {
        type: String
    },
    pic: {
        type: String
    }
})

module.exports = 
mongoose.models.product || mongoose.model('product', ProductSchema)