// Write your solution in this file!
const employee = {
    name: "Bob",
    streetAddress: "123 N First Ave"    
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}
    newEmployee[key] = "11 Broadway"
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = "12 Broadway"
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newestEmployee = {...employee}
    delete newestEmployee.name
    return newestEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee
}