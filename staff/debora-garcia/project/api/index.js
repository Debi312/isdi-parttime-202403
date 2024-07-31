import "dotenv/config"
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import routeHandler from "./handlers/index.js"
import errorHandler from "./handlers/errorHandler.js"


const { MONGODB_URL, PORT } = process.env

mongoose.connect(MONGODB_URL)
    .then(() => {
        const api = express()

        api.use(express.static("public"))

        api.use(cors())

        const jsonBodyParser = express.json({ strict: true, type: "application/json" })


        //comprobamos que la api funciona
        api.get("/", (req, res) => res.send("Hello world"))
        api.post("/users", jsonBodyParser, routeHandler.registerUserHandler)
        api.post("/users/auth", jsonBodyParser, routeHandler.authenticateUserHandler)
        api.use(errorHandler)
        api.listen(PORT, () => console.log(`API running on PORT ${PORT}`))

    })
    .catch(error => console.error(error))