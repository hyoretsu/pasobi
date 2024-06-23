import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import type { DB } from "./types.ts"; // this is the Database interface we defined earlier

const dialect = new PostgresDialect({
	pool: new Pool({
		connectionString: process.env.DATABASE_URL,
		max: 10,
	}),
});

export const database = new Kysely<DB>({
	dialect,
});
