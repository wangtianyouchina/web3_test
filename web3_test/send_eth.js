'use strict';

var Web3 = require('web3');
var fs=require('fs')


async function concurrent () {
    let web3 = new Web3("HTTP://127.0.0.1:7545");
    const newAccount = await web3.eth.personal.newAccount('test');
    console.log("newAccount", newAccount);
    await web3.eth.personal.unlockAccount(newAccount, 'test', 10000);
    await web3.eth.getBalance(accounts[0], (err, bal) => { console.log("Ganache balance", bal); } );
    await web3.eth.sendTransaction({to:newAccount, from:accounts[0], value:web3.utils.toWei("5", "ether")});
    await web3.eth.getBalance(newAccount, (err, bal) => { console.log("New Account balance", bal); } );
  
  

  }

  async function main() {


 
        




    let web3 = new Web3("HTTP://127.0.0.1:7545");

    const myAddress = '0x1554e095d677776aDB802E590d1FE34efC1A64dA' //TODO: replace this address with your own public address
    let PRIVATE_KEY  = 'bd6edb4129eb7f5bbfd95b3de3aed463095872d30405eee8ff6ff97c03a2457b';
    var toArrs = ['0x7ea1C9201EF09507059D5e60CBC992eB96905BE8','0x8d92F152401E97df3AD1aB30ed4564626D354aDb','0xc515AB2AAd46a7bEff50beD96874ED27497cd89d'];
    fs.readFile('toaddress.json','utf8',function (err, data) {
        if(err) console.log(err);
        var test1=JSON.parse(data);//读取的值
        toArrs = test1;
        console.log(test1);
        
    });
    for (var i = 0; i < toArrs.length ; i ++) {
        const nonce = await web3.eth.getTransactionCount(myAddress, 'latest'); // nonce starts counting from 0

        var transaction = {
         'from':'0x1554e095d677776aDB802E590d1FE34efC1A64dA',
         'to': '0x7ea1C9201EF09507059D5e60CBC992eB96905BE8', // faucet address to return eth
         'value': web3.utils.toWei('1','ether'),
         'gas': 30000,
        //  'maxFeePerGas': 1000000108,
         'nonce': nonce,
         // optional data field to send message or execute smart contract
        };
        transaction["to"] = toArrs[i];
    
        const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);
    
    
        web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
        if (!error) {
          console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
        } else {
          console.log("❗Something went wrong while submitting your transaction:", error)
        }
       });

    }
   
}

main();


  
// var sendingAddress = '0x51E097966D60a7e32737298511472B50E73443f3'

// var receivingAddress = '0x9AfdDdcd18F69E190EF5157990662871c8618609'


// // console.log("1111111");


// const nonce =  web3.eth.getTransactionCount(sendingAddress); // nonce starts counting from 0

// const transaction = {
//     'from':sendingAddress,
//  'to': receivingAddress, // faucet address to return eth
//  'value': web3.utils.toHex(web3.utils.toWei('1','ether')),
//  'gas':30000,
//  'maxFeePerGas' : 1000000108,
//  'nonce': nonce
//  // optional data field to send message or execute smart contract
// };

// //Sign the Transaction

// var PRIVATE_KEY = 'c938ee74864208d407932c699d62a273465a447d08babb9f4980984341ef30cf'

// const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);


// web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
//     if (!error) {
//       console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
//     } else {
//       console.log("❗Something went wrong while submitting your transaction:", error)
//     }
//    });