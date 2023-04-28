import app from "./server";
import { connectDB } from "../src/database/connection";

app.listen(3000, async () => {
    await connectDB()
})



