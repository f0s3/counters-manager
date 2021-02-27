import { Router } from "express"
import services from "./services"

const router = Router()

router.use("/services", services)

export default router

