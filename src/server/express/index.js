import express from 'express'
import api from 'src/server/express/api'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/tvify')

const app = express()

app.use( express.static("public") )

app.use("/api", api)

app.listen(8000, () => console.log("listening on port 8000") )