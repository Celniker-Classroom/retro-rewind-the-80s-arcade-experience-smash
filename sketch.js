await Canvas();
world.gravity.y = 10;

let ball = new Sprite();
ball.diameter = 50;
ball.img = '🤪';

let groundA = new Sprite();
groundA.x = -120;
groundA.width = 500;
groundA.rotation = 0;
groundA.y = 300;
groundA.fill="#f065ef";
groundA.stroke="#f065ef";
groundA.physics = STATIC;

let groundB = new Sprite();
groundB.x = 400;
groundB.width = 270;
groundB.y = 20;
groundB.fill="#f065ef";
groundB.stroke="#f065ef";
groundB.rotation = 0;
groundB.physics = STATIC;

let groundC = new Sprite();
groundC.x = -350;
groundC.width = 350;
groundC.y = -150;
groundC.fill="#f065ef";
groundC.stroke="#f065ef";
groundC.rotation = 0;
groundC.physics = STATIC;


let bg = await loadImage('mainbg.jpg');
let playersheet = await loadImage("notkirby.png");
	
let player = new Sprite();
player.x=0;
player.y=0;

player.img=playersheet;
player.scale = 0.5;



q5.update = function () {
image(bg,0,0);

	if (mouse.presses()) 
		{ball.vel.y = -5;}

// jump
	if (kb.presses('w')) {
	player.vel.y = -10;}


	//move left or right
	if (kb.pressing('d')) {
	player.vel.x = 10;
}
	else if (kb.pressing('a')) {
	player.vel.x = -10;
}
	else{
		player.vel.x = 0;
}}



