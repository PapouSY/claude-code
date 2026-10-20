import test from 'node:test';
import assert from 'node:assert/strict';

import {
  convertirCelsiusEnFahrenheit,
  convertirFahrenheitEnCelsius,
  arrondirTemperature,
  lireTemperature
} from '../src/conversion.js';

test('convertit les degrés Celsius en degrés Fahrenheit', () => {
  assert.equal(convertirCelsiusEnFahrenheit(0), 32);
  assert.equal(convertirCelsiusEnFahrenheit(100), 212);
});

test('convertit les degrés Fahrenheit en degrés Celsius', () => {
  assert.equal(convertirFahrenheitEnCelsius(32), 0);
  assert.equal(convertirFahrenheitEnCelsius(212), 100);
});

test('arrondit une température à un chiffre après la virgule', () => {
  assert.equal(arrondirTemperature(12.34), 12.3);
  assert.equal(arrondirTemperature(12.36), 12.4);
});

test('refuse une saisie vide', () => {
  assert.equal(lireTemperature('').valide, false);
  assert.equal(lireTemperature('   ').valide, false);
});

test('refuse une chaîne de caractères', () => {
  assert.equal(lireTemperature('abc').valide, false);
});

test('accepte 0 comme une température valide', () => {
  assert.deepEqual(lireTemperature('0'), { valide: true, valeur: 0 });
});
