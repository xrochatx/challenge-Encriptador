function encryptText(text) {
    return text
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
  }
  
  function decryptText(text) {
    return text
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
  }
  
  function processText(action) {
    var inputText = document.getElementById('input-text').value;
    var outputText = '';
  
    if (action === 'encrypt') {
      outputText = encryptText(inputText);
    } else {
      outputText = decryptText(inputText);
    }
  
    document.getElementById('output-text').value = outputText;
  }
  
  function copyText() {
    var outputText = document.getElementById('output-text');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // For mobile devices
  
    document.execCommand('copy');
    alert('Texto copiado al portapapeles: ' + outputText.value);
  }
  
  function ocultarImg(){
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
  }

  document.getElementById('encrypt-btn').addEventListener('click', function() {
    processText('encrypt');
  });
  
  document.getElementById('decrypt-btn').addEventListener('click', function() {
    processText('decrypt');
  });
  
  document.getElementById('copy-btn').addEventListener('click', copyText);
  
  