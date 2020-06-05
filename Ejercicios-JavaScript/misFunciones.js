/**
 * Comversion de unidades (metros,pies,yardas,pulgadas)
 * @method conversor
 * @param {string} id - el id de los inputs de metros yardas pies o pulgadas
 * @param {number} valor - El valor de cada input mencionado
 * @return
 */


function conversor(id, valor) {
    var metro, yarda, pulgada, pie;

    if (valor.includes(",")){
        valor = valor.replace(",",".");

    }


    if (isNaN(valor)){
        alert('Se ingreso un valor no numerico')
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    } else if (id=="metro"){
        metro = valor;
        pulgada = 39.3701*valor;
        pie = 3.28048*valor;
        yarda = 1.09361*valor;
    } else if (id=="pulgada"){
        pulgada = valor;
        metro = 0.0254*valor;
        pie = 0.0833333*valor;
        yarda = 0.0277778*valor;
    } else if (id=="pie"){
        pie = valor;
        pulgada = 12*valor;
        metro = 0.3048*valor;
        yarda = 0.333333*valor;
    } else if (id=="yarda"){
        yarda = valor;
        pulgada = 36*valor;
        pie = 3*valor;
        metro = 0.9144*valor;
    }

    document.form_unidades.unid_yarda.value = Math.round(yarda*100)/100;
    document.form_unidades.unid_metro.value = Math.round(metro*100)/100;
    document.form_unidades.unid_pie.value = Math.round(pie*100)/100;
    document.form_unidades.unid_pulgada.value = Math.round(pulgada*100)/100;

}

/**
 * Comversion de unidades (grados a radianes)
 * @method conRad
 * @param {string} id - el id de los inputs de grado o radian
 * @return
 */

function conRad(id) {

    var grad, rad;
    if (id=="grados") {
         grad = document.getElementById("grados").value;
         rad = (grad*Math.PI)/180;
    } else if (id=="radianes") {
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }

    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;

}





function mostrar_ocultar (valorMO) {

    if (valorMO=="val_mostrar") {

            document.getElementById("divMO").style.display = "block"

    } else if (valorMO=="val_ocultar") {

            document.getElementById("divMO").style.display = "none"

    }




}



function calcular_suma() {
    var num1, num2;
    num1 = document.getElementsByName("sum_num1")[0].value;
    num2 = document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML = Number(num1) + Number(num2);
}

function calcular_res() {
    var num1, num2;
    num1 = document.getElementsByName("res_num1")[0].value;
    num2 = document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].innerHTML = Number(num1) - Number(num2);
}

function calcular_mul() {
    var num1, num2;
    num1 = document.getElementsByName("mul_num1")[0].value;
    num2 = document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML = Number(num1) * Number(num2);
}

function calcular_div() {
    var num1, num2;
    num1 = document.getElementsByName("div_num1")[0].value;
    num2 = document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML = Number(num1) / Number(num2);
}

function cargarWeb() {

    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);

}

function cargarRes() {

        var urlComp, can, un;

        urlComp = window.location.href.split("/")[5];

        cant = urlComp.split("#")[1];

        un = urlComp.split("#")[2];

        document.getElementById("dist").value = can + " " + un;
}

function dibujarCirCuad() {

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xMax = canvas.width;
    var yMax = canvas.height;
    ctx.fillStyle = "#333899";
    var margen = 5;
    ctx.fillRect(margen,yMax-40-margen,40,40);

    ctx.arc(xMax/2,yMax/2,17,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#338922";
    ctx.fill();

}


function dibujar(event) {

    var canvas = document.getElementById("canvasPaint");
    var ctx = canvas.getContext ("2d");

    var posX = event.clientX;
    var posY = event.clientY;


    canvas.onmousedown = function() {bandera = true};
    canvas.onmouseup = function() {bandera = false};
    if(bandera){
        ctx.fillRect(posX,posY,5,5);
        ctx.fill;
    }

}

function limpiarCanvas(){
    var canvas = document.getElementById("canvasPaint");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

}


function dibujarCuadriculado(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var altMax = canvas.height;
    var anchoMax = canvas.width;


    ctx.beginPath();
    for (var i = 0;i<altMax;){
        ctx.moveTo(0  ,i);
        ctx.lineTo(anchoMax ,i);
        ctx.strokeStyle="#311818";
        ctx.stroke();

        i=i+20;


    }
    ctx.closePath();

    ctx.beginPath();
    for (var a = 0; a<anchoMax;) {

        ctx.moveTo(a  ,0);
        ctx.lineTo(a ,altMax);
        ctx.strokeStyle="#925649";
        ctx.stroke();




        a = a + 20;
    }
    ctx.closePath();


ctx.beginPath();

    ctx.moveTo(0  ,altMax/2);
    ctx.lineTo(anchoMax ,altMax/2);
    ctx.strokeStyle="#c4be50";
    ctx.stroke();
ctx.closePath();


ctx.beginPath();
    ctx.moveTo(anchoMax/2  ,0);
    ctx.lineTo(anchoMax/2 ,altMax/2);
    ctx.strokeStyle="#c4be50";
    ctx.stroke();
ctx.closePath();
}





function animarAuto(){

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

}

function dibujarImagen(posX, posY) {


    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = new Image;
    img.src = "images/auto.png";

    canvas.width = canvas.width;
    img.onload = function() {


        ctx.drawImage(img, posX, posY);


    };




}