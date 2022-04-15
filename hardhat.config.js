require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: process.env.MY_ALCHEMY_URL,
      accounts: [process.env.MY_METAMASK_PRIVATE_KEY]
    }
  },
};
