import { domens } from '../post_size.js';

export default function linkToElement(text) {
  let thisIsLink;
  let newTextWithLink = '';
  let linkWithTag = '';
  const words = text.split(/(\s+)/);

  words.forEach((word) => {
    thisIsLink = false;

    domens.forEach((domen) => {
      if (word.includes(domen)) {
        thisIsLink = true;
        linkWithTag = `<a href="${word}">${word}</a>`;
      }
    });
    if (thisIsLink) {
      newTextWithLink += linkWithTag;
    } else {
      newTextWithLink += word;
    }
  });
  return newTextWithLink;
}
