//Pista
function sphere(r,dx,dy,dz,m,n){
	var r = r || 1;
	var m = m || 4;
	var n = n || 4;
	var dx = dx || 0;
	var dy = dy || 0;
	var dz = dz || 0;

	var domain = DOMAIN([[PI/2,PI],[0,2*PI]])([m,n]);

  	var mapping = function (p) {
    	var a = p[0]-PI/2;
    	var b = p[1];
    	return [r*COS(a)*SIN(b) + dx , r*COS(a)*COS(b) + dy , r*SIN(a) + dz];
    	
  	};
  	var mapped = MAP(mapping)(domain);
  	//COLOR([1,1,0])(mapped);
  	//DRAW(mapped);
  	return COLOR([1,1,0])(mapped);
}


var asfalto = T([2])(-0.5)(COLOR([0,0,0])(SIMPLEX_GRID([[30],[2.5],[0.5]])))
var striscia = COLOR([1,1,1])(SIMPLEX_GRID([[-14.9,0.2],[-0.5,1.5],[0.05]]))


var emisfera1 = T([0])([0.5])(sphere(0.2))
//var emisfera2 = R([0,1])(PI)(T([0,1])([0.4,2.3])(sphere(0.1)))
var emisfera2 = T([0,1])([0.5,2.5])(sphere(0.2))
var emisfera11 = T([0])([30-0.5])(sphere(0.2))
var emisfera22 = T([0,1])([30-0.5,2.5])(sphere(0.2))


//var pattern = STRUCT([asfalto,striscia,emisfera1,emisfera2,emisfera11,emisfera22])
var pattern1 = STRUCT([asfalto,striscia,emisfera1,emisfera2,emisfera11,emisfera22])

var iniziopista1 = T([0,1])([0.5,0.5])(COLOR([1,1,1])(SIMPLEX_GRID([REPLICA(6)([1.1,-1.1]),[-0.5,1.5],[0.05]])))
var iniziopista2 = T([0,1])([17.3,0.5])(COLOR([1,1,1])(SIMPLEX_GRID([REPLICA(6)([1.1,-1.1]),[-0.5,1.5],[0.05]])))

var iniziopista = STRUCT([iniziopista1,iniziopista2])
var lunghezzapista = 20
var finepista = T([1])([lunghezzapista*2.5-3.5])(STRUCT([iniziopista1,iniziopista2]))

//DRAW(iniziopista)
var replicapattern = T([1])([2.5])

var pista = STRUCT([iniziopista,STRUCT(REPLICA(lunghezzapista)([pattern1,replicapattern])),pattern1,finepista]);
DRAW(pista)


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
//DRAW(pB)

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
//DRAW(pBx)
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
//DRAW(fusoliera)





//Coordinate ala = [0,0,0],[0,3.5,0],[1.5,11,0.32]


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

var surfala = BEZIER(S1)(mapAla);
var surf1 = MAP(surfala)(domain2);
//DRAW(T([0,1,2])([2.5,1,1.5])(surf1));
//S([0,2])([0.5,0.5])(surf1)

var ala1 = COLOR([1,1,0])(T([0,1,2])([2.7,1,1.6])(S([0,2])([0.9,0.9])(surf1)))
var ala2 = COLOR([1,1,0])(S([1])([-1])(T([0,1,2])([2.7,1,1.6])(S([0,2])([0.9,0.9])(surf1))))

var ali = STRUCT([ala1,ala2])
//DRAW(ali)




//elica

//ELICHE
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

var circonferenzaxy = function (v,tz) {
  var u = v[0];
  var r = 0.2;
  return [r * SIN(u*2*PI), r * COS(u*2*PI), tz];
};

function circonferenzayz(r,dx,dy,dz){
  var r = r || 0.2;
  var m = 12;
  var n = 12;
  var dx = dx || 0;
  var dy = dy || 0;
  var dz = dz || 0;
  
  var domain = DOMAIN([[0,PI],[0,2*PI]])([m,n]);
    var mapping = function (v,tx) {
      var u = v[0];
      var r = 0.2;
      return [dx, r * SIN(u*2*PI)+dy, r * COS(u*2*PI)+dz];
    };
    return mapping;
  }

var circonferenzaxz = function (v,ty) {
  var u = v[0];
  var r = 0.2;
  return [r * SIN(u*2*PI), ty, r * COS(u*2*PI)];
};

