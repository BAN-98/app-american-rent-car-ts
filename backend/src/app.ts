import "dotenv/config"
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { router } from "./routes/";
import { dbConnect } from "./config/monogo";

const PORT = process.env.PORT || 3001

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())


dbConnect().then(data => console.log(data));
app.use(router);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
export default app;
