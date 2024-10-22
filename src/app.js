import express from "express"
import start from "../src/start/route.js"
import config from "../utils/config.js"
const app = express()

app.use("/start", start)





const serverPort = config.server.port
app.listen( serverPort , () => console.log(`app listen on port ${serverPort}`))


export default app