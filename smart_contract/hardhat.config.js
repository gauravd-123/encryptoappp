require('@nomiclabs/hardhat-waffle');
//https://eth-goerli.g.alchemy.com/v2/Hz9FG2GckmA3Zm34A7pVT_m9c8l92euG
module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Hz9FG2GckmA3Zm34A7pVT_m9c8l92euG',
      accounts: ['77c6ddbc9c5cdef72fd34d7610f16aeea5dc8805b94a2a256025f443e95137ee'],
    },
  },
};

//Transaction address: 0x34ed24798C92E157C839a53De0b5ad98DeaECD97