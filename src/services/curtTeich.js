const inRange = (min, num, max) => {
  return min <= num && num <= max;
};

const retrieveNumericPart = (code) => {
  return code.match(/\d+/g).map(Number.parseInt);
};

const outputMsg = (year, pattern, arr) => {
  arr.push(`Published in ${year}. Code matches ${pattern}`);
};

const createOutputMsg = (pattern, arr) => {
  return (year) => {
    arr.push(`Published in ${year}. Code matches ${pattern}`);
  };
};

const outputHMessage = (arr) => {
  arr.push('This card uses either C.T. Art Colortone (full color) printing - a five-color process made on linen finish stock from a black and white photo');
  arr.push('Or C.T. Colorit, which is the same but with a deckle (ragged) edge.');
};

const outputKMessage = (arr) => {
  arr.push('This card uses a printing process called CURTEICHCOLOR (full color) made from a color transparency with a four-color process, plastic coated.');
};

const outputPMessage = (arr) => {
  arr.push('This card uses a printing process called C.T. Photochrom (full color) using a black and white photo with a four-color process. Most of the cards printed with this new process were reprints of cards the Teich Company had produced in other styles.')
};

const outputDMessage = (arr) => {
  arr.push('This card uses a printing process called C.T. Photo Varicolor and C.T. Photo Platine')
};

