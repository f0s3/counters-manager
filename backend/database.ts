import { Client } from "pg"

const client = new Client({
	user: 'postgres',
	host: 'localhost',
	database: '',
	password: 'password',
	port: 5432
})

export default client
