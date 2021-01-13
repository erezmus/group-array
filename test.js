const assert = require("assert");
const { groupArrayElements } = require("./index.js");

function test(description, fn) {
  try {
    fn();
    console.log("\x1b[32m%s\x1b[0m", `✓ ${description}: passed`);
  } catch (e) {
    console.log("\x1b[31m%s\x1b[0m", `✘ ${description}: failed. ${e.message}`);
  }
}

test("empty undefined array throws error", () =>
  assert.throws(() => groupArrayElements(undefined, 2), {
    message: "Invalid arr argument",
  }));

test("empty array input returns empty", () =>
  assert.deepStrictEqual([], groupArrayElements([], 2)));

test("invalid size throws error", () =>
  assert.throws(() => groupArrayElements([1, 2]), {
    message: "Invalid size argument",
  }));

test("negative size throws error", () =>
  assert.throws(() => groupArrayElements([1, 2], -1), {
    message: "Size argument cannot be less than 1",
  }));

test("zero size throws error", () =>
  assert.throws(() => groupArrayElements([1, 2], 0), {
    message: "Size argument cannot be less than 1",
  }));

test("group with no remainder", () =>
  assert.deepStrictEqual(
    [
      [1, 2],
      [3, 4],
    ],
    groupArrayElements([1, 2, 3, 4], 2)
  ));

test("group with remainder", () =>
  assert.deepStrictEqual(
    [[1, 2], [3, 4], [5]],
    groupArrayElements([1, 2, 3, 4, 5], 2)
  ));

test("group length shorter than size returns original", () =>
  assert.deepStrictEqual(
    [[1, 2, 3, 4, 5]],
    groupArrayElements([1, 2, 3, 4, 5], 7)
  ));

test("group length equal to size returns original", () =>
  assert.deepStrictEqual(
    [[1, 2, 3, 4, 5]],
    groupArrayElements([1, 2, 3, 4, 5], 5)
  ));

test("group preserves ordering", () => {
  assert.deepStrictEqual(
    [[7, 3], [2, 1], [5]],
    groupArrayElements([7, 3, 2, 1, 5], 2)
  );
});

test("works with strings", () => {
  assert.deepStrictEqual(
    [["foo", "bar"], ["baz"]],
    groupArrayElements(["foo", "bar", "baz"], 2)
  );
});

test("works with arrays as elements", () => {
    assert.deepStrictEqual(
      [[[1, 2], [3, 4]], [[5, 6], [7, 8]], [[9, 10]]],
      groupArrayElements([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]], 2) 
    );
  });
  