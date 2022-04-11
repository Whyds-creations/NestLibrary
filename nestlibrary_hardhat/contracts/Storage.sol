// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

//Contract definition conforming to ERC20 standards, can be burnable and access can also be controlled.
//Permissions on the contract can be granted on-demand
contract WakandaToken is ERC20, ERC20Burnable, AccessControl {
    //Hash input using keccak256 hashing
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    //Hash input for batch transfer role using keccak256
    bytes32 public constant BATCH_TRANSFER_ROLE = keccak256("BATCH_TRANSFER_ROLE");

    //Events
    event BatchTransfer(address loyalCustomers, uint256 amount);
    event BatchTransferDelegated (address account);

    //Defines constructor with token name and symbol
    constructor() ERC20("Wakanda Token", "WAT") {
        //Grants admin role to the contract deployer
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);

        //Grants minter role to the contract deployer
        _grantRole(MINTER_ROLE, msg.sender);

        //Grants batch transfer role to contract deployer
        _grantRole(BATCH_TRANSFER_ROLE, msg.sender);

        //Mints initial amount of tokens and assign them to the contract deployer
        _mint(msg.sender, 1000 * 10 ** decimals());
    }

    //Define funciton for minting and make function only callable from address with MINTER_ROLE
    function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }

    function batchTransfer(address[] calldata loyalCustomers, uint256[] calldata amounts) public onlyRole (BATCH_TRANSFER_ROLE)  returns (bool){
        require(.length == amounts.length, "Number of recipients is not equal to amounts to be transferred");
        require(recipients.length <= 200, "Number of recipients exceeds maximum addresses allowed in a batch transfer");
                     
        //Transfer tokens to adddresses
        for (uint256 i = 0; i < recipients.length; i++) {
            require(recipients[i] != address(0), "Cannot transfer to address 0");
            require(balanceOf(address(this))  >= amounts[i], "Balance not enough to continue batch transfer");
            
            transfer(recipients[i], amounts[i] * 10 ** decimals());
        }
        emit BatchTransfer(address, amount);
        return true;
    }

    function delegateBatchTransfer (address account) public onlyRole (DEFAULT_ADMIN_ROLE) returns(bool) {
        require(account != address(0), "Cannot delegate to address 0");
        _grantRole(BATCH_TRANSFER_ROLE, account);
        
        emit BatchTransferDelegated(account);
        return true;
    }
}