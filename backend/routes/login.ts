import { Router } from "express"

const router = Router()

// TODO: GET:/api/login
router.get("/", (req, res) => res.send({route: "api/login"}))

export default router

