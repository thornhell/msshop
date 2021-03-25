import {PrismaClient} from "@prisma/client";
import express from 'express';

const prisma = new PrismaClient();

const app = express();
const port = 3000;

app.get('/products', async (req: express.Request, res) => {
    try {
        const products = await prisma.product.findMany();
        res.status(200)
            .send(
                JSON.stringify(products, (_: string, v: any) => typeof v === 'bigint' ? v.toString() : v));
    } catch (e) {
        console.log(e)
    }
});

app.listen(port, () => {
    console.log('App is running.')
})