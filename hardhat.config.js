require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "rinkeby",
  networks: {
    rinkeby:{
      hardhat: {},
      url: process.env.MY_ALCHEMY_URL,
      accounts: [`0x${process.env.MY_METAMASK_PRIVATE_KEY}`]
    },
  },
};
