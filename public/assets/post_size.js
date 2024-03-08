export const domens = [
  '.com',
  '.net',
  '.org',
  '.ru',
  '.de',
  '.uk',
  '.cn',
  '.info',
  '.nl',
  '.br',
];

export default function postSize(text) {
  let thisIsLink;
  let countCharcters = 0;

  const cleanedText = text.replace(/\n/g, '');
  const words = cleanedText.split(/(\s+)/);

  words.forEach((word) => {
    thisIsLink = false;
    domens.forEach((domen) => {
      if (word.includes(domen)) {
        thisIsLink = true;
      }
    });

    if (!thisIsLink) {
      countCharcters += word.length;
    }
  });

  return countCharcters;
}
