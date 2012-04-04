// sedia a sdraio
var gradi = PI/180;
var alpha = 45*gradi;
var piedibracciolo = SIMPLEX_GRID([[0.05],[-1,0.05,-(2-0.5),0.05],[0.65]]);
var bracciolo = SIMPLEX_GRID([[0.05],[-1,0.05,(2-0.5),0.05],[-0.6,0.05]]);
var braccioli = STRUCT([bracciolo,piedibracciolo,T([0])([0.65])(bracciolo),T([0])([0.65])(piedibracciolo)]);

COLOR(simplexn.vector.scalarMul( 1/255 , [139, 69, 19]))(braccioli);


var telaio1 = SIMPLEX_GRID([[-0.5/3-0.025,0.05,-0.5/3-0.025,0.05],[1],[-0.40,0.01]]);


var stecche1 = SIMPLEX_GRID([[-0.05,0.6],REPLICA(10)([0.06,-0.04]),[-(0.4+0.01),[0.02]]]);

COLOR(simplexn.vector.scalarMul( 1/255 , [240,240,240]))(stecche1);
var reclinabile = STRUCT([stecche1,telaio1]);


var telaio2 = SIMPLEX_GRID([[-0.5/3-0.025,0.05,-0.5/3-0.025,0.05],[2],[-0.40,0.01]]);

var stecche2 = SIMPLEX_GRID([[-0.05,0.6],REPLICA(20)([0.06,-0.04]),[-(0.4+0.01),[0.02]]]);

COLOR(simplexn.vector.scalarMul( 1/255 , [240,240,240]))(stecche2);

var fisso = T([1])([1])(STRUCT([stecche2,telaio2]));

var reclinabile = T([1,2])([1+0.05,0.45-0.02])(R([0])([-alpha])(T([1,2])([-1,-0.45])(reclinabile)));

var sdraio = STRUCT([braccioli,reclinabile,fisso]);


var sdraio1 = T([0,1,2])([24,2,0.7])(R([2])([90*gradi])(sdraio));
var sdraio2 = T([0,1,2])([24,6,0.7])(R([2])([90*gradi])(sdraio));

//var sdraio2 = R([2])([90*gradi])(T([0,1,2])([22,6,0.7])(sdraio));
var duesdraio = STRUCT([sdraio1,sdraio2]);
DRAW(duesdraio);


//
hscala=0.10;
hscale = hscala*7;
//funzione che permette di adattare i valori dell' esercizio1, passati a polyline
// in valori accettabili dal metodo SIMPLEX_GRID. funziona solo con perimetri composti da 4 punti
// quindi bisognerà riportare oggetti più complessi a tali valori
function adapter(perimeter,vettorez){
	var minx = 10000;
	var miny = 10000;
	var maxx = -10000;
	var maxy = -10000;
	for (var i = 0; i < perimeter.length-1; i++) {
		if (perimeter[i][0]<minx) {minx = perimeter[i][0]};
		if (perimeter[i][0]>maxx) {maxx = perimeter[i][0]};
		if (perimeter[i][1]<miny) {miny = perimeter[i][1]};
		if (perimeter[i][1]>maxy) {maxy = perimeter[i][1]};
	};
	return T([0,1])([minx,miny])(SIMPLEX_GRID([[maxx-minx],[maxy-miny],vettorez]));
};

var bas1 = [[0,0],[0,2],[1,2],[1,0]];
var bas2 = [[1,0],[1,1],[39,1],[39,0]];
var bas3 = [[1,10],[1,22],[9,22],[9,10]];
var bas4 = [[9,10],[9,17],[47,17],[47,10]];
var bas5 = [[21,1],[21,4],[36.4,4],[36.4,1]];
var bas6 = [[21,5],[21,10],[47,10],[47,5]];
var bas7 = [[21,4],[21,5],[52,5],[52,4]];
var bas8 = [[51,5],[51,6],[52,6],[52,5]];
//basamento piscina piccola e grande rialzo z =0.3 così la piscina è alta 40 cm
//aggiungerò 10 cm di acqua
var bas9 = [[47,5],[47,16],[51,16],[51,5]];
var bas10 = [[1,1],[1,10],[21,10],[21,1]];

