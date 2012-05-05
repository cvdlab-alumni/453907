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