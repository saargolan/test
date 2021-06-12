function loadDoc(url,id) {
    var xmlhttp = new XMLHttpRequest ();
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
    xmlhttp.onload = function() {
        if (xmlhttp.readyState == 4 || xmlhttp.status == 200) {
            var item = xmlhttp.responseXML.getElementsByTagName(id)[0].childNodes[0].nodeValue;
            document.getElementById(id).innerHTML = item;
            if (document.getElementById(id).style.display === "none" || document.getElementById(id).style.display === "") {
                document.getElementById(id).style.display = "block";
            }
                else document.getElementById(id).style.display = "none";
        }
    }
}