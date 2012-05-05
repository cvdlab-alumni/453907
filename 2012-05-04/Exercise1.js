//Coordinate ala = [0,0,0],[0,3.5,0],[1.5,11,0.32]

function genKnots (controls) {
  var len = controls.length+3;
  var knots = [];
  knots[0] = 0;
  knots[1] = 0;
  knots[2] = 0;
  for (var i = 3; i <= len-4; i++) {
    knots[i] = i-2;
  };
  knots[len-1] = len-5;
  knots[len-2] = len-5;
  knots[len-3] = len-5;
  return knots;
};

var domain = INTERVALS(1)(50)
var puntiala1 = [[0,0,0],[0,0,0.3],[0.6,0,0.48],
				[2.6,0,0.4],[3.4,0,0.25],[3.45,0,0],
				[3.4,0,-0.1],[0.6,0,-0.1],[0,0,0]]

var puntiala2 = [[0,8.5,0],[0,8.5,0.3],[0.6,8.5,0.48],
				[2.6,8.5,0.4],[3.4,8.5,0.25],[3.45,8.5,0],
				[3.4,8.5,-0.1],[0.6,8.5,-0.1],[0,8.5,0]]
var puntiala4 = [
[0,11,0.3],
[0,11,0.3],
[0.6,11,0.48],
[2.6,11,0.4],
[3.2,11,0.27],
[3.2,11,0.27],
[3,11,0.23],
[0.6,11,0.25],
[0,11,0.3],
]
var puntiala3 = [
[0,10,0.3],
[0,10,0.3],
[0.6,10,0.48],
[2.6,10,0.4],
[3.2,10,0.27],
[3.2,10,0.27],
[3,10,0.23],
[0.6,10,0.25],
[0,10,0.3],
]
/*
var puntiala3 = [
[3.2,10,0.27],
[0.6,10,0.25],
[0,10,0.3],

[0.6,10,0.48],
[2.6,10,0.4],
[3.2,10,0.27]

]
*/

var puntiala5 = [1.5,11,0.32]				

var cMap1 = NUBS(S0)(2)(genKnots(puntiala1))(puntiala1);
var cMap2 = NUBS(S0)(2)(genKnots(puntiala2))(puntiala2);
var cMap3 = NUBS(S0)(2)(genKnots(puntiala3))(puntiala3);
var cMap4 = NUBS(S0)(2)(genKnots(puntiala4))(puntiala4);
var c1 = MAP(cMap1)(domain);
var c2 = MAP(cMap2)(domain);
var c3 = MAP(cMap3)(domain);
var c4 = MAP(cMap4)(domain);

var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);
mapAla = [cMap1,cMap2,cMap2,cMap3,cMap4,puntiala5]

//var surfala = NUBS(S1)(2)(genKnots(mapAla))(mapAla);
var surfala = BEZIER(S1)(mapAla);
var surf1 = MAP(surfala)(domain2);
DRAW(c1);
DRAW(c2);
DRAW(c3);
DRAW(c4);
DRAW(surf1);