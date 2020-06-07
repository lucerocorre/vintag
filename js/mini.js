


var i;
var texto="";
for (i=0;i<=10;i++)
texto+="<option value='"+i+"'>"+i+"</option>";


console.log(texto)

document.getElementById('productos').innerHTML= texto;
