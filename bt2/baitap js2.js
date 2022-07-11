//dau vao
// gia tri 5 so
// xu ly
// cong 5 so roi chi 5
// day ra
//ket qua
function calculate(){
    var a = document.getElementById("so-thuc1").value;
    var b = document.getElementById("so-thuc2").value;
    var c = document.getElementById("so-thuc3").value;
    var d = document.getElementById("so-thuc4").value;
    var e = document.getElementById("so-thuc5").value;

    var total = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e);
    document.getElementById("result").innerHTML = total/5; 

}