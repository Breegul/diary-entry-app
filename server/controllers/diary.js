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
        if(["id", "date", "title", "category", "entry"].every(d => Object.hasOwn(body, d)))

    }catch(err){
        console.log(err.message);
        res.status(404).json({
            error: true,
            message: `Unable to create diary entry.`
        });
    }
}

module.exports = {
    index,
    create
}
