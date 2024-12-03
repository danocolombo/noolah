import { relations } from "drizzle-orm/relations";
import { participants, obligations, accounts, transactions } from "./schema";

export const obligationsRelations = relations(obligations, ({one}) => ({
	participant: one(participants, {
		fields: [obligations.participantId],
		references: [participants.id]
	}),
}));

export const participantsRelations = relations(participants, ({many}) => ({
	obligations: many(obligations),
	transactions: many(transactions),
}));

export const transactionsRelations = relations(transactions, ({one}) => ({
	account: one(accounts, {
		fields: [transactions.accountId],
		references: [accounts.id]
	}),
	participant: one(participants, {
		fields: [transactions.participantId],
		references: [participants.id]
	}),
}));

export const accountsRelations = relations(accounts, ({many}) => ({
	transactions: many(transactions),
}));