function rototranslatePoints (array, a, y) {
  var rtPoints = [];
  for (var i = 0; i < array.length; i++) {
    rtPoints[i] = [];
  };
  for (var i = 0; i < array.length; i++) {
    x = array[i][0] * COS(a) - array[i][2] * SIN(a);
    z = array[i][0] * SIN(a) + array[i][2] * COS(a);
    rtPoints[i][0] = x;
    rtPoints[i][1] = array[i][1] + y;
    rtPoints[i][2] = z;
  };
  return rtPoints;
}

var ptPala0 = [[0,0,0.05],[0.1,0,0.05],[0.15,0,0],
                   [0.1,0,-0.05],[0,0,-0.05],[-0.1,0,-0.05],
                   [-0.15,0,0],[-0.1,0,0.05],[0,0,0.05]];

var E0 = NUBS(S0)(2)(genKnots(ptPala0))(ptPala0);

var domain2 = DOMAIN([[0,1],[0,1]])([40,40]);
var domain = INTERVALS(1)(50)



var ptPala1 = rototranslatePoints (ptPala0, PI/4, 1);
var E1 = NUBS(S0)(2)(genKnots(ptPala1))(ptPala1);


var ptPala2 = rototranslatePoints (ptPala0, PI/2, 2);
var E2 = NUBS(S0)(2)(genKnots(ptPala2))(ptPala2);


var PalaLevels = [E0,E1,E1,E2,[0,2.05,0]];
var pala = NUBS(S1)(2)(genKnots(PalaLevels))(PalaLevels);
var PalaMap = MAP(pala)(domain2);
var Pale = STRUCT([PalaMap,R([1,2])(PI)(PalaMap)]);


var circonf = circonferenzayz(0.2,0.15)
var centraleLevels = [[0.15,0,0],circonf,circonf,[-0.3,0,0]];
var centraleS = NUBS(S1)(2)(genKnots(centraleLevels))(centraleLevels);
var centraleMap = MAP(centraleS)(domain2);
var elica = T([0,2])([profiloA0[0][0]-0.13,profiloA0[0][2]-0.1])(R([1,2])(PI/4)(STRUCT([Pale,centraleMap])))
//DRAW(elica)










//coda
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



var pHorizontalStab2 = pointsTransl( pointsScale( pHorizontalStab1,0.9,1,0.9),0,-0.05,0)
var HorizontalStab2map = NUBS(S0)(2)(genKnots(pHorizontalStab2))(pHorizontalStab2);
var cHorizontalStab2 = MAP(HorizontalStab2map)(domain);


var pHorizontalStab3 = pointsTransl( pointsScale( pHorizontalStab1,0.9,1,0.9),0,0.05,0)
var HorizontalStab3map = NUBS(S0)(2)(genKnots(pHorizontalStab3))(pHorizontalStab3);
var cHorizontalStab3 = MAP(HorizontalStab3map)(domain);



var sHorizontalStab1 = BEZIER(S1)([HorizontalStab2map,HorizontalStab1map,HorizontalStab3map,]);
var surfHorizontalStab1 = MAP(sHorizontalStab1)(domain2);

var sHorizontalStab2 = BEZIER(S1)([HorizontalStab2map,[1.8,0,-0.05]]);
var surfHorizontalStab2 = MAP(sHorizontalStab2)(domain2);

var sHorizontalStab3 = BEZIER(S1)([HorizontalStab3map,[1.8,0,0.05]]);
var surfHorizontalStab3 = MAP(sHorizontalStab3)(domain2);

//stondare bordo
var horizontalStab = R([0,1])(0)(STRUCT([surfHorizontalStab1,surfHorizontalStab2,surfHorizontalStab3]))

var stabilizzatori = T([0,2])([11,1])(STRUCT([horizontalStab,verticalStab]))
//DRAW(T([0,2])([11,1])(stabilizzatori))











































//SUPPORTI

var domain = INTERVALS(1)(50)
var domain2 = DOMAIN([[0,1],[0,1]])([40,10]);

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



