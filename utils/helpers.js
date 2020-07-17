export const shortenText = (text, maxLength = 100) => {
  return text && text.length >= maxLength
    ? `${text.substr(0, maxLength)}...`
    : text;
};
