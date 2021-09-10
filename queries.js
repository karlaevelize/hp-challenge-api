const Houses = require("./models").house
const Characters = require("./models").character

const getHouses = async () => {
  const houses = await Houses.findAll({include: [ Characters ]})
  return houses.map(house => house.get({plain: true}))
}

getHouses().then(data => console.log(data))

const getCharacters = async () => {
  const chars = await Characters.findAll({include: Houses})
  return chars.map(char => char.get({plain: true}))
}

// getCharacters().then(data => console.log(data))