function circSqr() {
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
function sqrArea() {
    const a = parseFloat(document.getElementById("sideA").value)

    const res = a*a
    
    document.getElementById('sqrAreaRes').innerText = `${res}`
}