import 'dotenv/config'

import { AppDataSource } from './typeorm/data-source'
import { app } from './server'

AppDataSource.initialize().catch(console.log)

const PORT = process.env.PORT ?? 3333
const LOG = `Server running at port ${PORT}`

app.listen(PORT, () => console.info(LOG))
