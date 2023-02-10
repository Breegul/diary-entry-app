const Diary = require("../models/diary");

async function index (req, res) {
    const data = await Diary.getAll();
    console.log(data);
    res.json(data);
}

async function create (req, res) {
    // read body
    const body = req.body;
    try{
        // check for all required elements
        if(["date", "title", "category", "image_url", "diary_entry"].every(d => Object.hasOwn(body, d))){
            const diary = await Diary.create(body);
            res.status(201).json(diary);
        }else{
            throw new Error("Invalid properties");
        }

    }catch(err){
        console.log(err.message);
        res.status(404).json({
            error: true,
            message: `Unable to create diary entry.`
        });
    }
}

async function destroy(req, res) {
    // pull out the id
    const id = req.params.id;

    try {
        // get diary
        const d = await Diary.getOneById(id);
        // delete diary entry
        const deleted = await d.delete();
        // report back
        if(deleted){
            res.sendStatus(204);
        }else{
            throw new Error("Deletion Failed");
        }

    }catch(err){
        res.status(404).json({
            error: true,
            message: `Unable to delete diary entry with id, '${id}'.`
        })
    }
}

module.exports = {
    index,
    create,
    destroy
}
