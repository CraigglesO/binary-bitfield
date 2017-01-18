import binaryBitfield from './binary-bitfield';

// let x = Buffer.from('c0', 'hex');
// console.log(x);
// let y = Buffer.from('40', 'hex');
// console.log(y);
// let z = Buffer.from('80', 'hex');
// const a = new binaryBitfield('c0', '40');
// console.log(a);
// a.findNewPieces(y, (result, total) => {
//   console.log('hex: ', result);
//   console.log('total: ', total);
// });
// a.findNewPieces(z, (result, total) => {
//   console.log('hex: ', result);
//   console.log('total: ', total);
//   console.log('a: ', a);
//   console.log(a.getPercentage());
// });
//
// console.log(a);


//let bitfield = new binaryBitfield(9);

let bitfield = new binaryBitfield(7, '80');


let y = Buffer.from('06', 'hex');
let x = Buffer.from('c0', 'hex');
let z = Buffer.from('fe', 'hex');
let z2 = Buffer.from('e4', 'hex');
let z3 = Buffer.from('a8', 'hex');
let z4 = Buffer.from('5e', 'hex');
console.log('y: ', y);
console.log('x: ', x);

bitfield.findNewPieces(z2, false, (result, downloaded, rarest, earliest) => {
  console.log('b0: ' ,bitfield);
  console.log('r0: ' ,result);
  console.log('rarest0: ' ,rarest);
  console.log('earliest0: ' ,earliest);
  console.log('d0: ' ,downloaded);
});
bitfield.findNewPieces(z3, (result, downloaded, rarest, earliest) => {
  console.log('b5: ' ,bitfield);
  console.log('r5: ' ,result);
  console.log('rarest5: ' ,rarest);
  console.log('earliest5: ' ,earliest);
  console.log('d5: ' ,downloaded);
});
bitfield.findNewPieces(z4, (result, downloaded, rarest, earliest) => {
  console.log('b4: ' ,bitfield);
  console.log('r4: ' ,result);
  console.log('rarest4: ' ,rarest);
  console.log('earliest4: ' ,earliest);
  console.log('d4: ' ,downloaded);
});
bitfield.findNewPieces(x, (result, downloaded, rarest, earliest) => {
  console.log('b3: ' ,bitfield);
  console.log('r3: ' ,result);
  console.log('rarest3: ' ,rarest);
  console.log('earliest3: ' ,earliest);
  console.log('d3: ' ,downloaded);
});

bitfield.findNewPieces(y, (result, downloaded, rarest, earliest) => {
  console.log('b1: ' ,bitfield);
  console.log('r1: ' ,result);
  console.log('rarest1: ' ,rarest);
  console.log('earliest1: ' ,earliest);
  console.log('d1: ' ,downloaded);
});


//SET EARLIEST
bitfield.findNewPieces(x, (result, downloaded, rarest, earliest) => {
  console.log('b2: ' ,bitfield);
  console.log('r2: ' ,result);
  console.log('rarest2: ' ,rarest);
  console.log('earliest2: ' ,earliest);
  console.log('d2: ' ,downloaded);
});
//console.log(bitfield.set(0));
