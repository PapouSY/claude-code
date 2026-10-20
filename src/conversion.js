export function convertirCelsiusEnFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

export function convertirFahrenheitEnCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

export function arrondirTemperature(valeur) {
  return Math.round(valeur * 10) / 10;
}

export function lireTemperature(saisie) {
  const texte = String(saisie).trim();

  if (texte === '') {
    return { valide: false, erreur: 'Saisis une température en Celsius.' };
  }

  const valeur = Number(texte.replace(',', '.'));

  if (!Number.isFinite(valeur)) {
    return { valide: false, erreur: 'Ce n\'est pas un nombre valide.' };
  }

  return { valide: true, valeur };
}
