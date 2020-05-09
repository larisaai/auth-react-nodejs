const express = require("express");
const app =  express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(
    cors({
      origin: ['http://localhost:8080', 'http://localhost:3000'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true, // enable set cookie
    })
  );
app.use(express.urlencoded({ extended: false })); //for forms
app.use(express.json());

app.use(cookieParser());

// setup db
const { Model } = require('objection');
const Knex = require('knex');
const knexFile = require("./knexfile.js")
const knex = Knex(knexFile.development);

// Give the knex instance to objection.
Model.knex(knex);
 
const userRoute =  require('./routes/users.js');
app.use(userRoute);


// const User = require("./models/User.js")
// app.get("/", async (req, res)=>{
//     return res.send({result: await User.query()})
// })


// app.get("/", async (req, res)=>{
//     const result = await knex.select().from('users');
//     return res.send({result})
// })

const port =  process.env.PORT; 
console.log(port)


const server = app.listen(port , (error) => {
    if ( error) {
        console.log(" Error running express")
    }
    console.log("Server is running on port", port);

})