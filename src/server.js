import express from 'express';
import studentRoutes from "./routes/studentRoutes.js";
import mongoose from "mongoose";

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(studentRoutes);

app.use((req, res) =>
    res.status(404).type('text/plain; charset=utf-8').send('Not Found')
);

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {dbName: process.env.DB_NAME});
        console.log("MongoDB Connected!");
        app.listen(port, () => console.log(`Listening on port ${port}`));
    }
    catch (err) {
        console.log("Failed to connect to DB", err);
    }
}

await startServer();