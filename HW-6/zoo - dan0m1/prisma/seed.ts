import {PrismaClient, Prisma} from "@prisma/client";

const prisma = new PrismaClient();

const SectorData: Prisma.SectorCreateInput[] = [
    {
        supervisor: {
            create: {
                firstName: "Michael",
                lastName: "Schmidt",
                contactEmail: "michaelSchmidt@fazzbear.uh",
                salary: 20000,
                job: "SUPERVISOR"
            }
        },
        location: "North",
        cages:{
            create: [
                {
                    animalFamily: "BLACK_LEOPARD",
                    animals:{
                        create: [
                            {
                                name: "Jack"
                            },
                            {
                                name: "Paul"
                            },
                            {
                                name: "Rico"
                            }
                        ]
                    }
                }
            ]
        }
    },
]

const VisitorsHistoryData: Prisma.VisitorsHistoryCreateInput[] = [
    {
        date: "17.11.2023",
        visitorAmount: 121
    },
    {
        date: "18.11.2023",
        visitorAmount: 1002
    },
    {
        date: "19.11.2023",
        visitorAmount: 345
    },
    {
        date: "20.11.2023",
        visitorAmount: 403
    }
]

async function main(){
    for (const s of SectorData){
        const sector = await prisma.sector.create(
            {
                data: s,
            }
        );
    }
    for (const vh of VisitorsHistoryData){
        const visitorsHistory = await prisma.visitorsHistory.create({
            data: vh
        })
    }
}

main()
    .then(async () =>{
        await prisma.$disconnect();
    })
    .catch(async (e) =>{
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })