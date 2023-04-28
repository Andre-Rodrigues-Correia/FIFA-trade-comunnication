
import { Router } from "express";
import {findAll} from "../../src/controllers/user";

const router = Router();

router.get('/', findAll);


export default router;