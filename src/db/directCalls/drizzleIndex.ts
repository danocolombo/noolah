import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';
import { eq } from 'drizzle-orm';
import { participants } from '../schema';

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
    const participant: typeof participants.$inferInsert = {
        name: 'FBI',
        street: '123 Main St.',
        city: 'Washington',
        stateProv: 'DC',
        postalCode: '20001',
        category: 'Government',
    };

    await db.insert(participants).values(participant);
    console.log('New participant created!');

    const p = await db.select().from(participants);
    console.log('Getting all participants from the database: ', p);

    await db
        .update(participants)
        .set({
            category: 'UPDATED_CATEGORY',
        })
        .where(eq(participants.postalCode, participant.postalCode));
    console.log('Participant info updated!');

    // await db
    //     .delete(participants)
    //     .where(eq(participants.postalCode, participant.postalCode));
    // console.log('Participant deleted!');
}

main();
