//dau vao
// so ngay
// 100000vnd/ngay
//xu ly
// so ngay * 100000vnd/ngay
// dau ra
// tongLuong
function calculateDate() {
    var soNgay = document.getElementById("date").value  ;
    var total = parseInt(soNgay) * 100000;
    // console.log((soNgay));
    document.getElementById("tongLuong").innerHTML = total +"vnd";
}
