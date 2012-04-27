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


//Curva di Hermite cubica
//punto iniziale e finale
var c0= [1,0];
var c1= [1,1];
//tangente iniziale e finale
var tan0= [1,0];
var tan1= [1,1];
//dominio di lunghezza 1 diviso in venti parti
var domain = INTERVALS(1)(20);
var inputs = [c0,c1,tan0,tan1];
var hermMapping = CUBIC_HERMITE(S0)(inputs);
var curve = MAP(hermMapping)(domain);
DRAW(COLOR(1,0,0)(curve));