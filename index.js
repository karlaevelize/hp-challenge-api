const express = require("express")
const cors = require("cors")

const homepage = require("./homepage")
const hpRouter = require("./routers/harry-potter")
const gotRouter = require("./routers/game-of-thrones")

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 4000;

app.get("/", (request, response) => {
  response.send(homepage)
  // response.sendfile('public/index.html');
})

app.use("/hp", hpRouter)
app.use("/got", gotRouter)

app.listen(PORT, () => console.log(`listening on ${PORT}`))