const {publicKeyCreate} = require('secp256k1');
// npm install secp256k1


const privateKey = 'e5a13da024286ccf8eb589022eb88b48106f888100a5d29ee839dab26eb2a9cf';

const privateKeyBuffer = Buffer.from(privateKey, 'hex');

const publicKey = Buffer.from(publicKeyCreate(privateKeyBuffer, false)).toString('hex');

console.log('public key:' ,publicKey, publicKey.length)

//its uncompressed form of key we need compressed to use
//04abde03939f9458e7fb48ded937f3ef02f45c7a7ee4262ce99ef5d9a0c81ec5144626ea2ab838b14ccae614e461ac994c299b2f58aa1c09db5d1f0771c5d8dbf8