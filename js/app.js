//función validar campo texto no este vacio
function validar() {
  var captureText = document.querySelector(".capture-text").value;

  if (captureText == "") {
    alert("por favor ingrese un mensaje para continuar");
    return false;
  } else {
    return true;
  }
}

//función para quitar acentos/tildes
function removerAcentos(text) {
  var text = text
    .replace(/á/g, "a")
    .replace(/é/g, "e")
    .replace(/í/g, "i")
    .replace(/ó/g, "o")
    .replace(/ú/g, "u");
  return text;
}

//función para encriptar un mensaje
function encriptarMensaje() {
  if (validar()) {
    var captureText = document.querySelector(".capture-text").value;
    var resultado = removerAcentos(captureText);

    resultado = resultado
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

    //quitar imagen de css y colocar mensaje
    var image = document.querySelector("#image");
    var title = document.querySelector(".title");
    var textEncrypt = document.querySelector(".subtitle");
    var buttonCopy = document.querySelector(".button-copy");

    image.classList.add("hidden");
    buttonCopy.classList.remove("hidden");
    title.textContent = "Mensaje encriptado";
    textEncrypt.textContent = resultado;
  }
}

//función para desencriptar un mensaje
function desencriptarMensaje() {
  if (validar()) {
    var captureText = document.querySelector(".capture-text").value;
    var resultado = removerAcentos(captureText);

    resultado = resultado
      .replace(/ai/gi, "a")
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");

    //quitar imagen de css y colocar mensaje
    var image = document.querySelector("#image");
    var title = document.querySelector(".title");
    var textEncrypt = document.querySelector(".subtitle");
    var buttonCopy = document.querySelector(".button-copy");

    buttonCopy.classList.remove("hidden");
    image.classList.add("hidden");
    title.textContent = "Mensaje desencriptado";
    textEncrypt.textContent = resultado;
  }
}

//función para copiar el mensaje encriptado/desencriptado
function copiarMensaje() {
  var copyText = document.querySelector(".subtitle");
  copyText.select();
  document.execCommand("copy");

  alert("Copiado!");
}

//llamar a la función encriptarMensaje()
var button = document.querySelector(".encriptar");
button.onclick = encriptarMensaje;

//llamar a la función desencriptarMensaje()
var button2 = document.querySelector(".desencriptar");
button2.onclick = desencriptarMensaje;

//llamar a la función copiarMensaje()
var buttonCopy = document.querySelector(".button-copy");
buttonCopy.onclick = copiarMensaje;
