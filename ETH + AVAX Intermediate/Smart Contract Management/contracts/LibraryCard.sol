// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract LibraryCard {
    address payable public owner;
    mapping(string => bool) public registeredBooks;
    mapping(string => bool) public borrowedBooks;

    event BookRegistered(string book);
    event BookBorrowed(string book);
    event BookReturned(string book);

    constructor() {
        owner = payable(msg.sender);
    }

    function registerBook(string memory _book) public {
        require(msg.sender == owner, "You are not the owner of this account");
        registeredBooks[_book] = true;
        emit BookRegistered(_book);
    }

    function borrowBook(string memory _book) public {
        require(msg.sender == owner, "You are not the owner of this account");
        require(registeredBooks[_book], "This book is not registered");
        require(!borrowedBooks[_book], "This book is already borrowed");
        
        borrowedBooks[_book] = true;
        emit BookBorrowed(_book);
    }

    function returnBook(string memory _book) public {
        require(msg.sender == owner, "You are not the owner of this account");
        require(borrowedBooks[_book], "This book is not borrowed");
        
        borrowedBooks[_book] = false;
        emit BookReturned(_book);
    }
}
