function tinh(){
    let n = document.getElementById("n").value*1,
    m = 1;
    for (let i = 1; i <= n; i++) {
        m = m * i;
        console.log(m);
        document.getElementById("tinh").innerHTML = "<p>Giai thừa: "+m+"</p>";
        document.getElementById("tinh").className = "bg-success card-footer text-white";
    }
}