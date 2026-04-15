// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Velly {
    string public name = "Velly";
    uint256 public totalValue;

    event ValueUpdated(address indexed user, uint256 amount);

    function updateValue(uint256 _amount) public {
        totalValue += _amount;
        emit ValueUpdated(msg.sender, _amount);
    }

    function getValue() public view returns (uint256) {
        return totalValue;
    }
}
