import { Client } from "pg"

const client = new Client({
	user: 'postgres',
	host: 'localhost',
	database: 'counters-manager',
	password: '',
	port: 5432
})

export default client
