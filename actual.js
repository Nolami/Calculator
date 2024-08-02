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

function exp() {

    const num = parseFloat(document.getElementById('numex').value)
    const exp = parseInt(document.getElementById('exp').value)

    let result = 1

    if (exp === 0) {
        result = 1
    } else if (exp > 0) {
        for (let i = 0; i < exp; i++) {
            result *= num
        }
    } else {
        for (let i = 0; i < Math.abs(exp); i++) {
            result /= num
        }
    }

    

    document.getElementById('resexp').innerText = `Answer: ${result}`
}
function root() {
    const num = parseFloat(document.getElementById('numrt').value)
    const root = parseFloat(document.getElementById('rt').value)

    if (root === 0) {
        document.getElementById('resrt').innerText = `undefined`
        return;
    }

    let result;

    if (num < 0 && root % 2 === 0) {
        document.getElementById('resrt').innertext = `Negative root can't have a even number`
        return;
    }

    result = Math.pow(num, 1 / root);

    document.getElementById('resrt').innerText = `${result}`;
}