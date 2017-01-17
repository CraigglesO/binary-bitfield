"use strict";
const binary_bitfield_1 = require("./binary-bitfield");
let bitfield = new binary_bitfield_1.default('c0', '40');
let y = Buffer.from('40', 'hex');
bitfield.findNewPieces(y, (result, total) => {
});
console.log(bitfield.set(0));
console.log(bitfield);
console.log(bitfield.get(1));
