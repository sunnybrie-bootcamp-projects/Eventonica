const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

const db = require("./data/db.js");

app.use(cors());




//Gets all events
app.get('/events', async ( req, res ) => {
    try {
        const events = await db.any('SELECT * FROM events;', [true]);
        console.log({ events });
        res.json( events );
    }
    catch(e) {
        console.log(e);
    }
})

//Get event by id
app.get('/event/:eventid', async ( req, res ) => {
    try {
        const event = await db.any(`SELECT * FROM events WHERE eventid = ${req.params.eventid};`, [true]);
        res.json( event[0] );
    }
    catch(e) {
        res.status(500)
        res.render('error', { error: e })
    }
})




app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})
