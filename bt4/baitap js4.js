//dau vao
// canh a
// canh b
//xu ly
// canh a * canh b
// dau ra
// dien tich
function calculateDate() {
    var sideA = document.getElementById("sideA").value  ;
    var sideB = document.getElementById("sideB").value  ;

    var total = parseInt(sideA) * parseInt(sideB);
    var totalchuvi = (parseInt(sideA) + parseInt(sideB))*2;
    document.getElementById("dientich").innerHTML = "Area is " + total ;
    
    document.getElementById("chuvi").innerHTML = "Perimeter is " + totalchuvi;

}
