const { ethers, upgrades } = require('hardhat');

async function main () {
  const ETHTrackerNFT = await ethers.getContractFactory('ETHTrackerNFT');
  console.log('Deploying ETHTrackerNFT...');
  const box = await upgrades.deployProxy(ETHTrackerNFT, ["https://base.com/","0x9326BFA02ADD2366b30bacB125260Af641031331"], {initializer: 'initialize'});
  await box.deployed();
  console.log('ETHTrackerNFT deployed to:', box.address);
}

main();