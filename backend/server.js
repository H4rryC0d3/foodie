import app from "./app.js";
import dotenv from "dotenv";
import dbConnection from "./database/dbConnection.js";  // <-- correct path

dotenv.config();

// Connect DB
dbConnection();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`🚀 Server Running On Port ${PORT}`);
});
