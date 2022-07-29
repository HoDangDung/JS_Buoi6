function taoThe() {
    let chan = "", le = "", content = "";
    for (let i = 0; i <= 10; i++) {
        if (i % 2 === 0) {
            content += "<div class = 'card-footer bg-danger text-white'>";
            content += "<p>Div chẵn</p>"
            content += "</div>";
        } else {
            content += "<div class = 'card-footer bg-primary text-white'>";
            content += "<p>Div lẻ</p>"
            content += "</div>";
        }
        document.getElementById("taoThe").innerHTML = content;
    }
}