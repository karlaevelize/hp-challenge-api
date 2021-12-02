'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert(
     "gotHouses",
     [
       {
        name: "Stark",
        sigil: "Grey Wolf",
        words: "Winter is coming",
        seat: "Winterfell",
        region: "The North",
        head: "Lord Eddard Stark",
        founder: "Bran the Bilder",
        extinct: false,
        imageUrl: "https://static.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: "Lannister",
        sigil: "A golden lion rampant on a crimson field",
        words: "Hear me roar!",
        seat: "Casterly Rock",
        region: "The Crownlands",
        head: "Tywin Lannister",
        founder: "Lann the Clever",
        extinct: false,
        imageUrl: "https://static.wikia.nocookie.net/gameofthrones/images/8/8a/House-Lannister-Main-Shield.PNG",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: "Tully",
        sigil: "A silver trout leaping on a red and blue background.",
        words: "Family, Duty, Honor",
        seat: "Riverrun",
        region: "The Riverlands",
        head: "Edmure Tully",
        founder: "Axel Tully",
        extinct: false,
        imageUrl: "https://static.wikia.nocookie.net/gameofthrones/images/b/bd/House-Tully-Main-Shield.PNG",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: "Baratheon",
        sigil: "A crowned black stag salient on a gold field",
        words: "Ours if the Fury",
        seat: "Storm's End",
        region: "The Stormlands",
        head: "Robert Baratheon",
        founder: "Orys Baratheon",
        extinct: false,
        imageUrl: "https://static.wikia.nocookie.net/gameofthrones/images/0/00/House-Baratheon-Main-Shield.PNG",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: "Targaryen",
        sigil: "A red three-headed dragon on a black field",
        words: "Fire and Blood",
        seat: "Dragonstone (former)",
        region: "Bay of Dragons (former)",
        head: "Daenerys Targaryen",
        founder: "Aegon Targaryen",
        extinct: false,
        imageUrl: "https://static.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: "Tyrell",
        sigil: "A golden rose on a green field",
        words: "Growing Strong",
        seat: "Highgarden",
        region: "The Reach",
        head: "Mace Tyrell",
        founder: "Alester Tyrel",
        extinct: false,
        imageUrl: "https://static.wikia.nocookie.net/gameofthrones/images/c/cf/House-Tyrell-Main-Shield.PNG",
        createdAt: new Date(),
        updatedAt: new Date()
       },
     ]
   )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("gotHouses", null, {});
  }
};
