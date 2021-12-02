import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // we are in the browser and we have web3 injected in the browser
    web3 = new Web3(window.web3.currentProvider);
} else {
    // we are on the browser OR the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/29976337f1704a39ae87ba3bfa76d55d'
    );
    web3 = new Web3(provider);
}

export default web3;