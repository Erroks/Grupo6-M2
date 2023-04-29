function validarFormulario() {
  var usuario = document.getElementById("user").value;
  var correo = document.getElementById("email").value;
  var mensaje2 = document.getElementById("mensaje").value;
  var error = "";

  
  if (usuario == "") {
    error += "El campo de usuario está vacío.\n";
    user.focus();
    user.style.background = "#ffffcc";
  }
  else{
    user.style.background = "white";
  }

  if (correo == "") {
    error += "El campo de correo está vacío.\n";
    email.focus();
    email.style.background = "#ffffcc";
  }
  else{
    email.style.background = "white";
  }

  if (mensaje2 == "") {
    error += "El campo de mensaje está vacío.\n";
    mensaje.focus();
    mensaje.style.background = "#ffffcc";
  }
  else{
    mensaje.style.background = "white";
  }

  if (error != "") {
    alert("Por favor completa los siguientes campos:\n" + error);
    return false;
  }
  else {
    alert("Gracias por enviar tu mensaje");
    return true;
    
  }
}