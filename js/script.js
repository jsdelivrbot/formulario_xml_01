var form1 = null;
var fe = null;
var getValuesF = null;
var sol = [[],[0, 1, 5],[3,5]]
var totalQuestions = null;
var formTagName = null;
var resultado = [];
var valores = null;
window.onload = function () {
    fe = document.getElementById('myForm');
    totalQuestions = ((fe.length) - 1);
    fe.onsubmit = function () {
        for (i = 0; i < totalQuestions; i++) {
            resultado.push([])
            formTagName = fe[i].tagName;
            valores = fe[i].value;

            if (formTagName=='INPUT') {
                resultado[i].push(valores);
            } else if (formTagName=='SELECT') {
                getSelectValues(resultado[i],fe[i]);
            } else {
                alert('ERROR !!!');
            }
        }
        validar(resultado,sol);
        return false;
    }
}


function getSelectValues(resultadoI,select) {
    // var result = [];
    var options = select.options;
    var opt;
    var aux = 0;
    var aux2 = null;

    for (var i = 0; i < options.length; i++) {
        opt = options[i];

        if (opt.selected) {
            resultadoI.push(opt.value);
        }
    }
    return resultadoI;
}

function validar(val,sol){
    // recorre resultado
    for (i = 0; i < val.length; i++) {
        // recorre contenido resultado para sacar valores 1 a 1
        for (j = 0; j < val[i].length; j++) {
            console.log(val[i][j]);
        }
    }
}