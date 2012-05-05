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

var profiloB = [[1.4,0,.8],[1.4,1,.75],[1.4,0.875,0.32],[1.4,.81,-.96],[1.4,.81,-.96],[1.4,0,-0.96],]
var pBMap = NUBS(S0)(2)(genKnots(profiloB))(profiloB);
var pB = MAP(pBMap)(domain);
DRAW(pB)

var profiloA = pointsTransl( pointsScale(profiloB,1,1/2,2/3) ,-1.4,0,0)
//var profiloA = [[0,0,0.54],[0,0.5,0.6],[0,0.5,0],[0,0.4,-0.6],[0,0,-0.7]]
var pAMap = NUBS(S0)(2)(genKnots(profiloA))(profiloA);
var pA = MAP(pAMap)(domain);
//DRAW(pA)

//trasl a z=0.25
var profiloA0 = pointsTransl( pointsScale(profiloB,1,1/16,4/36) ,(-1.4-0.25),0,0.3)
var pA0Map = NUBS(S0)(2)(genKnots(profiloA0))(profiloA0);
var pA0 = MAP(pA0Map)(domain);
//DRAW(pA0)


var profiloBx = [[1.4,0,0.67],[1.4,0.8,0.67],[1.4,0.8,0.67],[1.4,0.875,0.67-0.35],[1.4,0.875,0.67-0.35],[1.4,0.8,-.95],[1.4,0.8,-.95],[1.4,0,-.95]]
//var profiloB1 = [[0,0,0.35],[0,0.8,0.35],[0,0.8,0.35],[0,0.875,-0.4],[0,0.8,-1.1],[0,0.8,-1.1],[0,0,-1.1]]
var pBxMap = NUBS(S0)(2)(genKnots(profiloBx))(profiloBx);
var pBx = MAP(pBxMap)(domain);
DRAW(pBx)
/*
var profiloBx = [[1.4,0,0.35],[1.4,0.8,0.35],[1.4,0.8,0.35],[1.4,0.875,-0.4],[1.4,0.8,-1.1],[1.4,0.8,-1.1],[1.4,0,-1.1]]
//var profiloB1 = [[0,0,0.35],[0,0.8,0.35],[0,0.8,0.35],[0,0.875,-0.4],[0,0.8,-1.1],[0,0.8,-1.1],[0,0,-1.1]]
var pBxMap = NUBS(S0)(2)(genKnots(profiloBx))(profiloBx);
var pBx = MAP(pBxMap)(domain);
DRAW(pBx)
*/

var profiloB1 = [[2,0,0.35],[2,0.8,0.35],[2,0.8,0.35],[2,0.875,-0.4],[2,0.8,-1.1],[2,0.8,-1.1],[2,0,-1.1]]
//var profiloB1 = [[0,0,0.35],[0,0.8,0.35],[0,0.8,0.35],[0,0.875,-0.4],[0,0.8,-1.1],[0,0.8,-1.1],[0,0,-1.1]]
var pB1Map = NUBS(S0)(2)(genKnots(profiloB1))(profiloB1);
var pB1 = MAP(pB1Map)(domain);
//DRAW(pB1)

//var profiloB2 = [[4.2,0,0.35],[4.2,0.8,0.35],[4.2,0.8,0.35],[4.2,0.875,-0.4],[4.2,0.8,-1.3],[4.2,0.8,-1.3],[4.2,0,-1.3]]
var profiloB2 = [[4.2,0,0.35],[4.2,0.875,0.35],[4.2,0.875,0.35],[4.2,0.9,0],[4.2,0.9,0],[4.2,0.8,-1.3],[4.2,0.8,-1.3],[4.2,0,-1.3]]
var pB2Map = NUBS(S0)(2)(genKnots(profiloB2))(profiloB2);
var pB2 = MAP(pB2Map)(domain);
//DRAW(pB2)


var profiloC = [[4.2,0,1.5],[4.2,0.8,1.5],[4.2,0.8,1.5],[4.2,0.9,0],[4.2,0.9,0],[4.2,0.875,-0.4],[4.2,0.8,-1.3],[4.2,0.8,-1.3],[4.2,0,-1.3]]
//var profiloC = [[0,0,1.5],[0,0.8,1.5],[0,0.8,1.5],[0,0.9,0],[0,0.9,0],[0,0.875,-0.4],[0,0.8,-1.3],[0,0.8,-1.3],[0,0,-1.3]]
var pCMap = NUBS(S0)(2)(genKnots(profiloC))(profiloC);
var pC = MAP(pCMap)(domain);
//DRAW(pC)

var profiloE = [[11,0,1.4],[11,0.22,1.4],[11,0.22,1.4],[11,0.28,0.85],[11,0.28,0.85],[11,0.27,0.45],[11,0.22,0.1],[11,0.22,0.1],[11,0,0.1]]
//var profiloE = [[0,0,1.4],[0,0.22,1.4],[0,0.22,1.4],[0,0.28,0.85],[0,0.28,0.85],[0,0.27,0.45],[0,0.22,0.1],[0,0.22,0.1],[0,0,0.1]]
var pEMap = NUBS(S0)(2)(genKnots(profiloE))(profiloE);
var pE = MAP(pEMap)(domain);
//DRAW(pE)


