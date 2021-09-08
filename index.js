const express = require("express")
const cors = require("cors")
const homepage = require("./homepage")

const Houses = require("./models").house
const Characters = require("./models").character

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 4000;

app.get("/", (request, response) => {
  response.send(homepage)
})

app.get("/houses", async (request, response) => {
  const houses = await Houses.findAll()
  response.send(houses)
})

app.get("/characters", async (request, response) => {
  const chars = await Characters.findAll()
  response.send(chars)
})

app.get("/house/:id", async (request, response) => {
  const { id } = request.params
  const house = await Houses.findByPk(id)
  response.send(house)
})

app.get("/character/:id", async (request, response) => {
  const { id } = request.params
  const character = await Characters.findByPk(id)
  response.send(character)
})

app.listen(PORT, () => console.log(`listening on ${PORT}`))