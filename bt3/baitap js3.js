//dau vao
// so tien usd
// 23500vnd/usd
//xu ly
// so tien und * 23500vnd/usd
// dau ra
// tong tien
function calculateDate() {
    var soNgay = document.getElementById("date").value  ;
    var total = parseInt(soNgay) * 23500;
    // console.log((soNgay));
    document.getElementById("tongLuong").innerHTML = total +"vnd";
}
