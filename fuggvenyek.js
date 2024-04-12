import { emberekLISTA } from "./adat.js";
/* függvény/metódus : működik a hoisting- a deklaréció a hatóköre tetejére kerül, mindegy hogy hol hívom meg a függvényt */
function kiir(lista) {
    for (let index = 0; index < lista.length; index++) {
      const element = lista[index];
      console.log(element);
      console.log(lista[index]);
    }
  }
  kiir(emberekLISTA);
  /* függvény kifejezés : nem működik a hoisting, csak inicializálás után lehet meghívni*/
  const kiir2 = function (lista) {
    for (let index = 0; index < lista.length; index++) {
      const element = lista[index];
      console.log(element);
      console.log(lista[index]);
    }
  };
  kiir2(emberekLISTA);
  
  function kiir3(lista) {
    console.log("forEach");
    lista.forEach((element) => {
      console.log(element);
    });
  }
  /* csak listán használható, minden egyes elemén végigmegy a listának, bejárka a listát */
  kiir3(emberekLISTA);
  
  /* 20 évnél idősebbek listázása */
  
  function idodebb20(lista) {
    const idodebb20LISTA = lista.filter(function (ember) {
      return ember.kor > 20;
    });
    console.log(idodebb20LISTA);
  }
  idodebb20(emberekLISTA);
  
  /* férfiak */
  function ferfiak(lista) {
    const ferfiakLISTA = lista.filter(function (ember) {
      return ember.nem;
    });
    console.log(ferfiakLISTA);
  }
  ferfiak(emberekLISTA);
  
  function ferfiak20Alatt(lista) {
    const ferfiakLISTA = lista.filter(function (ember) {
      return ember.nem && ember.kor < 20;
    });
    console.log(ferfiakLISTA);
  }
  ferfiak20Alatt(emberekLISTA);
  
  /* lista rendezése kor szerint */
  
  function rendez(lista) {
    console.log("RENDEZÉS************");
    lista.sort(function (e1, e2) {
      console.log(e1.kor, e2.kor, e2.kor - e1.kor);
      return e2.kor - e1.kor;
    });
    console.log(lista);
  }
  rendez(emberekLISTA);
  
  function rendezVeletlen(lista) {
      console.log("véletle sorrend************");
      lista.sort(function () {
        return Math.random()-0,5;
        
      });
      console.log(lista);
    }
    rendezVeletlen(emberekLISTA);
    