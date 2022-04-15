const hre = require("hardhat");

async function main() {
  const firstContract = await hre.ethers.getContractFactory("firstContract");
  const deployFirstContract = await firstContract.deploy();

  await deployFirstContract.deployed();

  console.log("My first contract deployed to:", deployFirstContract.address);
}

;(async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();