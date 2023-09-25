async function zeigeZufallsCharakter() {
  const charakterId = Math.floor(Math.random() * 82) + 1; // Zufällige Charakter-ID zwischen 1 und 82
  const charakter = await ladeCharakter(charakterId);

  if (charakter) {
    document.getElementById('charakterName').textContent = charakter.name;
    document.getElementById('charakterAugenfarbe').textContent = charakter.eye_color;

    // Heimatzeitwelt laden und anzeigen
    const heimatzeitwelt = await ladeHeimatzeitwelt(charakter.homeworld);
    document.getElementById('charakterHeimatzeitwelt').textContent = heimatzeitwelt;
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

async function ladeHeimatzeitwelt(heimatzeitweltUrl) {
  try {
    const response = await fetch(heimatzeitweltUrl);
    const data = await response.json();
    return data.name;
  } catch (error) {
    console.error('Fehler beim Laden der Heimatzeitwelt:', error);
    return 'Unbekannte Heimatzeitwelt';
  }
}
