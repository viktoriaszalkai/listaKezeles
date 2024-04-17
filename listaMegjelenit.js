export function htmlOsszeallit(lista) {
  /* táblázatba */
  let txt = "<table class = 'table table-striped'>";
  txt += "<tr><th>Név</th><th>Kor</th><th>Nem</th></tr>";
  txt+="<tbody>"
  lista.forEach((element, index) => {
    txt+= `<tr>`;
    for (const key in element) {
      /* objektumokat jár be, elemement[key] = az adott elem értékét */
      //console.log("key:", key, element[key]);
    
    txt += `<td>${element[key]}</td>`;
    }
  txt += `<td class='torol' id = ${index}>🗑️</td>`;
    txt+= `</tr>`;
  });
  txt += "</tbody></table>";
  return txt;
}
export function megjelenit(txt) {
  const divADATOK = $(".adatok");
  divADATOK.html(txt);
}
