import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    image: {type: String, require: true},
    name: {type: String, require: true},
    price: {type: Number, require: true},
    link: {type: String, require: true},
    description: {type: String, require: true},
},{
    timestamps: true
})

const Product = mongoose.models.Product || mongoose.model("Product", productSchema)

export default Product