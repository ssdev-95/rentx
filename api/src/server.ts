import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import { router } from './routes'

const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(cookieParser())
app.use(router)

export { app }
