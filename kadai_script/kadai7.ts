import { Prisma, PrismaClient } from "@prisma/client";
import yargs from "yargs";

const prisma = new PrismaClient()

//オプション引数を設定
const argv = yargs
    .options({
        name:{
            type: 'string',
            alias: 'n',
            description: '部署名',
            default: '開発チーム',
        },
    })
    .parseSync()



async function main() {
    /*
        特定の部署に所属する従業員がアサインされているタスク数をカウント
    */

    const kadai5 = await prisma.tasks.count({
        where:{
            employee:{
                department:{
                    name: argv.name,
                }
            },
        },
    })
    
    
    console.log(argv.name, "タスク数:", kadai5)
}


main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })