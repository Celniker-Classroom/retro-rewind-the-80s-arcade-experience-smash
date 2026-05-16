await Canvas();
world.gravity.y = 10;

let ball = new Sprite();
ball.diameter = 50;
ball.img = '🤪';

let groundA = new Sprite();
groundA.x = -120;
groundA.width = 220;
groundA.rotation = 30;
groundA.physics = STATIC;

let groundB = new Sprite();
groundB.x = 120;
groundB.width = 220;
groundB.rotation = -30;
groundB.physics = STATIC;

q5.update = function () {
	background('skyblue');
	text('click to jump!', 0, -50);

	if (mouse.presses()) ball.vel.y = -5;
};


let playersheet = await loadImage("notkirby.png");
	
let player = new Sprite();

	player.addAni({
		sheet: playersheet,
		frames: 4,
		frameSize: [32,32]

	});
player.scale = 3;
