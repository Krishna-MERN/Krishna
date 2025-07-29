const express = require("express");
const cors = require('cors');
const {MongoClient} = require('mongodb');
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

//mongodb connection url and dataabse name
const url="mongodb+srv://mailkkshukla:3zdaUrvk8Ckm6Bkc@datara.3anbakd.mongodb.net/";
const dbname="Krishna";

//create mongodb client
const client=new MongoClient(url);
let conCollection;


//connect to mongodb
client.connect().then(()=>{
const db=client.db(dbname);
conCollection=db.collection('contact');
console.log('MongoDB connected');
}).catch(err=>{
    console.error('MongoDB connection error',err);
});

/// get the data form 
// app.get('/api/emps',async (req,res)=>{
// try{
//     const employees=await empCollection.find({}).toArray();
//     res.send(employees);
// }catch(err){
//     console.error(err);
// }
// })

// post to database
app.post("/api/contact",async(req,res)=>{
    const{name,email,cmessage}=req.body;
    try{
        await conCollection.insertOne({name,email,cmessage});
        res.send({message:'Message Sent... '})
    }
    catch(err){
console.error(err);
    }
})

//delete

app.listen(port, () => {
    console.log(`Server running on ${port}`);

})