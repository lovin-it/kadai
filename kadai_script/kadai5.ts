import { Prisma, PrismaClient } from "@prisma/client";
import yargs from "yargs";

const prisma = new PrismaClient()


async function main() {
    /*
        各部署に所属する従業員数をカウント
    */

    const kadai5 = await prisma.employees.groupBy({
        by: ['department_id'],
        _count:{
            _all: true,
        },
    })
    
    console.log(kadai5)
}


main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })