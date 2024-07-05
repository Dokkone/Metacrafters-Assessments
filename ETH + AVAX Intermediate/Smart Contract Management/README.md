# Metacrafters Assessment LibraryCard Smart Contract

The Student Library Card System is a decentralized application built on Ethereum that manages library books' registration, borrowing, and returning processes using smart contracts.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Deployment](#deployment)
  - [Running Locally](#running-locally)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Authors](#authors)
- [License](#license)
- [Contributions](#contributions)


## Prerequisites

Before you begin, ensure you have installed the following software:

- [Node.js](https://nodejs.org/en/) (LTS version recommended)
- [npm](https://www.npmjs.com/package/npm)
- [Hardhat](https://hardhat.org/getting-started/#overview)
- [MetaMask](https://metamask.io/download.html)

## Getting Started

### Installation

Setting Up Development Environment

Open Terminal 1 and run:

```bash
npx hardhat node
```

Open Terminal 2 and run:

```bash
npx hardhat run --network localhost scripts/deploy.js
```

Open Terminal 3 and run:

```bash
npm run dev
```

### Deployment

MetaMask Configuration

Install MetaMask Extension
Install the MetaMask extension in your web browser from [here](https://metamask.io/).

Manually add a new network in MetaMask with the following details:

- **Network Name**: (can be anything you like)
- **RPC URL**: http://127.0.0.1:8545/
- **Chain ID**: 31337
- **Currency Symbol**: ETH

Click Save and switch to your newly created network.

Go back to the terminal where you started the Hardhat node (`npx hardhat node`).

Copy the private key of Account 0.

Import this account into MetaMask.

### Running Locally

1. Start the Hardhat node:

2. Connect MetaMask to the local Ethereum node by selecting "Localhost 8545" in the network dropdown.

3. Update the `contractAddress` in `pages/index.js` with the address obtained during deployment.

4. Launch the frontend:

Then, open http://localhost:3000 in your browser to access the application.

After following the above steps, your local blockchain and front-end application should be up and running. You can now interact with the deployed smart contracts through the front-end interface.

## Project Structure

- `contracts/LibraryCard.sol`: The Solidity smart contract.
- `scripts/deploy.js`: Script for deploying the smart contract.
- `pages/index.js`: React component for the frontend interface.
- `artifacts/`: Directory containing the compiled smart contract and ABI files.

## Usage

1. **registerBook**:
    - User can registers book in the system and stores in the account.
2. **borrowBook**:
    - Users can borrow book depending on book name and gets taken out of the system and account.
3. **returnBook**:
    - Users can return the book storing it once again in the system and account.

## Authors

Kurt Lawrence Dela Cruz

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributions

Contributions are welcome! Please open an issue or submit a pull request for any improvements.

```
This raw markdown code can be copied and pasted directly into your `README.md` file.
```
