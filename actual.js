function ad() {

    const num1 = parseFloat(document.getElementById('numad1').value)
    const num2 = parseFloat(document.getElementById('numad2').value)

    const result = num1 + num2

    document.getElementById('resadd').innerText = `${result}`
}
function sub() {

    const num1 = parseFloat(document.getElementById('numsub1').value)
    const num2 = parseFloat(document.getElementById('numsub2').value)

    const result = num1 - num2

    document.getElementById('ressub').innerText = `${result}`
}
function mult() {

    const num1 = parseFloat(document.getElementById('nummult1').value)
    const num2 = parseFloat(document.getElementById('nummult2').value)
    const times = parseInt(document.getElementById('multtimes').times)

    let result = num1

    for (let i = 0; i < times; i++) {
        result *= num2
    }

    document.getElementById('resmult').innerText = `${result}`
}

function ad() {

    const num1 = parseFloat(document.getElementById('numdiv1').value)
    const num2 = parseFloat(document.getElementById('numdiv2').value)
    const times = parseInt(document.getElementById('divtimes').times)

    let result = num1

    for (let i = 0; i < times; i++) {
        result /= num2
    }

    document.getElementById('resdiv').innerText = `${result}`
}