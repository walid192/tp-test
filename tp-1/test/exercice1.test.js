import { assert, test } from "vitest";
import { transform } from "../src/exercice1";

test("transform", t => {
    let result = transform("");
    assert.equal(result, "");

    result = transform("hello!! $Wel;come");
    assert.equal(result, "HELLO!! $WEL;COME");

    result = transform("hello");
    assert.equal(result, "HELLO");

    result = transform("hello@WoRld");
    assert.equal(result, "HELLO@WORLD");
    });