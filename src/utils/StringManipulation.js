export const removeOccurencesInString = (string, substrings) =>
  substrings.reduce((prev, curr) => prev.replace(curr, ""), string);

export const fixCapitalization = string =>
  string
    .toLowerCase()
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ")
    .replace(/-([a-z])/, (_, g1) => "-" + g1.toUpperCase());

export const takeUntilChar = (string, char) => string.split(char)[0];

export const takeFirstSentences = (text, nSentences) =>
  text
    .split(". ")
    .slice(0, nSentences)
    .join(". ");
