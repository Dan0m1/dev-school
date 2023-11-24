const employeeService = require('../services/employeeService');

async function updateById(request, response){
    try {
        let updatedEmployee;
        if(request.body) {
            updatedEmployee = await employeeService.updateById(+request.params.employeeId, request.body);
        }
        response.status(200).send({
            ...updatedEmployee,
        });
    }
    catch (error){
        response.status(error?.status || 500).send({
            status: "FAILED",
            data: {error: error?.message || error},
        })
    }
}

module.exports = {
    updateById,
}