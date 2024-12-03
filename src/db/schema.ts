import {
    mysqlTable,
    tinyint,
    mysqlSchema,
    AnyMySqlColumn,
    int,
    varchar,
    float,
    index,
    foreignKey,
    date,
    double,
} from 'drizzle-orm/mysql-core';
import { sql } from 'drizzle-orm';

export const accounts = mysqlTable('accounts', {
    id: int().autoincrement().notNull(),
    institutionId: int('institution_id').notNull(),
    referenceId: varchar('reference_id', { length: 100 }).default('NULL'),
    accountType: varchar('account_type', { length: 100 }).default('NULL'),
    balance: float().notNull(),
    status: varchar({ length: 100 }).default("'ACTIVE'").notNull(),
});

export const institutions = mysqlTable('institutions', {
    id: int().autoincrement().notNull(),
    name: varchar({ length: 100 }).notNull(),
    street: varchar({ length: 100 }).default('NULL'),
    city: varchar({ length: 100 }).default('NULL'),
    stateProv: varchar('state_prov', { length: 2 }).default('NULL'),
    postalCode: varchar('postal_code', { length: 10 }).default('NULL'),
    logoUrl: varchar('logo_url', { length: 100 }).default('NULL'),
});

export const obligations = mysqlTable(
    'obligations',
    {
        id: int().autoincrement().notNull(),
        participantId: int('participant_id')
            .notNull()
            .references(() => participants.id, {
                onDelete: 'restrict',
                onUpdate: 'restrict',
            }),
        obligationType: varchar('obligation_type', { length: 100 })
            .default("'ONE_TIME'")
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dueDate: date('due_date', { mode: 'string' }).notNull(),
        amount: double().notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        endDate: date('end_date', { mode: 'string' }).default('NULL'),
        taxDeduction: tinyint('tax_deduction').default(0),
        dueDay: int('due_day').default('NULL'),
    },
    (table) => {
        return {
            participantIdIdx: index('obligations_participant_id_IDX').on(
                table.participantId
            ),
        };
    }
);

export const participants = mysqlTable('participants', {
    id: int().autoincrement().notNull(),
    name: varchar({ length: 100 }).notNull(),
    street: varchar({ length: 100 }).default('NULL'),
    city: varchar({ length: 100 }).default('NULL'),
    stateProv: varchar({ length: 2 }).default('NULL'),
    postalCode: varchar({ length: 10 }).default('NULL'),
    category: varchar({ length: 100 }).default('NULL'),
});

export const transactions = mysqlTable('transactions', {
    id: int().autoincrement().notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    date: date({ mode: 'string' }).notNull(),
    participantId: int('participant_id')
        .default('NULL')
        .references(() => participants.id, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        }),
    obligationId: int('obligation_id').default('NULL'),
    payeeName: varchar('payee_name', { length: 100 }).notNull(),
    amount: varchar({ length: 100 }).notNull(),
    accountId: int('account_id')
        .default('NULL')
        .references(() => accounts.id, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        }),
    cleared: tinyint().default(0).notNull(),
    notes: varchar({ length: 100 }).default('NULL'),
});
