const Web3 = require('web3');
const rpcURL ="https://mainnet.infura.io/v3/{your infura eth api key}"
const web3 = new Web3(rpcURL);


async function checkETH(account){
    return web3.eth.getBalance(account).then((bal) => {
        return web3.utils.fromWei(bal, "ether");
    })
}

module.exports.checkETH = checkETH;