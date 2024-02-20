export default function postSize(text) {
  const domens = [
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

  let thisIsLink;
  let countCharcters = 0;
  const words = text.split(/(\s+)/);

  words.forEach((word) => {
    thisIsLink = false;
    domens.forEach((domen) => {
      if (word.endsWith(domen)) {
        thisIsLink = true;
      }
    });

    if (!thisIsLink) {
      countCharcters += word.length;
    }
  });

  return countCharcters;
}
