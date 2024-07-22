const hre = require("hardhat");

async function main() {
  const registrationFee = hre.ethers.utils.parseEther("0.01"); // Set registration fee to 0.01 ETH
  const LibraryCard = await hre.ethers.getContractFactory("LibraryCard");
  const libraryCard = await LibraryCard.deploy(registrationFee);
  await libraryCard.deployed();

  console.log(`LibraryCard contract deployed to ${libraryCard.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
