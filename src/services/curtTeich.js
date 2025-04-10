const inRange = (min, num, max) => {
  return min <= num && num <= max;
}

const retrieveNumericPart = (code) => {
  return Number.parseInt(code.match(/\d+/)[0]);
}

const secondSeriesMsg = (year) => {
  return `Published in ${year}. (Code matches [A|R|W|BS|DT|RG|RT]00000)`;
}

export const dateCode = (code) => {
  // ****-29 - 1929
  // ****-30 - 1930
  // After 2934-30 (aka 0A2935), first digit indicates year, first letter indicates decade A – 1930s, B – 1940s, C- 1950s, D – 1960s, E – 1970s
  
  let answers = [];

  // Numbers only
  if (/\d+/.test(code) && inRange(1, Number.parseInt(code), 14989)) {
    answers.push('Published between 1900-1908. (Code is numeric only)');
  }

  // A, R, W, BS, DT, RG, RT - 1908-1928
  if (/A\d+|R\d+|W\d+|BS\d+|DT\d+|RG\d+|RT\d+/.test(code)) {
    const num = retrieveNumericPart(code);

    if (inRange(1, num, 19921)) {
      answers.push('Published between 1908 and 1910. (Code matches [A|R|W|BS|DT|RG|RT]00000)');
    }
    else if (inRange(19922, num, 22997)) {
      answers.push('Likely published in 1910, possibly in 1911. (Code matches [A|R|W|BS|DT|RG|RT]00000)');
    }
    else if (inRange(22998, num, 31999)) {
      answers.push('Likely published in 1911, possibly in 1912. (Code matches [A|R|W|BS|DT|RG|RT]00000)');
    }
    else if (inRange(32000, num, 32235)) answers.push(secondSeriesMsg(1912))
    else if (inRange(32236, num, 45599)) answers.push(secondSeriesMsg(1913))
    else if (inRange(45600, num, 53999)) answers.push(secondSeriesMsg(1914))
    else if (inRange(54000, num, 61999)) answers.push(secondSeriesMsg(1915))
    else if (inRange(62000, num, 71999)) answers.push(secondSeriesMsg(1916))
    else if (inRange(72000, num, 77320)) answers.push(secondSeriesMsg(1917))
    else if (inRange(77321, num, 77481)) answers.push(secondSeriesMsg(1918))
    else if (inRange(77482, num, 81999)) answers.push(secondSeriesMsg(1919))
    else if (inRange(82000, num, 83599)) answers.push(secondSeriesMsg(1920))
    else if (inRange(83600, num, 87975)) answers.push(secondSeriesMsg(1921))
    else if (inRange(87976, num, 92873)) answers.push(secondSeriesMsg(1922))
    else if (inRange(92874, num, 96826)) answers.push(secondSeriesMsg(1923))
    else if (inRange(96827, num, 102410)) answers.push(secondSeriesMsg(1924))
    else if (inRange(102411, num, 107826)) answers.push(secondSeriesMsg(1925))
    else if (inRange(107827, num, 112867)) answers.push(secondSeriesMsg(1926))
    else if (inRange(112868, num, 118311)) answers.push(secondSeriesMsg(1927))
    else if (inRange(118312, num, 124180)) answers.push(secondSeriesMsg(1928))
    else answers.push('Code out of bounds (Code matches [A|R|W|BS|DT|RG|RT]00000)')
    
    if (/^\D+\d+-N/.test(code)) {
      answers.push('This card is a reprint.');
    }
  }


};

