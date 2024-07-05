const hre = require("hardhat");

async function main() {
  const LibraryCard = await hre.ethers.getContractFactory("LibraryCard");
  const libraryCard = await LibraryCard.deploy();
  await libraryCard.deployed();

  console.log(`LibraryCard contract deployed to ${libraryCard.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
