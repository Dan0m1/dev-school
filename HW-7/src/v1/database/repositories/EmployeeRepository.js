const {PrismaClient} = require ("@prisma/client");
const prisma = new PrismaClient();
async function updateById(employeeId, updateData) {
    if(await prisma.employee.count({
        where:{
            id: employeeId,
        }
    }) === 0) throw {
        status: 404,
        message: "Employee with such id not found",
    }
    return prisma.employee.update({
        where: {
            id: employeeId,
        },
        data: {
            ...updateData,
        },
    });
}

module.exports = {
    updateById,
}




