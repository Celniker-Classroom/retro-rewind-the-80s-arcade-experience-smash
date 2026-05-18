await Canvas();
world.gravity.y = 10;


//platforms
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

// sprite load
let bg = await loadImage('mainbg.jpg'); // fighting background
let playersheet = await loadImage("notkirby.png"); //sprite fighter
let bulletimage =  await loadImage("bullet.png"); //bullet

let player = new Sprite();
player.x=0;
player.y=0;

player.img=playersheet;
player.scale = 0.5;

// bullet direction:
let direction = 1;

//movment functions
q5.update = function () {
image(bg,0,0);

// playerjump
	if (kb.presses('w')) {
	player.vel.y = -10;}


	//move left or right
	if (kb.pressing('d')) { //right
	player.vel.x = 10;
	direction=1;
	player.scale.x = 0.5;
}
	else if (kb.pressing('a')) { //left
	player.vel.x = -10;
	direction=-1;
	player.scale.x = -0.5;
}
	else{
		player.vel.x = 0;
}

//shoot bullets
if (kb.presses('s')){
let bullethit = new Sprite();

bullethit.x=player.x;
bullethit.y=player.y;

bullethit.w =10;
bullethit.h= 10;


bullethit.img=bulletimage;
bullethit.scale = 2.5;

bullethit.vel.x = 15*direction;

if (direction === -1){
	bullethit.scale.x=-2.5
}
else{
	bullethit.scale.x=2.5
}

}
}