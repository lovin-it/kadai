import { PrismaClient } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
const prisma = new PrismaClient()

async function main() {

    const company = await prisma.departments.upsert({
        where: {id: 1},
        update: {},
        create: {
            name: '会社',
            parent_department_id: null,
        }
    })

    const it_hq = await prisma.departments.upsert({
        where: {id: 2},
        update: {},
        create: {
            name: 'IT本部',
            parent_department_id: 1
        },
    })


    const eigyou_hq = await prisma.departments.upsert({
        where: {id: 3},
        update: {},
        create: {
            name: '営業本部',
            parent_department_id: 1,
        },
    })
    

    const it_hq2 = await prisma.departments.upsert({
        where: {id: 4},
        update: {},
        create: {
            name: '開発チーム',
            parent_department_id: 2
        },
    })

    

    
    const president = await prisma.positions.upsert({
        where: {id: 1},
        update: {},
        create: {
            title: '社長',
            level: 1,
            employee: {
                create: {
                    name: '佐藤一郎',
                    department_id: 1,
                }
            },
            
        }
    })

    const it_maneger = await prisma.positions.upsert({
        where: {id: 2},
        update: {},
        create: {
            title: '部長',
            level: 2,
            employee: {
                create: {
                    name: '鈴木二郎',
                    department_id: 2,
                }
            }
        }
    })

    const section_chief = await prisma.positions.upsert({
        where: {id:3 },
        update: {},
        create: {
            title: '課長',
            level: 3,
            employee: {
                create: {
                    name: '田中三郎',
                    department_id: 2,
                }
            }
        }
    })


    const employee = await prisma.positions.upsert({
        where: {id :4},
        update: {},
        create: {
            title: '一般社員',
            level: 4,
            employee: {
                create: {
                    name: '中村四郎',
                    department_id: 4,
                }
            }
        }
    })

    const takahashi = await prisma.employees.create({
        data:{
            name: '高橋五郎',
            department_id: 4,
            position_id: 4,
        },
    })

    const omori = await prisma.employees.create({
        data:{
            name: `大森六郎`,
            department_id: 4,
            position_id: 4,
        },
    })

    //テストタスク
    
    const unit_test1 = await prisma.tasks.create({
        data: {
            title: '単体テスト',
            description: '単体テスト [No.1 ~ No.50]',
            status: '完了',
            assignee_id: 4
        }

    })

    const unit_test2 = await prisma.tasks.create({
        data:{
            title: '単体テスト',
            description: '単体テスト [No.51 ~ No.100]',
            status: '未完了',
            assignee_id: 4
        }
    })

    const unit_test3 = await prisma.tasks.create({
        data: {
            title: '単体テスト',
            description: '単体テスト [No.101 ~ No.150]',
            status: '未完了',
            assignee_id :4
        }
    })
    
    const integration_test = await prisma.tasks.create({
        data:{
            title: '結合テスト',
            description: '結合テスト [No.1 ~ No.50]',
            status: '未完了',
            assignee_id: 5
        }
    })
    

    const system_test = await prisma.tasks.create({
        data:{
            title: '総合テスト',
            description: '総合テスト [No.1 ~ No.30]',
            status: '未完了',
            assignee_id: 6
        }
    })
    
}
    




main()
    .then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})




