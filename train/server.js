"use strict";

addEventHandler("OnResourceStart", (event, resource) => {
	if (resource == thisResource)
	{
		let trainPositions = [0,20,40,0,20];

		for (let i=0; i<5; i++)
		{
			let train = game.createVehicle(124, GAME_GTA_III);

			train.trackPosition = trainPositions[i];
			train.track = 0;
			train.speed = 0;

			addToWorld(train);
		}

		trainPositions = [0,20,0,20,0,20,0,20,0];

		for (let i=0; i<8; i++)
		{
			let train = game.createVehicle(124, GAME_GTA_III);

			train.trackPosition = trainPositions[i];
			train.track = 1;
			train.speed = 0;

			addToWorld(train);
		}
	}
});
