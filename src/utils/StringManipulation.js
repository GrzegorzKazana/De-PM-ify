export const removeOccurencesInString = (string, substrings) =>
  substrings.reduce((prev, curr) => prev.replace(curr, ""), string);

export const takeUntilChar = (string, char) => string.split(char)[0];

export const takeFirstSentences = (text, nSentences) =>
  text
    .split(". ")
    .slice(0, nSentences)
    .join(". ") + ". ";
