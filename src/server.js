
// Este archivo aloja la definicion de nuestro servidor

const express = require('express')

const kodersRouter = require('./routers/koders')

const mentorsRouter = require('./routers/mentors')

const logRequest = require('./middlewares/middelware')

const app = express()

app.use(express.json())

app.use(logRequest)

app.use('/koders',kodersRouter)

app.use('/mentores',mentorsRouter)

module.exports = app