var treD_bas1 = adapter(bas1,[hscale]);
var treD_bas2 = adapter(bas2,[hscale]);
var treD_bas3 = adapter(bas3,[hscale]);
var treD_bas4 = adapter(bas4,[hscale]);
var treD_bas5 = adapter(bas5,[hscale]);
var treD_bas6 = adapter(bas6,[hscale]);
var treD_bas7 = adapter(bas7,[hscale]);
var treD_bas8 = adapter(bas8,[hscale]);
var treD_bas9 = adapter(bas9,[0.3]);
var treD_bas10 = adapter(bas10,[0.3]);

var h2op1 = adapter(bas9,[-0.3,0.1]);
var h2op2 = adapter(bas10,[-0.3,0.1]);

var water = STRUCT([h2op1,h2op2]);

COLOR(simplexn.vector.scalarMul( 1 , [1,2,3]))(water);

DRAW(water);

var basamento = STRUCT([treD_bas1,treD_bas2,treD_bas3,treD_bas4,treD_bas5,
	treD_bas6,treD_bas7,treD_bas8,treD_bas9,treD_bas10]);

COLOR(simplexn.vector.scalarMul( 1/255 , [245, 222 ,179]))(basamento);

DRAW(basamento);

var p_muro2 = [[7.6,15],[7.6,15.2],[26.6,15.2],[26.6,15],[7.6,15]];
var p_muro3 = [[25.2,7.2],[25.2,7.4],[33.8,7.4],[33.8,7.2],[25.2,7.2]];
var p_muro4 = [[37.2,11.4],[37.2,11.6],[42.6,11.6],[42.6,11.4],[37.2,11.4]];

var treD_muro1 = STRUCT([SIMPLEX_GRID([[-0.8,7.2],[-0.8,0.2],[-0.7,2.4]]),
                                SIMPLEX_GRID([[-0.8,0.2],[-1,21.2],[3.1]]),
                                SIMPLEX_GRID([[-1,8.2],[-22,0.2],[3.1]]),
                                SIMPLEX_GRID([[-9,0.2],[-16.8,5.2],[3.1]])]);
var treD_muro2 = adapter(p_muro2,[-hscale,2.4]);
var treD_muro3 = adapter(p_muro3,[-hscale,2.4]);
var treD_muro4 = adapter(p_muro4,[-hscale,2.4]);
var treD_muro5 = STRUCT([SIMPLEX_GRID([[-37.8,13.2],[-16,0.2],[3.1]]),
                                 SIMPLEX_GRID([[-51,0.2],[-5,11.2],[3.1]]),
                                 SIMPLEX_GRID([[-41.4,9.8],[-4.8,0.2],[-0.7,2.4]])]);

var muri = STRUCT([treD_muro1,treD_muro2,treD_muro3,treD_muro4,treD_muro5]);

COLOR(simplexn.vector.scalarMul( 1/255 , [248-15 ,248-15, 255-15]))(muri);

DRAW(muri);


var lunghezza_scale = 38.9 - 36.4;
var lung_scala = lunghezza_scale/7;
var scala = []; //perfetto

for (var i = 0; i < 7; i++) {
	scala[i] = adapter([[36.4+lung_scala*i,1],[36.4+lung_scala*i,4],
	[36.4+lung_scala*(i+1),4],[36.4+lung_scala*(i+1),1],[36.4+lung_scala*(i),1]],[hscala*(7-(i+1))]);
};

var scale = STRUCT([scala[0],scala[1],scala[2],scala[3],scala[4],scala[5],scala[6]]);
COLOR(simplexn.vector.scalarMul( 1/255 , [245, 222 ,179]))(scale);
DRAW(scale);


var p_divisorio1 = [[1,16.9],[1,17],[7.1,17],[7.1,16.9],[1,16.9]];
var p_divisorio2 = [[4.95,17],[4.95,19.1],[5.05,19.1],[5.05,17],[4.95,17]];
var p_divisorio3 = [[4.95,19.9],[4.95,22],[5.05,22],[5.05,19.9],[4.95,19.9]];
var p_divisorio4 = [[5.05,20.7],[5.05,20.8],[5.8,20.8],[5.8,20.7],[5.05,20.7]];
var p_divisorio5 = [[6.6,20.7],[6.6,20.8],[9,20.8],[9,20.7],[6.6,20.7]];
var p_divisorio6 = [[6.95,21.6],[6.95,22],[7.05,22],[7.05,21.6],[6.95,21.6]];
var p_divisorio7 = [[7.9,16.9],[7.9,17],[9,17],[9,16.9],[7.9,16.9]];

