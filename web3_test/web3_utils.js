var Web3 = require('web3');
var web3 = new Web3("https://rinkeby.infura.io/v3/072fd3b4b8a74eb086def415c7f62c07");

async function main () {


    var BN = web3.utils.BN;


    var hashHex = web3.utils.randomHex(32);

    console.log(web3.utils.randomHex(2));//两个字节的 16进制的 字符串
    console.log(web3.utils.sha3('123')); // hash 对字符串
    console.log(web3.utils.keccak256('123'));// 同sha3 
    console.log(web3.utils.sha3(new BN('123')));//  对BN
    console.log(web3.utils.sha3('')); // hash 对字符串
    console.log(web3.utils.sha3Raw(''));// 如果传入的是空字符串，将返回空字符串的哈希值而不是 null

    //这意味着对这些参数在进行哈希运算之前先进行 ABI 转换和紧凑打包编码。
    console.log(web3.utils.soliditySha3('234564535', '0xfff23243', true, -10));
    console.log(web3.utils.soliditySha3('123'));
    console.log(web3.utils.soliditySha3());
    console.log(web3.utils.soliditySha3Raw());




    // 转为16进制字符串 参数可以是 string|number| bigNumber| BN
    console.log(web3.utils.toHex('234'));

    // 16进制  转为 numberString
    console.log(web3.utils.hexToNumberString('123'));
    // 16进制  转为 number
    console.log(web3.utils.hexToNumber('123'));

    // 判断是不是16进制 可以是字符串 可以是数字
    console.log('123 是16进制字符串 ' + web3.utils.isHex('123'));
    console.log('  是16进制字符串 ' + web3.utils.isHex(''));
    console.log(' 123  是16进制字符串 ' + web3.utils.isHex(123));// 这个要小心 可以看16进制  可以看成10进制
    console.log(' null  是16进制字符串 ' + web3.utils.isHex(null));

    //是不是严格的 16进制字符串
    console.log(web3.utils.isHexStrict('123'));
    console.log(web3.utils.isHexStrict(123));
    console.log(web3.utils.isHexStrict(0x123));
    console.log(web3.utils.isHexStrict('0x123'));

    // 是不是以太坊地址
    // 纯大小 or 纯小写 不检验校验和
    console.log('0XC1912FEE45D61C87CC5EA59DAE31190FFFFF232D 是不是以太坊地址' + web3.utils.isAddress('0XC1912FEE45D61C87CC5EA59DAE31190FFFFF232D'));
    console.log('0xc1912fee45d61c87cc5ea59dae31190fffff232d 是不是以太坊地址' + web3.utils.isAddress('0xc1912fee45d61c87cc5ea59dae31190fffff232d'));

    console.log('0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d 是不是以太坊地址' + web3.utils.isAddress('0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'));

    // 将纯大小写的地址 转为 校验和 diz地址
    console.log(web3.utils.toChecksumAddress('0XC1912FEE45D61C87CC5EA59DAE31190FFFFF232D'));

    // 是不是符合 校验和的 地址
    console.log(web3.utils.checkAddressChecksum('0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'));
    //Error: This method only supports Buffer but input was: 123
    //Buffer  实例代表了V8引擎分配的一段内存，基本上是一个数组，成员都为整数值
    // console.log(web3.utils.sha3(123)); // 不能对数字hash

    // BN.js
    var number = new BN('123');

     web3.utils.isBN(number);

}

main();

