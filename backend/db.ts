// Import path module
import path from 'path';
import knex, { Knex } from 'knex';

// Get the location of our db file
const dbPath: string = path.resolve(__dirname, 'db/310proj.db');

// Create connection to SQLite database
const db: Knex = knex({
    client: 'sqlite3',
    connection: {
        filename: dbPath,
    },
    useNullAsDefault: true
});

// Export db
export default db;