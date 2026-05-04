import { describe, expect, it } from "vitest";
import { add } from "../stringCalculator";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    const sum = add("");
    expect(sum).toBe(0);
  });

  it("should return the same number for single number", () => {
    const sum = add("1");
    expect(sum).toBe(1);
  });

  it("should return there sum", () => {
    const sum = add("2,3");
    expect(sum).toBe(5);
  });
});
