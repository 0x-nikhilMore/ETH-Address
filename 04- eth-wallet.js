const Wallet = require('ethereumjs-wallet');

const ethWallet = Wallet.default.generate();

console.log(`Address key: ${ethWallet.getAddressKeyString()}`)
console.log(`Private key: ${ethWallet.getPrivateKeyString()}`)