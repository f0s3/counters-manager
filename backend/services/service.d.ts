import { History, Status } from "../models"

interface Service {
	getHistory(): History[]
	setCounterValue(): Status
}

