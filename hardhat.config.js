/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.0",

  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/Infura_private_key`,
      accounts: [`Metamask_private_key`],
    },
  },
  
};
