/* Az űrlapról összegűjtük az adatokat a submit gombra kattintva */

import { init } from "./main.js"

export function ujAdat(lista){
    const nevElem=$("#nev")
    const korElem=$("#kor")
    const nemElem = $("input[name = 'nem']:checked")
    const submitElem=$("#submit")

    const adatOBJ={
        nev:"",
        kor:0,
        nem:false,
    }
    submitElem.on("click", function(event){
        event.preventDefault();/* leszedi az alapértelmezett hozzárendelt eseményt */
        adatOBJ.nev=nevElem.val()
        adatOBJ.kor=Number(korElem.val())
        adatOBJ.nem = (nemElem.val() === "true" ? true: false)
        //adatOBJ.nem=ferfiElem.isChecked()
        console.log(adatOBJ)
        
        const validElem =$(".valid-feedback")
        const nevValide = validElem.eq(0).css("display")!=="none"
        const korValide = validElem.eq(1).css("display")!=="none"

        console.log(nevValide,korValide)
        if(nevValide && korValide){
            lista.push(adatOBJ)
            init(lista)
        }else{
            console.log("hibás adatok")
        }

    })
}