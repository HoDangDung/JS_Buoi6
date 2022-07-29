function tinhTong(){
    let x = +document.getElementById("x").value,
    n = +document.getElementById("n").value,
    sum = 0;
    sumLoop(x, n, sum);
    document.getElementById("tinhTong").innerHTML = sumLoop(x, n, sum);
    document.getElementById("tinhTong").className = "bg-success card-footer text-white"
}

function sumLoop(x,n,sum) {
    for (let i = 1; i <= n ; i++) {
        sum += Math.pow(x,i);
        console.log(x+"^"+i+"+"+"="+sum);
    }
    return("Tổng: " + sum);
}