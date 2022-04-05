// Write your solution in this file!
const employee = {
    name: "Ryan",
    streetAddress: "421 Ranch Rd"
};


function updateEmployeeWithKeyAndValue(employee,key,value){
    let newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
};


function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key){
    let newEmployeeList = {...employee};
    delete newEmployeeList[key];
    return newEmployeeList;
};


function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
};

