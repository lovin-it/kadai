import {PrismaClient} from '@prisma/client'
import yargs from 'yargs'

const prisma = new PrismaClient()

//オプション引数を設定
const argv = yargs
    .options({
        potision: {
            type: 'string',
            alias: 'p',
            description: 'ポジション名',
            default: '一般社員',
        }
    })
    .parseSync()


async function main() {
    /*
    引数で与えられたポジションに所属する
    全従業員を取得する
    */

    const kadai4 = await prisma.employees.findMany({
        select: {
            name: true,
            position:{
                select:{
                    title: true,
                }
            },
            department:{
                select:{
                    name: true,
                }
            },
        },
        where: {
            position:{
                title: argv.potision
            },
        },
    })
    console.log(kadai4)
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })