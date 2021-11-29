'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert(
     "gotCharacters",
     [
       {
        name: "Eddard Stark",
        age: 34,
        birthPlace: "Winterfell",
        imageUrl: "https://static.wikia.nocookie.net/gameofthrones/images/3/34/Eddard_Stark.jpg/revision/latest/top-crop/width/360/height/360?cb=20190701140812",
        headOfHouse: true,
        alive: true,
        spouse: "Catelyn Tully",
        children: [ "Robb Stark", "Sansa Stark", "Arya Stark", "Bran Stark", "Rickon Stark", "Jon Snow (Bastard)" ],
        gotHouseId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: "Cersei Lannister",
        age: 31,
        birthPlace: "Casterly Rock",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Cersei_Lannister_in_Black_Dress_in_Season_5.jpg/220px-Cersei_Lannister_in_Black_Dress_in_Season_5.jpg",
        headOfHouse: true,
        alive: true,
        spouse: "Robert Baratheon",
        children: ["Joffrey Baratheon", "Myrcella Baratheon", "Tommen Baratheon"],
        gotHouseId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: "Catelyn Tully",
        age: 33,
        birthPlace: "Riverrun",
        imageUrl: "https://i.pinimg.com/originals/ca/a3/9a/caa39acface0ab924ea9c6eb4d0d1964.png",
        headOfHouse: true,
        alive: true,
        spouse: "Eddard Stark",
        children: [ "Robb Stark", "Sansa Stark", "Arya Stark", "Bran Stark", "Rickon Stark", "Jon Snow (Bastard)" ],
        gotHouseId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: "Robbert Baratheon",
        age: 35,
        birthPlace: "Storm's End",
        imageUrl: "https://static.wikia.nocookie.net/westeropedia/images/c/ce/Robert_Baratheon.JPG/revision/latest?cb=20121227215519&path-prefix=nl",
        headOfHouse: true,
        alive: true,
        spouse: "Cersei Lannister",
        children: ["Joffrey Baratheon", "Myrcella Baratheon", "Tommen Baratheon"],
        gotHouseId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: "Daenerys Targaryen",
        age: 13,
        birthPlace: "Dragonstone",
        imageUrl: "https://www.refinery29.com/images/8492164.jpg?format=pjpg&auto=webp&resize-filter=lanczos2&quality=65&sharpen=a3%2Cr3%2Ct0&optimize=low&width=1200&height=1200&crop=1%3A1%2Csmart&enable=upscale",
        headOfHouse: true,
        alive: true,
        spouse: "Kahl Drogo",
        children: ["Stillborn kid"],
        gotHouseId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: "Olenna Tyrell",
        age: 70,
        birthPlace: "The Arbor",
        imageUrl: "https://static.wikia.nocookie.net/gameofthrones/images/f/f2/OlennaS7E3.png/revision/latest/scale-to-width-down/700?cb=20170803074257",
        headOfHouse: true,
        alive: true,
        spouse: "Luthor Tyrell",
        children: ["Mace Tyrell", "Unnamed daughters"],
        gotHouseId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
     ]
   )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("gotCharacters", null, {});
  }
};
