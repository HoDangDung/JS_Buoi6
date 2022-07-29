function ketQua() {
    let sum = 0;
    for (let i = 1; sum < 10000; i++) {
        sum += i;
        document.getElementById('ketQua').innerHTML = "<p>Số nguyên dương nhỏ nhất: "+i+"</p>";
        document.getElementById('ketQua').className = "bg-success card-footer text-white";
    }
}
