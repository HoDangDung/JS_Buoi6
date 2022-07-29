function ketQua() {
    let n = 0;
    for (let i = 1; i <= 141; i++) {
        n+=i;
    }
    document.getElementById('ketQua').innerHTML = n;
    console.log(n);
}
