require("dotenv").config();

const fs = require("fs");
const db = require("./connect");

const q = fs.readFileSync("./database/tables.sql").toString();
const s = fs.readFileSync("./database/seed.sql").toString();

async function create() {
    await db.query(q);
    await db.query(s);
    db.end()
    console.log("Database ready.");
}
create();