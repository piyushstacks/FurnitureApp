// models/Booking.js
import mongoose from "mongoose";
const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    furniture: { type: mongoose.Schema.Types.ObjectId, ref: 'Furniture', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, default: 'Pending' }
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;