function ad() {

    const num1 = parseFloat(document.getElementById('numad1').value)
    const num2 = parseFloat(document.getElementById('numad2').value)

    const result = num1 + num2

    document.getElementById('resadd').innerText = `Answer: ${result}`
}
function sub() {

    const num1 = parseFloat(document.getElementById('numsub1').value)
    const num2 = parseFloat(document.getElementById('numsub2').value)

    const result = num1 - num2

    document.getElementById('ressub').innerText = `Answer: ${result}`
}
function mult() {

    const num1 = parseFloat(document.getElementById('numult1').value)
    const num2 = parseFloat(document.getElementById('numult2').value)
    const times = parseInt(document.getElementById('multtimes').value)

    let result = num1

    for (let i = 0; i < times; i++) {
        result *= num2
    }

    document.getElementById('resmult').innerText = `Answer: ${result}`
}

function div() {

    const num1 = parseFloat(document.getElementById('numdiv1').value)
    const num2 = parseFloat(document.getElementById('numdiv2').value)
    const times = parseInt(document.getElementById('divtimes').value)

    let result = num1

    for (let i = 0; i < times; i++) {
        result /= num2
    }

    document.getElementById('resdiv').innerText = `Answer: ${result}`
}