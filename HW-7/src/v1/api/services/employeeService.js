const Employee = require('../../database/repositories/EmployeeRepository');

async function updateById(customerId, data){
    try{
    const EmployeeUpdate = await Employee.updateById(customerId, data);
    return EmployeeUpdate;
    }
    catch(error){
        throw error;
    }
}

module.exports = {
    updateById,
}