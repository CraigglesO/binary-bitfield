const binaryBitfield = require("../binary-bitfield");
const Buffer = require("buffer").Buffer;


let x = Buffer.from('ff', 'hex');
let y = Buffer.from('ff', 'hex');
let z = Buffer.from('ff', 'hex');
const a = new binaryBitfield.default('ff', '00');
console.log(a);
a.set(0);
a.set(1);
a.set(2);
a.set(3);
a.set(4);
a.set(5);
a.set(6);
a.setDownloaded(0);
a.setDownloaded(1);
a.setDownloaded(2);
a.setDownloaded(3);
a.setDownloaded(4);
a.setDownloaded(5);
a.setDownloaded(6);
console.log(a);
setTimeout(() => {
  a.findNewPieces(y, (result, downloading, which) => {
    console.log('result: ', result);
    console.log('downloading: ', downloading);
    console.log('which', which);
    console.log();
    console.log();
    a.set(7);
    a.setDownloaded(7);
    a.findNewPieces(z, (result, downloading, which) => {
      console.log('result: ', result);
      console.log('downloading: ', downloading);
      console.log('which', which);
      console.log('a: ', a);
      console.log(a.getPercentage());
    });

  });
}, 1000);
