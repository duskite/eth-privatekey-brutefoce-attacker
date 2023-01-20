const privateKeyToPublicKey = require('ethereum-private-key-to-public-key');
const publicKeyToAddress = require('ethereum-public-key-to-address');

function privateToAddress(privateKey){

	const publicKey = privateKeyToPublicKey(Buffer.from(privateKey, 'hex')).toString('hex');
	const address = publicKeyToAddress(Buffer.from(publicKey,'hex'));
	
	return address;
}

module.exports.privateToAddress = privateToAddress;