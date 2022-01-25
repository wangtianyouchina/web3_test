var Web3 = require('web3');
var web3 = new Web3("https://rinkeby.infura.io/v3/072fd3b4b8a74eb086def415c7f62c07");

const EthereumTx = require('ethereumjs-tx').Transaction

//Setting Receiving and Sending Address

var sendingAddress = '0x4614D2dcc626E9B34dE32027573c980D02A95221'

var receivingAddress = '0x110160B5ABad2b1595c4BA4030b3EF2568361790'

//Checking the balance of each account in ether


console.log(web3.eth.getBalance(sendingAddress));
console.log(web3.eth.getBalance(receivingAddress));


//Creating a transaction

let count = web3.eth.getTransactionCount(sendingAddress);
var rawTransaction = {
    nonce: web3.utils.toHex(count),
    from:sendingAddress,
    to: receivingAddress,
    gasPrice: web3.utils.toHex(20000000),
    gasLimit: web3.utils.toHex(30000),
    value: web3.utils.toHex(web3.utils.toWei('0.00000001'))
}

//Sign the Transaction

var privateKey = 'f7ca23a8ae465520447381b0faa10dc03acdf32b1a7aba2d948543463dfc3c75'

var senderPrivateKeyHex = new Buffer.from(privateKey,'hex')

var transaction = new EthereumTx(rawTransaction,{chain:'rinkeby'});

transaction.sign(senderPrivateKeyHex)
// console.log(transaction);

//Send transaction to the network
var serializedTransaction = transaction.serialize()
console.log(serializedTransaction + '111111111');
web3.eth.sendSignedTransaction('0x' + serializedTransaction.toString('hex')).on('receipt', console.log);
