import { Router } from "express"
import db from "../database"

const router = Router()

const basePath = "/"

router.route(basePath)
	// TODO: GET:/api/services // get list of all services
	.get((req, res) => {
		db.connect()

		const query = "SELECT * FROM Users"

		db.query(query, (err, res) => {
			if (err) throw err
			console.log(res, ' is the result')
			db.end()
		})
		res.send({route: "api/services"})
	})
	// TODO: POST:/api/services // add service
	.post((req, res) => res.status(200).send({route: "api/services"}))

router.route(basePath + ":id")
	// TODO: POST:/api/services/{id} // add counter value
	.post((req, res) => res.status(200).send({route: "api/services/{id}"}))
	// TODO: PATCH:/api/services/{id} // 
	.patch((req, res) => res.status(200).send({route: "api/services/{id}"}))

router.route(basePath + ":id/history")
	// TODO: GET:/api/services/{id}/history // get all counter values
	.get((req, res) => res.status(200).send({route: "api/services/" + req.params.id + "/history"}))

export default router

