import "dotenv/config"
import logic from "../logic/index.js"
import jwt from "../utils/jsonwebtoken-promised.js"
import { CredentialsError } from "com/errors.js"

const { JWT_SECRET } = process.env

const getPostsHandler = (req, res, next) => {
    const token = req.headers.authorization.slice(7)

    jwt.verify(token, JWT_SECRET)
        .then(payload => {
            const { sub: userId } = payload
            try {
                logic.getPosts(userId)
                    .then(post => res.json(post))
                    .catch(error => next(error))
            } catch (error) {
                next(error)
            }
        })
        .catch(error => next(new CredentialsError(error.message)))
 }


export default getPostsHandler
