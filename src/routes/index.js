const uploadConfig = require("../configs/upload")
const express = require("express")
const { Router } = require("express")

const usersRouter = require("./users.routes.js")
const notesRouter = require("./notes.routes.js")
const tagsRouter = require("./tags.routes.js")
const sessionsRouter = require("./sessions.routes.js")

const routes = Router()

//Busca o arquivo na pasta de upload
routes.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

routes.use("/users", usersRouter)
routes.use("/sessions", sessionsRouter)
routes.use("/notes", notesRouter)
routes.use("/tags", tagsRouter)

module.exports = routes

