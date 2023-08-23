import React, { useState } from 'react';
import contract from './contractInteractions';

function App() {
  const [marriageStatus, setMarriageStatus] = useState('');

  async function fetchMarriageStatus() {
    const status = await contract.methods.marie().call();
    setMarriageStatus(status);
  }

  return (
    <div className="App">
      <h1>Contrat de Mariage</h1>
      <button onClick={fetchMarriageStatus}>Vérifier le statut du mariage</button>
      <p>Statut du mariage : {marriageStatus.toString()}</p>
    </div>
  );
}

export default App;
