const { Router } = require("express")
const router = new Router()

const Characters = require("../models").gotCharacter
const Houses = require("../models").gotHouse

router.get("/characters", async (request, response, next) => {
  const characters = await Characters.findAll()
  response.send(characters)
})

router.get("/characters/:id", async (request, response, next) => {
  const { id } = request.params
  const character = await Characters.findByPk(id, {include: Houses})
  response.send(character)
})

router.get("/houses", async (request, response, next) => {
  const houses = await Houses.findAll()
  response.send(houses)
})

router.get("/houses/:id", async (request, response, next) => {
  const { id } = request.params
  const house = await Houses.findByPk(id, {include: Characters})
  response.send(house)
})

module.exports = router