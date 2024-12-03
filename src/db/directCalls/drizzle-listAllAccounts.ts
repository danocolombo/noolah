import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';
import { eq } from 'drizzle-orm';
import { accounts } from '../schema';

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
    const p = await db.select().from(accounts);
    console.log('Getting all participants from the database: ', p);
}

main();
