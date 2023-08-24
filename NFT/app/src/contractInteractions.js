import Web3 from 'web3';
import contractABI from './ContratMariageABI.json';
const contractAddress = '0x2cbf48AC353B3672F7FD0EB665B3D9DF27e6FfE8';

// Utilisez l'URL correcte du fournisseur pour Ganache
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
const contract = new web3.eth.Contract(contractABI, contractAddress);

export default contract;

