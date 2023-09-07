export let inputx = document.getElementById("exampleFormControlInput1")
import {data } from "./object.mjs"

export let cont = document.getElementById("cari")
cont.addEventListener("click",()=>{
data.film(inputx.value)
})


