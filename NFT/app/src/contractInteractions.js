import Web3 from 'web3';
import contractABI from './contratMariageABI.json'; // Remplacez par le chemin vers le fichier ABI
const contractAddress = '0x...'; // Adresse de votre contrat

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545')); // Connexion à Ganache ou Sepolia
const contract = new web3.eth.Contract(contractABI, contractAddress);

export default contract;
