import { capitalize, reverseString } from "./srtingManipulation";
import { calculator } from "./calculator";

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
