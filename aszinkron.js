export function getAdat(vegpont, callback) {
  //alapszerkezet
  fetch(vegpont, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
}
/* ALAP UTASÍTÁS SOR - elágazás*/
/* fetch(vegpont).then(válasz).then(adat).catch(hiba); */

export function postAdat(vegpont, adat) {
  //alapszerkezet
  fetch(vegpont, {
    method: "POST",
    body: JSON.stringify(
      adat
    ) /*adat objektumokat átalakítha json szöveggé és ez fog átmenni a hálózaton */,
  })
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
}

export function deletAdat(vegpont, id) {
  //alapszerkezet
  fetch(vegpont + "/" + id, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
}


export function putAdat(vegpont, id) {
    //alapszerkezet
    fetch(vegpont + "/" + id, {
      method: "PUT",
      body: JSON.stringify(
        adat
      )
    })
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => console.log(error));
  }
