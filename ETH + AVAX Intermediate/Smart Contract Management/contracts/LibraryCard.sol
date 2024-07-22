// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract LibraryCard {
    address payable public owner;
    mapping(string => bool) public registeredBooks;
    mapping(string => bool) public borrowedBooks;
    uint public registrationFee;
    mapping(address => bool) public hasPaid;

    event BookRegistered(string book);
    event BookBorrowed(string book);
    event BookReturned(string book);

    constructor(uint _registrationFee) {
        owner = payable(msg.sender);
        registrationFee = _registrationFee;
    }

    function payRegistrationFee() public payable {
        require(msg.value == registrationFee, "Incorrect registration fee");
        hasPaid[msg.sender] = true;
    }

    function registerBook(string memory _book) public {
        require(hasPaid[msg.sender], "You have not paid the registration fee");
        registeredBooks[_book] = true;
        emit BookRegistered(_book);
    }

    function borrowBook(string memory _book) public {
        require(registeredBooks[_book], "This book is not registered");
        require(!borrowedBooks[_book], "This book is already borrowed");
        
        borrowedBooks[_book] = true;
        emit BookBorrowed(_book);
    }

    function returnBook(string memory _book) public {
        require(borrowedBooks[_book], "This book is not borrowed");
        
        borrowedBooks[_book] = false;
        emit BookReturned(_book);
    }

    function withdraw() public {
        require(msg.sender == owner, "You are not the owner");
        owner.transfer(address(this).balance);
    }
}
