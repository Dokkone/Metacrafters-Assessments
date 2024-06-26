# MyToken (MTK) ERC20 Token

This repository contains a basic ERC20 token smart contract implemented in Solidity. The contract allows for token minting by the owner, as well as token transfer and burning by any user.

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

### Interacting with the Contract

After deployment, interact with the contract:

- **Mint Tokens:** Owner can mint tokens to any address using the `mint` function.
- **Transfer Tokens:** Users can transfer tokens to other addresses using the `transfer` function.
- **Burn Tokens:** Users can burn their own tokens using the `burn` function.

## Security Considerations

- Ensure proper access control for minting tokens (`onlyOwner` modifier).
- Test thoroughly before deploying to a live network.
- Consider using libraries like OpenZeppelin for more robust and audited token contracts.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
