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

var pVerticalStab1 = pointsTransl([[0,0,0],[1,0,0],[1.5,0.12,0],[2,.3,0],[2.8,0.7,0],[3.25,1.4,0],[2.8,2.1,0]
                     ,[2,2.4,0],[1.4,2.5,0],[.5,2.3,0],[.1,1.8,0],[.1,1.8,0],[0,0,0]],0,0,-0.05)
var VerticalStab1map = NUBS(S0)(2)(genKnots(pVerticalStab1))(pVerticalStab1);
var cVerticalStab1 = MAP(VerticalStab1map)(domain);
//DRAW(cVerticalStab1);
//DRAW(POLYLINE(pVerticalStab1));

var pVerticalStab2 = pointsTransl(pVerticalStab1,0,0,0.1)
var VerticalStab2map = NUBS(S0)(2)(genKnots(pVerticalStab2))(pVerticalStab2);
var cVerticalStab2 = MAP(VerticalStab2map)(domain);
//DRAW(cVerticalStab2);

var pVerticalStab3 = pointsTransl(pointsScale(pVerticalStab1,1.075,1.075,1),-0.1,-0.1,0.05);
var VerticalStab3map = NUBS(S0)(2)(genKnots(pVerticalStab3))(pVerticalStab3);
var cVerticalStab3 = MAP(VerticalStab3map)(domain);
//DRAW(cVerticalStab3);

var sVerticalStab1 = BEZIER(S1)([VerticalStab1map,VerticalStab3map,VerticalStab2map]);
var surfVerticalStab1 = MAP(sVerticalStab1)(domain2);

var sVerticalStab2 = BEZIER(S1)([VerticalStab1map,[0,0,-0.05]]);
var surfVerticalStab2 = MAP(sVerticalStab2)(domain2);

var sVerticalStab3 = BEZIER(S1)([VerticalStab2map,[0,0,0.05]]);
var surfVerticalStab3 = MAP(sVerticalStab3)(domain2);

var emiVerticalStab = R([0,1])(3*PI/2)(STRUCT([surfVerticalStab1,surfVerticalStab2,surfVerticalStab3]))
var verticalStab = STRUCT([emiVerticalStab,S([1])([-1])(emiVerticalStab)])





var pHorizontalStab1 = [[-0.2,0,0.2],[-0.2,0,-0.5],[-0.2,0,-0.5],[1.8,0,0],[1.8,0,0],[2.9,0,0],[3.2,0,0.2],
                        [3.1,0,0.8],
                        [2.3,0,2.2],[2,0,2.36],[1.6,0,2.1],[.6,0,.6],[.1,0,.25],[-0.2,0,0.2]]
var HorizontalStab1map = NUBS(S0)(2)(genKnots(pHorizontalStab1))(pHorizontalStab1);
var cHorizontalStab1 = MAP(HorizontalStab1map)(domain);
//DRAW(cHorizontalStab1)
/*
var pHorizontalStab1 = pointsScale( pHorizontalStab1,1.1,1,1.1)
var HorizontalStab1map = NUBS(S0)(2)(genKnots(pHorizontalStab1))(pHorizontalStab1);
var cHorizontalStab1 = MAP(HorizontalStab1map)(domain);
*/

var pHorizontalStab2 = pointsTransl( pointsScale( pHorizontalStab1,0.9,1,0.9),0,-0.05,0)
var HorizontalStab2map = NUBS(S0)(2)(genKnots(pHorizontalStab2))(pHorizontalStab2);
var cHorizontalStab2 = MAP(HorizontalStab2map)(domain);
//DRAW(cHorizontalStab2)

var pHorizontalStab3 = pointsTransl( pointsScale( pHorizontalStab1,0.9,1,0.9),0,0.05,0)
var HorizontalStab3map = NUBS(S0)(2)(genKnots(pHorizontalStab3))(pHorizontalStab3);
var cHorizontalStab3 = MAP(HorizontalStab3map)(domain);
//DRAW(cHorizontalStab3)


var sHorizontalStab1 = BEZIER(S1)([HorizontalStab2map,HorizontalStab1map,HorizontalStab3map,]);
var surfHorizontalStab1 = MAP(sHorizontalStab1)(domain2);

var sHorizontalStab2 = BEZIER(S1)([HorizontalStab2map,[1.8,0,-0.05]]);
var surfHorizontalStab2 = MAP(sHorizontalStab2)(domain2);

var sHorizontalStab3 = BEZIER(S1)([HorizontalStab3map,[1.8,0,0.05]]);
var surfHorizontalStab3 = MAP(sHorizontalStab3)(domain2);

//stondare bordo
var horizontalStab = R([0,1])(0)(STRUCT([surfHorizontalStab1,surfHorizontalStab2,surfHorizontalStab3]))
var stabilizzatori = STRUCT([horizontalStab,verticalStab])
DRAW(stabilizzatori);