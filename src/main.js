import {
  convertirCelsiusEnFahrenheit,
  arrondirTemperature
} from './conversion.js';

const champTemperature = document.querySelector('#temperature');
const boutonConvertir = document.querySelector('#convertir');
const paragrapheResultat = document.querySelector('#resultat');

function afficherConversion() {
  if (champTemperature.value === '') {
    paragrapheResultat.textContent = 'Saisis une température en Celsius.';
    return;
  }

  const temperatureCelsius = Number(champTemperature.value);
  const temperatureFahrenheit = arrondirTemperature(
    convertirCelsiusEnFahrenheit(temperatureCelsius)
  );

  paragrapheResultat.textContent =
    `${temperatureCelsius} °C correspondent à ${temperatureFahrenheit} °F.`;
}

boutonConvertir.addEventListener('click', afficherConversion);
champTemperature.addEventListener('input', afficherConversion);
