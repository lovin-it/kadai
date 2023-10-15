import {PrismaClient} from '@prisma/client'

//コマンドライン引数をパースする
import yargs from 'yargs';

const prisma = new PrismaClient()

//コマンドライン引数を設定

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
        タスクから未完了のタスクを全てリストアップ
    */
    const kadai6 = await prisma.tasks.findMany({
        select: { 
            title: true,
            description: true,
        },
        where: {
            AND: [{
                employee:{
                    name: argv.name,
                },
                status: '未完了'
            }]
        },
    })
    console.log(kadai6)
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })