import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minLength: [3, "First name must contain at least 3 characters!"],
        maxLength: [30, "First name cannot exceed 30 characters!"],
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minLength: [3, "Last name must contain at least 3 characters!"],
        maxLength: [30, "Last name cannot exceed 30 characters!"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [validator.isEmail, "Please provide a valid email address"],
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        validate: {
            validator: function (v) {
                return /^[0-9]{10}$/.test(v);
            },
            message: "Phone number must contain exactly 10 digits!",
        },
    },
    time: {
        type: String,
        required: [true, "Time is required"],
    },
    date: {
        type: String,
        required: [true, "Date is required"],
    },

    // ✅ NEW FIELD ADDED
    guests: {
        type: String,
        required: [true, "Number of guests is required"],
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
