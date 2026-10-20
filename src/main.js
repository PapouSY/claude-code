import {
  convertirCelsiusEnFahrenheit,
  arrondirTemperature,
  lireTemperature
} from './conversion.js';

const champTemperature = document.querySelector('#temperature');
const boutonConvertir = document.querySelector('#convertir');
const paragrapheResultat = document.querySelector('#resultat');

function afficherConversion() {
  if (champTemperature.validity.badInput) {
    paragrapheResultat.textContent = 'Ce n\'est pas un nombre valide.';
    return;
  }

  const lecture = lireTemperature(champTemperature.value);

  if (!lecture.valide) {
    paragrapheResultat.textContent = lecture.erreur;
    return;
  }

  const temperatureFahrenheit = arrondirTemperature(
    convertirCelsiusEnFahrenheit(lecture.valeur)
  );

  paragrapheResultat.textContent =
    `${lecture.valeur} °C correspondent à ${temperatureFahrenheit} °F.`;
}

boutonConvertir.addEventListener('click', afficherConversion);
champTemperature.addEventListener('input', afficherConversion);
