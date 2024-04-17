import { emberekLISTA } from "./adat.js";
import { rendezNev, rendezKor, rendezNem } from "./adatkezelo.js";
import { htmlOsszeallit, megjelenit } from "./listaMegjelenit.js";
import { szures } from "./adatkezelo.js";
import { torol } from "./adatkezelo.js";
import { ujAdat } from "./urlapkezelo.js";
/*FELADAT SPECIFIKÁCIÓ
jelenítsük meg a listánkat egy táblázatban, majd a listát tudjuk rendezni pl név szerint, ha rákattintunk a táblázat fejlécére, akkor rendezze be a táblázat sorait
tudjunk szűrni név alapján, 
tudjunk uj adatot hozzáadni a táblázathoz
tudjuk törölni a táblázat egy sorát */
/* függvények és eljárások
1. htmlOsszeallit(lista)->txt | összeállítja a táblázat html szerkezetét egy szöveges vátozóba
2. megjelenit(txt) - | megjelenítette egy adott html elembe a paraméterébe kapott szöveget
3. rendez(lista)-> rendezettLista | a paraméterében kapott listát név szerint rendezi; a függvény akkor fut le, ha a táblázat név fejlécére kattintunk
4. adatHosszaadas(lista)-> kiegeszitettLista | összegyűjti az űrlapról az adatokat és összeállít belőlük egy objektumot, majd azt beleteszi a listába, a függvény akkor fut le, ha  rákattintunk a hozzáad submit gombra
5. torol(lista, id)-> kitörli a listából az adott id-ju elemet, akkor fog lefutni, ha a töröl gombot megnyomjuk
6. szures(lista, kereseoSzoveg)->szurtLista a keresőmezőbe beírt szöveget keresi a lista objektumainak név mezőjében., akkor fut le, ha beírunk valamit a keresőmezőbe
*/
let irany = 1; /* 1 = novekvő rendezés, -1 =  */
init(emberekLISTA);
export function init(lista) {
  megjelenit(htmlOsszeallit(lista));
  rendezEsemeny();
  szuresEsemeny();
  torolEsemeny();
}
rendezEsemeny();
function rendezEsemeny() {
  const nevELEM = $(".adatok table th").eq(0);
  const korELEM = $(".adatok table th").eq(1);
  const nemELEM = $(".adatok table th").eq(2);
  console.log(rendezNev(emberekLISTA));
  nevELEM.on("click", function () {
    const rLISTA = rendezNev(emberekLISTA, irany);
    //console.log(rLISTA);
    init(rLISTA);
    irany *= -1;
  });
  korELEM.on("click", function () {
    const rLISTA = rendezKor(emberekLISTA, irany);
    //console.log(rLISTA);
    init(rLISTA);
    irany *= -1;
  });
  nemELEM.on("click", function () {
    const rLISTA = rendezNem(emberekLISTA, irany);
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
    const szLISTA = szures(emberekLISTA, kereseoSzoveg);
    //console.log(szLISTA);
    init(szLISTA);
  });
}
/* const szurtLISTA = szures(emberekLISTA, "je");
console.log(szurtLISTA); */

function torolEsemeny(){
  const torolGOMB = $(".torol");
torolGOMB.on("click", function (event) {
  let id = event.target.id;
  const LISTA = torol(emberekLISTA, id);
  init(LISTA)
});

}

ujAdat(emberekLISTA);
init(emberekLISTA)