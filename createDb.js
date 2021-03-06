const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/database.sqlite', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('db create.');
});

db.run("CREATE TABLE IF NOT EXISTS domains(`id` INTEGER PRIMARY KEY AUTOINCREMENT, 'domain' TEXT NOT NULL, 'create_date' TEXT, 'flow' TEXT)");
