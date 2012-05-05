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

var pointsTransl = function (array,x,y,z){
  return array.map(function(el){return [el[0]+x,el[1]+y,el[2]+z];});
}
var pointsScale = function (array,x,y,z){
  return array.map(function(el){return [el[0]*x,el[1]*y,el[2]*z];});
}

var domain = INTERVALS(1)(50)
var domain2 = DOMAIN([[0,1],[0,1]])([40,10]);

var pVerticalStab1 = [[0,0,0],[2,.5,0],[3.25,1.65,0],[2,2.5,0],[1.4,2.6,0],[.5,2.3,0],[.1,1.8,0],[0,0,0]]
var VerticalStab1map = NUBS(S0)(2)(genKnots(pVerticalStab1))(pVerticalStab1);
var cVerticalStab1 = MAP(VerticalStab1map)(domain);
DRAW(cVerticalStab1);

/*
var surfVerticalStab = BEZIER(S1)(mapAla);
var surf1 = MAP(surfVerticalStab)(domain2);
DRAW(surf1);
*/