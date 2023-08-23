import Web3 from 'web3';
import contractABI from './ContratMariageABI.json';
const contractAddress = '0x180b663b067f659F18A96595A77Cfc50d4771714';

// Utilisez l'URL correcte du fournisseur pour Ganache
const web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));
const contract = new web3.eth.Contract(contractABI, contractAddress);

export default contract;

