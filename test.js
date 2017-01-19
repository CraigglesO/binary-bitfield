"use strict";
const binary_bitfield_1 = require("./binary-bitfield");
const buffer_1 = require("buffer");
let bitfield = new binary_bitfield_1.default(3, '80');
let x = bitfield.onHave(1, buffer_1.Buffer.from('00', 'hex'));
console.log(x);
x = bitfield.onHave(1, '0000');
x = bitfield.onHave(1, '0000');
x = bitfield.onHave(1, '0000');
x = bitfield.onHave(1, '0000');
