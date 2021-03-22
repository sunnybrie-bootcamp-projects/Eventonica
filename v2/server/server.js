const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3001;

const db = require("./data/db.js");
const { $pool } = require('./data/db.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//create an event
app.post("/events", async (req, res) => {
  try {
    const { date, category, name, desc } = req.body;
    const newEvent = await db.query(
      "INSERT INTO events (event_date, category, name, description) VALUES($1, $2, $3, $4) RETURNING *",
      [ date, category, name, desc ]
    );

    res.json(newEvent.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//Gets all events
app.get('/events', async ( req, res ) => {
    try {
        const events = await db.any('SELECT * FROM events ORDER BY event_date;', [true]);
        //console.log({ events });
        res.json( events );
    }
    catch(e) {
        console.log(e);
    }
})

//Get event by id
app.get('/events/:eventid', async ( req, res ) => {
    try {
        const event = await db.any(`SELECT * FROM events WHERE event_id = ${req.params.event_id};`, [true]);
        res.json( events[0] );
    }
    catch(e) {
        res.status(500)
        res.render('error', { error: e })
    }
})




app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})
