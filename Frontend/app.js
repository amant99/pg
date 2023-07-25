// document.addEventListener("DOMContentLoaded", function () {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const contractABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "message",
          "type": "string"
        }
      ],
      "name": "LogMessage",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "aadhar",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "wallet",
          "type": "address"
        }
      ],
      "name": "UserDetails",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "admin",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "aadhar",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "userWallet",
          "type": "address"
        }
      ],
      "name": "createUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "userWallet",
          "type": "address"
        }
      ],
      "name": "deleteUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        }
      ],
      "name": "deleteUserAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllUsers",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getOwnerName",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "keys",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "registerLand",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "users",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "aadhar",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "wallet",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
  
  // Connect to Ethereum node
  const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
  const signer = provider.getSigner();
  
  // Create a new ethers contract instance
  const contract = new ethers.Contract(contractAddress, contractABI, provider).connect(signer);
  
  // Function to create a new user
  document.getElementById("createUserForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const aadhar = document.getElementById("aadhar").value;
    // const userWallet = document.getElementById("userWallet").value.toLowerCase();
    const userWallet = document.getElementById("userWallet").value;

    const caller = await signer.getAddress();
    console.log("Caller Address:", caller);
    
    console.log(userWallet)
  
    try {
      await contract.createUser(name, aadhar, userWallet);
      console.log("User created successfully!");
      getAllUsers();
    } catch (error) {
      console.error("Error creating user:", error);
    }
  });

  
  // Function to display all users
  async function getAllUsers() {
    try {
      const usersList = document.getElementById("usersList");
      usersList.innerHTML = "Loading...";
  
      // Remove previous event listeners to prevent duplicates
      contract.removeAllListeners("UserDetails");
  
      const users = [];
      contract.on("UserDetails", (name, aadhar, wallet) => {
        users.push({ name, aadhar: aadhar.toNumber(), wallet });
      });
  
      await contract.getAllUsers();
  
      // Wait for all events to be processed
      setTimeout(() => {
        usersList.innerHTML = ""; // Clear previous content
        users.forEach((user) => {
          const userDiv = document.createElement("div");
          userDiv.textContent = `Name: ${user.name}, Aadhar: ${user.aadhar}, Wallet: ${user.wallet}`;
          usersList.appendChild(userDiv);
        });
      }, 500); // Delay for 500ms to ensure all events are processed
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  
  
  // Get all users on page load
  getAllUsers();
  
  // Function to mint a new NFT
  document.getElementById("mintNFTForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const recipient = document.getElementById("recipient").value;
    const tokenId = document.getElementById("tokenId").value;
  
    try {
      await contract.mint(recipient, tokenId);
      console.log("NFT minted successfully!");
      await contract.setApprovalForAll(contractAddress,true);
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  });
  
  // Function to delete a user by admin
  document.getElementById("deleteUserForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const userWallet = document.getElementById("deleteUserWallet").value;
  
    try {
      await contract.deleteUser(userWallet);
      console.log("User deleted successfully!");
      getAllUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  });
  
  // Function to get owner name of an NFT
  document.getElementById("getOwnerNameForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const tokenId = document.getElementById("tokenIdGetOwner").value;
  
    try {
      const [owner, name] = await contract.getOwnerName(tokenId);
      console.log(`NFT Owner: ${owner}, Name: ${name}`);
    } catch (error) {
      console.error("Error getting NFT owner name:", error);
    }
  });
  
  // Function to register land (Only existing users can call this)
  document.getElementById("registerLandForm").addEventListener("submit", async (event) => {
    event.preventDefault();
  
    try {
      await contract.registerLand();
      console.log("Land registered successfully!");
    } catch (error) {
      console.error("Error registering land:", error);
    }
  });
  



  
  // Function to connect to MetaMask
  async function connectToMetaMask() {
    try {
      // Detect the MetaMask provider
      const provider = await detectEthereumProvider();
  
      if (provider) {
        // Request access to the user's MetaMask accounts
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  
        // Now you can interact with the accounts and smart contracts
        // For example:
        // const contractAddress = '0x...'; // Replace with your deployed contract address
  
        // Create a Web3Provider from the detected provider
        const ethersProvider = new ethers.providers.Web3Provider(provider);
  
        // Create a signer for the connected account
        const signer = ethersProvider.getSigner();
  
        // Create the contract instance using the signer
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
  
        // Display the connected account
        const accountElement = document.getElementById('account');
        accountElement.textContent = accounts[0];
  
        // Fetch the account balance
        const balance = await getAccountBalance(accounts[0]);
  
        // Display the account balance
        const balanceElement = document.getElementById('balance');
        balanceElement.textContent = balance;
  
        // You can call your contract functions or send transactions from here
        // For example:
        // const result = await contract.myFunction();
        // console.log(result);
      } else {
        console.log('Please install MetaMask to use this feature.');
      }
    } catch (error) {
      console.error(error);
    }
  }
 
  // Function to get the account balance
  async function getAccountBalance(account) {
    try {
      // Fetch the balance from the Ethereum blockchain
      const balance = await ethereum.request({
        method: 'eth_getBalance',
        params: [account, 'latest'],
      });
  
      // Convert the balance from Wei to Ether
      const balanceInEther = ethers.utils.formatEther(balance);
      return balanceInEther;
    } catch (error) {
      console.error('Error fetching balance:', error);
      return 'N/A';
    }
  }
  // Connect when the page loads or when the user clicks a button, etc.
  // For example:
  window.addEventListener('DOMContentLoaded', () => {
    connectToMetaMask();
  });

  
  // Function to transfer NFT
document.getElementById("transferNFTForm").addEventListener("submit", async (event) => {
  event.preventDefault();
      const caller = web3.currentProvider.selectedAddress;
    console.log("caller:",caller)
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const tokenId = document.getElementById("tokenId1").value;

  // Convert the MetaMask provided addresses to checksum format
  const fromAddressChecksum = ethers.utils.getAddress(from);
  const toAddressChecksum = ethers.utils.getAddress(to);

  // Log the checksum addresses (optional, for verification)
  console.log("From (Checksum):", fromAddressChecksum);
  console.log("To (Checksum):", toAddressChecksum);

  try {

       
      const [owner, name] = await contract.getOwnerName(tokenId);
      // await contract.approve(caller, tokenId);
      console.log(`NFT Owner: ${owner}, Name: ${name}`);
    // Use the checksum addresses in the contract function
    await contract.transfer(fromAddressChecksum, toAddressChecksum, tokenId);
    console.log("NFT transferred successfully!");
  } catch (error) {
    console.error("Error transferring NFT:", error);
  }
});

  
  
  
  
  
  
  // ... Add more functions for other contract interactions ...
  
  // Example usage of functions (replace the arguments with appropriate values)
  // createUser("John Doe", "1234567890", "0xUserWalletAddress");
  // getAllUsers();
  // mintNFT("0xRecipientAddress", 1);
  // transferNFT("0xFromAddress", "0xToAddress", 1);
  // });