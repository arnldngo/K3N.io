import { HardhatUserConfig } from "hardhat/config";

import { config as dotEnvConfig } from 'dotenv';
dotEnvConfig();

import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import 'hardhat-typechain';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';


const PRIVATE_KEY: string = process.env.PRIVATE_KEY as string;
const STAKER_KEY: string = process.env.STAKER_KEY as string;
console.log("process.env?.AVAX_MAINNET", process.env?.AVAX_MAINNET);

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    tenderly: {
      url: process.env?.AVAX_MAINNET,
      accounts: [PRIVATE_KEY]
    }
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  mocha: {
    timeout: 200000,
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },

};

export default config;
