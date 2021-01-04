import { Router } from "express"
import db from "../database"

const router = Router()

const basePath = "/"

router.route(basePath)
	// GET:/api/services // get list of all services
	.get((req, res) => {
		db.connect()

		const userId = 1 // todo pass me

		const query = `SELECT * FROM users u INNER JOIN users_services us ON u.id = us.user_id INNER JOIN services s ON s.id = us.service_id INNER JOIN counter_values cv ON cv.service_id = us.service_id AND u.id = cv.user_id WHERE u.id = ${userId}`
		console.log(query)
		db.query(query, (err, result) => {
			if (err) throw err;
			res.send(result.rows)
			db.end()
		})
		
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

