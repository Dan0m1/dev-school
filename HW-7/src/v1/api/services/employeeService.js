const Employee = require('../../database/repositories/EmployeeRepository');

async function updateById(customerId, data){
    try{
    const updatedEmployee = await Employee.updateById(customerId, data);
    return updatedEmployee;
    }
    catch(error){
        throw error;
    }
}

module.exports = {
    updateById,
}