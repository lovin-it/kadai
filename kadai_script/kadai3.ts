import {PrismaClient} from '@prisma/client'

//コマンドライン引数をパースする
import yargs from 'yargs';

const prisma = new PrismaClient()

//オプション引数を設定
const argv = yargs
    .options({
        name :{
            type: 'string',
            alias: 'n',
            description: '従業員名',
            default: '中村四郎'
        },
    })
    .parseSync()


async function main() {
    /*
        引数で与えられた名前の従業員がアサインされている
        タスクを全てリストアップ
    */
    const kadai1 = await prisma.tasks.findMany({
        select: { 
            title: true,
            description: true,
            status: true,
         },
        where: {
            employee:{
                name: argv.name
            },
        },
    })
    console.log(kadai1)
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
