import Web3 from 'web3';
import contractABI from './ContratMariageABI.json';
const contractAddress = '0xc817680A20028390E7E2C6c3e38eAF57FcA08834';

// Utilisez l'URL correcte du fournisseur pour Ganache
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
const contract = new web3.eth.Contract(contractABI, contractAddress);

export default contract;

