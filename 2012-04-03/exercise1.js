//i punti sono ordinati in senso orario a partire da quello con coordinata x più piccola.
//A parità di coordinata x, viene scelto quello con coordinata y più piccola

//spessore dei muri = 0.2 m
//spessore delle vetrate = 0.1 m
//larghezza apertura porta = 0.8 m

var p_esterno = [[0,0],[0,2],[0.8,2],[0.8,22.2],
				 [9.2,22.2],[9.2,17],
				 [39,17],[39,16.2],[39+12.2,16.2],[39+12.2,6],[52,6],[52,4],
				 [38.9,4],[38.9,1],[39,1],[39,0],[0,0]];

var p_piscinagrande = [[1,1],[1,10],[21,10],[21,1],[1,1]];
var p_muro1 = [[0.8,0.8],[0.8,22.2],[9.2,22.2],[9.2,16.8],[9,16.8],[9,16.8+5.2],[1,16.8+5.2],[1,1],[8,1],[8,0.8],[0.8,0.8]];
var p_muro2 = [[7.6,15],[7.6,15.2],[26.6,15.2],[26.6,15],[7.6,15]];
var p_muro3 = [[25.2,7.2],[25.2,7.4],[33.8,7.4],[33.8,7.2],[25.2,7.2]];
var p_muro4 = [[37.2,11.4],[37.2,11.6],[42.6,11.6],[42.6,11.4],[37.2,11.4]];
var p_muro5 = [[37.8,16],[37.8,16.2],[51.2,16.2],[51.2,4.8],[41.4,4.8],[41.4,5],[51,5],[51,16],[37.8,16]];
var p_vetrata1 = [[30,4.9],[30,5],[41.4,5],[41.4,4.9],[30,4.9]];
var p_vetrata2 = [[30,13.6],[30,13.7],[40,13.7],[40,13.6],[30,13.6]];
var p_vetrata3 = [[30.9,7.4],[30.9,13.6],[31,13.6],[31,7.4],[30.9,7.4]];
var p_vetrata4 = [[31.9,7.4],[31.9,13.6],[32,13.6],[32,7.4],[31.9,7.4]];
var p_vetrata5 = [[44.65,6.75],[44.65,14.25],[44.75,14.25],[44.75,6.75],[44.65,6.75]];

var p_piscinapiccola = [[47,5],[47,16],[51,16],[51,5],[47,5]];

var lunghezza_scale = 38.9 - 36.4;
var lung_scala = lunghezza_scale/7;
var scala = [];
var pol_scala = [];
for (var i = 0; i < 7; i++) {
	scala[i] = [[36.4+lung_scala*i,1],[36.4+lung_scala*i,4],
	[36.4+lung_scala*(i+1),4],[36.4+lung_scala*(i+1),1],[36.4+lung_scala*(i),1]];
	pol_scala[i] = POLYLINE(scala[i]);
};

var p_divisorio1 = [[1,16.9],[1,17],[7.1,17],[7.1,16.9],[1,16.9]];
var p_divisorio2 = [[4.95,17],[4.95,19.1],[5.05,19.1],[5.05,17],[4.95,17]];
var p_divisorio3 = [[4.95,19.9],[4.95,22],[5.05,22],[5.05,19.9],[4.95,19.9]];
var p_divisorio4 = [[5.05,20.7],[5.05,20.8],[5.8,20.8],[5.8,20.7],[5.05,20.7]];
var p_divisorio5 = [[6.6,20.7],[6.6,20.8],[9,20.8],[9,20.7],[6.6,20.7]];
var p_divisorio6 = [[6.95,21.6],[6.95,22],[7.05,22],[7.05,21.6],[6.95,21.6]];
var p_divisorio7 = [[7.9,16.9],[7.9,17],[9,17],[9,16.9],[7.9,16.9]];


