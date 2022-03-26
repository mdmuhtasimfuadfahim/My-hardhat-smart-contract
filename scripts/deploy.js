const hre = require("hardhat");

async function main() {
  const firstContract = await hre.ethers.getContractFactory("firstContract");
  const myFirstContract = await firstContract.deploy();

  await myFirstContract.deployed();

  console.log("My first contract deployed to:", myFirstContract.address);
}

;(async () =>{
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
