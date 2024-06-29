import { Router } from "express";
import { addBooking, getAllUserBookings } from "../controllers/booking.controller.js";

const bookingRoutes=Router();
bookingRoutes.post('/book',addBooking)
bookingRoutes.get('/',getAllUserBookings)
export {bookingRoutes};