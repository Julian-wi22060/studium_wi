function eintragHinzufuegen() {
  var eintragText = document.getElementById('eintrag').value;
  
  if (eintragText.trim() !== '') {
    var neuesElement = document.createElement('li');
    neuesElement.textContent = eintragText;

    var liste = document.getElementById('liste');
    liste.appendChild(neuesElement);

    document.getElementById('eintrag').value = '';
  }
}