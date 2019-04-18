export const removeOccurencesInString = (string, substrings) =>
  substrings.reduce((prev, curr) => prev.replace(curr, ""), string);

export const fixCapitalization = string =>
  string
    .toLowerCase()
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
