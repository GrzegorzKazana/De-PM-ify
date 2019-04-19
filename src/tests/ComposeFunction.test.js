import { composeF } from "../utils/ComposeFunction";

describe("testing compose function", () => {
  it("handles empty input", () => {
    const x = 5;
    expect(composeF()(x)).toBe(x);
  });

  it("correctly applies functions", () => {
    const x = 5;
    const functions = [x => x * 2, x => x + 5, x => x * 0.5, x => x - 2];
    const expectedResult = 5.5;
    expect(composeF(...functions)(x)).toBe(expectedResult);
  });
});
