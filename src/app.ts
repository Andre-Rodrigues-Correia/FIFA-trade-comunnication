import app from "./server";
import { connectDB } from "./database/connection";

app.listen(3000, async () => {
    await connectDB()
})



