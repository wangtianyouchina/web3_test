const axios = require('axios');

async function main() {
    require('dotenv').config();
    const { API_URL, PRIVATE_KEY } = process.env;
    const Web3 = require("web3");
    const web3 = new Web3(API_URL);
    const myAddress = '0x4614D2dcc626E9B34dE32027573c980D02A95221' //TODO: replace this address with your own public address

    const nonce = await web3.eth.getTransactionCount(myAddress, 'latest'); // nonce starts counting from 0
    console.log("nonce == " , nonce);
    let gasPrices = await getCurrentGasPrices()
    const gas = gasPrices.high * 1000000000;

    console.log("gas == " , gas);

    const transaction = {
     'to': '0x110160B5ABad2b1595c4BA4030b3EF2568361790', // faucet address to return eth
     'value': 100,
     'gasLimit': 30000,
     'maxFeePerGas': gas,// 80000000108,133000000000
     'nonce': nonce,
     // optional data field to send message or execute smart contract
    };

    const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);
    console.log("signedTx == ",signedTx);
    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
    if (!error) {
      console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
    } else {
      console.log("❗Something went wrong while submitting your transaction:", error)
    }
   });
}

async function getCurrentGasPrices() {
    let response = await axios.get('https://ethgasstation.info/json/ethgasAPI.json');
    let prices = {
      low: response.data.safeLow / 10,
      medium: response.data.average / 10,
      high: response.data.fast / 10
    };
    return prices;
}
main();
