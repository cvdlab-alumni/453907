//BEZIER 2D QUINTO ORDINE
var handles = [[0,0],[1,2],[3,2],[3,0],[5,-1],[6,1]];
var domain = INTERVALS(1)(120);
var BEZMapping = BEZIER(S0)(handles);
var curve = MAP(BEZMapping)(domain);
DRAW(COLOR(1,0,0)(curve));

//BEZIER 3D QUINTO ORDINE
var handles = [[0,0,0],[1,2,1],[3,2,2],[3,0,3],[5,-1,-2],[6,1,-5]];
var domain = INTERVALS(1)(120); //IL DOMINIO DEVE ESSERE 1?
var BEZMapping = BEZIER(S0)(handles);
var curve = MAP(BEZMapping)(domain);
DRAW(COLOR(1,0,0)(curve));

//SPLINE (TRATTI DI CURVE DI PRIMO GRADO)
//CURVA A TRATTI: POSSO COGIUNGERE ANCHE CURVE DI ORDINE SUPERIORE,
//QUINDI NON PER FORZA TRATTI DI SEGMENTI

//SPLINE CARDINALE: SPLINE INTERPOLATRICE DI N+1PUNTI
var handles = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]]
var domain = INTERVALS(1)(20); //il dominio di cubic cardinal è sempre compreso tra 0 e 1
//SPLINE serve ad incollare tutti i tratti generati da 	CUBIC_CARDINAL
splineCardinal = SPLINE(CUBIC_CARDINAL(domain))(handles);
DRAW(splineCardinal);

//ALTRA PROVA DUPLICANDO PUNTI INIZIALI E FINALI
var handles2 = [[0,0],[0,0],[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3],[2,-3]]
var domain = INTERVALS(1)(20); //il dominio di cubic cardinal è sempre compreso tra 0 e 1
//SPLINE serve ad incollare tutti i tratti generati da 	CUBIC_CARDINAL
splineCardinal1 = SPLINE(CUBIC_CARDINAL(domain,0.1))(handles2);
splineCardinal2 = SPLINE(CUBIC_CARDINAL(domain,3))(handles2);
splineCardinal3 = SPLINE(CUBIC_CARDINAL(domain,3))(handles2);
DRAW(splineCardinal1); //SPEZZATA
DRAW(splineCardinal2);
DRAW(splineCardinal3);

/*
//SPLINE CARDINALE CUBICA: SERIE DI POLINOMI DI HERMITE CON TANGENTI SEMPRE CONTINUE
//ciò si realizza imponendo che la tangente sia parallela al versore differenza tra il 
//punto che viene dopo di pi e quello che viene prima
//equazione del tratto i-esimo di curva = 
ci(u) = U3 * Bh * [Pi , Pi+1 , h(Pi+1-Pi-1), h(pi+2-pi)]
U3 = base cubica di potenza
Bh = base di HERMITE
//scritto matricialmente: aggiungo la matrice di trasformazione da hermite a cardinale:
Bhc=[0,1,0,0]
	[0,0,1,0]
   [-h,0,h,0]
   [0,-h,0,h]
e quindi:
ci(u) = U3 * Bh * Bhc *[Pi-1 , Pi , Pi+1, pi+2]
aumentando h aumento la lunghezza dei versori tangenti, quindi per h>=3 ottengo 
un polinomio di bezier in pratica
*/