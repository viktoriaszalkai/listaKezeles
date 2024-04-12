# Listakezelő feladat
SPECIFIKÁCIÓ
jelenítsük meg a listánkat egy táblázatban, majd a listát tudjuk rendezni pl név szerint, ha rákattintunk a táblázat fejlécére, akkor rendezze be a táblázat sorait
tudjunk szűrni név alapján, 
tudjunk uj adatot hozzáadni a táblázathoz
tudjuk törölni a táblázat egy sorát 
## Metódusok
1. **htmlOsszeallit(lista)**->txt | összeállítja a táblázat html szerkezetét egy szöveges vátozóba
2. **megjelenit(txt)** - | megjelenítette egy adott html elembe a paraméterébe kapott szöveget
3. **rendez(lista)**-> rendezettLista | a paraméterében kapott listát név szerint rendezi; a függvény akkor fut le, ha a táblázat név fejlécére kattintunk
4. **adatHosszaadas(lista)**-> kiegeszitettLista | összegyűjti az űrlapról az adatokat és összeállít belőlük egy objektumot, majd azt beleteszi a listába, a függvény akkor fut le, ha  rákattintunk a hozzáad submit gombra
5. **torol(lista, id)**-> kitörli a listából az adott id-ju elemet, akkor fog lefutni, ha a töröl gombot megnyomjuk
6. **szures(lista, kereseoSzoveg)**->szurtLista a keresőmezőbe beírt szöveget keresi a lista objektumainak név mezőjében., akkor fut le, ha beírunk valamit a keresőmezőbe