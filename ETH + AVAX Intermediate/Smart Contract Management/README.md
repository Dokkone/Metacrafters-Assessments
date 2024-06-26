# Metacrafters Assessment DApp

This project is a simple yet powerful demonstration of a decentralized application (DApp) built on the Ethereum blockchain. It leverages smart contracts to allow users to set and retrieve values stored on the blockchain, showcasing the potential of decentralized technologies.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Deployment](#deployment)
  - [Running Locally](#running-locally)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have installed the following software:

- [Node.js](https://nodejs.org/en/) (LTS version recommended)
- [npm](https://www.npmjs.com/package/npm)
- [Hardhat](https://hardhat.org/getting-started/#overview)
- [MetaMask](https://metamask.io/download.html)

## Getting Started

### Installation

1. Clone the repository:
Make sure to replace `<repository-url>` and `<repository-directory>` with the actual values.

2. Install NPM packages
### Deployment

To deploy the smart contract, execute:
### Running Locally

1. Start the Hardhat node:

2. Connect MetaMask to the local Ethereum node by selecting "Localhost 8545" in the network dropdown.

3. Update the `contractAddress` in `pages/index.js` with the address obtained during deployment.

4. Launch the frontend:

Then, open http://localhost:3000 in your browser to access the application.

## Project Structure

- `contracts/Assessment.sol`: The Solidity smart contract.
- `scripts/deploy.js`: Script for deploying the smart contract.
- `pages/index.js`: React component for the frontend interface.
- `artifacts/`: Directory containing the compiled smart contract and ABI files.

## Usage

1. Ensure MetaMask is installed and connected to the local Ethereum node.
2. Navigate to http://localhost:3000 in your browser.
3. Connect your MetaMask wallet to the application.
4. Use the input field to set a new value in the contract.
5. The current stored value will be displayed on the page.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
