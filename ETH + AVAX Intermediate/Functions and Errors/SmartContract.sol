// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentContract {
    address public owner;
    mapping(address => uint) public studentGrades;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");
        _;
    }

    // Example of using require()
    function setGrade(address student, uint grade) public onlyOwner {
        require(grade >= 0 && grade <= 100, "Invalid grade, it must be between 0 and 100");
        studentGrades[student] = grade;
    }

    // Example of using assert()
    function getGrade(address student) public view returns (uint) {
        uint grade = studentGrades[student];
        assert(grade >= 0 && grade <= 100);
        return grade;
    }

    // Example of using revert()
    function changeOwner(address newOwner) public onlyOwner {
        if (newOwner == address(0)) {
            revert("Invalid address for new owner");
        }
        owner = newOwner;
    }
}
