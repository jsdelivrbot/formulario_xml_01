var form1 = null;
var fe = null;
var getValuesF = null;
var select1=null;
var solselect1=["0","1","5"]
window.onload = function () {

    form1 = document.getElementById("selector1");
    fe = document.getElementById('myForm');
    fe.onsubmit = function () {
        message();
        return false;
    }
    console.log((fe.length)-1);
    document.getElementById('enviar').onclick = function () {
        // primer select
        select1=document.getElementsByTagName('select')[0];
        console.log(getSelectValues(select1,solselect1));
        
        return false;
    }
    
}

// function getSelectValues(select,solutions) {
//     var result = [];
//     var options = select.options;
//     var opt;
//     var aux=0;
//     var aux2=null;
  
//     for (var i=0;i<options.length; i++) {
//       opt = options[i];
  
//       if (opt.selected) {
//         result.push(opt.value);
//         console.log(result)
//       }
//     }

//     for (var j = 0; j < result.length; j++) {
//         if (solutions.indexOf(result[j]) != -1){
//             aux2+=result[j]+' es correcto';
//         }else{
//             aux2+=result[j]+' es incorrecto';
//         }
//     }
//     alert(aux2);
//     return result;
// }

function getSelectValues(select,solutions) {
    var result = [[],[]];
    var options = select.options;
    var opt;
    var aux=0;
    var aux2=null;
  
    for (var i=0;i<options.length; i++) {
      opt = options[i];
  
      if (opt.selected) {
        result[0].push(opt.value);
      }
    }
    console.log(result);
    return result;
}