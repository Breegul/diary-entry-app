require("dotenv").config();

const fs = require("fs");
const db = require("./connect");

const q = fs.readFileSync("./database/tables.sql").toString();

async function create() {
    await db.query(q);
    db.end()
    console.log("Database ready.");
}
create();