function circonferenzayz(r,dx,dy,dz){
  var r = r || 0.2;
  var m = 12;
  var n = 12;
  var dx = dx || 0;
  var dy = dy || 0;
  var dz = dz || 0;
  
  var domain = DOMAIN([[0,PI],[0,2*PI]])([m,n]);
    var mapping = function (v) {
      var u = v[0];
      var r = 0.2;
      return [dx, r * SIN(u*2*PI)+dy, r * COS(u*2*PI)+dz];
    };
    return mapping;
  }

  function circonferenzaxz(r,dx,dy,dz){
  var r = r || 0.2;
  var m = 12;
  var n = 12;
  var dx = dx || 0;
  var dy = dy || 0;
  var dz = dz || 0;
  
  var domain = DOMAIN([[0,PI],[0,2*PI]])([m,n]);
    var mapping = function (v) {
      var u = v[0];
      var r = 0.2;
      return [r * SIN(u*2*PI)+dx, dy, r * COS(u*2*PI)+dz];
    };
    return mapping;
  }

  function circonferenzaxy(r,dx,dy,dz){
  var r = r || 0.2;
  var m = 12;
  var n = 12;
  var dx = dx || 0;
  var dy = dy || 0;
  var dz = dz || 0;
  
  var domain = DOMAIN([[0,PI],[0,2*PI]])([m,n]);
    var mapping = function (v) {
      var u = v[0];
      var r = 0.2;
      return [r * SIN(u*2*PI)+dx, r * COS(u*2*PI)+dy, dz];
    };
    return mapping;
  }

  function circonferenzayz1(r,dx,dy,dz){
  var r = r || 0.2;
  var m = 12;
  var n = 12;
  var dx = dx || 0;
  var dy = dy || 0;
  var dz = dz || 0;
  
  var domain = DOMAIN([[0,PI],[0,2*PI]])([m,n]);
    var mapping = function (v) {
      var u = v[0];
      var r = 0.2;
      return [dx, r * COS(u*2*PI)+dy, r * SIN(u*2*PI)+dz];
    };
    return mapping;
  }

  function circonferenzaxz1(r,dx,dy,dz){
  var r = r || 0.2;
  var m = 12;
  var n = 12;
  var dx = dx || 0;
  var dy = dy || 0;
  var dz = dz || 0;
  
  var domain = DOMAIN([[0,PI],[0,2*PI]])([m,n]);
    var mapping = function (v) {
      var u = v[0];
      var r = 0.2;
      return [r * COS(u*2*PI)+dx , dy, r * SIN(u*2*PI)+dz];
    };
    return mapping;
  }

  function circonferenzaxy1(r,dx,dy,dz){
  var r = r || 0.2;
  var m = 12;
  var n = 12;
  var dx = dx || 0;
  var dy = dy || 0;
  var dz = dz || 0;
  
  var domain = DOMAIN([[0,PI],[0,2*PI]])([m,n]);
    var mapping = function (v) {
      var u = v[0];
      var r = 0.2;
      return [ r * COS(u*2*PI)+dx , r * SIN(u*2*PI)+dy , dz];
    };
    return mapping;
  }





var circle1 = circonferenzaxy1(0.2,3.5,7.5,1.7)
var circle2 = circonferenzaxy1(0.2,4.5,7.5,1.7)
var circle3 = circonferenzaxy1(0.2,4,0.8,-1)

var barlevels1 = [circle1,circle1,circle3]
var barlevels2 = [circle2,circle2,circle3]

var bar1 = NUBS(S1)(2)(genKnots(barlevels1))(barlevels1);
var bar2 = NUBS(S1)(2)(genKnots(barlevels2))(barlevels2);

var barMap1 = MAP(bar1)(domain2);
var barMap2 = MAP(bar2)(domain2);

var barreAli = STRUCT([barMap1,barMap2,S([1])([-1])(barMap1),S([1])([-1])(barMap2)])

//DRAW(barreAli)




var circle1 = circonferenzaxy1(0.2,2.5,0.8,-1)
var circle2 = circonferenzaxz1(0.2,2.5,1.8,-1.6)

var barlevels1 = [circle1,circle1,circle2]

var bar1 = NUBS(S1)(2)(genKnots(barlevels1))(barlevels1);

var barMap1 = MAP(bar1)(domain2);

var barraruote = STRUCT([barMap1,S([1])([-1])(barMap1)])

//DRAW(barraruote)







//ruota
var gomma =   COLOR([0,0,0])(TORUS_SURFACE([0.15,0.35])([25,25]))
var cerchione = COLOR([1,0,0])(TORUS_SURFACE([0.1,0.2])([25,25]))
//var ruota1 =   R([1,2])(PI/2)(STRUCT([gomma,cerchione]))
var ruota1 =   T([0,1,2])([2.5,1.8,-1.6])(R([1,2])(PI/2)(STRUCT([gomma,cerchione])))
var ruote = STRUCT([ruota1,S([1])([-1])(ruota1)])

//DRAW(ruote);

var carena = COLOR([0.8,0.8,0.8])(STRUCT([stabilizzatori]))
var black = COLOR([1,1,1])(STRUCT([elica,barreAli,barraruote]))
var ali = COLOR([1,1,0])(STRUCT([ali]))

var aereo = STRUCT([fusoliera,carena,black,ali,ruote])
DRAW(T([1,2])([15,4])(R([0,1])(PI/2)(aereo)))