import { Router } from "express";
import {getEquation} from "@controllers/calc";

const router = Router();

router.post('/', getEquation)

export default router;