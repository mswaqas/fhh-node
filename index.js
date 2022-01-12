require("dotenv").config()

const express = require("express")
require("express-async-errors")
const cors = require("cors")

const errorMiddleware = require("./Middleware/ErrorMiddleware")
const authMiddleware = require("./Middleware/Auth/AuthMiddleware")
const validators = require("./Middleware/Validators/Index")

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use("/Public", express.static(__dirname + "/Public"))

/**
 * server Config.
 */
console.log(`Node environment: ${process.env.NODE_ENV}`)
app.listen(port, () => {
    console.log(`Example app listening at port http://localhost:${port}`)
})

/**
 * Routes..
 */

require("./Routes/IndexRoute")(app, authMiddleware, validators)

// Error Handler Middleware
app.use(errorMiddleware)