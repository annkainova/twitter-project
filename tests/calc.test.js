/* eslint-disable func-names */
import { assert } from 'chai';
import postSize from '../public/assets/post_size.js';

describe('Функция проверки расчета размера поста', function () {
  it('без ссылок', function () {
    const expectedResult = 12;
    const result = postSize('Всем привет!');
    assert.equal(expectedResult, result);
  });

  it('должен правильно подсчитать размер текста с одной ссылкой, которая начинается с http/https', function () {
    const expectedResult = 8;
    const result = postSize('Привет! https://github.com');
    assert.equal(expectedResult, result);
  });

  it('должен правильно подсчитать размер текста с одной ссылкой без протокола', function () {
    const expectedResult = 8;
    const result = postSize('Привет! burtovoy.org');
    assert.equal(expectedResult, result);
  });

  it('должен правильно подсчитать размер текста с несколькими ссылками с протоколами', function () {
    const expectedResult = 37;
    const result = postSize('Посетите https://example.com и www.example.org для получения информации');
    assert.equal(expectedResult, result);
  });

  it('должен правильно подсчитать размер текста с несколькими ссылками без протокола', function () {
    const expectedResult = 37;
    const result = postSize('Посетите example.com и example.org для получения информации');
    assert.equal(expectedResult, result);
  });

  it('должен игнорировать ссылку с поддоменом', function () {
    const expectedResult = 34;
    const result = postSize('Посетите blog.example.com для получения информации');
    assert.equal(expectedResult, result);
  });

  it('должен вернуть 0 для пустого текста', function () {
    const expectedResult = 0;
    const result = postSize('');
    assert.equal(expectedResult, result);
  });

  it('должен правильно подсчитать размер текста с символами новой строки', function () {
    const expectedResult = 11;
    const result = postSize('Привет,\nмир!');
    assert.equal(expectedResult, result);
  });

  it('должен правильно подсчитать размер текста с специальными символами', function () {
    const expectedResult = 21;
    const result = postSize('Привет, мир! @#%^&*()');
    assert.equal(expectedResult, result);
  });

  it('должен правильно подсчитать размер текста, содержащего цифры', function () {
    const expectedResult = 18;
    const result = postSize('12345 Привет, мир!');
    assert.equal(expectedResult, result);
  });

  it('должен правильно подсчитать размер текста с пробелами в начале и в конце', function () {
    const expectedResult = 16;
    const result = postSize('  Привет, мир!  ');
    assert.equal(expectedResult, result);
  });

  it('должен правильно подсчитать размер текста с эмодзи', function () {
    const expectedResult = 15;
    const result = postSize('Привет, мир! 😊');
    assert.equal(expectedResult, result);
  });
});