//Costruzione colonne
var colonna = [];
//dx=distanza sull' asse x di una colonna dall' altra
//dx=distanza sull' asse x di una colonna dall' altra
//la colonna è a forma di + e ha ogni lato da 0.1m
dx = 19/3;
dy = 7;
for (var i = 0; i < 4; i++) {
	colonna[i] = new Array(2);
	for (var j = 0; j < 2; j++) {
		colonna[i][j] = new Array(12);
		var ci = [26 + dx * i , 7 + dy * j];
		var p1 = [ci[0] - 0.05 , ci[1] - 0.15];
		var p2 = [ci[0] - 0.05 , ci[1] - 0.05];
		var p3 = [ci[0] - 0.15, ci[1] - 0.05];
		var p4 = [ci[0] - 0.15 , ci[1] + 0.05];
		var p5 = [ci[0] - 0.05, ci[1] + 0.05];
		var p6 = [ci[0] - 0.05, ci[1] + 0.15];
		var p7 = [ci[0] + 0.05, ci[1] + 0.15];
		var p8 = [ci[0] + 0.05, ci[1] + 0.05];
		var p9 = [ci[0] + 0.15, ci[1] + 0.05];
		var p10 = [ci[0] + 0.15, ci[1] - 0.05];
		var p11 = [ci[0] + 0.05, ci[1] - 0.05];
		var p12 = [ci[0] + 0.05, ci[1] - 0.15];
		var p13 = p1;
		colonna[i][j] = POLYLINE([p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13]);
	};
};

var colonne = STRUCT([colonna[0][0],colonna[0][1],colonna[1][0],colonna[1][1],
					colonna[2][0],colonna[2][1],colonna[3][0],colonna[3][1]]);

lunghezzapanca= 15.4/7;
var panca = new Array(7);
var pol_panca = new Array(7);
for (var i = 0; i < 7; i++) {
	panca[i] = new Array(5);
	panca[i] = [[7.8+lunghezzapanca*(i),14.2],[7.8+lunghezzapanca*(i),14.2+0.5],
				[7.8+lunghezzapanca*(i+1),14.2+0.5],[7.8+lunghezzapanca*(i+1),14.2],[7.8,14.2]];
	pol_panca[i] = POLYLINE(panca[i]);
};



var pol_esterno = POLYLINE(p_esterno);
var pol_piscinagrande = POLYLINE(p_piscinagrande);
var pol_muro1 = POLYLINE(p_muro1);
var pol_muro2 = POLYLINE(p_muro2);
var pol_muro3 = POLYLINE(p_muro3);
var pol_muro4 = POLYLINE(p_muro4);
var pol_muro5 = POLYLINE(p_muro5);
var pol_vetrata1 = POLYLINE(p_vetrata1);
var pol_vetrata2 = POLYLINE(p_vetrata2);
var pol_vetrata3 = POLYLINE(p_vetrata3);
var pol_vetrata4 = POLYLINE(p_vetrata4);
var pol_vetrata5 = POLYLINE(p_vetrata5);
var pol_piscinapiccola = POLYLINE(p_piscinapiccola);

var pol_divisorio1 = POLYLINE(p_divisorio1);
var pol_divisorio2 = POLYLINE(p_divisorio2);
var pol_divisorio3 = POLYLINE(p_divisorio3);
var pol_divisorio4 = POLYLINE(p_divisorio4);
var pol_divisorio5 = POLYLINE(p_divisorio5);
var pol_divisorio6 = POLYLINE(p_divisorio6);
var pol_divisorio7 = POLYLINE(p_divisorio7);

var str_muri = STRUCT([pol_muro1,pol_muro2,pol_muro3,pol_muro4,pol_muro5]);
var str_piscine = STRUCT([pol_piscinagrande,pol_piscinapiccola]);
var str_vetrate = STRUCT([pol_vetrata1,pol_vetrata2,pol_vetrata3,pol_vetrata4,pol_vetrata5]);
var str_divisori = STRUCT([pol_divisorio1,pol_divisorio2,pol_divisorio3,
						   pol_divisorio4,pol_divisorio5,pol_divisorio6,pol_divisorio7]);
var str_scale = STRUCT([pol_scala[0],pol_scala[1],pol_scala[2],
						   pol_scala[3],pol_scala[4],pol_scala[5],pol_scala[6]]);
var str_panche = STRUCT([pol_panca[0],pol_panca[1],pol_panca[2],
						 pol_panca[3],pol_panca[4],pol_panca[5],pol_panca[6]]);


var pianta2d = STRUCT([pol_esterno,str_muri,str_piscine,str_vetrate,str_divisori,colonne,str_scale,str_panche]);
COLOR([0,0,0])(pianta2d);
DRAW(pianta2d);