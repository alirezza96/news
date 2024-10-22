import { Router } from "express";
import { start } from "./controller.js";
const router = Router()

router.route("/")
    .get(start)



export default router