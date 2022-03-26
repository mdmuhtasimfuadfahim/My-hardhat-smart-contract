// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract firstContract{
    struct studentInfo{
       string id;
       string name;
       string university;
       string department;
    }

    address public admin;
    address public student;

    constructor(){
        admin = msg.sender;
    }

    modifier isAdmin(){
        require(admin == msg.sender, "You cannot sign transaction until you have an admin account");
        _;
    }

    modifier notStudent(){
        require(student != msg.sender, "You are a student");
        _;
    }

    mapping(string => studentInfo) studentInformation;

    event logStudentInfo(
       string id,
       string name,
       string university,
       string department,
       string status
    );


    function storeStudentInfo(string memory _id, string memory _name, string memory _university, string memory _department) public
    isAdmin()
    {
        studentInformation[_id].id = _id;
        studentInformation[_id].name = _name;
        studentInformation[_id].university = _university;
        studentInformation[_id].department = _department;
        emit logStudentInfo(_id, _name, _university, _department, "Registration Successful");
    }

    function getStudentInfo(string memory _id) public view returns(string memory, string memory, string memory, string memory)
    {
        return(studentInformation[_id].id, studentInformation[_id].name, studentInformation[_id].university, studentInformation[_id].department);
    }

    function isAdmin_() public view returns(bool){
        return msg.sender == admin;
    }

    function notStudent_() public view returns(bool){
        return msg.sender == student;
    }
}