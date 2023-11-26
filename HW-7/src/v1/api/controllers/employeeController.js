const employeeService = require('../services/employeeService');

async function updateById(request, response){
    const {body} = request;
    const EmployeeUpdate = {}
    if(body.firstName) EmployeeUpdate.firstName = body.firstName;
    if(body.lastName) EmployeeUpdate.lastName = body.lastName;
    if(body.middleName) EmployeeUpdate.middleName = body.middleName;
    if(body.position) EmployeeUpdate.position = body.position;
    try {
        let EmployeeResponse;
        if(request.body) {
            EmployeeResponse = await employeeService.updateById(+request.params.employeeId, EmployeeUpdate);
        }
        response.status(200).send({
            ...EmployeeResponse,
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