//VETRI 
var profiloVbase1 = [profiloB2[0],profiloB2[1],profiloB2[1],[1.4+0.8,0.8,0.55],[1.4+0.8,0.8,0.55],profiloBx[0]]
//var profiloVbase1 = [[0,0,1.4],[0,0.22,1.4],[0,0.22,1.4],[0,0.28,0.85],[0,0.28,0.85],[0,0.27,0.45],[0,0.22,0.1],[0,0.22,0.1],[0,0,0.1]]
var pVbase1Map = NUBS(S0)(2)(genKnots(profiloVbase1))(profiloVbase1);
var pVbase1 = MAP(pVbase1Map)(domain);
//DRAW(pVbase1)

var profiloVbase2 = [profiloC[0],profiloC[1],profiloC[1],[3.5,0.8-0.2,1.5],[3.5,0.8-0.2,1.5],[3,0,1.5]]
//var profiloVbase2 = [[0,0,1.4],[0,0.22,1.4],[0,0.22,1.4],[0,0.28,0.85],[0,0.28,0.85],[0,0.27,0.45],[0,0.22,0.1],[0,0.22,0.1],[0,0,0.1]]
var pVbase2Map = NUBS(S0)(2)(genKnots(profiloVbase2))(profiloVbase2);
var pVbase2 = MAP(pVbase2Map)(domain);
//DRAW(pVbase2)

//"POGGIA_ALI"
var profiloPortaAli1 = [[2.9,1,2],[2.9,0.27,2],[2.9,0.27,2],[2.9,0.2,1.3],[2.9,1,1.5],[2.9,1,1.5],[2.9,1,2]]
var pPortaAli1Map = NUBS(S0)(2)(genKnots(profiloPortaAli1))(profiloPortaAli1);
var pPortaAli1 = MAP(pPortaAli1Map)(domain);
//DRAW(pPortaAli1)

var profiloPortaAli2 = [[5.83,1,2],[5.83,0.27,2],[5.83,0.27,2],[5.83,0.2,1.3],[5.83,1,1.5],[5.83,1,1.5],[5.83,1,2]]
var pPortaAli2Map = NUBS(S0)(2)(genKnots(profiloPortaAli2))(profiloPortaAli2);
var pPortaAli2 = MAP(pPortaAli2Map)(domain);
//DRAW(pPortaAli2)

var profiloPortaAli1bis = [[2.9,1,2],[2.4,1,2],[2.4,1,2],
                              [2.55,1,1.65],[2.9,1,1.5],[2.9,1,1.5],
                              [2.9,1,2]]
var pPortaAli1bisMap = NUBS(S0)(2)(genKnots(profiloPortaAli1bis))(profiloPortaAli1bis);
var pPortaAli1bis = MAP(pPortaAli1bisMap)(domain);
//DRAW(pPortaAli1bis)




var domain2 = DOMAIN([[0,1],[0,1]])([40,10]);

var fusoliera1 = BEZIER(S1)([pA0Map,pAMap,pAMap,pAMap,pBMap]);
var mapFus1 = MAP(fusoliera1)(domain2);
//DRAW(mapFus1)

var fusoliera2 = BEZIER(S1)([pBxMap,pB2Map]);
var mapFus2 = MAP(fusoliera2)(domain2);
//DRAW(mapFus2)

var fusoliera3 = BEZIER(S1)([pCMap,pEMap,[13,0,1]]);
var mapFus3 = MAP(fusoliera3)(domain2);
//DRAW(mapFus3)

var fusoliera4 = BEZIER(S1)([pBxMap,pBMap]);
var mapFus4 = MAP(fusoliera4)(domain2);

var Vetri1 = BEZIER(S1)([pVbase1Map,pVbase2Map]);
var mapVetri1 = MAP(Vetri1)(domain2);

var Vetri2 = BEZIER(S1)([pVbase2Map,[3,0,1.5]]);
var mapVetri2 = MAP(Vetri2)(domain2);

vetri = COLOR([1,2,3,0.75])(STRUCT([mapVetri1,mapVetri2]))
//DRAW(vetri)


var PortaAli1 = BEZIER(S1)([pPortaAli1Map,pPortaAli2Map]);
var mapPortaAli1 = MAP(PortaAli1)(domain2);
//DRAW(mapPortaAli1)


var PortaAli2 = BEZIER(S1)([pPortaAli1bisMap,pPortaAli1Map]);
var mapPortaAli2 = MAP(PortaAli2)(domain2);
//DRAW(mapPortaAli2)

var PortaAli3 = BEZIER(S1)([pPortaAli1bisMap,[2.9,1,2]]);
var mapPortaAli3 = MAP(PortaAli3)(domain2);
//DRAW(mapPortaAli3)

var PortaAli4 = BEZIER(S1)([pPortaAli2Map,[5.83,1,2]]);
var mapPortaAli4 = MAP(PortaAli4)(domain2);
//DRAW(mapPortaAli4)

var smplxgrd = SIMPLEX_GRID([[-profiloC[0][0],(5.7-profiloC[0][0])],[-profiloC[0][1],profiloC[1][1]],[-profiloC[0][2],1.9-profiloC[0][2]]])
//DRAW(smplxgrd)

var portaAli = STRUCT([mapPortaAli1,mapPortaAli2,mapPortaAli3,mapPortaAli4,smplxgrd])





var emifusoliera = STRUCT([portaAli,vetri,mapFus1,mapFus2,mapFus3,mapFus4])
var fusoliera = STRUCT([emifusoliera,S([1])([-1])(emifusoliera)])
DRAW(fusoliera)