var Web3 = require('web3');
var web3 = new Web3("https://rinkeby.infura.io/v3/072fd3b4b8a74eb086def415c7f62c07");
const EthereumTx = require('ethereumjs-tx').Transaction

// const axios = require('axios');



//Setting Receiving and Sending Address

var sendingAddress = '0x4614D2dcc626E9B34dE32027573c980D02A95221'

var receivingAddress = '0x110160B5ABad2b1595c4BA4030b3EF2568361790'
var privateKey = '0xf7ca23a8ae465520447381b0faa10dc03acdf32b1a7aba2d948543463dfc3c75'

//Checking the balance of each account in ether

var Tx = require('ethereumjs-tx').Transaction;
// var privateKey = Buffer.from('f7ca23a8ae465520447381b0faa10dc03acdf32b1a7aba2d948543463dfc3c75', 'hex');
// var nonce = await web3.eth.getTransactionCount(sendingAddress);

var rawTx = {
  nonce: '0x5',
  gasPrice:Web3.utils.toHex('80000000000'),//'0x09184e72a000',
  gasLimit: web3.utils.toHex(500000),
  from:sendingAddress,
  to: receivingAddress,
  value: '0x1111',
  chainId: web3.utils.toHex(3),
  data: Web3.utils.toHex("")
}

// var tx = new Tx(rawTx, {'chain':'ropsten'});
// tx.sign(privateKey);
//
// var serializedTx = tx.serialize();
const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);

// console.log('0x' + serializedTx.toString('hex'));
web3.eth.sendSignedTransaction(signedTx)
.on('receipt', console.log);
