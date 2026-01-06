// ===== DOM ELEMENTS =====
const inputEl = document.getElementById("input-text")
const btnEl = document.getElementById("btn-el")
const lengthEl = document.getElementById("converter1")
const volumeEl = document.getElementById("converter2")
const massEl = document.getElementById("converter3")

inputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        convertUnits()
    }})

// ===== BUTTON EVENT =====
btnEl.addEventListener("click", convertUnits)

// ===== MAIN CONTROLLER FUNCTION =====
function convertUnits() {
    const inputValue = parseFloat(inputEl.value)

    // Validate input
    if (isNaN(inputValue)) {
        alert("Please enter a valid number")
        return
    }
    localStorage.setItem("lastInput", inputValue)
    

    // Length
    const lengthResult = convertLength(inputValue)
    lengthEl.innerHTML = `
        <h2>Length (Meter / Feet)</h2>
        <p>${inputValue} meters = ${lengthResult.metersToFeet} feet</p>
        <p>${inputValue} feet = ${lengthResult.feetToMeters} meters</p>
    `

    // Volume
    const volumeResult = convertVolume(inputValue)
    volumeEl.innerHTML = `
        <h2>Volume (Liters / Gallons)</h2>
        <p>${inputValue} liters = ${volumeResult.litersToGallons} gallons</p>
        <p>${inputValue} gallons = ${volumeResult.gallonsToLiters} liters</p>
    `

    // Mass
    const massResult = convertMass(inputValue)
    massEl.innerHTML = `
        <h2>Mass (Kilograms / Pounds)</h2>
        <p>${inputValue} kilos = ${massResult.kilosToPounds} pounds</p>
        <p>${inputValue} pounds = ${massResult.poundsToKilos} kilos</p>
    `

    // Optional UX
    inputEl.value = ""
}

// ===== CONVERSION FUNCTIONS =====
function convertLength(num) {
    return {
        metersToFeet: (num * 3.28084).toFixed(2),
        feetToMeters: (num * 0.3048).toFixed(2)
    }
}

function convertVolume(num) {
    return {
        litersToGallons: (num * 0.264172).toFixed(2),
        gallonsToLiters: (num * 3.78541).toFixed(2)
    }
}

function convertMass(num) {
    return {
        kilosToPounds: (num * 2.20462).toFixed(2),
        poundsToKilos: (num * 0.453592).toFixed(2)
    }
}
const lastInput = localStorage.getItem("lastInput")
if (lastInput) {
    inputEl.value = lastInput
    convertUnits()
}




