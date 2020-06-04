/**
 * Comversion de unidades (metros,pies,yardas,pulgadas)
 * @method conversor
 * @param {string} id - el id de los inputs de metros yardas pies o pulgadas
 * @param {number} valor - El valor de cada input mencionado
 * @return
 */


function conversor(id, valor) {
    var metro, yarda, pulgada, pie;

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
    document.getElementsByName("sum_total")[0].value = Number(num1) + Number(num2);
}

function calcular_res() {
    var num1, num2;
    num1 = document.getElementsByName("res_num1")[0].value;
    num2 = document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].value = Number(num1) - Number(num2);
}

function calcular_mul() {
    var num1, num2;
    num1 = document.getElementsByName("mul_num1")[0].value;
    num2 = document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].value = Number(num1) * Number(num2);
}

function calcular_div() {
    var num1, num2;
    num1 = document.getElementsByName("div_num1")[0].value;
    num2 = document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].value = Number(num1) / Number(num2);
}