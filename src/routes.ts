
import { Router } from "express";
import user from "@src/routes/user";

const router = Router();

router.use('/users', user);


router.all('/*', (req, res) => {
    return res.status(404).json({message: 'route not found'})
})

export default router;