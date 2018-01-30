window.onload = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            gestionarXml(this);
        }
    };
    xhttp.open("GET", "https://rawgit.com/godoymario95/formulario_xml_01/master/data/xml/questions2.xml", true);
    xhttp.send();

    function gestionarXml(dadesXml) {
        var xmlDoc = dadesXml.responseXML;

        var inputQuestion = xmlDoc.getElementsByTagName("question")[0].innerHTML;
        ponerDatosInputHtml(inputQuestion);
        inputSolucion = parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);
    }

    function ponerDatosInputHtml(t) {
        document.getElementById("inputQuestion").innerHTML = t;
    }
}