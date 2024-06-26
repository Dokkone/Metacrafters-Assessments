// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ErrorHandling {

    uint256 public value;

    // Function to set a value with require statement
    function setValueWithRequire(uint256 _value) public {
        // Use require to validate the input
        require(_value > 0, "Value must be greater than zero");
        value = _value;
    }

    // Function to set a value with assert statement
    function setValueWithAssert(uint256 _value) public {
        value = _value;
        // Use assert to check for a condition that should always be true
        assert(value == _value);
    }

    // Function to set a value with revert statement
    function setValueWithRevert(uint256 _value) public {
        if (_value == 0) {
            // Use revert to handle an invalid input
            revert("Value cannot be zero");
        }
        value = _value;
    }
    
    // Function to demonstrate a combined usage
    function combinedUsage(uint256 _value) public {
        // Require statement
        require(_value <= 100, "Value must be 100 or less");
        
        // Some logic that might cause a state inconsistency
        value = _value;

        // Assert statement
        assert(value == _value);

        // Conditional logic with revert
        if (_value % 2 != 0) {
            revert("Value must be an even number");
        }
    }
}
