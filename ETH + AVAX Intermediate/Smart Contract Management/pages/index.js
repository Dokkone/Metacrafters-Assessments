import { useState, useEffect } from "react";
import { ethers } from "ethers";
import libraryCardAbi from "../artifacts/contracts/LibraryCard.sol/LibraryCard.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [libraryCard, setLibraryCard] = useState(undefined);
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState("");

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with your deployed contract address
  const libraryCardABI = libraryCardAbi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const accounts = await ethWallet.request({ method: "eth_accounts" });
      handleAccount(accounts);
    }
  };

  const handleAccount = (accounts) => {
    if (accounts.length > 0) {
      console.log("Account connected: ", accounts[0]);
      setAccount(accounts[0]);
    } else {
      console.log("No account found");
    }
  };

  const connectAccount = async () => {
    if (!ethWallet) {
      alert("MetaMask wallet is required to connect");
      return;
    }

    const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
    handleAccount(accounts);

    getLibraryCardContract();
  };

  const getLibraryCardContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const libraryCardContract = new ethers.Contract(contractAddress, libraryCardABI, signer);

    setLibraryCard(libraryCardContract);
  };

  const registerBook = async () => {
    if (libraryCard && bookName) {
      const tx = await libraryCard.registerBook(bookName);
      await tx.wait();
      setBooks([...books, { name: bookName, borrowed: false }]);
      setBookName("");
    }
  };

  const borrowBook = async (book) => {
    if (libraryCard) {
      const tx = await libraryCard.borrowBook(book.name);
      await tx.wait();
      book.borrowed = true;
      setBooks([...books]);
    }
  };

  const returnBook = async (book) => {
    if (libraryCard) {
      const tx = await libraryCard.returnBook(book.name);
      await tx.wait();
      book.borrowed = false;
      setBooks([...books]);
    }
  };

  const initUser = () => {
    if (!ethWallet) {
      return <p>Please install MetaMask to use this Library Card system.</p>;
    }

    if (!account) {
      return <button className="btn connect" onClick={connectAccount}>Connect MetaMask Wallet</button>;
    }

    return (
      <div className="card">
        <h2>Library Card</h2>
        <p><strong>Account:</strong> {account}</p>
        <input
          type="text"
          placeholder="Book Name"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <button className="btn register" onClick={registerBook}>Register Book</button>
        <h3>Books:</h3>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              {book.name} - {book.borrowed ? "Borrowed" : "Available"}
              <button
                className="btn action"
                onClick={() => (book.borrowed ? returnBook(book) : borrowBook(book))}
              >
                {book.borrowed ? "Return" : "Borrow"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <main className="container">
      <header><h1>Welcome to the Student Library Card!</h1></header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center;
          font-family: Arial, sans-serif;
          background-color: #f5f5f5;
          padding: 20px;
          border-radius: 10px;
          max-width: 600px;
          margin: 0 auto;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        header h1 {
          color: #333;
        }
        .card {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          margin-top: 20px;
        }
        .card h2, .card h3 {
          color: #0070f3;
        }
        .btn {
          background-color: #0070f3;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          margin: 10px;
          transition: background-color 0.3s ease;
        }
        .btn:hover {
          background-color: #005bb5;
        }
        .btn.connect {
          background-color: #ff9800;
        }
        .btn.connect:hover {
          background-color: #e68900;
        }
        .btn.register {
          background-color: #4caf50;
        }
        .btn.register:hover {
          background-color: #45a049;
        }
        .btn.action {
          background-color: #008cba;
        }
        .btn.action:hover {
          background-color: #005f5f;
        }
        input {
          padding: 10px;
          margin: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin: 10px 0;
        }
      `}</style>
    </main>
  );
}
