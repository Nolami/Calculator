function perSqr() {
    const a = parseFloat(document.getElementById("side").value)

    const res = a*4

    document.getElementById('circsqrres').innerText = `${res}`
}
function pyth() {
    const sideA = parseFloat(document.getElementById("sidepy").value)
    const sideB = parseFloat(document.getElementById("sidepy2").value)

    const hypot = hypo(sideA, sideB);

    document.getElementById('respy').innerText = `${hypot}`
}
function hypo(a, b) {
    const asq = a*a;
    const bsq = b*b;
    const sum = asq + bsq;
    const hypo = Math.sqrt(sum)
    return hypo;
}
function pow(a, b) {
    return Math.pow(a,b)
}
function sqrArea() {
    const a = parseFloat(document.getElementById("sideA").value)

    const res = sqr(a, 2)
    
    document.getElementById('sqrAreaRes').innerText = `${res}`
}
function sqrCube() {
    const a = parseFloat(document.getElementById('sider').value)

    const res = pow(a, 3)

    document.getElementById('sqrCubeRes').innerText = `${res}`
}
function sqrDigLength() {
    const a = parseFloat(document.getElementById('a').value)

    if (isNaN(a) || a <= 0) {
        document.getElementById('sqrDigLengthRes').innerText = `Enter a valid number`
    }

    const res = a * Math.sqrt(2)

    document.getElementById('sqrDigLengthRes').innerText = `${res}`
}
function DigAr() {
    const diagonal = parseFloat(document.getElementById('digar').value)

    if (isNaN(diagonal) || diagonal <= 0) {
        document.getElementById('sqrDigAreaRes').innerText = 'Please input a valid number'
        return;
    }

    const area = pow(diagonal, 2) / 2;

    document.getElementById('sqrDigAreaRes').innerText = `${area}`
}
function circum() {
    const a = parseFloat(getElementById('sqrcircum').value)

    if(isNaN(a) || a <= 0) {
        document.getElementById('sqrCircumRes').innerText = `input a valid number`
        return;
    }

    const res = a / 2;

    document.getElementById('sqrCircumRes').innerText = `${res}`
}
function inc() {
    const a = parseFloat(getElementById('sqrincircle').value)

    if(isNaN(a) || a <= 0) {
        document.getElementById('sqrincleRes').innerText = `input a valid number`
        return;
    }

    const res = a / 2;

    document.getElementById('sqrincRes').innerText = `${res}`
}