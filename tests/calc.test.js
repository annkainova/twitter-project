import { assert } from 'chai';
import postSize from '../public/assets/post_size.js';

describe('Function to check post size calculation', function () {
  it('without links', function () {
    const expectedResult = 12;
    const result = postSize('Hello everyone!');
    assert.equal(expectedResult, result);
  });

  it('should correctly calculate the size of text with one link starting with http/https', function () {
    const expectedResult = 8;
    const result = postSize('Hello! https://github.com');
    assert.equal(expectedResult, result);
  });

  it('should correctly calculate the size of text with one link without protocol', function () {
    const expectedResult = 8;
    const result = postSize('Hello! burtovoy.org');
    assert.equal(expectedResult, result);
  });

  it('should correctly calculate the size of text with multiple links with protocols', function () {
    const expectedResult = 37;
    const result = postSize(
      'Visit https://example.com and www.example.org for information'
    );
    assert.equal(expectedResult, result);
  });

  it('should correctly calculate the size of text with multiple links without protocol', function () {
    const expectedResult = 37;
    const result = postSize(
      'Visit example.com and example.org for information'
    );
    assert.equal(expectedResult, result);
  });

  it('should ignore link with subdomain', function () {
    const expectedResult = 34;
    const result = postSize('Visit blog.example.com for information');
    assert.equal(expectedResult, result);
  });

  it('should return 0 for empty text', function () {
    const expectedResult = 0;
    const result = postSize('');
    assert.equal(expectedResult, result);
  });

  it('should correctly calculate the size of text with newline characters', function () {
    const expectedResult = 11;
    const result = postSize('Hello,\nworld!');
    assert.equal(expectedResult, result);
  });

  it('should correctly calculate the size of text with special characters', function () {
    const expectedResult = 21;
    const result = postSize('Hello, world! @#%^&*()');
    assert.equal(expectedResult, result);
  });

  it('should correctly calculate the size of text containing numbers', function () {
    const expectedResult = 18;
    const result = postSize('12345 Hello, world!');
    assert.equal(expectedResult, result);
  });

  it('should correctly calculate the size of text with spaces at the beginning and end', function () {
    const expectedResult = 16;
    const result = postSize('  Hello, world!  ');
    assert.equal(expectedResult, result);
  });

  it('should correctly calculate the size of text with emojis', function () {
    const expectedResult = 15;
    const result = postSize('Hello, world! 😊');
    assert.equal(expectedResult, result);
  });
});
