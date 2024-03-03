import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const newUser = await prisma.user.create({
        data: {
            email: 'jojo@gmail.com',
            name: 'Jeo',
            lastname: 'Joestar',
        },
    });

    console.log(newUser);

    const users = await prisma.user.findMany();

    console.log(users);

    users.map((user) => console.log(`${user.id} => ${user.email}`));

    // const user = await prisma.user.findFirst({
    //     where: {
    //         OR: [{ id: 1 }, { email: 'sallyowen666@gmail.com' }],
    //     },
    // });

    // console.log(user);

    // const deletedUser = await prisma.user.delete({
    //     where: {
    //         id: 2,
    //     },
    // });
}

main();
