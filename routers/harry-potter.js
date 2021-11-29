const { Router } = require("express")
const router = new Router()

const Houses = require("../models").house
const Characters = require("../models").character

router.get("/houses", async (request, response) => {
  const houses = await Houses.findAll()
  response.send(houses)
})

router.get("/characters", async (request, response) => {
  const chars = await Characters.findAll({include: [Houses]})
  response.send(chars)
})

router.get("/house/:id", async (request, response) => {
  const { id } = request.params
  const house = await Houses.findByPk(id, {include: [Characters]})
  response.send(house)
})

router.get("/character/:id", async (request, response) => {
  const { id } = request.params
  const character = await Characters.findByPk(id, {include: Houses})
  response.send(character)
})

module.exports = router