export const curtTeichDate = (code) => {

  let answers = [];
  const numericParts = retrieveNumericPart(code);

  // Numbers only
  if (/^\d+$/.test(code) && inRange(1, Number.parseInt(code), 14989)) {
    outputMsg('1900-1908', 'numeric only', answers);
  }

  // A, R, W, BS, DT, RG, RT
  if (/^A\d+|^R\d+|^W\d+|^BS\d+|^DT\d+|^RG\d+|^RT\d+/.test(code)) {
    let msg = '[A|R|W|BS|DT|RG|RT]00000';
    let output = createOutputMsg(msg, answers);

    if (inRange(1, numericParts[0], 19921)) output('1908-1910');
    else if (inRange(19922, numericParts[0], 22997)) output('likely 1910, possibly 1911');
    else if (inRange(22998, numericParts[0], 31999)) output('likely 1911, possibly 1912');
    else if (inRange(32000, numericParts[0], 32235)) output('1912');
    else if (inRange(32236, numericParts[0], 45599)) output('1913');
    else if (inRange(45600, numericParts[0], 53999)) output('1914');
    else if (inRange(54000, numericParts[0], 61999)) output('1915');
    else if (inRange(62000, numericParts[0], 71999)) output('1916');
    else if (inRange(72000, numericParts[0], 77320)) output('1917');
    else if (inRange(77321, numericParts[0], 77481)) output('1918');
    else if (inRange(77482, numericParts[0], 81999)) output('1919');
    else if (inRange(82000, numericParts[0], 83599)) output('1920');
    else if (inRange(83600, numericParts[0], 87975)) output('1921');
    else if (inRange(87976, numericParts[0], 92873)) output('1922');
    else if (inRange(92874, numericParts[0], 96826)) output('1923');
    else if (inRange(96827, numericParts[0], 102410)) output('1924');
    else if (inRange(102411, numericParts[0], 107826)) output('1925');
    else if (inRange(107827, numericParts[0], 112867)) output('1926');
    else if (inRange(112868, numericParts[0], 118311)) output('1927');
    else if (inRange(118312, numericParts[0], 124180)) output('1928');
    else answers.push('No year match. Code matches [A|R|W|BS|DT|RG|RT]00000');
    
    if (/^\D+\d+-N/.test(code)) {
      answers.push('This card is a reprint. Code matches [A|R|W|BS|DT|RG|RT]00000-N');
    }
  }

  // 00000-29
  if (/\d+-29/.test(code)) {
    outputMsg('1929', '00000-29', answers);
  }

  // 00000-30
  if (/\d+-30/.test(code)) {
    outputMsg('1930', '00000-30', answers);
  }

  // 0A0000 && 0AH0000
  if (/\dA\d+/.test(code)) {
    outputMsg(`193${numericParts[0]}`, `${numericParts[0]}A0000`, answers);
  } else if (/\dAH\d+/.test(code)) {
    outputMsg(`193${numericParts[0]}`, `${numericParts[0]}AH0000`, answers);
    outputHMessage(answers);
  }

  // 0B0000 && 0BH0000
  if (/\dB\d+/.test(code)) {
    outputMsg(`194${numericParts[0]}`, `${numericParts[0]}B0000`, answers);
  } else if (/\dBH\d+/.test(code)) {
    outputMsg(`194${numericParts[0]}`, `${numericParts[0]}BH0000`, answers);
    outputHMessage(answers);
  }

  // 0C0000 && 0CH0000 && 0CK0000 && 0CP0000
  if (/\dC\d+/.test(code)) {
    outputMsg(`195${numericParts[0]}`, `${numericParts[0]}C0000`, answers);
  } else if (/\dCH\d+/.test(code)) {
    outputMsg(`195${numericParts[0]}`, `${numericParts[0]}CH0000`, answers);
    outputHMessage(answers);
  } else if (/\dCK\d+/.test(code)) {
    outputMsg(`195${numericParts[0]}`, `${numericParts[0]}CK0000`, answers);
    outputKMessage(answers);
  } else if (/\dCP\d+/.test(code)) {
    outputMsg(`195${numericParts[0]}`, `${numericParts[0]}CP0000`, answers);
    outputPMessage(answers);
  }

  // 0DK0000
  if (/\dDK\d+/.test(code)) {
    outputMsg(`196${numericParts[0]}`, `${numericParts[0]}DK0000`, answers);
    outputKMessage(answers);
  }

  // 0EK0000 && 0ED0000
  if (/\dEK\d+/.test(code)) {
    outputMsg(`197${numericParts[0]}`, `${numericParts[0]}EK0000`, answers);
    outputKMessage(answers);
  } else if (/\dED\d+/.test(code)) {
    outputMsg(`197${numericParts[0]}`, `${numericParts[0]}ED0000`, answers);
    outputDMessage(answers);
    answers.push('The "ED" series postcards are Curteichcolor 3-D natural color reproduction and are international size.');
  }

  // D00000
  if (/^D\d+/.test(code)) {
    let output = createOutputMsg('D00000', answers);

    if (inRange(1, numericParts[0], 558)) output('1929');
    else if (inRange(559, numericParts[0], 1100)) output('1930');
    else if (inRange(1101, numericParts[0], 1720)) output('1931');
    else if (inRange(1721, numericParts[0], 2400)) output('1932');
    else if (inRange(2401, numericParts[0], 3200)) output('1933');
    else if (inRange(3201, numericParts[0], 3650)) output('1934');
    else if (inRange(3651, numericParts[0], 4200)) output('1935');
    else if (inRange(4201, numericParts[0], 4750)) output('1936');
    else if (inRange(4751, numericParts[0], 5200)) output('1937');
    else if (inRange(5201, numericParts[0], 5700)) output('1938');
    else if (inRange(5701, numericParts[0], 6200)) output('1939');
    else if (inRange(6201, numericParts[0], 6470)) output('1940');
    else if (inRange(6471, numericParts[0], 6790)) output('1941');
    else if (inRange(6791, numericParts[0], 7090)) output('1942');
    else if (inRange(7091, numericParts[0], 7435)) output('1943');
    else if (inRange(7436, numericParts[0], 7685)) output('1944');
    else if (inRange(7686, numericParts[0], 8000)) output('1945');
    else if (inRange(8001, numericParts[0], 8492)) output('1946');
    else if (inRange(8493, numericParts[0], 8741)) output('1947');
    else if (inRange(8742, numericParts[0], 9105)) output('1948');
    else if (inRange(9106, numericParts[0], 9450)) output('1949');
    else if (inRange(9451, numericParts[0], 9725)) output('1950');
    else if (inRange(9726, numericParts[0], 9971)) output('1951');
    else if (inRange(9972, numericParts[0], 10203)) output('1952');
    else if (inRange(10204, numericParts[0], 10431)) output('1953');
    else if (inRange(10432, numericParts[0], 10713)) output('1954');
    else if (inRange(10714, numericParts[0], 11134)) output('1955');
    else if (inRange(11135, numericParts[0], 11600)) output('1956');
    else if (inRange(11601, numericParts[0], 11935)) output('1957');
    else if (inRange(11936, numericParts[0], 12352)) output('1958');
    else if (inRange(12353, numericParts[0], 12772)) output('1959');
    else if (inRange(12773, numericParts[0], 13075)) output('1960');
    else if (inRange(13076, numericParts[0], 13355)) output('1961');
    else if (inRange(13356, numericParts[0], 13612)) output('1962');
    else if (inRange(13613, numericParts[0], 13822)) output('1963');
    else if (inRange(13823, numericParts[0], 14095)) output('1964');
    else if (inRange(14096, numericParts[0], 14390)) output('1965');
    else if (inRange(14391, numericParts[0], 14796)) output('1966');
    else if (inRange(14797, numericParts[0], 15261)) output('1967');
    else if (inRange(15262, numericParts[0], 15684)) output('1968');
    else if (inRange(15685, numericParts[0], 16231)) output('1969');
    else if (inRange(16232, numericParts[0], 17000)) output('1970');
    else if (inRange(17001, numericParts[0], 17770)) output('1971');
    else if (inRange(17771, numericParts[0], 18600)) output('1972');
    else if (inRange(18601, numericParts[0], 19325)) output('1973');
    else if (inRange(19326, numericParts[0], 20363)) output('1974-1978');
    else answers.push('No year match. Code matches D00000');
  }

  // AD, AC, AH, AP, AS, RC, RD, RH, RP, RS
  if (/^[AR][CDHPS]\d+$|^W[CP]\d+$/.test(code)) {
    const output = createOutputMsg('[AR][CDHPS]00000', answers);

    if (inRange(1, numericParts[0], 360)) output(1912);
    else if (inRange(361, numericParts[0], 1800)) output('1913');
    else if (inRange(1801, numericParts[0], 4500)) output('1914');
    else if (inRange(4501, numericParts[0], 6680)) output('1915');
    else if (inRange(6681, numericParts[0], 8842)) output('1916');
    else if (inRange(8843, numericParts[0], 10193)) output('1917');
    else if (inRange(10194, numericParts[0], 10566)) output('1918');
    else if (inRange(10567, numericParts[0], 12318)) output('1919');
    else if (inRange(12319, numericParts[0], 12321)) output('1920-1921');
    else if (inRange(12322, numericParts[0], 12586)) output('1921-1922');
    else if (inRange(12587, numericParts[0], 14175)) output('1923');
    else if (inRange(14176, numericParts[0], 14528)) output('1924');
    else if (inRange(14529, numericParts[0], 14804)) output('1925');
    else answers.push('No year match. Code matches [AR][CDHPS]00000');

    if (/^[ARW]C\d+$/.test(code)) {
      answers.push('This card is C.T. Colorchrome.');
    } else if (/^[AR]D\d+$/) {
      answers.push('This card is Doubletone.');
    } else if (/^[AR]S\d+$/) {
      answers.push('This card is Sepia.');
    } else if (/^[AR]H\d+$/) {
      answers.push('This card is C.T. Handcolored.');
    }
  }

  if (/^C\d+/.test(code)) {
    const output = createOutputMsg('C00000', answers);
    if (inRange(1, numericParts[0], 4234)) output('1905-1906');
    else if (inRange(4235, numericParts[0], 4643)) output('1906-1909');
    else if (inRange(4644, numericParts[0], 7314)) output('1909-1910');
    else if (inRange(7315, numericParts[0], 8060)) output('1910');
    else if (inRange(8061, numericParts[0], 22151)) output('1910-1912');
    else if (inRange(22152, numericParts[0], 31915)) output('1912-1913');
    else if (inRange(31916, numericParts[0], 37087)) output('1913-1915');
    else if (inRange(37088, numericParts[0], 48475)) output('1915-1916');
    else if (inRange(48476, numericParts[0], 51319)) output('1916-1917');
    else if (inRange(51320, numericParts[0], 52372)) output('1917');
    else if (inRange(52373, numericParts[0], 54023)) output('1917-1919');
    else if (inRange(54024, numericParts[0], 56465)) output('1919-1921');
    else if (inRange(56466, numericParts[0], 58559)) output('1921-1923');
    else if (inRange(58560, numericParts[0], 58750)) output('1923');
    else if (inRange(58751, numericParts[0], 59096)) output('1923-1924');
    else if (inRange(59097, numericParts[0], 60514)) output('1924-1925');
    else if (inRange(60515, numericParts[0], 61608)) output('1925');
    else if (inRange(61609, numericParts[0], 63517)) output('1926');
    else answers.push('No year match. Code matches C00000');
  }

  if (/^L\d+$/.test(code)) {
    answers.push('There is currently no way to date this card.');
    answers.push('L-series printed for the Hugh C. Leighton Company in Portland, Maine.');
  }

  if (/^AQ\d+$/.test(code)) {
    answers.push('There is currently no way to date this card.');
    answers.push('AQ-series printed mainly for Fred Harvey.');
  }

  if (/^[EBK]\d+$/.test(code)) {
    answers.push('There is currently no way to date this card.');
    answers.push('E, B, and K-series are miniature views.');
  }

  return answers.length === 0 ? ['No matches found.'] : answers;
};

