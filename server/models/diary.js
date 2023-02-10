let db = require("../database/connect");

class Entry {
    constructor({ entry_id, entry_date, title, category, image_url, diary_entry }){
        this.id = entry_id;
        this.date = entry_date;
        this.title = title;
        this.category = category;
        this.image = image_url;
        this.entry = diary_entry;
    }

    static async query(q) {
        try {
            const res = await db.query(q);
            const r = Object.entries(res);
            console.log(r[0], r[1]);
            return res;
        } catch (err) {
            console.log(err.stack);
        }
    }


    static async getAll() {
        const q = {text: "SELECT * FROM entries ORDER BY entry_date;"};
        const res = await this.query(q);
        return res.rows.map(e => new Entry(e));
    }

    static async getOneById(id) {
        const q = {
            text: "SELECT * FROM entries WHERE entry_id = $1",
            values: [id]
        }

        const res = await this.query(q);
        const e = res.rows[0];

        if(e){
            return new Entry(e);
        } else {
            throw new Error("Unable to find entry");
        }
    }

    static async create(data) {
        const q = {
            text: "INSERT INTO entries(entry_date, title, category, image_url, diary_entry) VALUES ($1, $2, $3, $4, $5)",
            values: [data.date, data.title, data.category, data.image_url, data.diary_entry]
        };

        this.query(q);
    }
    
    // async update(data) {

    // }
    
    async destroy() {
        const q = {
            text: "DELETE FROM entries WHERE entry_id = $1",
            values: [this.id]
        };

        Entry.query(q);
    }

}

module.exports = Entry;