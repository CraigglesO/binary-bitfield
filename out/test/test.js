"use strict";
const binary_bitfield_1 = require("../binary-bitfield");
const buffer_1 = require("buffer");
const test = require("blue-tape");
test("Get a prepared block", (t) => {
    t.plan(1);
    t.true(true);
    t.end();
});
let bitfield = new binary_bitfield_1.default(3, "80");
let x = bitfield.onHave(1, buffer_1.Buffer.from("00", "hex"));
console.log(x);
x = bitfield.onHave(1, "0000");
x = bitfield.onHave(1, "0000");
x = bitfield.onHave(1, "0000");
x = bitfield.onHave(1, "0000");
