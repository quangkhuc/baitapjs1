//dau vao
// so co 2 chu so
//xu ly
// loai nhung so 3 chu so tro len
// tinh so hang chuc va hang don vi
// cong so hang chuc va hang don vi
// dau ra
// ket qua
function calculateDate() {
    var a = document.getElementById("date").value  ;
    if (a === "" || a > 100) {
        document.getElementById("tongLuong").innerHTML = "vui long nhap so < 100"    }
        else{
   
    var hangchuc = Math.floor(a % 100 / 10) ;
    var hangdonvi = Math.floor(a % 10);
    document.getElementById("tongLuong").innerHTML = hangchuc + hangdonvi;
}}


