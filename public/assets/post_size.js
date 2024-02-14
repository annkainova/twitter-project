function postSize(text) {
  const domens = [
    ".com",
    ".net",
    ".org",
    ".ru",
    ".de",
    ".uk",
    ".cn",
    ".info",
    ".nl",
    ".br",
  ];

  let thisIsLink;
  let countCharcters = 0;
  const words = text.split(/(\s+)/);

  words.map((word) => {
    thisIsLink = false;
    domens.map((domen) => {
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

