import {assert, test} from "vitest";
import {isPriceInRange} from "../src/exercice3";


test("isPriceInRange", (t) => {
    assert.isTrue(isPriceInRange(10, 5, 15));
    assert.isTrue(isPriceInRange(5, 5, 15));
    assert.isTrue(isPriceInRange(15, 5, 15));

    assert.isFalse(isPriceInRange(4, 5, 15));
    assert.isFalse(isPriceInRange(16, 5, 15));
    assert.isFalse(isPriceInRange(0, 5, 15));


    assert.isTrue(isPriceInRange(10, 10, 10));
    assert.isFalse(isPriceInRange(5, 10, 10));
    assert.isFalse(isPriceInRange(15, 10, 10))

});