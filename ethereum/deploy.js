// Load environment variables.
require("dotenv").config();

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const providerWallet = new HDWalletProvider(process.env.ACCOUNT_MNEMONIC, process.env.RINKEBY_ENDPOINT);
const web3 = new Web3(providerWallet);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log("Attempting to deploy from account", accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ gas: '1000000', from: accounts[0] });
    
    console.log("Campaign factory contract deployed to", result.options.address);
};
deploy();
