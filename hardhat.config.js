require("@nomiclabs/hardhat-truffle5");
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');

const { alchemyApiKey, mnemonic } = require('./secrets.json');


module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `${alchemyApiKey}`,
      accounts: {mnemonic: mnemonic}
    }
  }
};