var treD_divisorio1 = adapter(p_divisorio1,[-hscale,2.4])
var treD_divisorio2 = adapter(p_divisorio2,[-hscale,2.4])
var treD_divisorio3 = adapter(p_divisorio3,[-hscale,2.4])
var treD_divisorio4 = adapter(p_divisorio4,[-hscale,2.4])
var treD_divisorio5 = adapter(p_divisorio5,[-hscale,2.4])
var treD_divisorio6 = adapter(p_divisorio6,[-hscale,2.4])
var treD_divisorio7 = adapter(p_divisorio7,[-hscale,2.4])
var divisori = STRUCT([treD_divisorio1,treD_divisorio2,treD_divisorio3,treD_divisorio4,treD_divisorio5,treD_divisorio6,treD_divisorio7]);
COLOR(simplexn.vector.scalarMul( 1 , [0.25,0.15,0.15]))(divisori);
DRAW(divisori);

//Costruzione colonne
var colonna = [];
var parte_colonnaorizz = [];
var parte_colonnavert = [];
//dx=distanza sull' asse x di una colonna dall' altra
//dx=distanza sull' asse x di una colonna dall' altra
//la colonna è a forma di + e ha ogni lato da 0.1m
dx = 19/3;
dy = 7;
for (var i = 0; i < 4; i++) {
	colonna[i] = new Array(2);
	parte_colonnaorizz[i] = new Array(2);
	parte_colonnavert[i] = new Array(2);
	for (var j = 0; j < 2; j++) {
		colonna[i][j] = new Array(12);
		parte_colonnaorizz[i][j] = new Array(1);
		parte_colonnavert[i][j] = new Array(1);
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
		parte_colonnaorizz[i][j] = SIMPLEX_GRID([[-p3[0],0.3],[-p3[1],0.1],[-0.7,2.4]]);
		parte_colonnavert[i][j] = SIMPLEX_GRID([[-p1[0],0.1],[-p1[1],0.3],[-0.7,2.4]]);
	};
};

var colonne = STRUCT([parte_colonnaorizz[0][0],parte_colonnaorizz[0][1],parte_colonnaorizz[1][0],parte_colonnaorizz[1][1],
					parte_colonnaorizz[2][0],parte_colonnaorizz[2][1],parte_colonnaorizz[3][0],parte_colonnaorizz[3][1],
					parte_colonnavert[0][0],parte_colonnavert[0][1],parte_colonnavert[1][0],parte_colonnavert[1][1],
					parte_colonnavert[2][0],parte_colonnavert[2][1],parte_colonnavert[3][0],parte_colonnavert[3][1]
					]);
COLOR(simplexn.vector.scalarMul( 1 , [0.25,0.15,0.15]))(colonne);
DRAW(colonne);

lunghezzapanca= 15.4/7;
var panca = new Array(7);
for (var i = 0; i < 7; i++) {
	panca[i] = new Array(5);
	panca[i] = adapter([[7.8+lunghezzapanca*(i),14.2],[7.8+lunghezzapanca*(i),14.2+0.5],
				[7.8+lunghezzapanca*(i+1),14.2+0.5],[7.8+lunghezzapanca*(i+1),14.2],[7.8,14.2]],[-hscale,-0.4,0.1]);
};
var sedilepanche = STRUCT([panca[0],panca[1],panca[2],panca[3],panca[4],panca[5],panca[6]]);

var piede_prot = SIMPLEX_GRID([[0.4],[0.4],[-hscale,0.4]]);
var piede = new Array(8);
for (var i = 0; i < 8; i++) {
	piede[i] = T([0,1])([7.8+((15.4-3.2)/7+0.4)*i,14.2])(piede_prot);
};

var piedipanche = STRUCT([piede[0],piede[1],piede[2],piede[3],piede[4],piede[5],piede[6],piede[7]]);

var panche = STRUCT([sedilepanche,piedipanche]);
COLOR(simplexn.vector.scalarMul( 1/255 , [248 ,248, 255]))(panche);
DRAW(panche);


var mostrina1 = STRUCT([SIMPLEX_GRID([[-30,3.8,3.8,3.8],[-4.9,0.1],[-0.7,0.1,-2.2,0.1]]),
                                SIMPLEX_GRID([[-30,0.1,-3.65,0.1,-3.7,0.1,-3.65,0.1],[-4.9,0.1],[-0.8,2.2]])]);
