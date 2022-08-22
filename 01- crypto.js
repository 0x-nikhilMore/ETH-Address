const crypto = require(`crypto`);

const privateKey = crypto.randomBytes(32).toString('hex');

console.log(`private key :- ${privateKey}`); 
//8e0c00c2aca9d01aee89cdcc5a98cd001ef8be43372e84645b0be3e9e50e9636