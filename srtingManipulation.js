function capitalize(string) {
  let result = string[0].toUpperCase() + string.slice(1);
  return result;
}

function reverseString(string) {
  let reverseStringArray = [];

  for (let i = string.length - 1; i >= 0; i--) {
    reverseStringArray.push(string.charAt(i));
  }

  let result = reverseStringArray.join("");

  return result;
}

export { capitalize, reverseString };
