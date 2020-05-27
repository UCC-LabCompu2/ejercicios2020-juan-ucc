/**
 * Created by Agus on 6/5/2017.
 */

function conversor(id, valor) {

    if (isNaN(valor)){
        alert('Se ingreso un valor no numerico')
        document.form_unidades.unid_metro.value = "";
        document.form_unidades.unid_pulgada.value = "";
        document.form_unidades.unid_pie.value = "";
        document.form_unidades.unid_yarda.value = "";
    } else if (id=="metro"){
        document.form_unidades.unid_pulgada.value = 39.3701*valor;
        document.form_unidades.unid_pie.value = 3.28048*valor;
        document.form_unidades.unid_yarda.value = 1.09361*valor;
    } else if (id=="pulgada"){
        document.form_unidades.unid_metro.value = 0.0254*valor;
        document.form_unidades.unid_pie.value = 0.0833333*valor;
        document.form_unidades.unid_yarda.value = 0.0277778*valor;
    } else if (id=="pie"){
        document.form_unidades.unid_pulgada.value = 12*valor;
        document.form_unidades.unid_metro.value = 0.3048*valor;
        document.form_unidades.unid_yarda.value = 0.333333*valor;
    } else if (id=="yarda"){
        document.form_unidades.unid_pulgada.value = 36*valor;
        document.form_unidades.unid_pie.value = 3*valor;
        document.form_unidades.unid_metro.value = 0.9144*valor;
    }

}



/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
