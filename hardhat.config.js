require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.7",
  networks: {
    rinkeby:{
      url: `${process.env.MY_ALCHEMY_URL}`,
      accounts: process.env.MY_METAMASK_PRIVATE_KEY
    },
  },
};
