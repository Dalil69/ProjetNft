// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../ContratMariage.sol";

contract TestContratMariage {
    ContratMariage contrat;

    function beforeEach() public {
        contrat = new ContratMariage(address(0x1), address(0x2));
    }

    function testMarier() public {
        contrat.marier();
        bool estMarie = contrat.marie();
        Assert.isTrue(estMarie, "Le mariage n'a pas eu lieu comme prévu.");
    }
}
