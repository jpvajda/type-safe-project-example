import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// Insert a new post
await prisma.post.create({
    data: {
        title: "Hello World",
        body: "This is the first post",
    },
});
// Print all posts
console.log(await prisma.post.findMany());
