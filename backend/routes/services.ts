import { Router } from "express"
const router = Router()

const basePath = "/"

router.route(basePath)
	// GET:/api/services // get list of all services
	.get((_, res) => {
		res.status(200).send({route: "api/services"})
	})
	// TODO: POST:/api/services // add service from defined services list for current user
	.post((_, res) => {
		res.status(200).send({route: "api/services"})
	})

router.route(basePath + ":id")
	// TODO: POST:/api/services/{id} // add counter value
	.post((_, res) => res.status(200).send({route: "api/services/{id}"}))
	// TODO: PATCH:/api/services/{id} // 
	.patch((_, res) => res.status(200).send({route: "api/services/{id}"}))

router.route(basePath + ":id/history")
	// TODO: GET:/api/services/{id}/history // get all counter values
	.get((req, res) => res.status(200).send({route: "api/services/" + req.params.id + "/history"}))

export default router

