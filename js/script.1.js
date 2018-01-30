var form1 = null;
var fe = null;
var getValuesF = null;
var select1=null;
var solselect1=[1,2]
window.onload = function () {

    form1 = document.getElementById("selector1");
    fe = document.getElementById('myForm');
    fe.onsubmit = function () {
        message();
        return false;
    }
    document.getElementById('enviar').onclick = function () {
        select1=document.getElementsByTagName('select')[0];

        console.log(getSelectValues(select1,solselect1));
        
        return false;
    }
    
}

function getSelectValues(select,solutions) {
    var result = [];
    var options = select && select.options;
    var opt;
    var aux=0;;
  
    for (var i=0;i<options.length; i++) {
      opt = options[i];
  
      if (opt.selected) {
        result.push(opt.value /*|| opt.text*/ );
      }
    }

    result.forEach(function(val) {
        if (solutions.indexOf(val)) {
            alert('Correcto');
        } else{
            alert('Falso');
        }
    });

    return result;
}