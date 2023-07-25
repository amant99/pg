// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
    
    event LogMessage(string message);
    event UserDetails(string name, uint256 aadhar, address wallet);

    struct User {
        string name;
        uint256 aadhar;
        address wallet;
    }


    struct SalesDeed {
    string sellerName;
    string buyerName;
    uint256 purchasePrice;
    string propertyDescription;
    string paymentTerms;
    string titleGuarantee;
    string covenantsAndWarranties;
    string conditionsOfSale;
    uint256 closingDate;
}


    mapping(address => User) public users;
    address[] public keys;
    address public admin;

    constructor() ERC721("MyNFT", "NFT") {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    modifier onlyExistingUser() {
    require(users[msg.sender].wallet != address(0), "Only existing users can call this function");
    _;
}


    function createUser(string memory name, uint256 aadhar,address userWallet) external onlyAdmin {
        require(users[userWallet].wallet == address(0), "User already exists");

        User storage newUser = users[userWallet];
        newUser.name = name;
        newUser.aadhar = aadhar;
        newUser.wallet = userWallet;
        keys.push(userWallet);
        
    }

    function deleteUser(address userWallet) external onlyAdmin {
        require(users[userWallet].wallet != address(0), "User does not exist");
        delete users[userWallet];
        deleteUserAddress(userWallet);
        emit LogMessage("User deletion successfully");
        
    }

    function mint(address to, uint256 tokenId) external {
        require(users[to].wallet != address(0), "Only existing users can tokenize their land as NFTs");
        _mint(to, tokenId);
    }

    function transfer(address from, address to, uint256 tokenId) external {
        require(ownerOf(tokenId) == from, "You are not the owner of this NFT");
        require(users[from].wallet != address(0), "Sender is not an authorized user");
        require(users[to].wallet != address(0), "Receiver is not an authorized user");
        safeTransferFrom(from, to, tokenId);
    }

    function deleteUserAddress(address target) public {
        for (uint256 i = 0; i < keys.length; i++) {
            if (keys[i] == target) {
                keys[i] = keys[keys.length - 1];
                keys.pop();
                break;
            }
        }
    }


    function getAllUsers() external {
        for (uint256 i=0 ; i <  keys.length; i++) {
            User memory user = users[keys[i]];
            emit UserDetails(user.name, user.aadhar, user.wallet);
        }
    }

    function getOwnerName(uint256 tokenId) public view returns (address, string memory) {
        require(_exists(tokenId), "Token does not exist");
        address tokenOwner = ownerOf(tokenId);
        User memory user = users[tokenOwner];
        return (tokenOwner, user.name);
    }

    function registerLand() external onlyExistingUser() {
    // Function implementation
    // This function can only be called by existing users
}


}