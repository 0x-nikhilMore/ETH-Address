const keccak256 = require("keccak256");

const publicKey = 'abde03939f9458e7fb48ded937f3ef02f45c7a7ee4262ce99ef5d9a0c81ec5144626ea2ab838b14ccae614e461ac994c299b2f58aa1c09db5d1f0771c5d8dbf8';

const pubKey = Buffer.from(publicKey, 'hex').toString('hex');
console.log('public Key......: ', pubKey, '   ', pubKey.length);

const address = keccak256(pubKey).toString('hex').slice(64 - 40);
console.log('address is.....', `0x${address}`, '   ', address.length)


//0x3841c441e0d0160aef45370726a028d3840f5442