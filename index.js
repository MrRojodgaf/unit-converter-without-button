/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let numberEl = document.getElementById("number-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

/*
convertBtn.addEventListener("click", function() {
    lengthConverter(numberEl.value)
    volumeConverter(numberEl.value)
    massConverter(numberEl.value)
}) 
*/

function yes() {
    lengthConverter(numberEl.value)
    volumeConverter(numberEl.value)
    massConverter(numberEl.value)
}

function lengthConverter(val) {
    let value = val / 3.281
    let value2 = val * 3.281
    lengthEl.innerHTML = ` ${numberEl.value} meters = ${value2.toFixed(3)} feet | ${numberEl.value} feet = ${value.toFixed(3)} meters`
}

function volumeConverter(val) {
    let value = val / 0.264
    let value2 = val * 0.264
    volumeEl.innerHTML = ` ${numberEl.value} liters = ${value2.toFixed(3)} gallons | ${numberEl.value} gallons = ${value.toFixed(3)} liters `
}

function massConverter(val) {
    let value = val / 2.204
    let value2 = val * 2.204
    massEl.innerHTML = ` ${numberEl.value} kilos = ${value2.toFixed(3)} pounds | ${numberEl.value} pounds = ${value.toFixed(3)} kilos `
}