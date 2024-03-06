/* eslint-disable func-names */
import { assert } from 'chai';
import linkToElement from '../public/assets/js/link-replace.js';

describe('Функция linkToElement', function () {
  it('без ссылок', function () {
    const testText = 'Привет, как дела?';
    const expectedResult = 'Привет, как дела?';
    assert.equal(linkToElement(testText), expectedResult);
  });

  it('с одной ссылкой', function () {
    const testText = 'Посетите мой сайт: https://example.com';
    const expectedResult =
      'Посетите мой сайт: <a href="https://example.com">https://example.com</a>';
    assert.equal(linkToElement(testText), expectedResult);
  });

  it('с несколькими ссылками', function () {
    const testText =
      'Мои проекты на GitHub: https://github.com/user и мой блог: https://blog.example.com';
    const expectedResult =
      'Мои проекты на GitHub: <a href="https://github.com/user">https://github.com/user</a> и мой блог: <a href="https://blog.example.com">https://blog.example.com</a>';
    assert.equal(linkToElement(testText), expectedResult);
  });

  it('с несколькими ссылками, включая одну с протоколом без www', function () {
    const testText =
      'Проверьте мой сайт: http://example.com и мой GitHub: https://github.com/user';
    const expectedResult =
      'Проверьте мой сайт: <a href="http://example.com">http://example.com</a> и мой GitHub: <a href="https://github.com/user">https://github.com/user</a>';
    assert.equal(linkToElement(testText), expectedResult);
  });

  it('с ссылкой, содержащей специальные символы', function () {
    const testText = 'Посетите мой профиль: https://example-site.com/user_name';
    const expectedResult =
      'Посетите мой профиль: <a href="https://example-site.com/user_name">https://example-site.com/user_name</a>';
    assert.equal(linkToElement(testText), expectedResult);
  });

  it('пустой текст', function () {
    const testText = '';
    const expectedResult = '';
    assert.equal(linkToElement(testText), expectedResult);
  });
});
