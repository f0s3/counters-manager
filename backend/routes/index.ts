import { Router } from "express"
import fs from "fs"

const router = Router()

for (const filename of fs.readdirSync("./")) {
	const { name, router } = require(filename)
	router.use(name, router)
}

export default router


