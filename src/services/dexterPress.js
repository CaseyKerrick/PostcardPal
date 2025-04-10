const retrieveNumericPart = (code) => {
  return Number.parseInt(code.match(/\d+/)[0]);
}

const inRange = (min, num, max) => {
  return min <= num && num <= max;
}

const outputMsg = (year, pattern, arr) => {
  arr.push(`Published in ${year}. Code matches ${pattern}`);
}

export const dexterPressDate = (code) => {
  if (!code) {
    return ['No code entered.'];
  }

  let answers = [];
  const numericPart = retrieveNumericPart(code);

  // Numbers only
  if (/^\d+$/.test(code)) {
    if (inRange(1, numericPart, 39999)) outputMsg('1950-1951', 'numbers only', answers);
    else if (inRange(40000, numericPart, 59999)) outputMsg('1951', 'numbers only', answers);
    else if (inRange(60_000, numericPart, 69_999)) outputMsg('1952-1953', 'numbers only', answers);
    else if (inRange(70_000, numericPart, 79_999)) outputMsg('1954', 'numbers only', answers);
    else if (inRange(80_000, numericPart, 89_999)) outputMsg('1955', 'numbers only', answers);
    else if (inRange(90_000, numericPart, 99_999)) outputMsg('1956-1957', 'numbers only', answers);
    else answers.push('No year match. Numbers only pattern.');
  }

  // 00000-A
  if (/\d+-A/.test(code)) {
    outputMsg('1957', '00000-A pattern', answers);
  }

  // 00000-B
  if (/\d+-B/.test(code)) {
    if (inRange(1, numericPart, 10_000)) outputMsg('1958', '00000-B pattern', answers);
    else if (inRange(10_000, numericPart, 19_999)) outputMsg('1958-1959', '00000-B pattern', answers);
    else if (inRange(20_000, numericPart, 29_999)) outputMsg('1959', '00000-B pattern', answers);
    else if (inRange(30_000, numericPart, 39_999)) outputMsg('1960', '00000-B pattern', answers);
    else if (inRange(40_000, numericPart, 49_999)) outputMsg('1961', '00000-B pattern', answers);
    else if (inRange(50_000, numericPart, 59_999)) outputMsg('1962', '00000-B pattern', answers);
    else if (inRange(60_000, numericPart, 69_999)) outputMsg('1963', '00000-B pattern', answers);
    else if (inRange(70_000, numericPart, 99_999)) outputMsg('1964', '00000-B pattern', answers);
    else answers.push('No year match. 00000-B pattern.');
  }

  // 00000-C
  if (/\d+-C/.test(code)) {
    if (inRange(1, numericPart, 9999)) outputMsg('1965', '00000-C pattern', answers);
    else if (inRange(10_000, numericPart, 19_999)) outputMsg('1966', '00000-C pattern', answers);
    else if (inRange(20_000, numericPart, 29_999)) outputMsg('1967', '00000-C pattern', answers);
    else if (inRange(30_000, numericPart, 49_999)) outputMsg('1968', '00000-C pattern', answers);
    else if (inRange(50_000, numericPart, 59_999)) outputMsg('1969', '00000-C pattern', answers);
    else if (inRange(60_000, numericPart, 69_999)) outputMsg('1970', '00000-C pattern', answers);
    else if (inRange(70_000, numericPart, 99_999)) outputMsg('1971-1974', '00000-C pattern', answers);
  }

  // 00000-D
  if (/\d+-D/.test(code)) {
    outputMsg('1975-1983', '00000-D pattern', answers);
  }

  return answers;
};
