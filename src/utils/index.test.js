import { randomId } from "./";

test("Check randomID return number greater than 0", () => {
  expect(randomId()).toBeGreaterThan(0);
});
