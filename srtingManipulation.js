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

function ceaserCipher(string, key) {
  const normalOrder = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let workingArray = normalOrder.split("");
  let shift = key % 26;

  let shiftedArray = workingArray.slice(shift).concat(workingArray.slice(0, shift));

  let stringArray = string.split("");
  let finalArray = [];

  for (let i = 0; i < stringArray.length; i++) {
    let currentIndex = workingArray.indexOf(stringArray[i].toUpperCase());

    if (currentIndex !== -1) {
      if (stringArray[i] === stringArray[i].toLowerCase()) {
        finalArray[i] = shiftedArray[currentIndex].toLowerCase();
      } else {
        finalArray[i] = shiftedArray[currentIndex];
      }
    } else {
      finalArray[i] = stringArray[i];
    }
  }

  console.log("Final Output:", finalArray.join(""));

  return finalArray.join("");
}

export { capitalize, reverseString, ceaserCipher };
