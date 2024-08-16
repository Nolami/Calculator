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
function perc() {
    const base = parseFloat(document.getElementById("per").value)
    const per = parseFloat(document.getElementById("per2").value)

    const res = (per / 100) * base;

    document.getElementById("resper").innerText = `${res}`
}
function percfind() {
    const total = parseFloat(document.getElementById("perc").value)
    const part = parseFloat(document.getElementById("perc2").value)

    const res = (part / total) * 100;

    document.getElementById("resperc").innerText = `${res}%`
}
function fracAdd() {
    const num1 = parseFloat(document.getElementById("fracnum1").value)
    const den1 = parseFloat(document.getElementById("fracden1").value)
    const num2 = parseFloat(document.getElementById("fracnum2").value)
    const den2 = parseFloat(document.getElementById("fracden2").value)

    const comden = den1 * den2

    const adj = num1 * den2
    const adj2 = num2 * den1

    const res = adj + adj2

    const gcd = greatestCommonDivisor(res, comden)
    const finnum = res / gcd
    const finden = comden / gcd

    document.getElementById("fracaddres").innerText = `${finnum}/${finden}`
}
function greatestCommonDivisor(a, b) {
    if (b === 0) return a;
    return greatestCommonDivisor(b, a % b)
}
function fracSub() {
    const num1 = parseFloat(document.getElementById("fracsnum1").value)
    const den1 = parseFloat(document.getElementById("fracsden1").value)
    const num2 = parseFloat(document.getElementById("fracsnum2").value)
    const den2 = parseFloat(document.getElementById("fracsden2").value)

    const comden = den1 * den2

    const adj = num1 * den2
    const adj2 = num2 * den1

    const res = adj - adj2

    const gcd = greatestCommonDivisor(res, comden)
    const finnum = res / gcd
    const finden = comden / gcd

    document.getElementById("fracsubres").innerText = `${finnum}/${finden}`
}