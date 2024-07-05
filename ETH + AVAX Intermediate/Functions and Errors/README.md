# StudentContract

This Solidity smart contract demonstrates the usage of `require()`, `assert()`, and `revert()` statements through real-life scenarios for a student. The contract allows setting and getting student grades and changing the contract owner.

## Features

- **Set Grades**: Only the owner can set student grades within a valid range (0 to 100).
- **Get Grades**: Anyone can get the grade of a student, ensuring the grade is within the valid range.
- **Change Owner**: Only the owner can change the ownership of the contract to a valid address.

## Smart Contract Code

   ```solidity
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
   ```
## Explanation

1. **require():**
   
- **Code:** ```require(grade >= 0 && grade <= 100, "Invalid grade, it must be between 0 and 100");```
- **Scenario:** Ensures the grade is within a valid range (0 to 100). If not, the function stops with an error message. Similar to a student being told to input a valid grade.
  
2. **assert():**
   
- **Code:** ```assert(grade >= 0 && grade <= 100);```
- **Scenario:** Checks that the grade is always within a valid range. Similar to a teacher verifying the correctness of recorded grades.

3. **revert():**
   
- **Code:** ```require(grade >= 0 && grade <= 100, "Invalid grade, it must be between 0 and 100");```
- **Scenario:** Reverts the transaction if an invalid address is provided for the new owner. Similar to stopping the process if the new student council president's information is invalid.

## Usage

1. **Deploy the Contract:** Deploy the `StudentContract` using Remix or HardHat.
2. **Set Grade:** Call the `setGrade` function with a student's address and a valid grade (0-100) as the contract owner.
3. **Get Grade:** Call the `getGrade` function with a student's address to get the grade.
4. **Change Owner:** Call the `changeOwner` function with a valid new owner's address as the contract owner.

## Authors

Kurt Lawrence Dela Cruz

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributions

Contributions are welcome! Please open an issue or submit a pull request for any improvements.

```
This raw markdown code can be copied and pasted directly into your `README.md` file.
```
