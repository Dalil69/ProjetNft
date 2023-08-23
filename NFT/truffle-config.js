/**
 * Utilisez ce fichier pour configurer votre projet Truffle. Il est pré-configuré avec
 * des paramètres courants pour différents réseaux et fonctionnalités comme les migrations,
 * la compilation et les tests. Décommentez ceux dont vous avez besoin ou modifiez-les
 * selon les besoins de votre projet.
 *
 * Plus d'informations sur la configuration sont disponibles à l'adresse :
 *
 * https://trufflesuite.com/docs/truffle/reference/configuration
 *
 * Pour déployer via Infura, vous aurez besoin d'un fournisseur de portefeuille (comme @truffle/hdwallet-provider)
 * pour signer vos transactions avant de les envoyer à un nœud public distant. Les comptes Infura
 * sont disponibles gratuitement sur : infura.io/register.
 *
 * Vous aurez également besoin d'une mnémonique - la phrase de douze mots que le portefeuille utilise pour générer
 * des paires de clés publique/privée. Si vous publiez votre code sur GitHub, assurez-vous de charger cette
 * phrase à partir d'un fichier que vous avez ignoré par .gitignore pour qu'elle ne devienne pas accidentellement publique.
 */

 require('dotenv').config();
 const mnemonic = process.env["decorate because admit faint matter sun theme resist forget tomorrow tomato together"];
 const infuraProjectId = process.env["63ec2a204ea642268c0095ce7e6f9cd7"];

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  /**
   * Les réseaux définissent comment vous vous connectez à votre client Ethereum et vous permettent de définir les
   * paramètres par défaut que web3 utilise pour envoyer des transactions. Si vous n'en spécifiez pas, Truffle
   * va démarrer une blockchain de développement pour vous sur le port 9545 lorsque vous exécutez `develop` ou `test`.
   * Vous pouvez demander à une commande Truffle d'utiliser un réseau spécifique à partir de la ligne de commande, par exemple :
   *
   * $ truffle test --network <nom-du-réseau>
   */

  networks: {
    development: {
      host: "127.0.0.1",     // L'adresse où tourne Ganache (généralement localhost)
      port: 7545,            // Le port sur lequel Ganache écoute (par défaut, c'est souvent 7545)
      network_id: "*",       // Correspond à n'importe quel network_id (1 pour Ethereum Mainnet, 3 pour Ropsten, etc.)
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/${infuraProjectId}`),
      network_id: 5,         // L'ID de Goerli
      chain_id: 5
    }
  },

  // Configurez les options par défaut de Mocha ici, utilisez des rapports spéciaux, etc.
  mocha: {
    // timeout: 100000
  },

  // Configurez vos compilateurs
  compilers: {
    solc: {
      version: "0.8.13",      // Récupérez la version exacte depuis solc-bin
    }
  }
};
