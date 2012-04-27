console.log('test');
/*
var load = function (id, n) {
  var url = "https://raw.github.com/cvdlab-cg/" + id 
    + "/master/2012-04-03/exercise" + n + ".js";

  var script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);

  return url;
};


var c = CUBOID([1,2,3]);
DRAW(c);

*/


var poly1 = POLYLINE([[0,0],[9,0],[9,3],[8,3],[8,1],[5,1],[5,3],[4,3],[4,1],[1,1],[1,3],[0,3],[0,0]]);
//DRAW(poly1);
var poly2 = POLYLINE([[0,7],[9,7],[9,4],[8,4],[8,6],[5,6],[5,4],[4,4],[4,6],[1,6],[1,4],[0,4],[0,7]]);
//DRAW(poly2);
var p1=EXTRUDE([3])(poly1);
var p2=EXTRUDE([3])(poly2);
DRAW(COLOR([1,2,3,0.7])(p1));
DRAW(COLOR([1,2,3,0.7])(p2));

//volendo disegnare un cuboide senza visualizzare i bordi dei tetraedri che
//lo compongono, uso BOUNDARY

var tetto = T([2])([3])(BOUNDARY(CUBOID([9,7,1])));
DRAW(COLOR([1,2,3,0.7])(tetto));