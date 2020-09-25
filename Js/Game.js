class Game
{
    constructor()
    {

    }
    //read the gameState from the database

    getState()
    {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data)
        {
            gameState = data.val();
        })

    }
    //change the gameState in the database
    update(state)
    {
        database.ref('/').update({

            gameState: state

        })

    }
     // start 
     start()
     {
         if(gameState === 0)
         {
             player = new Player();
             player.getCount();
             
             form = new Form();
             form.display();
         }

         car1 = createSprite(100,200);
         car1.addImage("car1",car1_img);

         car2 = createSprite(300,200);
         car2.addImage("car2",car2_img);

         car3 = createSprite(500,200);
         car3.addImage("car3",car3_img);

         car4 = createSprite(700,200);
         car4.addImage("car4",car4_img);

         cars = [car1,car2,car3,car4];

     }
     play()
     {
         form.hide();
         textSize(30);
         text("Game Start",120,100);
         Player.getPlayerInfo();
         console.log(allPlayers);

         if(allPlayers!== undefined)
         {
             background("#c68767");
             image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
             //index of the array cars

             var index = 0;
             //x and y position of the cars

             var x = 250;
             var y;

             for(var plr in allPlayers)
             {

                //add 1 to the index for every iteration of the loop
                index = index +1;

                // position the cars a little away from eachother in x direction
                x = x+200;

                //use data from the database to display the cars in y direction

                y = displayHeight - allPlayers[plr].distance;
                console.log(allPlayers[plr].distance);

                //setting the x and y coordinate

                cars[index-1].x = x;
                cars[index-1].y = y;

                //give colour to the active car

                if(index === player.index)
                {
                    cars[index-1].shapeColor = "green";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }

             }

         }

         if(keyIsDown(UP_ARROW) && player.index!== null)
         {
            player.distance += 50;
            player.update();

         }
         if(player.distance >= 4600)
         {
             gameState = 2;
         }
         drawSprites();

     }
     end()

     {
         console.log("Game Ended");
         game.update(2);
         
         text("Game Ended",50,300);

     }
}
 
 