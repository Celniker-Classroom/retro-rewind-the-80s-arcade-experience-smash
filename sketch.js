await Canvas();
world.gravity.y = 10;

let ball = new Sprite();
ball.diameter = 50;
ball.img = '🤪';

let groundA = new Sprite();
groundA.x = -120;
groundA.width = 220;
groundA.rotation = 0;
groundA.physics = STATIC;

let groundB = new Sprite();
groundB.x = 120;
groundB.width = 220;
groundB.rotation = 30;
groundB.physics = STATIC;

q5.update = function () {
	background('skyblue');
	text('click to jump!', 0, -50);

	if (mouse.presses()) 
		{ball.vel.y = -5;}

// test
	if (kb.presses('w')) {
	background('lime');}

	//move right
	if (kb.presses('d')) {
	player.vel.x = 5;
}
	else{
		player.vel.x = 0;
	}
	//move left
	if (kb.presses('a')) {
	player.vel.x = -5;
}
	else{
		player.vel.x = 0;
};
}

let playersheet = await loadImage("notkirby.png");
	
let player = new Sprite();
player.x=0;
player.y=0;

player.addAni({
		sheet: playersheet,
		frames: 5,
		cols:2,
		rows:3
	});
player.scale = 3;


