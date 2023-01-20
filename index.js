const walletFinder = require('./walletFinder.js');
const randomPrivateKeyGen = require('./randomPrivateKeyGen');
const checkBalance = require('./checkBalance');
const fs = require('fs');

class WalletInfo{
	toString(){
		return this.privateKey + ", " + this.ethAddress + ", " + this.ethBallance + "\n";
	}
}

async function brute(){
	let info = new WalletInfo();
	info.privateKey = randomPrivateKeyGen.generate();
	info.ethAddress = walletFinder.privateToAddress(info.privateKey);
	
	try{
		await checkBalance.checkETH(info.ethAddress).then((eth)=>{
		info.ethBallance = eth;

		if(eth != 0){
			fs.appendFile('./success.txt', info.toString(), err => {
  			if (err) {
    			console.error(err)
    			return
  			}
			})
		}else{
			fs.appendFile('./history.txt', info.toString(), err => {
  			if (err) {
    			console.error(err)
    			return
  			}
			})
			}
		});
	}catch(e){
		let now = new Date();
		console.log("api 사용량 제한 도달: " + now);
	}
	
}


async function start(){
	while(true){
		await brute();
	}
}

start();

