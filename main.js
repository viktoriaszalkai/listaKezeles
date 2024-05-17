//import { emberekLISTA } from "./adat.js";
import { rendezNev, rendezKor, rendezNem } from "./adatkezelo.js";
import { htmlOsszeallit, megjelenit } from "./listaMegjelenit.js";
import { szures } from "./adatkezelo.js";
import { torol } from "./adatkezelo.js";
import { adatokListaba } from "./urlapkezelo.js";
import { deletAdat, getAdat } from "./aszinkron.js";

getAdat("http://localhost:3000/emberekLISTA", init); //meghívjuka get adat metódust a json file a paraméter

let irany = 1; /* 1 = novekvő rendezés, -1 =  */
/* init(emberekLISTA); */
export function init(lista) {
  megjelenit(htmlOsszeallit(lista));
  rendezEsemeny(lista);
  szuresEsemeny(lista);
  torolEsemeny(lista);
  adatokListaba(lista);
}
rendezEsemeny();
function rendezEsemeny() {
  const nevELEM = $(".adatok table th").eq(0);
  const korELEM = $(".adatok table th").eq(1);
  const nemELEM = $(".adatok table th").eq(2);
  nevELEM.on("click", function () {
    const rLISTA = rendezNev(lista, irany);
    //console.log(rLISTA);
    init(rLISTA);
    irany *= -1;
  });
  korELEM.on("click", function () {
    const rLISTA = rendezKor(lista, irany);
    //console.log(rLISTA);
    init(rLISTA);
    irany *= -1;
  });
  nemELEM.on("click", function () {
    const rLISTA = rendezNem(lista, irany);
    console.log(rLISTA);
    init(rLISTA);
    irany *= -1;
  });
}
/* szorgalmi: további mezők szerinti rendezések megvalósítása */
function szuresEsemeny() {
  const keresoELEM = $("#szuro");
  keresoELEM.on("keyup", function () {
    let kereseoSzoveg = keresoELEM.val();
    const szLISTA = szures(lista, kereseoSzoveg);
    //console.log(szLISTA);
    init(szLISTA);
  });
}
/* const szurtLISTA = szures(emberekLISTA, "je");
console.log(szurtLISTA); */

function torolEsemeny() {
  const torolGOMB = $(".torol");
  torolGOMB.on("click", function (event) {
    let id = event.target.id;
    /* const LISTA = torol(lista, id);
    init(LISTA); */
    deletAdat("http://localhost:3000/emberekLISTA", id);
  });
}
