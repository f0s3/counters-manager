import express from "express"
import routes from "./routes"

const app = express()

app.use("/api", routes)

app.listen(8080, () => {console.log("listening on port 8080")})

