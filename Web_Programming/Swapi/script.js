async function zeigeZufallsCharakter() {
  const charakterId = Math.floor(Math.random() * 82) + 1; // Zufällige Charakter-ID zwischen 1 und 82
  const charakter = await ladeCharakter(charakterId);

  if (charakter) {
    document.getElementById('charakterName').textContent = charakter.name;
    document.getElementById('charakterAugenfarbe').textContent = charakter.eye_color;

    // Heimatwelt laden und anzeigen
    const heimatwelt = await ladeHeimatwelt(charakter.homeworld);
    document.getElementById('charakterHeimatwelt').textContent = heimatwelt;
  }
}

async function ladeCharakter(charakterId) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${charakterId}/`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fehler beim Laden des Charakters:', error);
    return null;
  }
}

async function ladeHeimatwelt(heimatweltUrl) {
  try {
    const response = await fetch(heimatweltUrl);
    const data = await response.json();
    return data.name;
  } catch (error) {
    console.error('Fehler beim Laden der Heimatwelt:', error);
    return 'Unbekannte Heimatwelt';
  }
}
