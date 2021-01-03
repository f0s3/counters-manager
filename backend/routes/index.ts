import { Router } from "express"
import login from "./login"
import logout from "./logout"
import services from "./services"

const router = Router()

router.use("/login", login)
router.use("/logout", logout)
router.use("/services", services)

export default router

