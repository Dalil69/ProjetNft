import React, { useState } from 'react';
import contract from './contractInteractions'; // Importez le fichier de gestion des interactions avec le contrat
import Web3 from 'web3';

function App() {
  const [conjoint1, setConjoint1] = useState('');
  const [conjoint2, setConjoint2] = useState('');
  const [marriageStatus, setMarriageStatus] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545')); // Assurez-vous d'utiliser le bon fournisseur

  async function marier() {
    try {
      const accounts = await web3.eth.getAccounts();
      const fromAddress = accounts[0];
      
      await contract.methods.marier(conjoint1, conjoint2).send({ from: fromAddress });
      setMarriageStatus('Mariés');
      setConfirmation('Le mariage a été effectué avec succès.');
    } catch (error) {
      console.error(error);
      setConfirmation('Erreur lors de la tentative de mariage.');
    }
  }

  async function divorcer() {
    try {
      const accounts = await web3.eth.getAccounts();
      const fromAddress = accounts[0];
      
      await contract.methods.divorcer().send({ from: fromAddress });
      setMarriageStatus('Divorcés');
      setConfirmation('Le divorce a été effectué avec succès.');
    } catch (error) {
      console.error(error);
      setConfirmation('Erreur lors de la tentative de divorce.');
    }
  }

  return (
    <div className="App">
      <h1>Contrat de Mariage</h1>
      <input type="text" placeholder="Adresse conjoint 1" onChange={e => setConjoint1(e.target.value)} />
      <input type="text" placeholder="Adresse conjoint 2" onChange={e => setConjoint2(e.target.value)} />
      <button onClick={marier}>Marier</button>
      <button onClick={divorcer}>Divorcer</button>
      <p>Statut du mariage : {marriageStatus}</p>
      <p>{confirmation}</p>
    </div>
  );
}

export default App;
