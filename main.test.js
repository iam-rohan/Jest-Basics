import { capitalize, reverseString, ceaserCipher } from "./srtingManipulation";
import { calculator } from "./calculator";
import { analyzeArray } from "./arrayAnalysis";

test("capitalizes the given string", () => {
  let computed = capitalize("am I the one?");
  let expected = "Am I the one?";

  expect(computed).toEqual(expected);
});

test("reverse the given string", () => {
  let computed = reverseString("nahoR ma I");
  let expected = "I am Rohan";

  expect(computed).toEqual(expected);
});

test("calculator design", () => {
  const expected = { add: 5, substract: 1, divide: 1.5, multiply: 6 };

  expect(calculator.divide(3, 2)).toEqual(expected.divide);
  expect(calculator.multiply(3, 2)).toEqual(expected.multiply);
  expect(calculator.add(3, 2)).toEqual(expected.add);
  expect(calculator.subtract(3, 2)).toEqual(expected.substract);
});

test("ceaser cipher logic", () => {
  expect(ceaserCipher("xyz", 3)).toEqual("abc");
  expect(ceaserCipher("HeLLo", 3)).toEqual("KhOOr");
  expect(ceaserCipher("Hello, World!", 3)).toEqual("Khoor, Zruog!");
});

test("Array analyzer", () => {
  let object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
