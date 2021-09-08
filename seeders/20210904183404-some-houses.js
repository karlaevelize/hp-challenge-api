'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert(
     "houses",
     [
       {
        name: "Gryffindor",
        founder: "Godric Gryffindor",
        animal: "Lion",
        colors: "Scarlet and Gold",
        ghost: "Nearly-Headless Nick",
        imgUrl: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/05/Gryffindor-Banner-1920x960.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        name: "Hufflepuff",
        founder: "Helga Hufflepuff",
        animal: "Badger",
        colors: "Yellow and Black",
        ghost: "Fat Friar",
        imgUrl: "https://static0.srcdn.com/wordpress/wp-content/uploads/2019/09/Harry-Potter-Hufflepuff-memes-header.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        name: "Ravenclaw",
        founder: "Rowena Ravenclaw",
        animal: "Eagle",
        colors: "Blue and Bronze",
        ghost: "Grey Lady",
        imgUrl: "https://1.bp.blogspot.com/-3AU33l-fvxI/V-pACpACLHI/AAAAAAAAFKs/Mqcqyj2sTQksDlMg9vx6TSrarVzZWW-VwCLcB/s1600/pm-pride-Ravenclaw-Twitter-Header-Image-1500-x-500-px.png",
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        name: "Slytherin",
        founder: "Salazar Slytherin",
        animal: "Serpent",
        colors: "Green and Silver",
        ghost: "Bloody Baron",
        imgUrl: "https://allears.net/wp-content/uploads/2020/04/Slytherin-Harry-Potter-Pottermore-Hogwarts-Crest.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       
     ]
   )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("houses", null, {});
  }
};
