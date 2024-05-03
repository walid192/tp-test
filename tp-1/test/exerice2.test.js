import { test, assert } from "vitest";
import { quickSort } from "../src/exercice2";

test("quickSort", (t) => {

  assert.deepEqual(
    quickSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]),
    [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
  );

  assert.throws(() => quickSort(2), TypeError);

  assert.deepEqual(quickSort([1, 1, 1]), [1, 1, 1]);

  assert.deepEqual(quickSort([1, 2, 3]), [1, 2, 3]);

  assert.deepEqual(quickSort([3, 2, 1]), [1, 2, 3]);

  assert.deepEqual(quickSort([1, 3, 2]), [1, 2, 3]);

  assert.deepEqual(quickSort([2, 1, -3]), [-3, 1, 2]);

  assert.throws(() => quickSort([1, 2, "a", 4, 5]), TypeError);

  assert.throws(() => quickSort([1, 2, "a", 0, 5]), TypeError);

});
