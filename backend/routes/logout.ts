import { Router } from "express"

const router = Router()

// TODO: GET:/api/logout
router.get("/", (req, res) => res.send({route: "api/logout"}))

export default router

