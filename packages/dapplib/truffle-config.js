require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gesture robot fresh tell stone note stereo home gesture creek flush gate'; 
let testAccounts = [
"0x200a8e11356992d787b8a02aa6c54c74e5a80a3114ea68595a8ff7378087ee10",
"0x223ff9ff8c00954261bac8e98cc13652447cd30057bfd719dfbf3c6ef94cc384",
"0x33736e0f56f4cc1a334c94e4a777cead3ecea3ad2029113d471ea2ee31cd7774",
"0x929c22681c564bb62ebd40a85645b60cb004ad1b82f611f2249059f7480689fe",
"0xbcf99ba01670ad1f83836775450ee61585d019a025d8d5ad0c3da4a0de5e020e",
"0x7a8bc9834ee19d73d9e8c7d0fb092454262009a400e2f3ecefb7766092d1b0ef",
"0x6862ac17398a95d4ee282479470bdcaa6d1f92d80e4bc0e4d8aca9727b345b87",
"0x873a94e532b407a5f9cea86f07bc9b819c440d24030274d46c4995b9835f5203",
"0x2cdc4d7a0b7286e7675e811393c0ce86051d7d78ae134279c4b60af78fcb3fdf",
"0xa299f82c7407b22934a620a59660977b572958abca84e7e8d74e211293e688e5"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