var vetri1 = SIMPLEX_GRID([[-30.1,3.65,-0.1,3.7,-0.1,3.65],[-4.94,0.02],[-0.8,2.2]]);

var mostrina2 = STRUCT([SIMPLEX_GRID([[-30,1,1,1,1,1,1,1,1,1,1],[-13.6,0.1],[-0.7,0.1,-2.2,0.1]]),
                                 SIMPLEX_GRID([[-30,0.1,-0.85,0.1,-0.9,0.1,-0.9,0.1,-0.9,0.1,-0.9,0.1,-0.9,0.1,-0.9,0.1,-0.9,0.1,-0.9,0.1,-0.85,0.1],[-13.6,0.1],[-0.8,2.2]])]);
var vetri2 = SIMPLEX_GRID([[-30.1,0.85,-0.1,0.9,-0.1,0.9,-0.1,0.9,-0.1,0.9,-0.1,0.9,-0.1,0.9,-0.1,0.9,-0.1,0.9,-0.1,0.85],[-13.64,0.02],[-0.8,2.2]]);

var mostrina3 = STRUCT([SIMPLEX_GRID([[-30.9,0.1],[-7.4,3.1,3.1],[-0.7,0.1,-2.2,0.1]]),
                     	SIMPLEX_GRID([[-30.9,0.1],[-7.4,0.1,-2.95,0.1,-2.95,0.1],[-0.8,2.2]])]);
var vetri3 = SIMPLEX_GRID([[-30.94,0.02],[-7.5,2.95,-0.1,2.95],[-0.8,2.2]]);

var mostrina5 = STRUCT([SIMPLEX_GRID([[-44.65,0.1],[-6.75,7.5],[-0.7,0.1,-2.2,0.1]]),
                                SIMPLEX_GRID([[-44.65,0.1],[-6.75,0.1,-(7.5/8-0.15),0.1,-(7.5/8-0.1),0.1,-(7.5/8-0.1),0.1,-(7.5/8-0.1),0.1,-(7.5/8-0.1),0.1,-(7.5/8-0.1),0.1,-(7.5/8-0.1),0.1,-(7.5/8-0.15),0.1],[-0.8,2.2]])]);
var vetri5 = SIMPLEX_GRID([[-44.69,0.02],[-6.85,(7.5/8-0.15),-0.1,(7.5/8-0.1),-0.1,(7.5/8-0.1),-0.1,(7.5/8-0.1),-0.1,(7.5/8-0.1),-0.1,(7.5/8-0.1),-0.1,(7.5/8-0.1),-0.1,(7.5/8-0.15)],
                                       [-0.8,2.2]]);
//var vetrate = STRUCT([mostrina1,vetri1,mostrina2,vetri2,mostrina5,vetri5,
//                      mostrina3,vetri3,T([0])([1])(mostrina3)]);

var mostrine = STRUCT([mostrina1,mostrina2,mostrina5,
                      mostrina3,T([0])([1])(mostrina3),T([0])([1])(vetri3)]);
var vetri = STRUCT([vetri1,vetri2,vetri5,
                      vetri3,T([0])([1])(vetri3)]);

COLOR(simplexn.vector.scalarMul( 1 , [0.25,0.15,0.15]))(mostrine);
COLOR(simplexn.vector.scalarMul( 1 , [1,2,3]))(vetri);
var vetrate = STRUCT([mostrine,vetri]);
DRAW(vetrate);

var tetto1_1 = SIMPLEX_GRID([[-24,47-24],[-4,7.4-4],[-0.7-2.4,0.2]]);
var tetto1_2 = SIMPLEX_GRID([[-24,31-24,-(31.9-31),47-31.9],[-7.4,13.6-7.4],[-0.7-2.4,0.2]]);
var tetto1_3 = SIMPLEX_GRID([[-24,47-24],[-13.6,17-13.6],[-0.7-2.4,0.2]]);


var tetto2 = SIMPLEX_GRID([[-0.2,9.8-0.2],[-13.2,22.8-13.2],[-0.7-2.4,0.2]]);

var tetti = STRUCT([tetto1_1,tetto1_2,tetto1_3,tetto2]);
COLOR(simplexn.vector.scalarMul( 1/255 , [248 ,248, 255]))(tetti);
DRAW(tetti);