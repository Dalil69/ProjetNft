// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ContratMariage {
    address public conjoint1;
    address public conjoint2;
    bool public marie;

    constructor() {
        marie = false;
    }

    function marier(address _conjoint1, address _conjoint2) external {
        require(!marie, "Le mariage a deja eu lieu.");
        conjoint1 = _conjoint1;
        conjoint2 = _conjoint2;
        marie = true;
    }

    function divorcer() external {
        require(msg.sender == conjoint1 || msg.sender == conjoint2, "Vous n'etes pas autorise.");
        require(marie, "Le mariage n'a pas encore eu lieu.");
        marie = false;
        conjoint1 = address(0);
        conjoint2 = address(0);
    }
}
