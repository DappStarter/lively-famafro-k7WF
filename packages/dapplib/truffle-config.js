require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name rebel mad promote grid nature slot gas'; 
let testAccounts = [
"0x7ffc80e76521ac87c87d435a2899b5e7eec099f8d77afcac35340e7448da3d27",
"0xa54a2bd816b9b5667cb9ec7db425a31f6a14148b6d43cd86e4e407ee40d8c864",
"0x540b1aca41624ad59fc0751fa0414ad00c468eff50805f1210f5f7a69adeee64",
"0x3da894084ebff4709c0a12c43cef2ba955e86623f5e4e679ca69e8375a3a9e66",
"0x6b7d05d4e3f254a9fc13ef9286f9f0d7dff8be844bfe51fd651cddeb5e5e3500",
"0xf879d171f7e4c54adfe5d4f1cd617349ccf2038edce53fcc4a3a2d42db5d363f",
"0xf53716b1b6bbe14f368dc09a4189461057ed9353c8fcc745e8551d91be623142",
"0x852dfdd374b7739af89ed78d26a355eed9fc3cbf172b34676d5fc797ac6b13ab",
"0xd7e995de9777fe39da4cb870de6f94e99205b0553fe66ceab395321dc00d2f78",
"0xbab88fb297adf96f49b02735040b88a49ca5e20a6649a4b9902e877eb142b2cb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

