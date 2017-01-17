"use strict";
const binary_bitfield_1 = require("./binary-bitfield");
let bitfield = new binary_bitfield_1.default('c0');
let y = Buffer.from('80', 'hex');
bitfield.findNewPieces(y, (result, total) => {
    console.log('b2: ', bitfield);
    console.log('r2: ', result);
    console.log('t2: ', total);
});
console.log('b1: ', bitfield);
