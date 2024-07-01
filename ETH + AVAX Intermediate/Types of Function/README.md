# MyToken (MTK) ERC20 Token

This repository contains a basic ERC20 token smart contract implemented in Solidity. The contract allows for token minting by the owner, as well as token transfer and burning by any user.

## Table of Contents

1. [Contract Details](#contract-details)
2. [Features](#features)
3. [Deployment](#deployment)
    - [Using Remix](#using-remix)
    - [Using HardHat](#using-hardhat)
4. [Interacting with the Contract](#interacting-with-the-contract)
5. [Security Considerations](#security-considerations)
6. [Authors](#authors)
7. [License](#license)
8. [Contributing](#contributing)

## Contract Details

- **Name:** MyToken
- **Symbol:** MTK
- **Decimals:** 18 (standard for most ERC20 tokens)

## Features

1. **Minting:** The contract owner can mint new tokens to any specified address.
2. **Transfers:** Users can transfer tokens to other addresses.
3. **Burning:** Users can burn (destroy) their own tokens.

## Deployment

To deploy this contract, you can use tools like Remix (online Solidity IDE) or HardHat (local development environment).

### Using Remix

1. Open [Remix](https://remix.ethereum.org/).
2. Create a new Solidity file and paste the contract code.
3. Compile the contract in the "Solidity Compiler" tab.
4. Go to the "Deploy & Run Transactions" tab.
5. Select "MyToken" from the contract dropdown.
6. Click "Deploy" and confirm the transaction.

### Using HardHat

1. Install HardHat:
   ```bash
   npm install --save-dev hardhat
2. Create a new HardHat project:
   ```bash
   npx hardhat
3. Write your contract in contracts/MyToken.sol.
4. Compile the contract:
   ```bash
   npx hardhat compile
5. Deploy the contract by creating a scripts/deploy.js file:
   ```bash
   async function main() {
   const MyToken = await ethers.getContractFactory("MyToken");
   const myToken = await MyToken.deploy();
   await myToken.deployed();
   console.log("MyToken deployed to:", myToken.address);
   }

   main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
   });
6. Run the deployment script:
   ```bash
   npx hardhat run scripts/deploy.js --network <network-name>

## Interacting with the Contract

After deployment, interact with the contract:

- **Mint Tokens:** Owner can mint tokens to any address using the mint function.
  ```bash
   await myToken.mint("0xRecipientAddress", amount);
- **Transfer Tokens:** Users can transfer tokens to other addresses using the transfer function.
  ```bash
   await myToken.transfer("0xRecipientAddress", amount);
- **Burn Tokens:** Users can burn their own tokens using the burn function.
  ```bash
   await myToken.burn(amount);

## Security Considerations

- Ensure proper access control for minting tokens (onlyOwner modifier).
- Test thoroughly before deploying to a live network.
- Consider using libraries like OpenZeppelin for more robust and audited token contracts.

## Authors

Kurt Lawrence Dela Cruz

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributions

Contributions are welcome! Please open an issue or submit a pull request for any improvements.

```
This raw markdown code can be copied and pasted directly into your `README.md` file.
```
