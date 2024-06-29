// models/Furniture.js
import mongoose from "mongoose";
const furnitureSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    availability: { type: Boolean, default: true },
    images: [{ type: String, required: true }],
    category: { type: String, required: true }
});

const Furniture = mongoose.model('Furniture', furnitureSchema);

export default Furniture;