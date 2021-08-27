const { expect } = require('chai');
 
let Box;
let box;
 
// Start test block
describe('ETHTrackerNFT (proxy)', function () {
  beforeEach(async function () {
    Box = await ethers.getContractFactory("ETHTrackerNFT");
    box = await upgrades.deployProxy(ETHTrackerNFT, ["https://base.com/","0x9326BFA02ADD2366b30bacB125260Af641031331"], {initializer: 'initialize'});
  });
 
});