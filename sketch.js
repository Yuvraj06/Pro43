function setup() {
	createCanvas(400, 400);
	angleMode(DEGREES);



}


function draw() {
	background(0);
	translate(200, 200);
	rotate(-90);

	var hr = hour();
	var mn = minute();
	var sc = second();

	strokeWeight(8);
	noFill();

	stroke("yellow");
	var map1 = map(sc, 0, 60, 0, 360);
	arc(0, 0, 300, 300, 0, map1);

	stroke("lightGreen");
	var map2 = map(mn, 0, 60, 0, 360);
	arc(0, 0, 280, 280, 0, map2);

	stroke("lightBlue");
	var map3 = map(hr % 12, 0, 12, 0, 360);
	arc(0, 0, 260, 260, 0, map3);

	push();
	rotate(map1);
	stroke("yellow");
	strokeWeight(3);
	line(0, 0, 100, 0);
	pop();

	push();
	rotate(map2);
	stroke("lightGreen");
	strokeWeight(6);
	line(0, 0, 75, 0);
	pop();

	push();
	rotate(map3);
	stroke("lightBlue");
	strokeWeight(6);
	line(0, 0, 50, 0);
	pop();


}