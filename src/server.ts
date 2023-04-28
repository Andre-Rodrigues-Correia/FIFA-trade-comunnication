import router from "../src/routes";
import express, {Request, Response} from 'express';
import dotenv from 'dotenv'


dotenv.config()
const app = express()

app.use(
    express.json(),
    router,
)

router.all('/*', (request: Request, response: Response) => {
    return response.status(404).json({message: 'route not found'})
})

export default app;