import { Router } from "express";
import calc from "./calc";

const router = Router();

router.use('/calc', calc)

export default router;