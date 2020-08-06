const express = require("express");
const sql = require('@databases/sql');

const getDb = require('./database/database');

const PORT = 8000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req,res) => {
  res.send('Hello World from server');
});

app.get('/data', (req,res) => {
  res.send({data: "hey there"});
});

app.get('/database-data', async (req, res) => {
  try{
    const db = getDb();
    const databaseData = await db.query(sql`SELECT * FROM fullstack_docker`);
    console.log("DATABASE DATA: ", databaseData)
    res.send({databaseData: databaseData[0]})
  } catch (error){
    console.log("ERROR: ", error);
    res.send("error found")
  }
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
