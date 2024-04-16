export function rendezNev(lista, irany) {
  /* 3. rendez(lista)-> rendezettLista | a paraméterében kapott listát név szerint rendezi; */
  lista.sort(function (e1, e2) {
    /* név szerint */
    let eredmeny = 1;
    if (e1.nev < e2.nev) {
      eredmeny = -1;
    }
    return eredmeny * irany;
    /* visszater egy pozitiv vagy egy negativ szammal, ha negativ akkor felcseréli a két eelemet, ha pozitív nem */
  });
  return lista;
}
export function rendezKor(lista, irany) {
  /* 3. rendez(lista)-> rendezettLista | a paraméterében kapott listát név szerint rendezi; */
  lista.sort(function (e1, e2) {
    /* név szerint */
    let eredmeny = 1;
    if (e1.kor < e2.kor) {
      eredmeny = -1;
    }
    return eredmeny * irany;
    /* visszater egy pozitiv vagy egy negativ szammal, ha negativ akkor felcseréli a két eelemet, ha pozitív nem */
  });
  return lista;
}
export function rendezNem(lista, irany) {
  /* 3. rendez(lista)-> rendezettLista | a paraméterében kapott listát név szerint rendezi; */
  lista.sort(function (e1, e2) {
    /* név szerint */
    let eredmeny = 1;
    if (e1.nem < e2.nem) {
      eredmeny = -1;
    }
    return eredmeny * irany;
    /* visszater egy pozitiv vagy egy negativ szammal, ha negativ akkor felcseréli a két eelemet, ha pozitív nem */
  });
  return lista;
}
/* szorgalmi: írj egy olyan függvényt, ami az ékezetes betűket rendezés alatt kicseréli nem ékezetesre Á = A, É = E */

export function szures(lista, kereseoSzoveg) {
  /*  szures(lista, kereseoSzoveg)->szurtLista a keresőmezőbe beírt szöveget keresi a lista objektumainak név mezőjében., akkor fut le, ha beírunk valamit a keresőmezőbe */
  const szurtLISTA = lista.filter(function (ember) {
    for (let i = 0; i < lista.length; i++) {
      for (let j = 0; j < ember.nev.length; j++) {
        if(ember.nev[j] == "á"){
          ember.nev[j] == "a"
        }else if(ember.nev[j] == "é"){
          ember.nev[j] == "e"
        }else if(ember.nev[j] == "í"){
          ember.nev[j] == "i"
        }else if(ember.nev[j] == "ó" || ember.nev[j] == "ö" || ember.nev[j] == "ő"){
          ember.nev[j] == "o"
        }else if(ember.nev[j] == "ú" || ember.nev[j] == "ü" || ember.nev[j] == "ű"){
          ember.nev[j] == "u"
        }
      }
    }
    return ember.nev.toUpperCase().includes(kereseoSzoveg.toUpperCase());
  });
  return szurtLISTA;
}

export function torol(lista, id) {
  lista.splice(id, 1);
  return lista;
  /* splice adott indextől eltávolít annyit, amennyit akarunk, itt egyet */
}
