const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("firstContract", function () {
  it("should store student information", async function () {
    const firstContract = await ethers.getContractFactory("firstContract");
    const myFirstContract = await firstContract.deploy();
    await myFirstContract.deployed();

    const myFirstContractInfo = await myFirstContract.storeStudentInfo("171014051", "Md. Muhtasim Fuad Fahim", "ULAB", "CSE");

    // wait until the transaction is mined
    await myFirstContractInfo.wait();

    expect(await myFirstContract.getStudentInfo("171014051"));
  });
});
