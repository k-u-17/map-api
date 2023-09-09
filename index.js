const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const pinRoute=require("./routes/pins")
const userRoute=require("./routes/users")

dotenv.config();

app.use(express.json());

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Mongo connected");
    } catch (error) {
        console.log(error);
        process.exit();
    }
};
connectDB();

app.use("/api/pins",pinRoute);
app.use("/api/users",userRoute);


app.listen(8802, () => {
    console.log("Backend server is ready");
})


