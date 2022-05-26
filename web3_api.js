var Web3 = require('web3');
var fs = require('fs')
let web3 = new Web3("HTTP://127.0.0.1:7545");

/*
* Eth: Eth(provider),
    Net: Net(provider),
    Personal: Personal(provider),
    Shh: Shh(provider),
    Bzz: Bzz(provider),
*/
async function web3_test () {

    console.log(Web3.modules);
    console.log(web3.version);
    console.log(web3.currentProvider);
    console.log(web3.providers);

    var subscription = web3.eth.subscribe('logs', function(error, result){
        if (!error)
            console.log(result);
    });
    
    // unsubscribes the subscription
    subscription.unsubscribe(function(error, success){
        if(success)
            console.log('Successfully unsubscribed!');
    });
    
  
    const myAddress =  "0x53fEB2fa05dB4859886c96c4360dE41BEF743d5E";
    const nonce = await web3.eth.getTransactionCount(myAddress, 'latest'); // nonce starts counting from 0

    var transaction = {
     'from':'0x53fEB2fa05dB4859886c96c4360dE41BEF743d5E',
     'to': '0x29a10D5bEAE1661320b9C6d700c986D0498b10e1', // faucet address to return eth
     'value': web3.utils.toWei('1','ether'),
     'gas': 30000,
    //  'maxFeePerGas': 1000000108,
     'nonce': nonce,
     // optional data field to send message or execute smart contract
    };
    // transaction["to"] = toArrs[i];
    const PRIVATE_KEY = "d4868a44b456cb16f9d16eb5c0a6f9a3c25c221948f478dffd5e02b9dc2fbb54";
    const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);


    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
    if (!error) {
      console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
    } else {
      console.log("❗Something went wrong while submitting your transaction:", error)
    }
   });

//   await web3.eth.getBalance(accounts[0], (err, bal) => { console.log("Ganache balance", bal); } );
//   await web3.eth.sendTransaction({to:newAccount, from:accounts[0], value:web3.utils.toWei("5", "ether")});
//   await web3.eth.getBalance(newAccount, (err, bal) => { console.log("New Account balance", bal); } );
console.log(web3.utils.toChecksumAddress('0xc1912fee45d61c87cc5ea59dae31190fffff232d'));
console.log(web3.utils.toChecksumAddress('0XC1912FEE45D61C87CC5EA59DAE31190FFFFF232D'));

}

web3_test();