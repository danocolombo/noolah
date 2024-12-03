-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `accounts` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`institution_id` int(11) NOT NULL,
	`reference_id` varchar(100) DEFAULT 'NULL',
	`account_type` varchar(100) DEFAULT 'NULL',
	`balance` float NOT NULL DEFAULT 0,
	`status` varchar(100) NOT NULL DEFAULT '''ACTIVE'''
);
--> statement-breakpoint
CREATE TABLE `institutions` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`street` varchar(100) DEFAULT 'NULL',
	`city` varchar(100) DEFAULT 'NULL',
	`state_prov` varchar(2) DEFAULT 'NULL',
	`postal_code` varchar(10) DEFAULT 'NULL',
	`logo_url` varchar(100) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `obligations` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`participant_id` int(11) NOT NULL,
	`obligation_type` varchar(100) NOT NULL DEFAULT '''ONE_TIME''',
	`due_date` date NOT NULL,
	`amount` double NOT NULL DEFAULT 0,
	`end_date` date DEFAULT 'NULL',
	`tax_deduction` tinyint(1) DEFAULT 0,
	`due_day` int(11) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `participants` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`street` varchar(100) DEFAULT 'NULL',
	`city` varchar(100) DEFAULT 'NULL',
	`stateProv` varchar(2) DEFAULT 'NULL',
	`postalCode` varchar(10) DEFAULT 'NULL',
	`category` varchar(100) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `transactions` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`date` date NOT NULL,
	`participant_id` int(11) DEFAULT 'NULL',
	`obligation_id` int(11) DEFAULT 'NULL',
	`payee_name` varchar(100) NOT NULL,
	`amount` varchar(100) NOT NULL,
	`account_id` int(11) DEFAULT 'NULL',
	`cleared` tinyint(1) NOT NULL DEFAULT 0,
	`notes` varchar(100) DEFAULT 'NULL'
);
--> statement-breakpoint
ALTER TABLE `obligations` ADD CONSTRAINT `obligations_participants_FK` FOREIGN KEY (`participant_id`) REFERENCES `participants`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_accounts_FK` FOREIGN KEY (`account_id`) REFERENCES `accounts`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_participants_FK` FOREIGN KEY (`participant_id`) REFERENCES `participants`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
CREATE INDEX `obligations_participant_id_IDX` ON `obligations` (`participant_id`);
*/