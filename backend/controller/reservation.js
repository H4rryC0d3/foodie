import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res) => {
    console.log("📩 Received reservation:", req.body);

    const { firstName, lastName, email, phone, date, time } = req.body;

    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return res.status(400).json({ success: false, message: "Missing fields" });
    }

    try {
        // ✅ Save Reservation to MongoDB
        const newReservation = await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            date,
            time
        });

        console.log("✅ Saved in DB:", newReservation);

        res.status(200).json({
            success: true,
            message: "Reservation successful!",
            data: newReservation
        });

    } catch (error) {
        console.error("❌ Server Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
