export default function shortenText(string, maxCharLength) {
  return string.length > maxCharLength
    ? string.slice(0, maxCharLength - 1) + "..."
    : string;
}
