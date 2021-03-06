var domain = DOMAIN([[0,1]])([10]);
var mapping = function (p) {
	var u = p[0];
	return [u,1];
};
var mapped = MAP(mapping)(domain);

// la funzione di mapping è applicata automaticamente ad ogni punto del dominio. Quindi a partire da una retta,
// volendo traslarla di uno sull' asse delle y, ritornerò un nuovo dominio monodimensionale ma con 2 coordinate...
// si dice quindi che il nuovo dominio è immerso in 2d

//disegnare la bisettrice del primo quadrante
var domain = DOMAIN([[0,1]])([10]);
var mapping = function (p) {
	var u = p[0];
	return [u,u];
};
var mapped = MAP(mapping)(domain);

//fare sinusoide

var domain = DOMAIN([[0,PI*20]])([100]);
var mapping = function (p) {
	var u = p[0];
	// return [u,Math.sin(u)]; ALTERNATIVA CON MATH
	return [u,SIN(u)];
};
COLOR([0,0,0])(mapped);
var mapped = MAP(mapping)(domain);
DRAW(mapped);
COLOR([0,0,0])(mapped);

//DISEGNARE LA CIRCONFERENZA DI RAGGIO r CON UN NUMERO DI DIVISIONI  n
function drawCircle(r,n){
var domain = DOMAIN([[0,PI*2]])([n]);
	var mapping = function (p) {
		var u = p[0];
		return [r*COS(u),r*SIN(u)];
	};
	return mapped = MAP(mapping)(domain);
}

var circle = drawCircle(1,1000);
DRAW(circle);
COLOR([0,0,0])(circle);

//defiamo un dominio bidimensionale che piegheremo al fine di formare un cilindro

// function drawCylinder(r,h,m,n,color){

function drawCylinder(r,h,m,n){
//creo un dominio rettangolare con la y che va da 0 a h con n suddivisioni e con la x che va da 0 a 2*PI con m suddivisioni
var domain = DOMAIN([[0,2*PI],[0,h]])([m,n]);
	var mapping = function (p) {
		var u = p[0];
		var v = p[1];
		return [r*COS(u),r*SIN(u),v];
	};
	return mapped = MAP(mapping)(domain);
}

var cyl = drawCylinder(2,4,20,20);
DRAW(cyl);
COLOR([0,0,1])(cyl);

//draw sphere
function drawSphere(r,m,n){
	var domain = DOMAIN([[0,PI],[0,2*PI]])([m,n]);
	var mapping = function (p) {
		var a = p[0]-PI/2;
		var b = p[1];
		return [r*COS(a)*SIN(b),r*COS(a)*COS(b),r*SIN(a)];
	};
	var mapped = MAP(mapping)(domain);
	return mapped;
}

var s = drawSphere(2,200,200);
DRAW(s);
COLOR([0,1,0])(s);




//emisgera con colori strani
function drawSphere(r,m,n){

var domain = DOMAIN([[0,PI],[0,2*PI]])([m,n]);
	var mapping = function (p) {
		var alpha = p[0]-PI/2;
		var beta = p[1];
		return [r*SIN(alpha)*COS(beta),r*SIN(alpha)*SIN(beta),r*COS(alpha)];
	};
	return mapped = MAP(mapping)(domain);
}

var s = drawSphere(2,200,200);
DRAW(s);
COLOR([1,0,0])(s);

//moebiusoide
function drawSphere(r,m,n){
	var domain = DOMAIN([[0,PI*20],[0,20*PI]])([m,n]);
	var mapping = function (p) {
		var a = p[0]-PI/2;
		var b = p[1];
		return [r*COS(b)*COS(a),r*COS(b)*SIN(a),r*SIN(a)];
	};
	var mapped = MAP(mapping)(domain);
	return mapped;
}

var s = drawSphere(2,200,200);
DRAW(s);
COLOR([0,1,0])(s);

//draw thoroid
function drawThor(R,r,m,n){
	var domain = DOMAIN([[0,2*PI],[0,2*PI]])([m,n]);
	var mapping = function (p) {
		var q = p[0];
		var t = p[1];
		return [(R+r*COS(q))*SIN(t),(R+r*COS(q))*COS(t),r*SIN(q)];
	};
	var mapped = MAP(mapping)(domain);
	return mapped;
}

var s = drawThor(2.5,1,200,200);
DRAW(s);
COLOR([1,1,0])(s);