# Error Handling Contract

This Solidity smart contract demonstrates various error handling techniques within Ethereum smart contracts using Solidity version 0.8.0. It showcases the use of `require`, `assert`, and `revert` statements for validating inputs and maintaining contract integrity.

## Overview

The contract provides four main functionalities:

1. **Setting a Value with Require Statement**: Demonstrates the use of `require` for validating that the input value is greater than zero.
2. **Setting a Value with Assert Statement**: Shows how `assert` can be used to ensure a condition that should always be true (in this case, the value being equal to itself).
3. **Setting a Value with Revert Statement**: Utilizes `revert` to handle cases where the input value is not valid (e.g., zero).
4. **Combined Usage**: Combines all three methods (`require`, `assert`, and `revert`) to showcase a comprehensive approach to error handling in a single function.

## Prerequisites

- Solidity compiler version 0.8.0 or higher.
- An Ethereum development environment setup, such as Truffle or Hardhat.

## Deployment

To deploy this contract, follow these steps:

1. Save the contract code in a file named `ErrorHandling.sol`.
2. Ensure you have a local Ethereum blockchain running (e.g., Ganache).
3. Use a deployment script compatible with your development framework (Truffle/Hardhat) to compile and deploy the contract to your local blockchain.

## Interaction

### Setting Values

- **setValueWithRequire(uint256)**: Sets the contract's value with a `require` statement to ensure the value is greater than zero.
- **setValueWithAssert(uint256)**: Sets the contract's value and uses an `assert` statement to confirm the value has been correctly set.
- **setValueWithRevert(uint256)**: Attempts to set the contract's value but reverts if the value is zero.
- **combinedUsage(uint256)**: Demonstrates a combination of `require`, `assert`, and `revert` statements to enforce various conditions on the input value.

### Testing

After deploying the contract, you can interact with its functions through your development framework's console or via transactions on your local blockchain. Ensure to test each function thoroughly to understand how they behave under different conditions.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
